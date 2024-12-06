import React from 'react';
import { getImages } from '../utils/microcms';
import {
  Carousel,
  CarouselSlide,
} from "@yamada-ui/carousel"
import { Center, Heading, Image, VStack } from "@yamada-ui/react";



export default async function Home() {
  const data = await getImages();
  const numShowImg = 8;
  const newData = data.slice(0, numShowImg);
  return (
    <VStack justifyContent="center">
      <Image src='/thumbnail-string.png' alt='thumnbnail' height='20vh' objectFit='contain' />
      <Center>
        <Heading as="h1" fontSize='36px'>New Photo</Heading>
      </Center>
      <Carousel slideSize="50%" autoplay>
        {newData.map((photo, index) => (
          <CarouselSlide as={Center} key={index}>
            <Image src={photo.image.url} alt='photo'/>
          </CarouselSlide>
        ))}
      </Carousel>
    </VStack>
  );
}
