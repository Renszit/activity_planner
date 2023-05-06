import Image from 'next/image';
import { Inter } from 'next/font/google';
import Activities from '@/components/Activities/Activities';
import Weather from '@/components/Weather/Weather';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main
      className={`flex min-w-[443px] flex-col min-h-screen p-8 bg-white ${inter.className} `}
    >
      <Weather />
      <Activities />
    </main>
  );
}
