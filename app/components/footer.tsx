import { Box, Text } from '@yamada-ui/react';
import React from 'react';

const Footer = () => {
  return (
    <Box
      position='fixed'
      bottom={0}
      left={0}
      w='full'
      bg="gray.100"
    >
      <Text align='center' justifyContent='center'>
        © 2024 Kenjiro Hirose
      </Text>
    </Box>
  );
};

export default Footer;
