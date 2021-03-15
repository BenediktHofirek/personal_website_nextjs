import React, { useState, useEffect } from 'react';
import anime from 'animejs/lib/anime';
import styles from './mainPage.module.scss';
import ToolsSection from './sections/toolsSection/toolsSection';
import AboutSection from './sections/aboutSection/aboutSection';
import FaqSection from './sections/faqSection/faqSection';
import ContactSection from './sections/contactSection/contactSection';
import ExperienceSection from './sections/experienceSection/experienceSection';
import ProjectsSection from './sections/projectsSection/projectsSection';
import StatisticSection from './sections/statisticSection/statisticSection';
import LandingSection from './sections/landingSection/landingSection';
import DotNavigation from '../dotNavigation/dotNavigation';
import Menu from '../menu/menu';

import { addListeners, removeListeners} from '../../utils/utils';

export default function mainPage() {
  const sectionCount = 8;
  const scrollAnimationDuration = 200;

  const [touchStart, setTouchStart] = useState(null);
  const [currentSection, setCurrentSection] = useState(null);
  const [previousSection, setPreviousSection] = useState(null);
  const [direction, setDirection] = useState("down");
  const [isPageStart, setIsPageStart] = useState(false);

  useEffect(() => {
    const diagonalSize = Math.sqrt((Math.pow(window.innerHeight, 2) + Math.pow(window.innerWidth, 2)));
    const contentEl = document.querySelector('#content');
    anime({
      targets: contentEl,
      width: diagonalSize,
      height: diagonalSize,
      easing: 'easeInOutQuart',
      duration: 1500,
      complete: () => {
        contentEl.setAttribute('style',`
          display: block;
          overflow: hidden;
          float: left;
          width: 100vw;
          height: 100vh;
          border-radius: 0px;
          position: relative;
          transform: none;
          top: 0;
          left: 0;
        `)
        setIsPageStart(true);
      }
    });
  }, []);

  function handleTouch(event) {
    setTouchStart((currentTouchStart) => {
      const touchClientY = event.touches?.[0]?.clientY;
      if (event.type === 'touchmove' && currentTouchStart !== null) {
        handleChangeSection(currentTouchStart < touchClientY ? 'down' : 'up');
        return null;
      } if (event.type === 'touchstart') {
        return touchClientY;
      }

      return null;
    });
  }

  function handleScroll(event) {
    if (event.deltaY < 0 || event.keyCode == 38) {
      handleChangeSection('up');
    }
    
    if (event.deltaY > 0 || event.keyCode == 40) {
      handleChangeSection('down');
    } 
  }

  useEffect(()=> {
    return () => removeListeners(handleScroll, handleTouch);
  },[]);

  function handleChangeSection(direction) {
    removeListeners(handleScroll, handleTouch);
    setTimeout(() => addListeners(handleScroll, handleTouch), scrollAnimationDuration);

    setDirection(direction);    
    setCurrentSection((section) => {
      const currentSection = section || 0; //first time is null
      
      const newCurrentSection = direction === "down" ?
        Math.min(currentSection + 1, sectionCount - 1) : 
        Math.max(currentSection - 1, 0);

      if (newCurrentSection !== currentSection) {
        setPreviousSection(currentSection);
      }

      return newCurrentSection;
    });
  }

  function handleMenuClick(newCurrentSection) {
    if (newCurrentSection === currentSection) {
      return;
    }

    setDirection(newCurrentSection > currentSection ? 'down' : 'up');
    setPreviousSection(currentSection);
    setCurrentSection(newCurrentSection);
  }

  //handleColorChange
  // useEffect(() => {

  // }, [currentSection]);

  const sectionMap = {
    0: {
      component: LandingSection,
      defaultProps: {
        handleScroll: () => handleScroll({ keyCode: 40}),
        activateScroll: () => addListeners(handleScroll, handleTouch),
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
      component: FaqSection,
      index: 6,
    },
    7: {
      component: ContactSection,
      index: 7,
    },
  }

  const menuItemList = [
    {
      name: 'Home',
      handleClick: () => handleMenuClick(0),
    },
    {
      name: 'About',
      handleClick: () => handleMenuClick(1),
    },
    {
      name: 'Tools',
      handleClick: () => handleMenuClick(2),
    },
    {
      name: 'Experience',
      handleClick: () => handleMenuClick(3),
    },
    {
      name: 'Contact',
      handleClick: () => handleMenuClick(7),
    },
  ];

  return (
    <div 
      className={styles.container}
      id="content"
    >
      {(isPageStart || null) && (
        <>
          <Menu 
            itemList={menuItemList}
            className={(currentSection !== null && 'fadeIn') || ''}
          />
          <DotNavigation 
            count={sectionCount}
            currentItem={currentSection}
            previousItem={previousSection}
            handleSelectItem={handleMenuClick}
            className={(currentSection !== null && 'fadeIn') || ''}
          />
          {
            Array.from({length: sectionCount}).map((_, index) => {
              const section = sectionMap[`${index}`];
              let containerClass = '';
              const isFocused = index === currentSection;

              if (isFocused) {
                containerClass = direction === 'down' ? 'animationInUp' : 'animationInDown';
              } else if (index === previousSection) {
                containerClass = direction === 'down' ? 'animationOutUp' : 'animationOutDown';
              } else if (index === 0 && currentSection === null) {
                containerClass = 'display';
              }

              return React.createElement(
                section.component,
                {
                  ...section.defaultProps,
                  key: index,
                  containerClass,
                  isFocused,
                }
              )
            })
          }
        </>
      )}
    </div>
  )
}