'use client';
import React, { useState, useEffect } from 'react';
import { client } from '../utils/microcms';
import { MicroCMSImages } from '@/types/microcmstype';




export default function Home() {
  const [images, setImages] = useState<MicroCMSImages['photos']>([]);

  const fetchImages = async () => {
    try{
      const response = await client.get<MicroCMSImages>({
        endpoint: 'getimages',
        contentId: process.env.NEXT_PUBLIC_CONTENT_ID,
      })
      const data = response;
      setImages(data.photos);
    }catch (error) {
      console.error(error);
    }

  };

  useEffect(() => {
    fetchImages();
  }, []);



  return (
  <div>
    <div>
      <h1>Kenjiro's Gallery</h1>
      {images.map((photo, index) => (
        <img key={index} src={photo.url} alt="photo" />
      ))}
    </div>
  </div>
  );
}
