import { Box, Center } from '@yamada-ui/react';
import React from 'react';

const Footer = () => {
  return (
    <Box
      position='fixed'
      bottom={0}
      w='full'
      h="%"
      bg="gray.100"
    >
      <Center>© 2024 Kenjiro Hirose</Center>
    </Box>
  );
};

export default Footer;
