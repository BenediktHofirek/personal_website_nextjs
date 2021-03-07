import styles from './mainPage.module.scss';
import ToolsSection from './sections/toolsSection/toolsSection';
import AboutSection from './sections/aboutSection/aboutSection';
import ContactSection from './sections/contactSection/contactSection';
import ExperienceSection from './sections/experienceSection/experienceSection';
import ProjectsSection from './sections/projectsSection/projectsSection';
import StatisticSection from './sections/statisticSection/statisticSection';
import LandingSection from './sections/landingSection/landingSection';

import { addListeners, removeListeners} from '../../utils/utils';
import { useEffect } from 'react/cjs/react.development';

export default function mainPage() {
  const sectionCount = 6;
  const scrollAnimationDuration = 2000;

  const [currentSection, setCurrentSection] = useState(0);
  const [previousSection, setPreviousSection] = useState(0);
  const [direction, setDirection] = useState("down");

  function handleScroll(event) {
    removeListeners(handleScroll);
    setTimeout(() => addListeners(handleScroll), scrollAnimationDuration);

    if (event.deltaY < 0 || event.keyCode == 38) {
      handleChangeSection('up');
    }

    if (event.deltaY > 0 || event.keyCode == 40) {
      handleChangeSection('down');
    }
  }

  useEffect(()=> {
    addListeners(handleScroll);

    return () => removeListeners(handleScroll);
  },[]);

  function handleChangeSection(direction) {
    setDirection(direction);
    setPreviousSection(currentSection);
    setCurrentSection((currentSection) => {
      return direction === "down" ?
        Math.min(currentSection + 1, sectionCount) : 
        Math.max(currentSection - 1, 0) 
    });
  }

  //handleColorChange
  // useEffect(() => {

  // }, [currentSection]);

  //handle menu and dots display
  useEffect(() => {
    if (currentSection === 1 && previousSection === 0){
      console.log('display');
    } else if (currentSection === 0 && previousSection === 1) {
      console.log('hide');
    }
  }, [currentSection, previousSection]);

  const sectionMap = {
    0: {
      component: LandingSection,
      defaultProps: {
        handleScroll: () => handleScroll({ keyCode: 40})
      },
      index: 0,
    },
    1: {
      component: AboutSection,
      index: 1,
    },
    2: {
      component: ToolsSection,
      index: 2,
    },
    3: {
      component: ExperienceSection,
      index: 3,
    },
    4: {
      component: StatisticSection,
      index: 4,
    },
    5: {
      component: ProjectsSection,
      index: 5,
    },
    6: {
      component: ContactSection,
      index: 6,
    },
  }

  return (
    <div 
      className={styles.container}
      id="content"
    >
      {
        Array.from({length: sectionCount}).map((_, index) => {
          const section = sectionMap[`${index}`];
          let containerClass = '';

          if (index === currentSection) {
            containerClass = direction === 'down' ? 'inUp' : 'inDown';
          } else if (index === previousSection) {
            containerClass = direction === 'down' ? 'outUp' : 'outDown';
          }

          return React.createElement(
            section.component,
            {
              ...section.defaultProps,
              containerClass
            }
          )
        })
      }
    </div>
  )
}