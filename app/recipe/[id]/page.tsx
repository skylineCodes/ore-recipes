'use client'

import React, { useEffect, useState } from 'react';
import DesktopSinglePage from '@/components/DesktopSinglePage';
import MobileSinglePage from '@/components/MobileSinglePage';
import { useMediaQuery } from '@chakra-ui/react';

const SingleRecipe = () => {
  const [isMobile] = useMediaQuery('(max-width: 768px)');

  return <main>{isMobile ? <MobileSinglePage /> : <DesktopSinglePage />}</main>;
};

export default SingleRecipe