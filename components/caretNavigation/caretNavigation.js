import { cc } from "../../utils/utils";
import styles from "./caretNavigation.module.scss";

export default function CaretNavigation({
  className,
  next,
  prev
}) {
  return (
    <div className={cc(styles.container, className)}>
      <img
        className={styles.caret}
        onClick={prev}
        src="/caret_up.svg"
        alt="section up"
      />
      <img
        className={styles.caret}
        onClick={next}
        src="/caret_down.svg"
        alt="section up"
      />
    </div>
  )
}