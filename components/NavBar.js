import React from 'react';
import ReactDOM from 'react-dom';
import { Box, Flex, Button, Heading, Link, Image, List } from '@chakra-ui/core';

const NavLink = ({ children, ...props }) => (
  <Link mt={{ base: 4, md: 0 }} mr={6} display="block" fontSize={"xl"} fontWeight="medium" lineHeight="xl" color="gray.50" {...props}>
    {children}
  </Link>
);

const NavBar = props => {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);
  return (
    <Flex
      as="nav"
      w="90%"
      mx="auto"
      my="60px"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1rem"
      bg="white"
      position="sticky"
      top="0"
      color="gray.50"
      border="1px solid #F2F4F8"
      borderRadius="20px"
      boxShadow="0px 20px 30px rgba(139, 142, 149, 0.05);"
      height={["auto", "auto", "80px", "80px"]}
      zIndex="100"
      {...props}
    >
      <Flex mr={5} align="center">
        <Heading as="h1" size="lg">
          <Image
            position="relative"
            src="/logo.png"
            w="120px"
            h="40px"
            margin="auto"
          />
        </Heading>
      </Flex>
      <Box display={{ sm: "block", md: "none" }} onClick={handleToggle}>
        <svg
          width="32"
          height="21"
          viewBox="0 0 36 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.66088 0.444519C-2.71505 0.999031 0.660872 3.94452 3.16089 4.94452H31.6609C34.8609 4.94452 35.1609 1.44434 31.1609 0.444484C25.8275 0.444484 15.1609 -0.555629 3.66088 0.444519Z"
            fill="black"
          />
          <path
            d="M3.82177 19.3889C-2.55416 19.9434 0.821761 22.8889 3.32178 23.8889C22.1609 24.9443 28.6218 23.8889 31.8218 23.8889C35.0218 23.8889 35.3218 20.3887 31.3218 19.3888C25.9884 19.3888 15.3218 18.3887 3.82177 19.3889Z"
            fill="black"
          />
          <path
            d="M4.32173 9.88882C-2.0542 10.4433 0.821729 12.8888 3.32174 13.8888C22.1609 14.9443 28.6217 13.8888 31.8217 13.8888C35.0217 13.8888 36.6609 10.9442 32.6609 9.94434C27.3275 9.94434 15.8217 8.88867 4.32173 9.88882Z"
            fill="black"
          />
        </svg>
      </Box>

      <Box
        display={{ sm: show ? "block" : "none", md: "flex" }}
        width={{ sm: "full", md: "auto" }}
        alignItems="center"
      >
        <NavLink href="">Home</NavLink>
        <NavLink href="about">Challenges</NavLink>
        <NavLink href="about">About</NavLink>
      </Box>
      {/*
      <Box display={{ sm: show ? 'block' : 'none', md: 'block' }}>
        <Button bg="transparent" border="1px">
          Create account
        </Button>
      </Box>
      */}
    </Flex>
  );
};

export default NavBar;
