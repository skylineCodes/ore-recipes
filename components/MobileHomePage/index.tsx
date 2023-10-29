'use client';

import axios from 'axios';
import MobileNavbar from '../MobileNavbar';
import MobileRecipeItem from '../MobileRecipeItem';
import React, { useEffect, useState } from 'react';
import { Box, Flex, Grid, Text } from '@chakra-ui/react';
import { currencySeparator, generatePrice } from '@/util/commonUtil';

const MobileHomePage = () => {
  const [recipeData, setRecipeData] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `https://edamam-food-and-grocery-database.p.rapidapi.com/api/food-database/v2/parser`,
        {
          headers: {
            'X-RapidAPI-Key':
              'c656fa016emsh4953ffed6b60afbp16bd97jsn1fca652b1f2c',
            'X-RapidAPI-Host':
              'edamam-food-and-grocery-database.p.rapidapi.com',
          },
        }
      );

      setRecipeData(res.data);
    };

    fetchData();
  }, []);

  return (
    <>
      <MobileNavbar />
      <Box
        backgroundColor={'other.600'}
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
        zIndex={'20'}
        width={'100%'}
        maxWidth={'90%'}
        marginRight={'auto'}
        marginLeft={'auto'}
      >
        <Grid
          templateColumns={'1fr'}
          gridGap={'20px'}
          alignItems={'center'}
          pt={'2rem'}
        >
          {recipeData?.hints?.map((item: any, index: number) => (
            <MobileRecipeItem
              key={index}
              image={item?.food?.image}
              foodId={item?.food?.foodId}
              name={item?.food?.label}
              category={item?.food?.knownAs}
              price={currencySeparator(generatePrice('6'))}
              uri={item?.food?.uri}
              nutrients={item?.food?.nutrients}
              measures={item?.measures}
            />
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default MobileHomePage;
