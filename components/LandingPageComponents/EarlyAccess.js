import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import {
  Box,
  Stack,
  Heading,
  Button,
  Flex,
  Grid,
  Text,
  Image,
  FormControl,
  Input,
  PseudoBox
} from '@chakra-ui/core';

const EarlyAccessButton = motion.custom(PseudoBox);

const EarlyAccess = ({ handleSubmit, handleInputChange, value }) => {
  return (
    <Flex
      bg="yellow.150"
      justify="center"
      align="center"
      flexDirection="column"
      borderRadius="20px"
      py="50px"
      m={['30px', '30px', '50px', '100px']}
    >
      <Heading
        fontWeight="extrabold"
        lineHeight={['shorter', 'short', 'normal', 'base']}
        fontSize={['lg', '3xl', '5x1']}
        textAlign="center"
        pb="10px"
      >
        Join the waitlist.
      </Heading>
      <Text
        fontWeight="normal"
        lineHeight="shorter"
        fontSize={['sm', 'lg', 'xl', '2xl']}
        w={['100%', '80%', '80%', '50%']}
        textAlign="center"
        pb="20px"
      >
        We can’t wait to see Awesome developers like you join the JS Makers
        community. Until then, join the waitlist for the Beta.
      </Text>
      <Box
        d="flex"
        flexDirection={['column', 'column', 'row', 'row']}
        flex="1"
        py={2}
        px={4}
        borderRadius="12px"
        mx="30px"
        pb="10px"
        background="white"
        boxShadow="0px 20px 80px rgba(43, 41, 46, 0.4)"
        textAlign="center"
      >
        <form onSubmit={handleSubmit}>
          <PseudoBox
            textAlign="center"
            as="input"
            placeholder="Your Email"
            value={value}
            type="email"
            w="220px"
            py={3}
            px={5}
            rounded="md"
            outline="none"
            required={true}
            onChange={handleInputChange}
          />
          <EarlyAccessButton
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
            onSubmit
          >
            Get Early Access
          </EarlyAccessButton>
        </form>
      </Box>
    </Flex>
  );
};
export default EarlyAccess;
