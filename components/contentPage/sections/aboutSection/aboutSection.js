import styles from './aboutSection.module.scss';
import Image from 'next/image';

export default function aboutSection() {
  return (
    <div className="section">
      <div className="sectionTitle">
        <h2 className="sectionTitle_content">About me</h2>
      </div>
      <div className={styles.contentContainer}>
        <p className={styles.text}>
          I started programming more than two years ago when I was studying IT at university.
          <br/>
          <br/>
          I was so excited about the software development that I quit my studies and decided to devote myself fully to coding. And I never regretted this decision.
          <br/>
          <br/>
          What I enjoy most about my job is solving coding problems and possibility to learn every day something new.
        </p>
        <div className={styles.description}>
          <div className={styles.description_photo}>
            <Image
              src="/../public/Benedikt_Hofirek.jpg"
              alt="Benedikt Hofirek"
              width={114}
              height={150}
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
      </div>
    </div>
  )
}