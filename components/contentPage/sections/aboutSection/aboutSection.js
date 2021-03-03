import styles from './aboutSection.module.scss';
import Image from 'next/image';

export default function aboutSection() {
  return (
    <div className={"section" + ' ' + styles.container}>
      <h1 className="sectionTitle">About me</h1>
      
    </div>
  )
}