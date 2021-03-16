import styles from './toolsSection.module.scss';

export default function toolsSection({
  containerClass
}) {
  const iconList = [
    {
      name: 'React',
      source: 'reactText',
    },
    {
      name: 'Angular',
      source: 'angularText',
    },
    {
      name: 'NodeJS',
      source: 'nodejs',
    },
    {
      name: 'MongoDB',
      source: 'mongodb',
    },
    {
      name: 'PostgresQL',
      source: 'postgresqlText',
    },
    {
      name: 'GraphQL',
      source: 'graphql',
    },
  ];
  return (
    <div className={"section " + containerClass}>
      <div className="sectionTitle">
        <h2 className="sectionTitle_content">Dev tools</h2>
      </div>
      <div className={styles.contentContainer}>
        {
          iconList.map(({name, source}) => (
            <img
              src={`/${source}.svg`}
              key={source}
              alt={name}
              title={name}
              className={styles.icon}
            />
          ))
        }
      </div>
    </div>
  )
}