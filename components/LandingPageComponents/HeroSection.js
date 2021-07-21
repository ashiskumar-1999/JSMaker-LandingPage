import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import {
  Box,
  Heading,
  Text,
  Image,
  Avatar,
  AvatarGroup,
  PseudoBox,
  Grid
} from '@chakra-ui/core';
import EarlyAccessButton from '../atoms/EarlyAccessButton';

const HeroSectionButton = motion.custom(PseudoBox);

const HeroSection = ({ count }) => {
  return (
    <>
      <Grid
        templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }}
        gap={[10, 10, 20, 20]}
        px={['30px', '30px', '80px', '120px']}
        py={['none', 'none', '60px', '60px']}
      >
        <Box>
          <Image src="/MainBg.svg" />
        </Box>
        <Box>
          <Text
            fontWeight="bold"
            fontSize={['xl', 'xl', '2x1', '2xl']}
            color="#46DBC9"
          >
            Yet another
          </Text>
          <Heading
            fontSize={['5xl', '5xl', '5xl', '6xl']}
            fontWeight="extrabold"
            color="yellow.150"
          >
            JS
            <Heading
              fontSize={['5xl', '5xl', '5xl', '6xl']}
              fontWeight="extrabold"
              color="black"
              as="s"
            >
              Framework
            </Heading>
          </Heading>
          <Heading
            fontSize={['5xl', '5xl', '5xl', '6xl']}
            fontWeight="extrabold"
            color="blue.150"
            as="u"
          >
            Community
          </Heading>

          <Text fontSize={['xl', 'xl', '2xl', '2xl']} py="20px">
            We love
            <Text d="inline" color="yellow.150">
              &nbsp; Javascript &nbsp;
            </Text>
            like you and we believe, the most successful developers share more
            than what they take. &hearts;
          </Text>
          <AvatarGroup pb="20px">
            <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
            <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
            <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
            <Avatar name="Prosper" src="https://bit.ly/prosper-baba" />
            <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
            <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
          </AvatarGroup>

          <Text color="black" fontSize="2xl" pb="20px">
            Join over <b>{count}+</b>people who already support the cause.
          </Text>
          <EarlyAccessButton text="Get Early Access" />
        </Box>
      </Grid>
    </>
  );
};

export default HeroSection;
