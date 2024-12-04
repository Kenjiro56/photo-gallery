'use client';
import React from 'react';
import { HouseIcon, ImagesIcon } from "@yamada-ui/lucide"
import { Link, Flex, Box } from '@yamada-ui/react';


const SideBar = () => {
  return (
    <Box
      position='fixed'
      left={0}
      top={0}
      w='8%'
      h="100%"
      bg="gray.100"
      borderWidth={2}
    >
      <Flex direction="column" alignItems="left" p='10' gap='10'>
          <Link href="/">
            <Flex gap='5'>
              <HouseIcon />
              Home
            </Flex>
          </Link>
          <Link href="gallery">
            <Flex gap='5'>
              <ImagesIcon />
              Gallery
            </Flex>
          </Link>
      </Flex>
    </Box>
  );
}

export default SideBar;
