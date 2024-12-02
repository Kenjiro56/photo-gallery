import React from 'react';
import { client } from '@/utils/microcms';
import { MicroCMSPhoto } from '@/types/microcmstype';
import { Image, Grid, GridItem, Card, CardBody } from "@yamada-ui/react";

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
      <Grid templateColumns="repeat(3, 1fr)" gap="2%" mb='5%'>
        {data.map((photo, index) => (
          <GridItem key={index}>
            <Card backgroundColor='white'>
              <CardBody p='30'>
                <Image src={photo.image.url} alt="photo" />
              </CardBody>
            </Card>
          </GridItem>
        ))}
      </Grid>
    </div>
  );
}
