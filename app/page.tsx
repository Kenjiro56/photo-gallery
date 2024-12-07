import React from 'react';
import { getImages } from '../utils/microcms';
import {
  Carousel,
  CarouselSlide,
} from "@yamada-ui/carousel"
import { Center, Image, VStack, Text } from "@yamada-ui/react";
import { Nothing_You_Could_Do, Pacifico } from "next/font/google";

const NothingYouCouldDoFont = Nothing_You_Could_Do({
  weight: "400",
  subsets: ["latin"],
});

const PacificoFont = Pacifico({
  weight: "400",
  subsets: ["latin"],
});



export default async function Home() {
  const data = await getImages();
  const numShowImg = 8;
  const newData = data.slice(0, numShowImg);
  return (
    <VStack justifyContent="center">
      <Text as={Center} className={ PacificoFont.className } fontSize='8xl' pb='20'>Kenjiro&#39;s Gallery</Text>
      <Center>
        <h1 className={`${ NothingYouCouldDoFont.className } text-5xl`} >New Photo</h1>
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
