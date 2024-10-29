import type { NextApiRequest, NextApiResponse } from "next";
import { Client } from "@notionhq/client";

import cloudinary from 'cloudinary'

cloudinary.v2.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

type Props = {
    url: string;
}

const notion = new Client({
    auth: process.env.NOTION_API_KEY,
});

const databaseId = process.env.NOTION_DATABASE_ID;

async function sendNotion({ url }: Props) {
    const response = await notion.pages.create({
        "parent": {
            "type": "database_id",
            "database_id": String(databaseId),
        },
        "properties": {
            "Name": {
                "title": [
                    {
                        "text": {
                            "content": "test"
                        }
                    }
                ]
            },
            "URL": {
                "url": url
            },
        },
    });
    console.log(response);
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const images = req.body.images;
    console.log("出力されてるやん！");
    await sendNotion(images.secure_url);
    res.status(200).json({ message: "success" });
}
