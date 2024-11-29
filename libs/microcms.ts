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

if (!process.env.SERVICE_DOMAIN) {
 throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

if (!process.env.API_KEY) {
 throw new Error("MICROCMS_API_KEY is required");
}

// API取得用のクライアントを作成
export const client = createClient({
 serviceDomain: process.env.SERVICE_DOMAIN,
 apiKey: process.env.API_KEY,
});
