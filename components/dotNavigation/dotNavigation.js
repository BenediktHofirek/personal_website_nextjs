import styles from './dotNavigation.module.scss';

export default function dotNavigation({
  count,
  currentItem,
  previousItem,
  handleSelectItem,
  className
}) {

  return (
    <ul className={styles.container + ' ' + className}>
      {
        Array.from({length: count}).map((_,index) => (
          <li
            className={styles.item}
            key={index}
            onClick={() => handleSelectItem(index)}
          >
            <a href='#' className={`${styles.dot + ' '} 
              ${index === currentItem ? styles.dot__current : ''} 
              ${index === previousItem ? styles.dot__previous : ''} `}>
            </a>
          </li>
        ))
      }
    </ul>
  )
}