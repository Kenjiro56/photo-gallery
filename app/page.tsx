'use client';
import React, { useState } from 'react';
import ImageTile from './components/imageTile';
import { useRouter } from 'next/navigation';



export default function Home() {
  const dummyData = [
    {
      src: 'dummy/dummy1.jpg',
      height: 9,
      width: 16,
    },
    {
      src: 'dummy/dummy2.jpg',
      height: 9,
      width: 16,
    },
    {
      src: 'dummy/dummy3.jpg',
      height: 9,
      width: 16,
    },
    {
      src: 'dummy/dummy4.jpg',
      height: 9,
      width: 16,
    },
    {
      src: 'dummy/dummy5.jpg',
      height: 9,
      width: 16,
    },
  ]


  const router = useRouter();

  const handlePageMove = () => {
    router.push('/map');
  }
  const handleSelected = () => {
    // ここにモーダルを開く処理を書く
    console.log('clicked');
  }
  return (
    <>
      <ImageTile
        photos={dummyData}
        onClick={handleSelected}
      />
    </>
  );
}
