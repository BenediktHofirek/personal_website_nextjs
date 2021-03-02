import styles from './aboutSection.module.scss';
import Image from 'next/image';

export default function aboutSection() {
  return (
    <div className={"section" + ' ' + styles.container}>
      <h1 className="sectionTitle">About me</h1>
      <div className={styles.person}>
        <div className={'image ' + styles.person_photo}>
          <Image
            src="/../public/face_placeholder.jpg"
            alt="Benedikt Hofirek"
            layout="fill"
          />
        </div>
        <div className={styles.person_description}>
          <div className={styles.person_name}>
            Benedikt Hofirek
          </div>
          <div className={styles.person_birthdate}>
            * 1999
          </div>
        </div>
        <p className={'paragraph ' + styles.paragraph}>
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis risus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Etiam sapien elit, consequat eget, tristique non, venenatis quis, ante. Etiam commodo dui eget wisi. Sed vel lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem. Etiam ligula pede, sagittis quis, interdum ultricies, scelerisque eu. Aliquam erat volutpat. Fusce wisi. Suspendisse nisl. Fusce consectetuer risus a nunc. 
        </p>

        <p className={'paragraph ' + styles.paragraph}>
        Proin in tellus sit amet nibh dignissim sagittis. Nullam faucibus mi quis velit. Maecenas libero. Pellentesque ipsum. Etiam ligula pede, sagittis quis, interdum ultricies, scelerisque eu. Duis sapien nunc, commodo et, interdum suscipit, sollicitudin et, dolor. Nullam rhoncus aliquam metus. Sed vel lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  )
}