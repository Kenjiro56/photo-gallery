import { createClient } from "microcms-js-sdk";
import { MicroCMSImages } from '@/types/microcmstype';


if (!process.env.NEXT_PUBLIC_MICROCMS_API_KEY) {
  throw new Error("MICROCMS_API_KEY is required");
}

// API取得用のクライアントを作成
export const client = createClient({
  serviceDomain: 'jiroken-gallery',
  apiKey: process.env.NEXT_PUBLIC_MICROCMS_API_KEY,
});

export const fetchData = async () => {
  try{
    const images = await client.get<MicroCMSImages>({
      endpoint: 'getimages',
      contentId: process.env.NEXT_PUBLIC_CONTENT_ID
    });
    return images;
  } catch (error) {
    console.error('Error fetching Data', error);
    throw error;
  }
};
