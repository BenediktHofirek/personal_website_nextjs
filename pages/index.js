import Head from 'next/head';
import { useEffect, useState } from 'react';
import styles from '../styles/index.module.scss';

import LandingPage from '../components/landingPage/landingPage';
import ContentPage from '../components/contentPage/contentPage';
import { addListeners, removeListeners, scrollBottom, scrollTop } from '../utils/utils';

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0);
  const sectionCount = 5;

  function handleScroll(event) {
    if (event?.keyCode !== 38 && event.keyCode !== 40 && !event?.deltaY) {
      return;
    }
    
    removeListeners(handleScroll, handleTouch);
    setTimeout(() => addListeners(handleScroll, handleTouch), 100);
    
    setCurrentSection((currentSection) => {
      if (event.deltaY > 0 || event.keyCode == 40) {
        if (currentSection === 0) {
          scrollBottom();
        } else {
          console.log('handleSectionDown');
        }
        return Math.min(currentSection + 1, sectionCount);
      } else if (event.deltaY < 0 || event.keyCode == 38) {
        console.log('ccc', currentSection);
        if (currentSection === 1) {
          scrollTop();
        } else {
          console.log('handleSectionUp');
        }
        return Math.max(currentSection - 1, 0);
      }

      return currentSection;
    });
  }
  
  function handleTouch() {
    console.log('touch');
  }

  function handleChangeSection(newSection) {
    setCurrentSection(newSection);

    if (newSection === 0) {
      scrollTop();
    }
  }

  useEffect(()=> {
    addListeners(handleScroll, handleTouch);

    return () => removeListeners(handleScroll, handleTouch);
  },[]);
  
  return (
    <div id="container" className={styles.container}>
      <Head>
        <title>Benedikt Hofirek</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Caveat&family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet"/>
      </Head>

      <main>
        <LandingPage handleScroll={handleScroll} />
        <ContentPage
          currentSection={currentSection}
          changeSection={handleChangeSection}  
        />
      </main>
    </div>
  )
}
