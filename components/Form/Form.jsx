'use client'

import React, { useState } from 'react'
import styles from '@/styles/form.module.css'
import Blocktitle from '@/components/Blocktitle/Blocktitle'
import axios from 'axios';
import dynamic from 'next/dynamic';
import { useTranslation } from 'react-i18next';
const Feedbackmodal = dynamic(() => import('../Feedbackmodal/Feedbackmodal'));
const Errormodal = dynamic(() => import('../Errormodal/Errormodal'));

const Form = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [short_description, setText] = useState('');
  const { t } = useTranslation();
  const [isFeedbackOpen, setIsFeedbackModalOpen] = useState(false);
  const [isErrorOpen, setIsErrorModalOpen] = useState(false);
  const [errorText, setErrorText] = useState('');

  const openFeedbackModal = () => {
    setIsFeedbackModalOpen(true);
  };

  const closeFeedbackModal = () => {
    setIsFeedbackModalOpen(false);
  };

  const openErrorModal = () => {
    setIsErrorModalOpen(true);
  };

  const closeErrorModal = () => {
    setIsErrorModalOpen(false);
  };

  const isEmailValid = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  const handleSubmit = async () => {

    if (!name || !email || !short_description) {
      setErrorText(`${t('fill')}`)
      openErrorModal();
      return null
    }

    if (!isEmailValid(email)) {
      setErrorText(`${t('wrongemail')}`)
      openErrorModal();
      return null
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
        setName("");
        setEmail("");
        setText("");
        openFeedbackModal();
        return data;
      })
    } catch (e) {
      console.log("Sending error", e)
      setErrorText(`${t('errorsend')}`)
      openErrorModal();
      return null
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
      {isFeedbackOpen && <Feedbackmodal isFeedbackOpen={isFeedbackOpen} closeFeedbackModal={closeFeedbackModal}/>}
      {isErrorOpen && <Errormodal isErrorOpen={isErrorOpen} closeErrorModal={closeErrorModal} text={errorText} />}
    </div>
  )
}

export default Form