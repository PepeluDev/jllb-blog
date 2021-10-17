import  { useState } from "react";
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from '../components/MyNavbar';

import {languajes} from '../texts/texts';

function MyApp({ Component, pageProps }) {

  const [languaje, setLanguaje] = useState(languajes[0]);

  const changeLanguaje = (theLanguaje) => {
    if (languajes.includes(theLanguaje)){
      setLanguaje(theLanguaje);
    } else {
      alert("The selected languaje is currently not available")
    }
  }
  return (
    <>
      <MyNavbar languajes={languajes} changeLanguaje={changeLanguaje}/>
      <Component {...pageProps} languaje={languaje} />
  </>
  )
}

export default MyApp
