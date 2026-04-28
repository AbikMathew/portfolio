import type { Metadata } from 'next';
import { Inter, Playfair_Display, JetBrains_Mono } from 'next/font/google';
import LenisProvider from '@/components/chrome/LenisProvider';
import AmbientLayers from '@/components/chrome/AmbientLayers';
import CursorLens from '@/components/chrome/CursorLens';
import TopNav from '@/components/chrome/TopNav';
import RouteCrossfade from '@/components/chrome/RouteCrossfade';
import { copy } from '@/data';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});
const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  title: copy.meta.home.title,
  description: copy.meta.home.description,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} ${jetbrains.variable}`}>
        <AmbientLayers />
        <CursorLens />
        <LenisProvider>
          <TopNav />
          <RouteCrossfade>{children}</RouteCrossfade>
        </LenisProvider>
      </body>
    </html>
  );
}
