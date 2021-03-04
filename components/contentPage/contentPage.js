import styles from './contentPage.module.scss';
import ToolsSection from './sections/toolsSection/toolsSection';
import AboutSection from './sections/aboutSection/aboutSection';
import ContactSection from './sections/contactSection/contactSection';
import ExperienceSection from './sections/experienceSection/experienceSection';
import ProjectsSection from './sections/projectsSection/projectsSection';
import StatisticSection from './sections/statisticSection/statisticSection';

export default function contentPage() {
  return (
    <div 
      className={styles.container}
      id="content"
    >
      <AboutSection />
      <ToolsSection />
      <ExperienceSection />
      <StatisticSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  )
}