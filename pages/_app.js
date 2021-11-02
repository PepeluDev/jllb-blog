import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import { ChakraProvider } from '@chakra-ui/react';

import MyNavbar from '../components/navbar/MyNavbar';
import MyFooter from '../components/footer/MyFooter';

import { languajes, texts } from '../texts/texts';

import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    body: 'Roboto',
    heading: 'Oswald',
  },
});

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
      <ChakraProvider theme={theme}>
        <Head>
          <title>{texts.tittle}</title>
          <meta name='description' content={texts.description} />
          <link rel='icon' href='/favicon.ico' />
          <link
            href='https://fonts.googleapis.com/css2?family=Oswald&family=Roboto&display=swap'
            rel='stylesheet'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Oswald&family=Roboto:wght@100;300&display=swap'
            rel='stylesheet'
          />
        </Head>
        <MyNavbar languajes={languajes} changeLanguaje={changeLanguaje} />
        <Component {...pageProps} languaje={languaje} />
        <MyFooter languaje={languaje} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
