import styles from './aboutSection.module.scss';
import Image from 'next/image';
import { photo } from '../../photo';

export default function aboutSection({containerClass}) {
  return (
    <div className={"section " + containerClass}>
      <div className="sectionTitle">
        <h2 className="sectionTitle_content">About</h2>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.description}>
          <div className={styles.description_photo}>
            <img
              src={photo}
              alt="Benedikt Hofirek"
            />
          </div>
          <div className={styles.description_infoContainer}>
            <div className={styles.description_name}>
              Benedikt Hofirek
            </div>
            <div className={styles.description_birthday}>
              *1999
            </div>
          </div>
        </div>
        <p className={styles.text}>
            I started programming more than five years ago when I was studying computer science at university.
          <br/>
          <br/>
            My passion for software development was so great that I decided to quit my studies and devote myself entirely to programming. And I have never regretted this decision.
          <br/>
          <br/>
            What I enjoy most about my work is solving complex problems and the opportunity to learn something new every day.
        </p>
      </div>
    </div>
  )
}
