'use client';

import React, { useState } from 'react';
import { Box, Flex, Grid, Heading, Text, Icon, useDisclosure } from '@chakra-ui/react';
import NextLink from 'next/link';
import { Link } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <>
      <Box
        backgroundColor={'primary.300'}
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
        position={'absolute'}
        left={'0'}
        right={'0'}
        top={'0'}
        zIndex={'20'}
        height={'56px'}
        width={'100%'}
        maxWidth={'100%'}
        marginRight={'auto'}
        marginLeft={'auto'}
      >
        <Grid
          templateColumns='1fr 1fr 1fr'
          maxWidth={'90%'}
          width={'100%'}
          margin={'auto'}
          pt={'10px'}
          pb={'10px'}
          position={'relative'}
        >
          <Flex
            position={'relative'}
            direction={'column'}
            justifyContent={'center'}
            alignItems={'flex-start'}
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
              cursor={'pointer'}
              _hover={{ textDecoration: 'none', opacity: '0.8' }}
            >
              <Heading>Ore Recipe</Heading>
            </Link>
          </Flex>
          <Flex
            direction={'row'}
            justifyContent={'center'}
            alignItems={'center'}
            gap={'32px'}
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
              cursor={'pointer'}
              _hover={{ textDecoration: 'none', opacity: '0.8' }}
            >
              Home
            </Link>
            <Link
              as={NextLink}
              href='/'
              color={'grey.500'}
              fontFamily={'body'}
              fontWeight={'normal'}
              fontSize={'xxs'}
              lineHeight={'short'}
              letterSpacing={'0.01em'}
              cursor={'pointer'}
              _hover={{ textDecoration: 'none', opacity: '0.8' }}
            >
              About Us
            </Link>
            <Link
              as={NextLink}
              href='/'
              color={'grey.500'}
              fontFamily={'body'}
              fontWeight={'normal'}
              fontSize={'xxs'}
              lineHeight={'short'}
              letterSpacing={'0.01em'}
              cursor={'pointer'}
              _hover={{ textDecoration: 'none', opacity: '0.8' }}
            >
              Category
            </Link>
          </Flex>
          <Flex
            justifyContent={'flex-end'}
            alignItems={'center'}
            gap={'20px'}
          ></Flex>
        </Grid>
      </Box>
    </>
  );
}

export default Navbar;
