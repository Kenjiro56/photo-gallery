'use client';
import React, { useState } from 'react';
import { client, getList } from '../libs/microcms';

interface Gallery {
  id: string;
  photos: string;
}



export default function Home() {
  const [images, setImages] = useState([]);
  client
  .get({
    endpoint: 'getimages',
    contentId: process.env.NEXT_PUBLIC_CONTENT_ID,
  })
  .then((res) => console.log(res));


  return (
  <div>
    <h1>Gallery</h1>
  </div>
  );
}
