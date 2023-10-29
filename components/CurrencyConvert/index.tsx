import { currencyRemoveSeparator, currencySeparator } from '@/util/commonUtil';
import { Box, Flex, Heading, Modal, ModalBody, ModalContent, ModalOverlay, Text } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const CurrencyConvert = ({ isOpen, finalRef, onClose, price }: any) => {
  const [currencyConverter, setCurrencyConverter] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `https://currency-converter5.p.rapidapi.com/currency/convert?format=json&from=NGN&to=USD&amount=${currencyRemoveSeparator(
          price
        )}`,
        {
          headers: {
            'X-RapidAPI-Key':
              'c656fa016emsh4953ffed6b60afbp16bd97jsn1fca652b1f2c',
            'X-RapidAPI-Host': 'currency-converter5.p.rapidapi.com',
          },
        }
      );

      setCurrencyConverter(res.data);
    };

    fetchData();
  }, [price]);

  return (
    <Modal
      finalFocusRef={finalRef}
      isOpen={isOpen}
      onClose={onClose}
      isCentered
      motionPreset='slideInBottom'
      size={'lg'}
    >
      <ModalOverlay />
      <ModalContent width={'30vw'} height={'auto'} maxWidth={'100%'}>
        <ModalBody>
          <Flex direction={'column'} alignItems={'center'} height={'inherit'}>
            <Text fontSize={'25px'} lineHeight={'24px'}>
              Amount in USD
            </Text>
          </Flex>
          <Flex
            direction={'column'}
            justifyContent={'center'}
            alignItems={'center'}
            height={'inherit'}
            mt={'2rem'}
          >
            <Text fontSize={'23px'} lineHeight={'24px'}>
              <strong>
                &#36;
                {currencySeparator(
                  parseFloat(
                    currencyConverter?.rates?.USD?.rate_for_amount
                  ).toFixed(2)
                )}
              </strong>
            </Text>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default CurrencyConvert;