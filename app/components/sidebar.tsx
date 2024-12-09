'use client';
import React from 'react';
import { HouseIcon, ImagesIcon } from "@yamada-ui/lucide"
import { Link, Flex, Box, Text, useBreakpointValue } from '@yamada-ui/react';
import { Sawarabi_Gothic } from "next/font/google";
const SawarabiGothicFont = Sawarabi_Gothic({
  weight: "400",
  subsets: ["latin"],
});


const SideBar = () => {
  return (
      <Box
        position='fixed'
        left={0}
        top={0}
        w='8%'
        h="100%"
      >
        <Flex direction="column" alignItems="left" gap='3' p='8'>
            <Link href="/">
              <Flex gap='1'>
                <HouseIcon fontSize={{lg: "3xl" }} color='#333'  />
                <Text display={{ base: "block", md: "none" }} className={ SawarabiGothicFont.className } color='#333'>
                  Home
                </Text>
              </Flex>
            </Link>
            <Link href="gallery">
              <Flex gap='1'>
                <ImagesIcon fontSize={{ lg: "3xl" }} color='#333' />
                <Text display={{base: "block", md: "none" }} className={ SawarabiGothicFont.className } color='#333'>
                  Gallery
                </Text>
              </Flex>
            </Link>
        </Flex>
      </Box>
  );
}

export default SideBar;
