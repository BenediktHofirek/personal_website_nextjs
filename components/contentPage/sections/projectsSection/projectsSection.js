import styles from './projectsSection.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faAngular, faNodeJs, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function projectsSection() {
  return (
    <div className={"section" + ' ' + styles.container}>
      <div className="sectionTitle">
        <h2 className="sectionTitle_content">Projects</h2>
      </div>

      <div className={styles.technology}>
        <div className={styles.subtitle}>
          <FontAwesomeIcon className={styles.subtitle_icon} icon={faReact} color="#61DBFB" />
          <h2 className={styles.subtitle_text}>React</h2>
        </div>
        <div className={styles.projectGroup}>
          <div className={styles.projectGroup_project}>
            <h3 className={styles.projectGroup_title}>Caterpillar</h3>
            <p className={styles.projectGroup_description}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            </p>
            <div className={styles.projectGroup_actions}>
              <a
                className={styles.projectGroup_repositoryLink}
                href="https://github.com/utility4u/caterpillar"
                target="_blank"
              >
                <FontAwesomeIcon className={styles.projectGroup_githubIcon} icon={faGithub}/>
              </a>
              <div className={styles.projectGroup_divider}>|</div>
              <a
                className={styles.projectGroup_demoLink}
                href="https://utility4u.github.io/caterpillar/"
                target="_blank"
              >
                Live demo
              </a>
            </div>
          </div>
          <div className={styles.projectGroup_project}>
            <h3 className={styles.projectGroup_title}>Personal website</h3>
            <p className={styles.projectGroup_description}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            </p>
            <div className={styles.projectGroup_actions}>
              <a
                className={styles.projectGroup_repositoryLink}
                href="https://github.com/utility4u/personal_website_nextjs"
                target="_blank"
              >
                <FontAwesomeIcon className={styles.projectGroup_githubIcon} icon={faGithub}/>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className={styles.technology}>
        <div className={styles.subtitle}>
          <FontAwesomeIcon className={styles.subtitle_icon} icon={faAngular} color="#a6120d" />
          <h2 className={styles.subtitle_text}>Angular</h2>
        </div>
        <div className={styles.projectGroup}>
          <div className={styles.projectGroup_project}>
            <h3 className={styles.projectGroup_title}>BlogY</h3>
            <div className={styles.projectGroup_wip}>
              WIP
            </div>
            <p className={styles.projectGroup_description}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            </p>
            <div className={styles.projectGroup_actions}>
              <a
                className={styles.projectGroup_repositoryLink}
                href="https://github.com/utility4u/blogY"
                target="_blank"
              >
                <FontAwesomeIcon className={styles.projectGroup_githubIcon} icon={faGithub}/>
              </a>
            </div>
          </div>
          <div className={styles.projectGroup_project}>
            <h3 className={styles.projectGroup_title}>
              Ai4bd text task
            </h3>
            <p className={styles.projectGroup_description}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            </p>
            <div className={styles.projectGroup_actions}>
              <a
                className={styles.projectGroup_repositoryLink}
                href="https://github.com/utility4u/ai4bd-test-task"
                target="_blank"
              >
                <FontAwesomeIcon className={styles.projectGroup_githubIcon} icon={faGithub}/>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* <div className={styles.technology}>
        <div className={styles.subtitle}>
          <FontAwesomeIcon className={styles.subtitle_icon} icon={faNodeJs} color="#68A063" />
          <h2 className={styles.subtitle_text}>NodeJS</h2>
        </div>
        <div className={styles.projectGroup}>
          <div className={styles.projectGroup_project}>
            <h3 className={styles.projectGroup_title}>Reas test task</h3>
            <p className={styles.projectGroup_description}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            </p>
            <div className={styles.projectGroup_actions}>
              <a
                className={styles.projectGroup_repositoryLink}
                href="https://github.com/utility4u/reas-test-task"
                target="_blank"
              >
                <FontAwesomeIcon className={styles.projectGroup_githubIcon} icon={faGithub}/>
              </a>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  )
}