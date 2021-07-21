import Head from 'next/head';
import {
  Button,
  Flex,
  Image,
  Heading,
  Box,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  Input,
  FormLabel,
  PseudoBox,
  useDisclosure
} from '@chakra-ui/core';
import React, { useEffect, useState } from 'react';
import HeroSection from '@/components/LandingPageComponents/HeroSection';
import Articlesection from '@/components/LandingPageComponents/ArticleSection';
import EarlyAccess from '@/components/LandingPageComponents/EarlyAccess';
import FooterSection from 'components/LandingPageComponents/FooterSection';
import NavBar from '@/components/NavBar';
import Confetti from 'react-confetti';

import { animateScroll } from 'react-scroll';
import { getTotalCount, addUsers } from '../firebase/firebase';

const Home = () => {
  const [value, setValue] = useState('');
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchTotalCount = async () => {
      const totalCount = await getTotalCount();

      setCount(totalCount);
    };

    fetchTotalCount();
  }, []);

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const initialRef = React.useRef();
  const finalRef = React.useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addUsers(value);
      animateScroll.scrollToTop({
        smooth: true
      });
      setCount(count + 1);

      setValue('');
    } catch (error) {
      alert(error.message);
    }
  };

  const { isOpen, onClose, onOpen } = useDisclosure();

  useEffect(() => {
    function handleC(event) {
      if (event.key.toLowerCase() === 'c') {
        if (isOpen) {
          onClose();
        } else {
          onOpen();
        }
      }
    }

    window.addEventListener('keydown', handleC);
    return () => {
      window.removeEventListener('keydown', handleC);
    };
  }, [onOpen, isOpen, onClose]);

  return (
    <>
  
        <Head>
          <title>JS Makers</title>
        </Head>
        <HeroSection count={count} />

        <Articlesection />

        <EarlyAccess
          handleInputChange={handleInputChange}
          value={value}
          handleSubmit={handleSubmit}
        />

        <FooterSection />

    </>
  );
};

export default Home;
