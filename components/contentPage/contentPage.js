import styles from './contentPage.module.scss';
import ToolsSection from './sections/toolsSection/toolsSection';
import AboutSection from './sections/aboutSection/aboutSection';
import ContactSection from './sections/contactSection/contactSection';
import ExperienceSection from './sections/experienceSection/experienceSection';
import ProjectsSection from './sections/projectsSection/projectsSection';
import TechnologiesSection from './sections/technologiesSection/technologiesSection';

export default function contentPage() {
  return (
    <div 
      className={styles.container}
      id="content"
    >
      <AboutSection />
      <ToolsSection />
      <ExperienceSection />
      {/* <TechnologiesSection />
      <ProjectsSection />
      <ContactSection /> */}
    </div>
  )
}