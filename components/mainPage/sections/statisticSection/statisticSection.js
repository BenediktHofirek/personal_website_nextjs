import styles from './statisticSection.module.scss';
import { useState, useEffect } from 'react';
import { cc, write, pause, truncateDecimal } from '../../../../utils/utils';

export default function statisticSection({
  containerClass,
  isFocused
}) {
  const writeSpeed = 80;
  const afterStatePause = 200;

  const statMap = {
    0: {
      time: 0,
      name: 'experience',
      index: 0,
      target: 1,
      step: 1,
      unit: 'year',
      description: 'commercial_experience',
    },
    1: {
      time: 1000,
      name: 'programming',
      index: 1,
      target: 2.5,
      step: 0.1,
      unit: 'years',
      description: 'of_programming',
    },
    2: {
      time: 2000,
      name: 'typing',
      index: 2,
      target: 85,
      step: 1,
      unit: 'wpm',
      description: 'average_typing speed',
    },
    3: {
      time: 2000,
      name: 'lines',
      index: 3,
      target: 110000,
      step: 1000,
      unit: 'lines',
      description: 'of code written',
    },
  };

  const [currentStat, setCurrentStat] = useState({ index: Object.values(statMap).length });
  const [isAnimated, setIsAnimated] = useState(false);
  const [statWidthMap, setStatWidthMap] = useState({});

  //set stat width
  useEffect(() => {
    const newStatWidthMap = {};
    Object.values(statMap).map(({name}) => {
      const element = document.getElementById(`stat_${name}`);
      if (element) {
        const elWidth = element.getBoundingClientRect().width;
        newStatWidthMap[name] = elWidth;
      }
    });

    setStatWidthMap(newStatWidthMap);
  }, []);

  useEffect(() => {
    if (isFocused && !isAnimated) {
      setIsAnimated(true);
      (async() => {
        const statCount = Object.values(statMap).length;
        await pause(700);
        await new Promise(async(resolve) => {
          for(let x = 0; x < statCount; x++) {
            await statAnimation(statMap[x]);
            await pause(afterStatePause);
          }

          resolve();
        });
      })()
    }
  },[isFocused, isAnimated]);

  function statAnimation({
    time,
    name,
    index,
    target,
    step,
    unit,
    description
  }) {
    return new Promise(async(resolve) => {
      setCurrentStat({
        index,
        value: 0,
        name,
      });

      function updateStat(property, newValue) {
        setCurrentStat((prevStat) => ({
          ...prevStat,
          [property]: newValue,
        }));
      }

      const valueChangeCount = target / step;
      const valueChangeTime = time / valueChangeCount;
      
      for(let x = 1; x <= valueChangeCount; x++) {
        await pause(valueChangeTime);
        updateStat('value', truncateDecimal(x * step, step));
      }

      function updateText(property, newValueFnc) {
        setCurrentStat((prevStat) => ({
          ...prevStat,
          [property]: newValueFnc(prevStat[property]),
        }));
      }

      await write(
        (newValueFnc) => updateText('unit', newValueFnc),
        unit,
        writeSpeed
      );

      await write(
        (newValueFnc) => updateText('description', newValueFnc),
        description,
        writeSpeed
      )
      
      resolve();
    });
  }

  function formatText(text) {
    if (!text) {
      return text;
    }
    return (
      <>
        {text.split('_').map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </>
    )
  }

  return (
    <div className={"section " + containerClass}>
      <div className="sectionTitle">
        <h2 className="sectionTitle_content">Statistic</h2>
      </div>

      <div className={styles.contentContainer}>
        {
          Object.values(statMap).map((_, index) => {
            let stat = index === currentStat.index ? currentStat : statMap[`${index}`];
            const statWidth = statWidthMap[stat.name];

            return (
              <div 
                className={cc(styles.stat, index <= currentStat.index ? 'fadeIn' : '', styles[`stat__${stat.name}`])}
                key={stat.name}
                style={statWidth ? { width: `${statWidth}px`} : {}}
                id={`stat_${stat.name}`}
              >
                <div
                  className={styles.stat_number}
                >
                  {stat.target || stat.value}
                </div>
                <div className={styles.stat_unit}>
                  {stat.unit || null}
                </div>
                <div className={styles.stat_description}>
                  {formatText(stat.description || null)}
                </div>
              </div>
            );
          })
        }
      </div>

    </div>
  )
}