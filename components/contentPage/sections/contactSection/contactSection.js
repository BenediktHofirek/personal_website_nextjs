import { useState } from 'react/cjs/react.development';
import styles from './contactSection.module.scss';

export default function contactSection() {
  const [inputEmail, setInputEmail] = useState('');
  const [inputMessage, setInputMessage] = useState('');

  const emailRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  function checkIsFormValid() {
    return !(inputMessage && inputEmail && emailRegEx.test(inputEmail.toLowerCase()));
  }

  async function handleFormSubmit(e) {
    e.preventDefault();

    const response = await fetch('/api/contactForm', {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache', 
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify({
        email: inputEmail,
        message: inputMessage,
      })
    });

    if (response.status === 200) {
      setInputEmail('');
      setInputMessage('');
    }
  }

  return (
    <div className={"section" + ' ' + styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <div className={styles.contact}>
        <div className={styles.contact_row}>
          <h3 className={styles.contact_title}>Email:</h3>
          <p className={styles.contact_text}>benedikthofirek@gmail.com</p>
        </div>
        <div className={styles.contact_row}>
          <h3 className={styles.contact_title}>Phone:</h3>
          <p className={styles.contact_text}>+420 722 064 999</p>
        </div>
      </div>
      <h2 className="subtitle">Leave me a message</h2>
      <form className={styles.form}>
        <label className={styles.form_label}>
          Your email:
        </label>
        <input 
          type="email"
          value={inputEmail}
          onChange={(e) => setInputEmail(e.target.value)}
        />
        <label className={styles.form_label}>
          Message:
        </label>
        <textarea
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
        />
        <button 
          type="submit"
          disabled={checkIsFormValid()}
          onClick={handleFormSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  )
}