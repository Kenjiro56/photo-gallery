import React from 'react';
import { client } from '../utils/microcms';
import { MicroCMSImages } from '@/types/microcmstype';
import { Image, Grid, GridItem } from "@yamada-ui/react";

async function getImages(): Promise<MicroCMSImages['photos']> {
  const data = await client.get<MicroCMSImages>({
    endpoint: 'getimages',
    contentId: process.env.NEXT_PUBLIC_CONTENT_ID,
    queries: {
      limit: 20,
    },
  });
  return data.photos;
}


export default async function Home() {
  const images = await getImages();
  return (
    <div>
      <h1>Kenjiro Gallery</h1>
      <Grid templateColumns="repeat(3, 1fr)" gap="1%">
        {images.map((photo, index) => (
          <GridItem>
            <Image key={index} src={photo.url} alt="photo" borderWidth="2px" />
          </GridItem>
        ))}
      </Grid>
    </div>
  );
}
