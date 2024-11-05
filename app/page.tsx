'use client';
import React, { useState, useEffect } from 'react';
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

  const fetchAlbums = async () => {

    try{
      const response = await fetch('/api/GoogleApi', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ access_token: process.env.GOOGLE_REFRESH_TOKEN }),
      });

        const data = await response.json();
        console.log('data:', data);
      } catch (error) {
        console.error('Error fetching albums:', error);
      }
    };

  return (
    <>
      <ImageTile
        data={dummyData}
      />
      <button onClick={fetchAlbums}>Fetch Albums</button>
    </>

  );
}
