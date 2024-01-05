'use client'

import React, { useState } from 'react'
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import styles from '@/styles/improveusmodal.module.css'

const Improveusmodal = ({ isOpen, closeModal }) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [short_description, setText] = useState('');
  const { t } = useTranslation();

  const isEmailValid = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  const handleSubmit = async () => {

    if (!name || !email || !short_description) {
      alert(`${t('fill')}`);
      return;
    }

    if (!isEmailValid(email)) {
      alert(`${t('wrongemail')}`)
      return;
    }

    try {
      await axios({
        url: 'https://api.abcrypto.io/api/feedback',
        headers: 'Content-Type: application/json',
        params: {
          name,
          email,
          short_description
        },
        method: "POST",
        data: null
      }).then(({ data }) => {
        alert(`${t('delivered')}`)
        return data;
      })
    } catch (e) {
      console.log("Sending error", e)
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.modal}>
      <div className={styles.modalblock}>
        <div className={styles.modalcontent}>
          <div className={styles.closebutt}>
            <h3>{t('improvehead')}</h3>
            <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={closeModal} style={{cursor:'pointer'}}>
              <circle cx="14.5" cy="14.5" r="14.5" fill="#F6F6F6" />
              <path d="M19.4502 9.05029L9.5507 18.9498" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M19.0957 18.5962L9.90332 9.40381" stroke="black" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h4>{t('improvetext')}</h4>
          <div className={styles.modalnameemail}>
            <input value={name} onChange={el => setName(el.target.value)} className={styles.modalname} placeholder={t('name')} id="modalname" autoComplete="name" />
            <input value={email} onChange={ele => setEmail(ele.target.value)} className={styles.modalemail} pattern="[^@\s]+@[^@\s]+\.[^@\s]+" placeholder="Email" id="modalemail" autoComplete="email" />
          </div>
          <textarea value={short_description} onChange={e => setText(e.target.value)} className={styles.modaldescription} placeholder={t('shortdescription')} id="modaldescription" autoComplete="description"/>
          <div className={styles.modalformbot}>
            <h4>{t('thankyou')}</h4>
            <button onClick={handleSubmit} className={styles.modalformbutt}>{t('getintouch')}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Improveusmodal