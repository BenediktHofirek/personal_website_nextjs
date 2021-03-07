import styles from './projectCard.module.scss';

export default function projectCard({
  name,
  toolList,
  description,
  githubLink,
  demoLink,
  isWip,
}) {

  return (
    <div className={styles.project}>
      {(isWip || null) && (
        <div className={styles.project_wip}>
          WIP
        </div>
      )}
      <h3 className={styles.project_title}>{name}</h3>
      <div className={styles.project_toolContainer}>
        <div className={styles.project_toolTitle}>
          Tools:
        </div>
        <div className={styles.project_toolList}>
          {
            toolList.map((iconName) => (
              <img
                src={`/${iconName}.svg`}
                key={iconName}
                alt={iconName}
                className={styles.project_toolIcon}
              />
            ))
          }
        </div>
      </div>
      <p className={styles.project_description}>
        {description}
      </p>
      <div className={styles.project_links}>
        <a
          className={styles.project_repositoryLink}
          href={githubLink}
          target="_blank"
        >
          <img
            src={`/${"github"}.svg`}
            key={"github"}
            alt={"github"}
            className={styles.project_githubIcon}
          />
        </a>
        {(demoLink || null) && (
          <a
            className={styles.project_demoLink}
            href={demoLink}
            target="_blank"
          >
            Live demo
          </a>
        )}
      </div>
    </div>
  );
}