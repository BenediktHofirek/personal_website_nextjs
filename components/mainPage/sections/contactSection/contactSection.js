import { useState } from 'react/cjs/react.development';
import styles from './contactSection.module.scss';
import {cc} from '../../../../utils/utils';

export default function contactSection({containerClass}) {
  const [inputName, setInputName] = useState('');
  const [inputSubject, setInputSubject] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputMessage, setInputMessage] = useState('');

  const [isEmailValid, setIsEmailValid] = useState(undefined);
  const [isMessageValid, setIsMessageValid] = useState(undefined);

  function validateEmail() {
    const emailRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return !!(inputEmail && emailRegEx.test(inputEmail.toLowerCase()));
  }

  function validateMessage() {
    return !!inputMessage;
  }

  function checkIsFormValid() {
    return isEmailValid && isMessageValid;
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
        subject: inputSubject,
        message: inputMessage,
      })
    });

    if (response.status === 200) {
      setInputEmail('');
      setInputMessage('');
    }
  }

  return (
    <div className={"section " + containerClass}>
      <div className="sectionTitle">
        <h2 className="sectionTitle_content">Contact me</h2>
      </div>
      <div className={styles.contentContainer}>
        <form className={styles.form}>
          <div className={cc(styles.form_block,styles.form_block__name)}>
            <input
              placeholder="placeholder" 
              type="text"
              className={cc(styles.form_input, styles.form_input__text)}
              value={inputName}
              onChange={(e) => setInputName(e.target.value)}
            />
            <div className={styles.form_outline}></div>
            <label className={styles.form_label}>
              Name
            </label>
          </div>
          <div className={cc(styles.form_block,styles.form_block__email)}>
            <input
              onBlur={() => setIsEmailValid(validateEmail())}
              placeholder="placeholder" 
              type="email"
              className={cc(styles.form_input, styles.form_input__text)}
              value={inputEmail}
              onChange={(e) => {
                setInputEmail(e.target.value);
                if (validateEmail()) {
                   setIsEmailValid(true)
                }
              }}
              {...(isEmailValid === false ? {error: 'error'} : {})}
            />
            <div className={styles.form_outline}></div>
            <label className={styles.form_label}>
              Email
            </label>
          </div>
          <div className={cc(styles.form_block,styles.form_block__subject)}>
            <input
              placeholder="placeholder"
              type="text"
              className={cc(styles.form_input, styles.form_input__text)}
              value={inputSubject}
              onChange={(e) => setInputSubject(e.target.value)}
            />
            <div className={styles.form_outline}></div>
            <label className={styles.form_label}>
              Subject
            </label>
          </div>
          <div className={cc(styles.form_block,styles.form_block__message)}>
            <textarea
              placeholder="placeholder"
              onBlur={() => setIsMessageValid(validateMessage())}
              value={inputMessage}
              rows={7}
              className={cc(styles.form_input, styles.form_input__textarea)}
              onChange={(e) => {
                setInputMessage(e.target.value);
                if (validateMessage()) {
                   setIsMessageValid(true)
                }
              }}
              {...(isMessageValid === false ? {error: 'error'} : {})}
            />
            <div className={styles.form_outline}></div>
            <label className={styles.form_label}>
              Message
            </label>
          </div>
          <button 
            type="submit"
            className={styles.form_submit}
            disabled={checkIsFormValid()}
            style={{
              backgroundColor: checkIsFormValid() ? '#0f2a66' : 'rgba(63, 114, 127, 0.8)',
            }}
            onClick={handleFormSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}