import styles from './footer.module.scss';

export default function footer({
  className
}) {
  return (
    <footer className={styles.container + ' ' + className}>
      <div className={styles.content}>
        <div className={styles.item}>
          <span>Icons made by </span>
          <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a>,
          <a href="https://www.freepik.com" title="Freepik"> Freepik</a>,
          <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect"> Pixel perfect</a>
          <span> from </span>
          <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
          <span> and </span>
          <a href="https://freeicons.io/profile/3">icon king1</a>
          <span> from </span>
          <a href="https://freeicons.io">freeicons.io</a>
        </div>
      </div>
    </footer>
  )
}