'use client';

import axios from 'axios';
import React, { useRef, useState, useEffect } from 'react';
import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Image,
  ListItem,
  OrderedList,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { useParams } from 'next/navigation';
import { currencySeparator, generatePrice } from '@/util/commonUtil';
import MobileNavbar from '../MobileNavbar';
import MobileCurrencyConvert from '../MobileCurrencyConvert';

const DesktopSinglePage = () => {
  const params = useParams();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = useRef(null);
  const [recipeData, setRecipeData] = useState<any>([]);
  const [nutrientData, setNutrientData] = useState<any>([]);
  const [price, setPrice] = useState<any>(generatePrice('6'));

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

      const filterData = res.data?.hints?.filter((item: any, index: number) => {
        if (item?.food?.foodId === params?.id) {
          return item;
        }
      });

      setRecipeData(filterData);
    };

    fetchData();
  }, []);

  return (
    <>
      <MobileCurrencyConvert
        isOpen={isOpen}
        finalRef={finalRef}
        onClose={onClose}
        price={String(price)}
      />
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
        <Box position={'relative'} minHeight={'100vh'} pt={'7rem'} mb={'10rem'}>
          <Flex
            direction={'column'}
            gap={'20px'}
            maxWidth={'95%'}
            marginRight={'auto'}
            marginLeft={'auto'}
            width={'100%'}
          >
            <Grid
              templateColumns={'1fr'}
              gridGap={'40px'}
              width={'100%'}
              height={'70vh'}
              position={'relative'}
              zIndex={'20'}
            >
              <Image
                src={recipeData[0]?.food?.image}
                style={{
                  height: '90%',
                  width: '100%',
                  objectFit: 'cover',
                }}
                alt={'Recipe Image'}
                width={0}
                height={0}
              />
              <Flex direction={'column'} height={'inherit'} gap={'20px'}>
                <Box>
                  <Heading fontSize={'24px'} lineHeight={'30px'}>
                    {recipeData[0]?.food?.label}
                  </Heading>
                </Box>
                <Box>
                  <Heading fontSize={'24px'} lineHeight={'30px'}>
                    &#8358;{currencySeparator(price)}
                  </Heading>
                </Box>
                <Box mb={'20px'}>
                  <Text fontSize={'18px'} lineHeight={'24px'}>
                    <strong>Category: </strong>
                    {recipeData[0]?.food?.knownAs}
                  </Text>
                </Box>
                <Box mb={'20px'}>
                  <Text fontSize={'18px'} lineHeight={'24px'}>
                    {'40 calories'}
                  </Text>
                </Box>
                <Box mb={'30px'}>
                  <Text
                    fontSize={'20px'}
                    fontWeight={'700'}
                    lineHeight={'24px'}
                  >
                    Nutrients
                  </Text>
                  <Text fontSize={'18px'} lineHeight={'24px'} pt={'10px'}>
                    <OrderedList>
                      {recipeData[0]?.food?.nutrients !== undefined &&
                        Object?.keys(recipeData[0]?.food?.nutrients)?.map(
                          (item: any, index: number) => (
                            <>
                              <ListItem>{item}</ListItem>
                            </>
                          )
                        )}
                    </OrderedList>
                  </Text>
                </Box>
                <Grid templateColumns={'1fr'} gridGap={'15px'} mt={'2rem'}>
                  <Button
                    backgroundColor={'primary.300'}
                    borderRadius={'0px'}
                    width={'100%'}
                    height={'46px'}
                    _hover={{ opacity: 1 }}
                    display={'flex'}
                    flexDirection={'row'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    gap={'20px'}
                    // onClick={() => }
                  >
                    <Text
                      color={'grey.0'}
                      fontSize={'12px'}
                      fontWeight={'normal'}
                      textTransform={'uppercase'}
                      textAlign={'center'}
                    >
                      Buy Now
                    </Text>
                  </Button>
                  <Button
                    backgroundColor={'secondary.10'}
                    borderRadius={'0px'}
                    width={'100%'}
                    height={'46px'}
                    _hover={{ opacity: 1 }}
                    display={'flex'}
                    flexDirection={'row'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    gap={'20px'}
                    onClick={onOpen}
                  >
                    <Text
                      color={'grey.0'}
                      fontSize={'12px'}
                      fontWeight={'normal'}
                      textAlign={'center'}
                    >
                      Click to see USD price
                    </Text>
                  </Button>
                </Grid>
                <Flex
                  alignItems={'center'}
                  direction={'column'}
                  justifyContent={'center'}
                >
                  <Text
                    userSelect={'none'}
                    fontSize={'15px'}
                    lineHeight={'24px'}
                  >
                    FREE standard shipping & returns on all Lagos orders
                  </Text>
                </Flex>
              </Flex>
            </Grid>
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default DesktopSinglePage;
