import styles from './toolsSection.module.scss';
import { cc } from '../../../../utils/utils';

export default function toolsSection({
  containerClass
}) {
  const iconList = [
    {
      name: 'React',
      source: 'reactText',
      level: 0,
    },
    {
      name: 'Angular',
      source: 'angularText',
      level: 0,
    },
    {
      name: 'NodeJS',
      source: 'nodejs',
      level: 1,
    },
    {
      name: 'MongoDB',
      source: 'mongodb',
      level: 2,
    },
    {
      name: 'PostgreSQL',
      source: 'postgresqlText',
      level: 2,
    },
    {
      name: 'MySQL',
      source: 'mysql',
      level: 2,
    },
    {
      name: 'GraphQL',
      source: 'graphql',
      level: 2,
    },
    {
      name: 'Sass',
      source: 'sass',
      level: 3,
    },
    {
      name: 'Typescript',
      source: 'typescript',
      level: 3,
    },
    {
      name: 'NextJS',
      source: 'nextjs',
      level: 3,
    },
    {
      name: 'Bootstrap',
      source: 'bootstrap',
      level: 3,
    },
    {
      name: 'Webassembly',
      source: 'webassembly',
      level: 3,
    },
    {
      name: 'Npm',
      source: 'npm',
      level: 4,
    },
    {
      name: 'Webpack',
      source: 'webpack',
      level: 4,
    },
    {
      name: 'Babel',
      source: 'babel',
      level: 4,
    },
    {
      name: 'Git',
      source: 'git',
      level: 4,
    },
    {
      name: 'Jest',
      source: 'jest',
      level: 4,
    },
    {
      name: 'Yarn',
      source: 'yarn',
      level: 4,
    },
    {
      name: 'Protractor',
      source: 'protractor',
      level: 4,
    },
    {
      name: 'ReactiveX',
      source: 'reactivex',
      level: 4,
    },
    {
      name: 'PassportJS',
      source: 'passportjs',
      level: 4,
    },
    {
      name: 'Redux',
      source: 'redux',
      level: 4,
    },
    {
      name: 'Apollo GraphQL',
      source: 'apollographql',
      level: 4,
    },
    {
      name: 'Ant Design',
      source: 'antdesign',
      level: 4,
    },
  ];
  return (
    <div className={"section " + containerClass}>
      <div className="sectionTitle">
        <h2 className="sectionTitle_content">Dev tools</h2>
      </div>
      <div className={styles.contentContainer}>
        {
          iconList.map(({name, source, level}) => (
            <img
              src={`/${source}.svg`}
              key={source}
              alt={name}
              title={name}
              className={cc(styles.icon,styles[`icon_${level}`])}
            />
          ))
        }
      </div>
    </div>
  )
}