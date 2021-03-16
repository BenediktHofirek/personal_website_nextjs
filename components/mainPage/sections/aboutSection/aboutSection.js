import styles from './aboutSection.module.scss';

export default function aboutSection({containerClass}) {
  return (
    <div className={"section " + containerClass}>
      <div className="sectionTitle">
        <h2 className="sectionTitle_content">About</h2>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.description}>
          <img
            src="/Benedikt_Hofirek.jpg"
            alt="Benedikt Hofirek"
            className={styles.description_photo}
          />
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
          I started programming more than two years ago when I was studying IT at university.
          <br/>
          <br/>
          I was so excited about the software development that I quit my studies and decided to devote myself fully to coding. And I never regretted this decision.
          <br/>
          <br/>
          What I enjoy most about my job is solving coding problems and possibility to learn every day something new.
        </p>
      </div>
    </div>
  )
}