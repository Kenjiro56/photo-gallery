import React from 'react';
import { client } from '../utils/microcms';
import { MicroCMSPhoto } from '@/types/microcmstype';
import {
  Carousel,
  CarouselSlide,
} from "@yamada-ui/carousel"
import { Center, Heading, Image, VStack } from "@yamada-ui/react";


async function getImages(): Promise<MicroCMSPhoto[]> {
  const data = await client.get({
    endpoint: 'photo',
    queries: {
      limit: 20,
    },
  });
  return data.contents;
}


export default async function Home() {
  const data = await getImages();
  return (
    <VStack justifyContent="center">
      <Center>
        <Heading as="h1" fontSize='36px'>New Photo</Heading>
      </Center>
      <Carousel slideSize="50%" autoplay>
        {data.map((photo, index) => (
          <CarouselSlide as={Center} bg="primary" key={index}>
            <Image src={photo.image.url} />
          </CarouselSlide>
        ))}
      </Carousel>
    </VStack>
  );
}
