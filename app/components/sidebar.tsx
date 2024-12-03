'use client';
import React from 'react';
import { GrGallery } from "react-icons/gr";
import { HouseIcon, ImagesIcon } from "@yamada-ui/lucide"
import { Link, Flex, Box } from '@yamada-ui/react';


const SideBar = () => {
  return (
    <Box
      position='fixed'
      left={0}
      top={0}
      w='5%'
      h="100%"
      bg="gray.100"
      borderWidth={2}
    >
      <Flex direction="column" alignItems="center" p='5' gap='10'>
          <Link href="/">
            <HouseIcon />
          </Link>
          <Link href="gallery">
            <ImagesIcon />
          </Link>
      </Flex>
    </Box>
  );
}

export default SideBar;
