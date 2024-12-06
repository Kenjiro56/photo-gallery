'use client';
import React from 'react';
import { HouseIcon, ImagesIcon } from "@yamada-ui/lucide"
import { Link, Flex, Box, Text } from '@yamada-ui/react';


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
      <Flex direction="column" alignItems="left" gap='3' p='2'>
          <Link href="/">
            <Flex gap='1'>
              <HouseIcon fontSize={{lg: "3xl" }}  />
              <Text display={{ base: "block", md: "none" }}>
                Home
              </Text>
            </Flex>
          </Link>
          <Link href="gallery">
            <Flex gap='1'>
              <ImagesIcon fontSize={{ lg: "3xl" }} />
              <Text display={{base: "block", md: "none" }}>
                Gallery
              </Text>
            </Flex>
          </Link>
      </Flex>
    </Box>
  );
}

export default SideBar;
