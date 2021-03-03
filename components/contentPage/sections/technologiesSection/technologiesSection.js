import styles from './technologiesSection.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faAngular, faNodeJs } from '@fortawesome/free-brands-svg-icons';

export default function technologiesSection() {
  return (
    <div className={"section" + ' ' + styles.container}>
      <div className="sectionTitle">
        <h2 className="sectionTitle_content">Technologies</h2>
      </div>

      <div className={styles.technology}>
        <div className={styles.subtitle}>
          <FontAwesomeIcon className={styles.subtitle_icon} icon={faReact} color="#61DBFB" />
          <h2 className={styles.subtitle_text}>React</h2>
        </div>
        <p className={'paragraph ' + styles.content}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin pede metus, vulputate nec, fermentum fringilla, vehicula vitae, justo. Morbi leo mi, nonummy eget tristique non, rhoncus non leo. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Phasellus faucibus molestie nisl. Etiam dui sem, fermentum vitae, sagittis id, malesuada in, quam. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Vivamus luctus egestas leo.
        </p>
      </div>
      
      <div className={styles.technology}>
        <div className={styles.subtitle}>
          <FontAwesomeIcon className={styles.subtitle_icon} icon={faAngular} color="#a6120d" />
          <h2 className={styles.subtitle_text}>Angular</h2>
        </div>
        <p className={'paragraph ' + styles.content}>
          Proin pede metus, vulputate nec, fermentum fringilla, vehicula vitae, justo. Morbi leo mi, nonummy eget tristique non, rhoncus non leo. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Phasellus faucibus molestie nisl. Etiam dui sem, fermentum vitae, sagittis id, malesuada in, quam. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Vivamus luctus egestas leo.
        </p>
      </div>

      <div className={styles.technology}>
        <div className={styles.subtitle}>
          <FontAwesomeIcon className={styles.subtitle_icon} icon={faNodeJs} color="#68A063" />
          <h2 className={styles.subtitle_text}>NodeJS</h2>
        </div>
        <p className={'paragraph ' + styles.content}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Phasellus faucibus molestie nisl. Etiam dui sem, fermentum vitae, sagittis id, malesuada in, quam. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Vivamus luctus egestas leo.
        </p>
      </div>

    </div>
  )
}