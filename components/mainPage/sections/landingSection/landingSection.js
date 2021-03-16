import { useEffect, useState } from 'react';
import styles from './landingSection.module.scss';
import { write, pause, cc } from '../../../../utils/utils';
import { photo } from '../../photo';

export default function LandingSection({
  activateScroll,
  handleScroll,
  containerClass
}) {
  const imageAnimationTime = 1000 * 0.75;
  const arrowAnimationTime = 750;
  const writeSpeed = 50;

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
      activateScroll();

      // title
      setIsTitleDisplayed(true);
      await write(setTitleText, titleTextSource, writeSpeed);
      
      //image
      await pause(500);
      setIsImageDisplayed(true);
      await pause(500);
      await pause(imageAnimationTime);

      //paragraph
      setIsParagraphDisplayed(true);
      await write(setParagraphText, paragraphTextSource, writeSpeed);
      await pause(500);
      setIsArrowDisplayed(true);
      // activateScroll();
    })()
  }, []);

  const imageAnimationStyle = {
    animationName: 'fadeIn',
    animationDuration: `${imageAnimationTime}ms`,
  };

  const arrowAnimationStyle = {
    animationName: `arrowFadeIn${window.innerHeight > window.innerWidth ? 'Portrait' : 'Landscape'}`,
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
      className={cc(styles.container, containerClass)}
    >
      <div
        className={styles.photoContainer}
        style={isImageDisplayed ? imageAnimationStyle : {}}
      >
        <div className={styles.photo}>
          <img
            src={photo}
            alt="Benedikt Hofirek"
          />
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.writtenTextContainer}>
          <h1 
            className={styles.title}
            style={{
              display: isTitleDisplayed ? 'block' : 'none',
            }}
          >
            {renderText(titleText)}
          </h1>
          <h1 
            className={styles.title}
            style={{
              display: 'block',
              visibility: 'hidden'
            }}
          >
            {titleTextSource}
          </h1>
        </div>
        <div className={styles.writtenTextContainer}>
          <p 
            className={styles.description}
            style={{
              display: isParagraphDisplayed ? 'block' : 'none',
            }}
          >
            {renderText(paragraphText)}
          </p>
          <p 
            className={styles.description}
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
        <img
          className={styles.arrowDown_icon}
          src="/arrow_down.svg"
          alt="Next page"
        />
      </div>
    </div>
  )
}