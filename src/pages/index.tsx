import Image from 'next/image';
import { Inter } from 'next/font/google';
import Activities from '@/components/Activities/Activities';
import Weather from '@/components/Weather/Weather';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen justify-center p-24 ${inter.className} `}
    >
      <div>
        <Weather />
        <Activities />
      </div>
    </main>
  );
}
