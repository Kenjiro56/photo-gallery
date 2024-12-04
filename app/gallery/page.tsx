import React from 'react';
import { client } from '@/utils/microcms';
import { MicroCMSPhoto } from '@/types/microcmstype';
import { Image, Grid, GridItem, Card, CardBody, Select, Option } from "@yamada-ui/react";

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
      <Select placeholder="Category" bg="#333" color="white" w="10%">
        <Option bg="#333" value="food">food</Option>
        <Option bg="#333" value="nature">nature</Option>
        <Option bg="#333" value="life">life</Option>
      </Select>

      <Grid templateColumns="repeat(3, 1fr)" gap="2%" mb='5%'>
        {data.map((photo, index) => (
          <GridItem key={index}>
            <Card backgroundColor='white'>
              <CardBody p='5%'>
                <Image src={photo.image.url} alt="photo" />
              </CardBody>
            </Card>
          </GridItem>
        ))}
      </Grid>
    </div>
  );
}
