import React from 'react';
import { Box, Heading, Flex, Text, Image, Link } from '@chakra-ui/core';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import Features from './Features';

const ArticleSection = ({ children }) => {
  return (
    <Box>
      <Flex align="center" justify="center" flexDirection="column">
        <Heading
          fontSize={['2xl', '4xl', '5xl', '5xl']}
          fontWeight="extrabold"
          mt="70px"
          textAlign="center"
        >
          Write for Yourself
          <br />
          Not for Audience
        </Heading>
        <Text
          textAlign="center"
          fontSize={['md', 'lg', 'xl', '2xl']}
          size={['80%', '70%', '60%', '40%']}
          mt="15px"
        >
          Successful developers have the passion and the confidence to document
          their knowledge and share stuff what they think is cool.
        </Text>
      </Flex>

      {/* Card Section Start */}
      <Flex
        align="center"
        justify="center"
        flexDirection={['column', 'column', 'column', 'row']}
        py={['60px', '60px', '80px', '100px']}
        //overflowX="scroll"
        //overflowY="hidden"
      >
        {/* Card 1 Start */}
        <Box
          d="flex"
          position="relative"
          w={['320px', '320px', '320px', '320px']}
          h={['320px', '320px', '320px', '320px']}
          bg="#FFCB1E"
          borderRadius="5px"
          mx="40px"
          my="20px"
          borderLeft="5px solid"
          borderColor="yellow.200"
          transform={['none', 'none', 'none', 'rotate(-20deg)']}
        >
          {/* Author Pic */}
          <Box position="absolute" m="20px">
            <Image
              src="./sid.png"
              rounded="full"
              size={['80px', '80px', '80px', '80px']}
            />
          </Box>

          <Box position="absolute" top="110px" my="10px" mx="20px">
            {/* Author name and work */}
            <Heading fontSize={['sm', 'sm', 'md', 'md']}>
              Siddharth - CodeSandBox
            </Heading>

            {/* Author Quote */}
            <Box top="40px">
              <Text fontSize={['sm', 'sm', 'sm', 'sm']} fontWeight="normal">
                <Text as="span" mt="8px" color="yellow.200">
                  <FaQuoteLeft size="1.2em" />
                </Text>
                Sharing ideas, unselfishly, I like more people working/exploring
                the same ideas that I'm working on. It makes it more fun.
                Selfishly, explaining a concept helps me understand it better
                and makes me feel smart.
                <Text as="span" color="yellow.200">
                  <FaQuoteRight size="1em" />
                </Text>
              </Text>
            </Box>
          </Box>

          {/* Author Quote Source*/}
          <Box position="absolute" right="20px" top="20px" h="20px" w="20px">
            <Link
              href="https://twitter.com/siddharthkp/status/1262260552237187074"
              isExternal
            >
              <Image src="https://uploads.codesandbox.io/uploads/user/494356db-302f-42b1-94bf-11db031a5d4f/jbUa-link_icon.png" />
            </Link>
          </Box>
        </Box>
        {/* Card 1 End */}

        {/* Card 2 Start */}
        <Box
          d="flex"
          position="relative"
          color="white"
          w={['320px', '320px', '320px', '320px']}
          h={['320px', '320px', '320px', '320px']}
          bg="red.50"
          borderRadius="5px"
          mx="40px"
          my="20px"
          borderLeft="5px solid"
          borderColor="red.100"
        >
          {/* Author Pic */}
          <Box position="absolute" mx="20px" my="20px">
            <Image
              src="./kent.png"
              rounded="full"
              size={['80px', '80px', '80px', '80px']}
            />
          </Box>

          <Box position="absolute" top="110px" my="10px" mx="20px">
            {/* Author name and work */}
            <Heading fontSize={['md', 'md', 'md', 'md']}>Kent C. Dodds</Heading>
            {/* Author Quote */}
            <Box my="8px">
              <Text fontSize={['sm', 'sm', 'sm', 'sm']} fontWeight="normal">
                <Text as="span" mt="8px" color="red.100">
                  <FaQuoteLeft size="1.2em" />
                </Text>
                Why I write is largely because I can avoid answering the same
                question over and over again. It's also a big contributor to
                people's perception of my authority as a content creator so when
                I have something to sell, people buy.
                <Text as="span" color="red.100">
                  <FaQuoteRight size="1.2em" />
                </Text>
              </Text>
            </Box>
          </Box>

          {/* Author Quote Source */}
          <Box position="absolute" right="20px" top="20px" h="20px" w="20px">
            <Link
              href="https://twitter.com/kentcdodds/status/1262358130668650497"
              isExternal
            >
              <Image src="https://uploads.codesandbox.io/uploads/user/494356db-302f-42b1-94bf-11db031a5d4f/jbUa-link_icon.png" />
            </Link>
          </Box>
        </Box>
        {/* Card 2 End */}

        {/* Card 3 Start */}
        <Box
          d="flex"
          position="relative"
          color="white"
          w={['320px', '320px', '320px', '320px']}
          h={['320px', '320px', '320px', '320px']}
          bg="blue.50"
          borderRadius="5px"
          mx="40px"
          my="20px"
          borderLeft="5px solid"
          borderColor="blue.100"
          transform={['none', 'none', 'none', 'rotate(20deg)']}
        >
          {/* Author Pic */}
          <Box position="absolute" mx="20px" my="20px">
            <Image
              src="./jason.png"
              rounded="full"
              size={['80px', '80px', '80px', '80px']}
            />
          </Box>

          <Box position="absolute" top="110px" my="10px" mx="20px">
            {/* Author name and work */}
            <Heading fontSize={['sm', 'lg', 'md', 'md']}>
              Jason Lengstorf
            </Heading>

            {/* Author Quote */}
            <Box top="30px">
              <Text fontSize={['sm', 'sm', 'sm', 'sm']} fontWeight="normal">
                <Text as="span" mt="8px" color="blue.100">
                  <FaQuoteLeft size="1.2em" />
                </Text>
                I write because it's fun, mostly Smiling face with open mouth
                and cold sweat I like to work through metaphors and analogies to
                break topics down in ways that make them more approachable.
                <Text as="span" color="blue.100">
                  <FaQuoteRight size="1.2em" />
                </Text>
              </Text>
            </Box>
          </Box>

          {/* Author Quote End*/}
          <Box
            position="absolute"
            right="20px"
            top="20px"
            h="20px"
            w="20px"
            bg="balck"
          >
            <Link
              href="https://twitter.com/jlengstorf/status/1262368705775714305"
              isExternal
            >
              <Image src="https://uploads.codesandbox.io/uploads/user/494356db-302f-42b1-94bf-11db031a5d4f/jbUa-link_icon.png" />
            </Link>
          </Box>
        </Box>
        {/* Card 3 End */}
      </Flex>
      {/* Card End */}

      <Features />
    </Box>
  );
};
export default ArticleSection;
