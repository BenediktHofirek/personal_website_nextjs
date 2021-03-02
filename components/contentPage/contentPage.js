import styles from './contentPage.module.scss';
import AboutSection from './sections/aboutSection/aboutSection';
import ContactSection from './sections/contactSection/contactSection';
import ExperienceSection from './sections/experienceSection/experienceSection';
import ProjectsSection from './sections/projectsSection/projectsSection';
import TechnologiesSection from './sections/technologiesSection/technologiesSection';

export default function contentPage({
  currentSection,
  changeSection,
}) {
  const sectionNameList = [
    'Home',
    'About me',
    'Technologies',
    'Experience',
    'Projects',
    'Contact',
  ];

  return (
    <div 
      className={styles.container}
    >
      <div className={styles.navigationContainer}>
        <nav className={styles.navigation}>
          <div className={"tag" + ' ' + styles.navUlTag}>
            &lt;ul&gt;
          </div>
          <div className={styles.navRowContainer}>
            {
              sectionNameList.map((sectionName, index) => (
                <div 
                  className={'tagRow' + ' ' + styles.navRow + 
                  `${currentSection === index ? ' activeNav' : ''}`}
                  key={index}
                  onClick={() => changeSection(index)}
                >
                  <div className="tag">
                    &lt;li&gt;
                  </div>
                  <div className={styles.navText}>
                    {sectionName}
                  </div>
                  <div className="tag">
                    &lt;/li&gt;
                  </div>
                </div>
              ))
            }
          </div>
          <div className={"tag" + ' ' + styles.navUlTag}>
            &lt;/ul&gt;
          </div>
        </nav>
      </div>
      <div className={styles.sectionContainer} style={{transform: `translateY(${(Math.max(currentSection - 1, 0) * -100)}%)`}}>
          <AboutSection />
          <TechnologiesSection />
          <ExperienceSection />
          <ProjectsSection />
          <ContactSection />
      </div>
    </div>
  )
}