'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
const Newsmodal = dynamic(() => import('@/components/Newsblock/Newsmodal/Newsmodal'), { ssr: false })
import styles from '@/styles/newspage.module.css'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import Feedbackmodal from '../Feedbackmodal/Feedbackmodal'
import Errormodal from '../Errormodal/Errormodal'

const Newsblock = () => {

    const { t } = useTranslation();

    const [isErrorOpen, setIsErrorModalOpen] = useState(false);
    const [errorText, setErrorText] = useState('');
  
    const handleDataFromChild = (data) => {
      setErrorText(data);
    };
  
    const openErrorModal = () => {
      setIsErrorModalOpen(true);
    };
  
    const closeErrorModal = () => {
      setIsErrorModalOpen(false);
    };

    const [isFeedbackOpen, setIsFeedbackModalOpen] = useState(false);

    const openFeedbackModal = () => {
        setIsFeedbackModalOpen(true);
    };

    const closeFeedbackModal = () => {
        setIsFeedbackModalOpen(false);
    };

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <Feedbackmodal isFeedbackOpen={isFeedbackOpen} closeFeedbackModal={closeFeedbackModal} />
            <Errormodal isErrorOpen={isErrorOpen} closeErrorModal={closeErrorModal} text={errorText} />
            <div className={styles.newsblock}>
                <div>
                    <h1>{t('comingsoon')}</h1>
                    <p>{t('newsblocktext')}</p>
                    <button className={styles.newsbutt} onClick={openModal}>{t('newsmodalbutt')}</button>
                    {isModalOpen && <Newsmodal isOpen={isModalOpen} closeModal={closeModal} openFeedbackModal={openFeedbackModal} onDataFromChild={handleDataFromChild} openErrorModal={openErrorModal} />}
                </div>
                <Image src='/images/Comingsoon.svg' width={705} height={315} priority alt="coming soon" />
            </div>
        </div>

    )
}

export default Newsblock