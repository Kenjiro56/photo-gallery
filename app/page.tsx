import React from 'react';
import { getImages } from '../utils/microcms';
import {
  Carousel,
  CarouselSlide,
} from "@yamada-ui/carousel"
import { Center, Heading, Image, VStack } from "@yamada-ui/react";


export default async function Home() {
  const data = await getImages();
  return (
    <VStack justifyContent="center">
      <Image src='/thumbnail-string.png' alt='thumnbnail' height='20vh' objectFit='contain' />
      <Center>
        <Heading as="h1" fontSize='36px'>New Photo</Heading>
      </Center>
      <Carousel slideSize="50%" autoplay>
        {data.map((photo, index) => (
          <CarouselSlide as={Center} bg="primary" key={index}>
            <Image src={photo.image.url} alt='photo'/>
          </CarouselSlide>
        ))}
      </Carousel>
    </VStack>
  );
}
