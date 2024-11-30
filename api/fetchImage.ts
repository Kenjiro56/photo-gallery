import { MicroCMSImages } from '@/types/microcmstype'
import { client } from '../utils/microcms';;

export const fetchImage = async () => {
  try {
    const response = await client.get<MicroCMSImages>({
      endpoint: 'getimages',
      contentId: process.env.NEXT_PUBLIC_CONTENT_ID,
    });
    return response;
  } catch (error) {
    console.error(error);
  }
}
