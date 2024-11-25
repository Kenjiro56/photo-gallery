'use client';
import React, { useState } from 'react';
import { client, getList } from '../libs/microcms';

interface Gallery {
  id: string;
  photos: string;
}



export default function Home() {
  const [images, setImages] = useState([]);

  const fetchImages = async () => {
    try{
      const response = await client.get({
        endpoint: 'getimages',
        contentId: process.env.NEXT_PUBLIC_CONTENT_ID,
      })
      // const data = await response.json();
      setImages(response);
      console.log(images);
    }catch (error) {
      console.error(error);
    }

  };
  // client
  // .get({
  //   endpoint: 'getimages',
  //   contentId: process.env.NEXT_PUBLIC_CONTENT_ID,
  // })
  // .then((res) => console.log(res));


  return (
  <div>
    <h1>Gallery</h1>
    <button onClick={fetchImages}>Load Images</button>
  </div>
  );
}
