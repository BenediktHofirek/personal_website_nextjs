import styles from './menu.module.scss';

export default function menu({
  itemList,
  className
}) {

  return (
    <ul className={styles.container + ' ' + className}>
      {
        itemList.map((item) => (
          <li 
            className={styles.item}
            key={item.name}
            onClick={item.handleClick}
          >
            {item.name}
          </li>
        ))
      }
    </ul>
  )
}