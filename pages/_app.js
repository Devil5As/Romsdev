// pages/_app.js
import '../styles/globals.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState, useEffect } from "react";
import Layout from '../components/Layout';
import Transition from '../components/Transition';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  // État pour gérer le SEO dynamique
  const [seo, setSeo] = useState({
    pageTitle: "Développement Web | Création de site internet | RomsDev' Portfolio",
    pageDescription: "Je transforme vos idées en solutions digitales. En tant que développeur indépendant, je crée des sites web et applications sur mesure qui répondent précisément à vos besoins.",
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
      "création de sites sur mesure La Ciotat",
      "création de boutiques en ligne Marseille",
      "maintenance de sites web Bouches-du-Rhône",
      "agence web Provence-Alpes-Côte d'Azur"
    ]
  });

  // Mettre à jour le SEO si pageProps contient des informations spécifiques à la page
  useEffect(() => {
    if (pageProps.seo) {
      setSeo({...seo, ...pageProps.seo});
    }
  }, [pageProps.seo]);

  // Récupérer les mots-clés de la page actuelle à partir de la route
  const currentPageKeywords = seo.keywords || [];

  return (
    <Layout {...seo} keywords={currentPageKeywords}>
      <AnimatePresence mode='wait'>
        <div key={router.route} className='h-full'>
          <Transition />
          <Component {...pageProps} />
        </div>
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
