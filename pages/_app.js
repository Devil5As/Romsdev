import '../styles/globals.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState, useEffect } from "react";
import Head from 'next/head';
import Layout from '../components/Layout';
import Transition from '../components/Transition';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const defaultSeo = {
    pageTitle: "Développement Web | RomsDev' Portfolio",
    pageDescription: "Développeur indépendant créant des sites web et applications sur mesure.",
    imageUrl: "/Romsdev.png",
    pageUrl: 'https://romsdev.fr',
    keywords: [
      "création de sites sur mesure",
      "création de boutiques en ligne",
      "maintenance de sites web",
      "agence web",
      "développement backend",
      "conception ux/ui",
      "développement e-commerce",
      "refonte de site internet",
      "freelance développeur web",
      "La Ciotat",
      "Marseille",
      "Bouches-du-Rhône",
      "Provence-Alpes-Côte d'Azur"
    ]
  };

  const [seo, setSeo] = useState(defaultSeo);

  useEffect(() => {
    if (pageProps.seo) {
      setSeo({...defaultSeo, ...pageProps.seo});
    } else {
      setSeo(defaultSeo);
    }
  }, [pageProps.seo]);

  return (
    <Layout seo={seo}>
      <AnimatePresence mode='wait'>
        <div key={router.route} className='h-full'>
          <Transition />
          <Component {...pageProps} />
        </div>
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;