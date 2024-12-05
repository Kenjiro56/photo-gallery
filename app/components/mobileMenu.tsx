'use client';
import React from 'react';
import { HouseIcon, ImagesIcon } from "@yamada-ui/lucide"
import { Link, Flex, Box,
    Drawer,
    DrawerBody,
    Button,
    useDisclosure
  } from '@yamada-ui/react';




const MoblieMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
    <Button onClick={onOpen}
      position='fixed'
      left={0}
      top={0}
    >Menu</Button>

    <Drawer isOpen={isOpen} onClose={onClose} placement='left'>

      <DrawerBody>
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
      </DrawerBody>
    </Drawer>

    </>
  );
}

export default MoblieMenu;
