import React from 'react';
import { client } from '@/utils/microcms';
import { MicroCMSPhoto } from '@/types/microcmstype';
import CategorySelector from './components/categorySelector';

async function getImages(): Promise<MicroCMSPhoto[]> {
  const data = await client.get({
    endpoint: 'photo',
    queries: {
      limit: 20,
    },
  });
  return data.contents;
}

export default async function Gallery() {
  const data = await getImages();

  return (
    <div>
      <CategorySelector props={data}/>
    </div>
  );
}
