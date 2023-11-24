import { cc } from '../../../../utils/utils';
import styles from './experienceSection.module.scss';

export default function experienceSection({containerClass}) {
  return (
    <div className={"section " + containerClass}>
      <div className="sectionTitle">
        <h2 className="sectionTitle_content">Experience</h2>
      </div>

      <div className={styles.contentContainer}>
        <div className={styles.company}>
          <div className={styles.company_imageContainer}>
            <picture className={cc(styles.company_image, styles.company_image__flowmon)}>
              <source srcSet="/varistar.webp" type="image/webp"/>
              <source srcSet="/varistar.png" type="image/png"/>
              <img
                className={cc(styles.company_image, styles.company_image__varistar)}
                src="/varistar.png"
                alt="Varistar company logo"
              />
            </picture>
          </div>
          <div className={styles.company_content}>
            <div className={styles.company_line}>
              <h5 className={styles.company_title}>
                Position:
              </h5>
              <p className={styles.company_text}>
                Angular, NodeJS & Python developer
              </p>
            </div>
            <div className={styles.company_line}>
              <h5 className={styles.company_title}>
                Project:
              </h5>
              <p className={styles.company_text}>
                Varisar portal 
                <a 
                    href="https://varistar.cz/cs/co-je-varistar-2/portal-varistar"
                    target="_blank"
                    className={styles.projectLink}
                >
                    <i>Learn more </i>
                    &#x2197;
                </a>
              </p>
            </div>
            <div className={styles.company_line}>
              <h5 className={styles.company_title}>
                Feedback:
              </h5>
              <p className={styles.company_text}>
                "I appreciate what you have done for Varistar."
              </p>
            </div>
          </div>
        </div>
        <div className={styles.company}>
          <div className={styles.company_imageContainer}>
            <picture className={cc(styles.company_image, styles.company_image__idsa)}>
              <source srcSet="/IDS_Advisory.webp" type="image/webp"/>
              <source srcSet="/IDS_Advisory.jpg" type="image/jpeg"/>
              <img
                className={cc(styles.company_image, styles.company_image__idsa)}
                src="/IDS_Advisory.jpg"
                alt="IDS Advisory company logo"
              />
            </picture>
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
                Project:
              </h5>
              <p className={styles.company_text}>
                Zoty
                <a 
                    href="https://zoty.cz"
                    target="_blank"
                    class={styles.projectLink}
                >
                    <i>Learn more </i>
                    &#x2197;
                </a>
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
