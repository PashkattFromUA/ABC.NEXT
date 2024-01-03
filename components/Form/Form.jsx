'use client'

import React, { useState } from 'react'
import styles from '@/styles/form.module.css'
import Blocktitle from '@/components/Blocktitle/Blocktitle'
import axios from 'axios';
import { useTranslation } from 'react-i18next';

const Form = () => {

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

  return (
    <div className="gradient" >
      <div className='block' id="form">
        <Blocktitle name={t('forpartners')} title={t('offertext')} />
        <div className={styles.nameemail}>
          <input value={name} onChange={el => setName(el.target.value)} className={styles.name} placeholder={t('name')} id="name" autoComplete="name" />
          <input value={email} onChange={ele => setEmail(ele.target.value)} className={styles.email} pattern="[^@\s]+@[^@\s]+\.[^@\s]+" placeholder="Email" id="email" autoComplete="email" />
        </div>
        <textarea value={short_description} onChange={e => setText(e.target.value)} className={styles.description} placeholder={t('shortdescription')} id="description" autoComplete="description" />
        <div className={styles.formbot}>
          <p>{t('thankyou')}</p>
          <button onClick={handleSubmit}>{t('getintouch')}</button>
        </div>
      </div>
    </div>
  )
}

export default Form