import styles from './toolsSection.module.scss';

export default function toolsSection() {
  return (
    <div className="section">
      <div className="sectionTitle">
        <h2 className="sectionTitle_content">My main tools</h2>
      </div>
      <div className={styles.contentContainer}>
        {
          ['react', 'angular', 'nodejs', 'mongodb', 'postgresql'].map((iconName) => (
            <img
              src={`/${iconName}.svg`}
              alt={iconName}
              className={styles.icon}
            />
          ))
        }
      </div>
    </div>
  )
}