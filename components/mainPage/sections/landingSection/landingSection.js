import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from './landingSection.module.scss';

export default function LandingSection({
  handleScroll,
  containerClass
}) {
  const imageAnimationTime = 1000;
  const arrowAnimationTime = 750;
  const writeSpeed = 80;

  const titleTextSource = "Hello, I'm Benedikt";
  const paragraphTextSource = "I'm a full-stack developer";

  const [isArrowDisplayed, setIsArrowDisplayed] = useState(false);
  const [isImageDisplayed, setIsImageDisplayed] = useState(false);
  const [isTitleDisplayed, setIsTitleDisplayed] = useState(false);
  const [isParagraphDisplayed, setIsParagraphDisplayed] = useState(false);
  const [titleText, setTitleText] = useState('|');
  const [paragraphText, setParagraphText] = useState('|');

  //loading animation
  useEffect(() => {
    (async() => {
      // title
      await pause(500);
      setIsTitleDisplayed(true);
      await write(setTitleText, titleTextSource);
      
      //image
      await pause(500);
      setIsImageDisplayed(true);
      await pause(500);
      await pause(imageAnimationTime);

      //paragraph
      setIsParagraphDisplayed(true);
      await write(setParagraphText, paragraphTextSource);
      await pause(500);
      setIsArrowDisplayed(true);
    })()
  }, []);

  function pause(timeout) {
    return new Promise((resolve) => {
      setTimeout(resolve, timeout);
    });
  }

  function write(func, text, time = writeSpeed) {
    const charList = text.split('');
    const charListLength = charList.length;

    function getTimeout() {
      return Math.round(time);
    }

    function addChar(char = '') {
      return new Promise((resolve) => {
        setTimeout(() => {
          func((value) => value.slice(0,-1) + char + '|');
          resolve();
        }, getTimeout());
      });
    }

    return new Promise(async(resolve) => {
      //add cursor
      // await addChar();

      for (let x = 0; x < charListLength; x++) {
        await addChar(charList[x]);
      }

      //removeCursor
      func((value) => value.slice(0, -1));
      resolve();
    });
  }

  const imageAnimationStyle = {
    animationName: 'fadeIn',
    animationDuration: `${imageAnimationTime}ms`,
  };

  const arrowAnimationStyle = {
    animationName: 'fadeInDown',
    animationDuration: `${arrowAnimationTime}ms`,
  };

  function renderText(text) {
    return text.split('').map((char, index) => (
      <span
        className="fadeIn"
        style={{
          display: 'inline',
          animationTimingFunction: 'ease',
          animationDuration: char === '|' ? '0s' : '50ms',
        }}
        key={`${char}_${index}`}
      >{char}</span>
    ))
  }

  return (
    <div 
      className={"section " + containerClass + ' ' + styles.container}
    >
      <div
        className={'image ' + styles.photoContainer}
        style={isImageDisplayed ? imageAnimationStyle : {}}
      >
        <div className={styles.photo}>
          <Image
            src="/../public/Benedikt_Hofirek.jpg"
            alt="Benedikt Hofirek"
            layout="fill"
          />
        </div>
      </div>
      <div className={styles.textContainer}>
        <h1 
          className={'title ' + styles.title}
          style={{
            display: isTitleDisplayed ? 'block' : 'none',
          }}
        >
          {renderText(titleText)}
        </h1>
        <div className={styles.descriptionContainer}>
          <p 
            className={'paragraph ' + styles.description}
            style={{
              display: isParagraphDisplayed ? 'block' : 'none',
            }}
          >
            {renderText(paragraphText)}
          </p>
          <p 
            className={'paragraph ' + styles.description}
            style={{
              display: 'block',
              visibility: 'hidden'
            }}
          >
            {paragraphTextSource}
          </p>
        </div>
      </div>
      <div
        className={styles.arrowDown}
        style={isArrowDisplayed ? arrowAnimationStyle : {}}
        onClick={handleScroll} //scroll down  
      >
        <Image
          src="/../public/arrow_down.svg"
          alt="Next page"
          width={75}
          height={75}
        />
      </div>
    </div>
  )
}