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
      <Flex direction="column" alignItems="left" p='10' gap='10'>
          <Link href="/">
            <Flex gap='5'  align="center">
              <HouseIcon fontSize={{ base: "lg", md: "2xl", lg: "3xl" }}  />
              <Text display={{ base: "none", md: "block" }}>
                Home
              </Text>
            </Flex>
          </Link>
          <Link href="gallery">
            <Flex gap='5'  align="center">
              <ImagesIcon fontSize={{ base: "lg", md: "2xl", lg: "3xl" }} />
              <Text display={{ base: "none", md: "block" }}>
                Gallery
              </Text>
            </Flex>
          </Link>
      </Flex>
    </Box>
  );
}

export default SideBar;
