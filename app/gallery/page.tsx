import React from 'react';
import { client } from '@/utils/microcms';
import { MicroCMSPhoto } from '@/types/microcmstype';
import { Image, Grid, GridItem } from "@yamada-ui/react";

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
      <h1>Kenjiro Gallery</h1>
      <Grid templateColumns="repeat(3, 1fr)" gap="1%" mb='5%'>
        {data.map((photo, index) => (
          <GridItem key={index}>
            <Image src={photo.image.url} alt="photo" borderWidth="2px" />
          </GridItem>
         ))}
       </Grid>
    </div>
  );
}
