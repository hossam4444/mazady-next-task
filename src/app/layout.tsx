import type { Metadata } from 'next';
// import { Inter } from 'next/font/google';
import { robotoFont, tajawalFont } from '@/utils/fonts';
import './globals.css';

// const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Static Next App',
  description: 'Static Page By Hossam',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      className={`${tajawalFont.variable} ${robotoFont.variable}`}
    >
      <body className='font-primary'>{children}</body>
    </html>
  );
}
