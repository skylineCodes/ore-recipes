'use client';

import React, { useState, useEffect } from 'react';
import { Box, Flex, Grid, Heading, Text, Icon, useDisclosure } from '@chakra-ui/react';
import NextLink from 'next/link';
import { Link } from '@chakra-ui/react';
import { VscMenu } from 'react-icons/vsc';
import { AiOutlineSearch } from 'react-icons/ai';

const MobileNavbar = () => {
  const [scrolled, setScrolled] = useState<any>(false);
  const [placement, setPlacement] = useState<any>('left');
  const [placementCart, setPlacementCart] = useState<any>('right');
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleScroll = () => {
    const offset = window.scrollY;

    if (offset > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Box
        backgroundColor={'primary.300'}
        width={'100%'}
        zIndex={'40'}
        height={'8vh'}
        position={`${scrolled ? 'fixed' : 'relative'}`}
        top={`${scrolled ? 0 : ''}`}
      >
        <Grid
          templateColumns={'1fr 1fr 1fr'}
          justifyContent={'center'}
          gridGap={'10px'}
          maxWidth={'90%'}
          width={'100%'}
          margin={'auto'}
          height={'inherit'}
        >
          <Flex direction={'column'} justifyContent={'center'}>
            <Icon
              as={VscMenu}
              color={'grey.500'}
              boxSize={5}
              onClick={onOpen}
            />
          </Flex>
          <Flex
            direction={'column'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <Link
              as={NextLink}
              href='/'
              color={'grey.500'}
              fontFamily={'body'}
              fontWeight={'normal'}
              fontSize={'xxs'}
              lineHeight={'short'}
              letterSpacing={'0.01em'}
              _hover={{ textDecoration: 'none', opacity: '0.8' }}
            >
              <Heading fontSize={'18px'}>Ore Recipe</Heading>
            </Link>
          </Flex>
          <Flex
            direction={'column'}
            justifyContent={'center'}
            alignItems={'flex-end'}
            position={'relative'}
          >
            <Icon as={AiOutlineSearch} color={'grey.500'} boxSize={6} />
          </Flex>
        </Grid>
      </Box>
    </>
  );
}

export default MobileNavbar;
