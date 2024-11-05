import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const PHOTO_LIBRARY_URL = 'https://photoslibrary.googleapis.com/v1';
  const { access_token } = req.body;
  console.log("呼ばれたよ");
  try {
    const response = await axios.get(PHOTO_LIBRARY_URL + '/albums/' + process.env.ALBUM_ID, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch albums' });
  }
}

export default handler;
