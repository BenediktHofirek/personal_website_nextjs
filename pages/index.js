import Head from 'next/head';
import { useEffect, useState } from 'react';
import styles from '../styles/index.module.scss';

import LandingPage from '../components/landingPage/landingPage';
import ContentPage from '../components/contentPage/contentPage';
import { addListeners, removeListeners, scroll } from '../utils/utils';

export default function Home() {
  function handleScroll(event) {
    const html = document.querySelector('html');

    if (event.deltaY < 0 || event.keyCode == 38) {
      // if (html.scrollTop < window.innerHeight) {
      //   html.style.overflowY = 'hidden';
      // }
    }

    if (event.deltaY > 0 || event.keyCode == 40) {
      const body = document.querySelector('body');
      setTimeout(() => html.style.overflowY = 'scroll', 500);
      
      html.style.height = 'max-content';
      body.style.height = 'max-content';
      
      scroll();
    }
  }

  useEffect(()=> {
    addListeners(handleScroll);

    return () => removeListeners(handleScroll);
  },[]);
  
  return (
    <div id="container" className={styles.container}>
      <Head>
        <title>Benedikt Hofirek</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Caveat&family=Roboto&family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet"/>
      </Head>

      <main>
        <LandingPage handleScroll={() => handleScroll({ keyCode: 40})} />
        <ContentPage />
      </main>
    </div>
  )
}
