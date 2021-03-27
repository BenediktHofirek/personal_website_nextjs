import { cc } from '../../utils/utils';
import styles from './footer.module.scss';

export default function footer({
  className
}) {
  return (
    <footer className={cc(styles.container,'section', className)}>
      <div className={styles.content}>
      <div className={styles.item}>
          Benedikt Hofírek, Křenovská 80, 664 58 Prace, IČO 10705686, Fyzická osoba zapsaná v Živnostenském rejstříku ve Šlapanicích od 25.03.2021
        </div>
        <div className={styles.item}>
          <span>Icons made by </span>
          <a href="https://www.freepik.com" title="Freepik"> Freepik</a>
          <span> from </span>
          <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
          <span> and </span>
          <a href="https://simpleicons.org/">www.simpleicons.org</a>
        </div>
      </div>
    </footer>
  )
}