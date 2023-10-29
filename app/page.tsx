'use client';

import Image from 'next/image';
import { useMediaQuery } from '@chakra-ui/react';
import MobileHomePage from '@/components/MobileHomePage';
import DesktopHomePage from '@/components/DesktopHomePage';

export default function Home() {
  const [isMobile] = useMediaQuery('(max-width: 768px)');

  return (
    <main>{isMobile ? <MobileHomePage /> : <DesktopHomePage />}</main>
  );
}
