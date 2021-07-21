import React from 'react';
import { Box, PseudoBox } from '@chakra-ui/core';
import { motion } from 'framer-motion';

const HeroSectionButton = motion.custom(PseudoBox);

function EarlyAccessButton({ text }) {
  return (
    <Box
      d="flex"
      flexDirection={['column', 'column', 'row', 'row']}
      w={['320px', '320px', '480px', '520px']}
      py={2}
      px={4}
      borderRadius="12px"
      background="white"
      boxShadow="0px 20px 80px rgba(43, 41, 46, 0.4)"
    >
      <PseudoBox
        textAlign="center"
        as="input"
        placeholder="Your Email"
        type="email"
        w="290px"
        py={3}
        px={5}
        rounded="md"
        outline="none"
      />
      <HeroSectionButton
        as="button"
        bg="yellow.100"
        w="180px"
        py={2}
        px={4}
        ml={4}
        alignItems="center"
        borderRadius="12px"
        whileHover={{ scale: 1.1 }}
        fontWeight="semibold"
        outline="#FFD64D"
        _hover={{ bg: 'yellow.150' }}
      >
        {text}
      </HeroSectionButton>
    </Box>
  );
}

export default EarlyAccessButton;
