'use client';
import React, { useState } from 'react';
import ImageTile from './components/imageTile';
import { useRouter } from 'next/navigation';

export default function Home() {
  const dummyData = [
    {
      src: 'dummy/dummy1.jpg',
    },
    {
      src: 'dummy/dummy2.jpg',
    },
    {
      src: 'dummy/dummy3.jpg',
    },
    {
      src: 'dummy/dummy4.jpg',
    },
    {
      src: 'dummy/dummy5.jpg',
    },
  ]


  const router = useRouter();

  const handlePageMove = () => {
    router.push('/map');
  }

  return (
    <>
      <ImageTile
        data={dummyData}
      />
    </>
  );
}
