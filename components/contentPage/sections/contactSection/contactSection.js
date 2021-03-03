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
      <div className="sectionTitle">
        <h2 className="sectionTitle_content">Contact</h2>
      </div>
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
        <div className={styles.form_block}>
          <label className={styles.form_label}>
            Your email:
          </label>
          <input 
            type="email"
            className={styles.form_input + ' ' + styles.form_input__email}
            value={inputEmail}
            onChange={(e) => setInputEmail(e.target.value)}
          />
        </div>
        <div className={styles.form_block}>
          <label className={styles.form_label}>
            Message:
          </label>
          <textarea
            value={inputMessage}
            className={styles.form_input + ' ' + styles.form_input__message}
            onChange={(e) => setInputMessage(e.target.value)}
          />
        </div>
        <button 
          type="submit"
          className={styles.form_submit}
          disabled={checkIsFormValid()}
          onClick={handleFormSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  )
}