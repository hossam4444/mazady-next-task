import { Metadata } from 'next';

import { DirectionProvider } from '@/providers/direction-provider';

import Header from './components/header';
import MainContent from './components/main-content';

export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.APP_URL}`),
  title: 'Mazady',
  description: '',
  other: {
    'msapplication-TileColor': '#da532c',
  },
  keywords: ['Maazady'],
};
const StaticDesignPage = () => {
  return (
    <DirectionProvider dir='rtl'>
      <main lang='ar' dir='rtl'>
        <Header />
        <MainContent />
      </main>
    </DirectionProvider>
  );
};

export default StaticDesignPage;
