import  { useState } from "react";
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import { ChakraProvider } from '@chakra-ui/react';

import MyNavbar from '../components/navbar/MyNavbar';
import MyFooter from '../components/footer/MyFooter';

import { languajes, texts } from '../texts/texts';

function MyApp({ Component, pageProps }) {
  const [languaje, setLanguaje] = useState(languajes[0]);

  const changeLanguaje = (theLanguaje) => {
    if (languajes.includes(theLanguaje)) {
      setLanguaje(theLanguaje);
    } else {
      alert('The selected languaje is currently not available');
    }
  };
  return (
    <>
      <Head>
        <title>{texts.tittle}</title>
        <meta name='description' content={texts.description} />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <ChakraProvider>
        <MyNavbar languajes={languajes} changeLanguaje={changeLanguaje} />
        <Component {...pageProps} languaje={languaje} />
        <MyFooter languaje={languaje} />
      </ChakraProvider>
    </>
  );
}

export default MyApp
