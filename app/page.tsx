'use client';
import React from 'react';
import { useRouter } from 'next/navigation';


export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/map');
  }
  return (
  <button onClick={handleClick}>
    Go to Map Page
  </button>
  );
}
