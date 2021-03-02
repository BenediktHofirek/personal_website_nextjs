import styles from './experienceSection.module.scss';

export default function experienceSection() {
  return (
    <div className={"section" + ' ' + styles.container}>
      <h1 className="sectionTitle">Experience</h1>

      <div className={styles.technology}>
        <h2 className="subtitle">Flowmon networks</h2>
        <p className={'paragraph ' + styles.content}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin pede metus, vulputate nec, fermentum fringilla, vehicula vitae, justo. Morbi leo mi, nonummy eget tristique non, rhoncus non leo. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Phasellus faucibus molestie nisl. Etiam dui sem, fermentum vitae, sagittis id, malesuada in, quam. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Vivamus luctus egestas leo.
        </p>
      </div>
      
      <div className={styles.technology}>
        <h2 className="subtitle">IDS Advisory</h2>
        <p className={'paragraph ' + styles.content}>
          Proin pede metus, vulputate nec, fermentum fringilla, vehicula vitae, justo. Morbi leo mi, nonummy eget tristique non, rhoncus non leo. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Phasellus faucibus molestie nisl. Etiam dui sem, fermentum vitae, sagittis id, malesuada in, quam. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Vivamus luctus egestas leo.
        </p>
      </div>
    </div>
  )
}