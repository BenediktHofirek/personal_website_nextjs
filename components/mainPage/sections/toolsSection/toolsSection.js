import styles from './toolsSection.module.scss';

export default function toolsSection({
  containerClass
}) {
  return (
    <div className={"section " + containerClass}>
      <div className="sectionTitle">
        <h2 className="sectionTitle_content">My main tools</h2>
      </div>
      <div className={styles.contentContainer}>
        {
          ['react', 'angular', 'nodejs', 'mongodb', 'postgresql'].map((iconName) => (
            <img
              src={`/${iconName}.svg`}
              key={iconName}
              alt={iconName}
              className={styles.icon}
            />
          ))
        }
      </div>
    </div>
  )
}