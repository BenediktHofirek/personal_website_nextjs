import styles from './menu.module.scss';
import { useState } from 'react';
import { cc } from '../../utils/utils';

export default function menu({
  itemList,
  className
}) {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  return (
    <>
      <div 
        className={cc(styles.hamburger, isHamburgerOpen ? styles.hamburger__open : '', className)}
        onClick={() => {
          setIsHamburgerOpen((isOpen) => !isOpen);
        }}
      >
        <span className={styles.hamburger_line}></span>
        <span className={styles.hamburger_line}></span>
        <span className={styles.hamburger_line}></span>
      </div>
      <ul className={styles.container + ' ' + className}>
        {
          itemList.map((item) => (
            <li 
              className={styles.item}
              key={item.name}
              onClick={item.handleClick}
            >
              <a href='#'>
                {item.name}
              </a>
            </li>
          ))
        }
      </ul>
    </>
  )
}