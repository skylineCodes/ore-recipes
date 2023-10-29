'use client';

import React, { useEffect, useState } from 'react';
import { Box, Flex, Text, Image, Icon, Button, Grid, Center } from '@chakra-ui/react';
// import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { trunc } from '@/util/commonUtil';

type RecipeItemType = {
  image?: string;
  foodId?: string;
  name?: string;
  category?: string;
  price?: number;
  uri?: string;
  nutrients?: any;
  measures?: any;
};

const MobileRecipeItem = ({
  image,
  name,
  category,
  price,
  foodId,
  uri,
  nutrients,
  measures,
}: RecipeItemType) => {
  const router = useRouter();

  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'flex-start'}
      alignItems={'flex-start'}
      gap={'10px'}
      width={'auto'}
      height={'auto'}
      cursor={'pointer'}
      onClick={() => router.push(`/recipe/${foodId}`)}
    >
      <Image
        src={image}
        style={{
          height: '90%',
          width: '100%',
          objectFit: 'cover',
        }}
        alt={'Recipe Image'}
        width={0}
        height={0}
      />
      <Flex
        flexDirection={'row'}
        justifyContent={'space-between'}
        alignItems={'flex-start'}
        width={'100%'}
      >
        <Flex flexDirection={'column'}>
          <Text
            color={'primary.500'}
            fontSize={'19px'}
            lineHeight={'26px'}
            fontWeight={'normal'}
          >
            {trunc(name, 20)}
          </Text>
        </Flex>
        <Flex flexDirection={'column'}>
          <Text
            color={'primary.500'}
            fontSize={'18px'}
            lineHeight={'20px'}
            fontWeight={'bold'}
          >
            &#8358;{price}
          </Text>
        </Flex>
      </Flex>
      <Flex
        flexDirection={'row'}
        justifyContent={'space-between'}
        alignItems={'flex-start'}
        width={'100%'}
      >
        <Flex flexDirection={'column'}>
          <Text
            color={'primary.500'}
            fontSize={'17px'}
            lineHeight={'26px'}
            fontWeight={'normal'}
          >
            {trunc(category, 20)}
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default MobileRecipeItem;
