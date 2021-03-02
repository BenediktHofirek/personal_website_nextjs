import Image from 'next/image';
import styles from './landingPage.module.scss';

export default function LandingPage({
  handleScroll
}) {
  return (
    <div 
      className={styles.container}
    >
      <div className={'image ' + styles.photoContainer}>
        <Image
          src="/../public/face_placeholder.jpg"
          alt="Benedikt Hofirek"
          layout="fill"
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={'sectionTitle ' + styles.title}>Hello, I'm Benedikt</h1>
        <p className={'paragraph ' + styles.description}>I'm a software developer</p>
      </div>
      <div
        className={styles.arrowDown}
        onClick={() => handleScroll({keyCode: 40})} //scroll down  
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