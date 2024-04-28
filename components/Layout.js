// components/Layout.js
import Head from 'next/head';
import Nav from './Nav';
import Header from './Header';
import TopLeftImg from './TopLeftImg';
import { Sora } from '@next/font/google';

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weights: ['100', '200', '300', '400', '500', '600', '700', '800']
});

const Layout = ({ children, pageTitle, pageDescription, imageUrl, pageUrl }) => {
  return (
   
    <div className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />
        <meta name="google-site-verification" content="vW2uqRP0SI2mzRBW4TWIt9et5K4b81k-zzFJyANVKGw" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={pageUrl} />
        {/* Ajouter d'autres métadonnées si nécessaire */}
      </Head>
      <TopLeftImg />
      <Nav />
      <Header />
      {children}
    </div>
  );
};

export default Layout;