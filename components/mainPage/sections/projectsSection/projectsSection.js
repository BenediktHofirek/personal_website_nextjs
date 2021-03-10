import ProjectCard from './components/projectCard/projectCard';
import styles from './projectsSection.module.scss';
import { cc } from '../../../../utils/utils';

export default function projectsSection({containerClass}) {
  const projectCardList = [
    {
      name: 'Caterpillar',
      toolList: ['react'],
      description: 'Snake typing game with artificial counterplayer.',
      githubLink: "https://github.com/utility4u/caterpillar",
      demoLink: "https://utility4u.github.io/caterpillar/",
    },
    {
      name: 'BlogY',
      isWip: true,
      toolList: ['angular', 'node', 'postgresql'],
      description: 'Blogging platform to demonstrate my Angular skills. Auth made with PassportJS.',
      githubLink: "https://github.com/utility4u/blogY",
    },
    {
      name: 'Personal website',
      toolList: ['react', 'node'],
      description: 'Website you are currently visiting. Powered with NextJS on server side.',
      githubLink: "https://github.com/utility4u/personal_website_nextjs",
    },
    {
      name: 'Ai4bd test task',
      toolList: ['angular', 'node', 'mongo'],
      description: 'Test task from one german company. And also my first star on github!',
      githubLink: "https://github.com/utility4u/ai4bd-test-task",
    },
    {
      name: 'Reas test task',
      toolList: ['node'],
      description: 'Script for downloading and parsing data. Feedback from company was very positive.',
      githubLink: "https://github.com/utility4u/reas-test-task",
    },
    {
      name: 'Text formatter',
      toolList: ['node'],
      description: 'Script for removing short words from the end of line.',
      githubLink: "https://github.com/utility4u/text-formatter",
    },
  ];

  return (
    <div className={"section " + containerClass}>
      <div className={cc('sectionTitle', styles.title)}>
        <h2 className="sectionTitle_content">Projects</h2>
      </div>

      <div className={styles.contentContainer}>
        {projectCardList.map((project) => (
          <ProjectCard
            {...project}
            key={project.name}
          />
        ))}
      </div>
    </div>
  )
}