'use client';
import React, { useState } from 'react';
import { client, getList } from '../libs/microcms';
import { MicroCMSImages, ImageProps } from '@/types/microcmstype';




export default function Home() {
  const [images, setImages] = useState<MicroCMSImages>();

  const fetchImages = async () => {
    try{
      const response = await client.get({
        endpoint: 'getimages',
        contentId: process.env.NEXT_PUBLIC_CONTENT_ID,
      })
      const data: MicroCMSImages = response;
      // setImages(data);
      console.log(data.photos);
    }catch (error) {
      console.error(error);
    }

  };



  return (
  <div>
    <h1>Gallery</h1>
    <button onClick={fetchImages}>Load Images</button>
      {images && (
        <div>
          <img src={images.photos.url} alt="photo" />
        </div>
      )}
  </div>
  );
}
