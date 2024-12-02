import React from 'react';
import { FaHome } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";
import { Link, Flex, Float } from '@yamada-ui/react';


const SideBar = () => {
  return (
    <Flex direction="column" height="100vh" position="fixed">
        <Link href="/">
          <FaHome />
        </Link>
        <Link href="gallery">
        <GrGallery />
        </Link>
    </Flex>
  );
}

export default SideBar;
