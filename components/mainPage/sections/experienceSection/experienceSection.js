import styles from './experienceSection.module.scss';

export default function experienceSection({containerClass}) {
  return (
    <div className={"section " + containerClass}>
      <div className="sectionTitle">
        <h2 className="sectionTitle_content">Job experience</h2>
      </div>

      <div className={styles.contentContainer}>
        <div className={styles.company}>
      <div className={styles.shadow}></div>
          <div className={styles.company_imageContainer}>
            <img
              className={styles.company_image  + ' ' + styles.company_image__flowmon}
              src="/flowmon_networks.png"
              alt="Flowmon Networks company logo"
            />
          </div>
          <div className={styles.company_content}>
            <div className={styles.company_line}>
              <h5 className={styles.company_title}>
                Position:
              </h5>
              <p className={styles.company_text}>
                React developer
              </p>
            </div>
            <div className={styles.company_line}>
              <h5 className={styles.company_title}>
                Feedback:
              </h5>
              <p className={styles.company_text}>
                “I'm sorry you're leaving. You were handy and you managed to solve every problem the way I wanted.”
              </p>
            </div>
          </div>
        </div>
        <div className={styles.company}>
          <div className={styles.company_imageContainer}>
            <img
              className={styles.company_image + ' ' + styles.company_image__idsa}
              src="/ids_advisory.png"
              alt="IDS Advisory company logo"
            />
          </div>
          <div className={styles.company_content}>
            <div className={styles.company_line}>
              <h5 className={styles.company_title}>
                Position:
              </h5>
              <p className={styles.company_text}>
                React & NodeJS developer
              </p>
            </div>
            <div className={styles.company_line}>
              <h5 className={styles.company_title}>
                Feedback:
              </h5>
              <p className={styles.company_text}>
                “I would like to thank you for everything you have done for us. I'm very satisfied with your work.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}