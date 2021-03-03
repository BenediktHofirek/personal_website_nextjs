import styles from './contentPage.module.scss';
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
      <TechnologiesSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  )
}