// libs/microcms.ts
import { createClient } from "microcms-js-sdk";
import type {
 MicroCMSQueries,
 MicroCMSImage,
 MicroCMSDate,
} from "microcms-js-sdk";

//ブログの型定義
export type Gallery = {
  id: string;
  photos: MicroCMSImage;
} & MicroCMSDate;

if (!process.env.NEXT_PUBLIC_SERVICE_DOMAIN) {
 throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

if (!process.env.NEXT_PUBLIC_API_KEY) {
 throw new Error("MICROCMS_API_KEY is required");
}

// API取得用のクライアントを作成
export const client = createClient({
 serviceDomain: process.env.NEXT_PUBLIC_SERVICE_DOMAIN,
 apiKey: process.env.NEXT_PUBLIC_API_KEY,
});

// ブログ一覧を取得
export const getList = async (queries?: MicroCMSQueries) => {
 const listData = await client.getList<Gallery>({
  endpoint: "getimages",
  queries,
 });

 // データの取得が目視しやすいよう明示的に遅延効果を追加
 await new Promise((resolve) => setTimeout(resolve, 3000));

 return listData;
};
