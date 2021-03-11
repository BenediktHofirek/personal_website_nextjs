import styles from './contactSection.module.scss';
import {cc} from '../../../../utils/utils';
import { useEffect, useState } from 'react';

export default function contactSection({containerClass}) {
  const [inputName, setInputName] = useState('');
  const [inputSubject, setInputSubject] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputMessage, setInputMessage] = useState('');

  const [isEmailValid, setIsEmailValid] = useState(undefined);
  const [isMessageValid, setIsMessageValid] = useState(undefined);
  const [isMessageTouched, setIsMessageTouched] = useState(false);
  const [isEmailTouched, setIsEmailTouched] = useState(false);

  const [isFormValid, setIsFormValid] = useState(false);
  const [formState, setFormState] = useState(undefined); //undefined|sending|success|error
  const formStateMap = {
    sending: 'sending',
    success: 'success',
    error: 'error',
  }

  const infoMap = {
    sending: {
      title: 'Sending...',
      message: 'Waiting for server response.',
      icon: null,
    },
    error: {
      title: 'Error',
      message: 'An error occured while sending your message. Please try again later.',
      icon: null,
    },
    sending: {
      title: 'Success',
      message: 'Your message was sended successfully.',
      icon: null,
    }, 
  }

  function validateEmail() {
    const emailRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return !!(inputEmail && emailRegEx.test(inputEmail.toLowerCase()));
  }

  function validateMessage() {
    return !!inputMessage;
  }

  function validateForm() {
    return validateEmail() && validateMessage();
  }

  useEffect(() => {
    setIsFormValid(validateForm());
    
    const isEmailValid = validateEmail();
    if (isEmailValid || isEmailTouched) {
      setIsEmailValid(isEmailValid);
    }
  }, [inputEmail]);

  useEffect(() => {
    setIsFormValid(validateForm());
    
    const isMessageValid = validateMessage();
    if (isMessageValid || isMessageTouched) {
      setIsMessageValid(isMessageValid);
    }
  }, [inputMessage]);

  async function handleFormSubmit(e) {
    e.preventDefault();
    setFormState(formStateMap.sending);

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
      setFormState(formStateMap.success);
    } else {
      setFormState(formStateMap.error);
    }
  }

  function inSubmitDisabled() {
    return !isFormValid || formState === formStateMap.sending;
  }

  const currentInfo = infoMap[formState];

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
              onBlur={() => {
                setIsEmailTouched(true);
                setIsEmailValid(validateEmail());
              }}
              placeholder="placeholder" 
              type="email"
              className={cc(styles.form_input, styles.form_input__text)}
              value={inputEmail}
              onChange={(e) => setInputEmail(e.target.value)}
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
              onBlur={() => {
                setIsMessageTouched(true);
                setIsMessageValid(validateMessage());
              }}
              value={inputMessage}
              rows={7}
              className={cc(styles.form_input, styles.form_input__textarea)}
              onChange={(e) => setInputMessage(e.target.value)}
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
            disabled={inSubmitDisabled()}
            style={{
              backgroundColor: inSubmitDisabled() ? 'rgba(63, 114, 127, 0.8)' :  '#0f2a66',
            }}
            onClick={handleFormSubmit}
          >
            Submit
          </button>
        </form>
      </div>
      {(currentInfo || null) && (
        <div className={styles.info} {...{[formState]: formState}}>
          <h5 className={styles.info_title}>{currentInfo.title}</h5>
          <p>{currentInfo.message}</p>
        </div>
      )}
    </div>
  )
}