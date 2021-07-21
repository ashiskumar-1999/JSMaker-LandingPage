import React from 'react';
import {
  Box,
  Grid,
  Text,
  Image,
  Heading,
  Flex,
  List,
  ListItem,
  ListIcon
} from '@chakra-ui/core';
import {
  FaFacebook,
  FaTwitter,
  FaDribbble,
  FaGithub,
  FaLinkedin
} from 'react-icons/fa';

const FooterSection = ({ children }) => {
  return (
    <Grid
      px={['30px', '30px', '100px', '120px']}
      templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }}
    >
      <Box
        d={{ md: 'flex' }}
        flexDirection={{ md: 'column' }}
        justifyContent={'center'}
        alignItems={{ md: 'center', lg: 'flex-start' }}
      >
        <Box d={['block', 'block', 'block', 'block']} mb="8px">
          <Image src="/logo.svg" h="60px" w="160px" />
        </Box>
        <Text as="b" fontSize={['sm', 'sm', 'lg', 'lg']}>
          &ldquo; A community for JavaScript Developers. &rdquo;
        </Text>
      </Box>

      <Box
        //px="120px"
        mt={['40px', '40px', '40px', '0px']}
        d={{ md: 'flex' }}
        flexDirection={{ md: 'column' }}
        alignItems={{ base: 'center', lg: 'flex-end' }}
      >
        <Box w={['90%', '60%', '60%', '60%']}>
          <List d="flex" justifyContent="space-between">
            <ListItem d="inline-block" cursor="pointer">
              <ListIcon>
                <FaFacebook size="2em" />
              </ListIcon>
            </ListItem>
            <ListItem d="inline-block" cursor="pointer">
              <ListIcon>
                <FaTwitter size="2em" />
              </ListIcon>
            </ListItem>
            <ListItem d="inline-block" cursor="pointer">
              <ListIcon>
                <FaDribbble size="2em" />
              </ListIcon>
            </ListItem>
            <ListItem d="inline-block" cursor="pointer">
              <ListIcon>
                <FaGithub size="2em" />
              </ListIcon>
            </ListItem>
            <ListItem d="inline-block" cursor="pointer">
              <ListIcon>
                <FaLinkedin size="2em" />
              </ListIcon>
            </ListItem>
          </List>
        </Box>
        <Text as="b" fontSize={['sm', 'sm', 'lg', 'lg']}>
          Copyright @ 2020 JS Makers, all rights Reserved.
        </Text>
      </Box>
    </Grid>
  );
};
export default FooterSection;
