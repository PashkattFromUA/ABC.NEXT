'use cilent'

import React, { useEffect } from 'react';
import styles from '@/styles/feedbackmodal.module.css';
import Image from 'next/image';

const Errormodal = ({ isErrorOpen, closeErrorModal, text }) => {


    useEffect(() => {
        const timer = setTimeout(() => {
          closeErrorModal();
        }, 10000);
    
        return () => clearTimeout(timer);
      }, [isErrorOpen]);

    if (!isErrorOpen) {
        return null
    }

    return (
        <div className={styles.feedbackmodalbg}>
            <div className={styles.feedbackmodal}>
                <div className={styles.feedbackmodaltop}>
                    <div className={styles.feedbackmodaltopleft}>
                        <Image src='/images/sendingerror.svg' width={21} height={21} alt='done' />
                        <h6>Error!</h6>
                    </div>
                    <svg width="20" height="20" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={closeErrorModal}>
                        <circle cx="14.5" cy="14.5" r="14.5" fill="#F6F6F6" />
                        <path d="M19.4502 9.05029L9.5507 18.9498" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M19.0957 18.5962L9.90332 9.40381" stroke="black" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <p>{text}</p>
            </div>

        </div>
    )
}

export default Errormodal