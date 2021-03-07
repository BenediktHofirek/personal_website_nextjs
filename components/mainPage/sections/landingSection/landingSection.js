import Image from 'next/image';
import { useRef, useEffect } from 'react';
import styles from './landingSection.module.scss';

export default function LandingSection({
  handleScroll,
  containerClass
}) {
  const primaryTitle = useRef(null);
  const secondaryTitle = useRef(null);

  useEffect(() => {
    console.log('pruchod', primaryTitle?.current, secondaryTitle?.current);
    if (primaryTitle?.current && secondaryTitle.current) {
        // "Hello, I'm Benedikt"

        // "I'm a full-stack developer"
    }
    
  }, [primaryTitle?.current, secondaryTitle?.current]);

  return (
    <div 
      className={"section " + containerClass}
    >
      <div className={'image ' + styles.photoContainer}>
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
          className={'sectionTitle_content sectionTitle_content__main ' + styles.title}
          ref={primaryTitle}
        ></h1>
        <p 
          className={'paragraph ' + styles.description}
          ref={secondaryTitle}  
        ></p>
      </div>
      <div
        className={styles.arrowDown}
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