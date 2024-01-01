'use client'

import React from 'react'
import { useTranslation } from "react-i18next";
import styles from '@/styles/main.module.css';
import scrollTo from '@/utils/scrollTo';

const Main = () => {

    const { t } = useTranslation();

    const handleButtonClick = (blockid) => {
        scrollTo(blockid);
    };

    return (
        <section className={styles.main}>
            <h1>{t('mainscrtextleft')}</h1>
            <div className={styles.mainright}>
                <div className={styles.text}>
                    <p>{t('mainscrtextright')}</p>
                </div>
                <div className={styles.mainbuttons}>
                    <button className={styles.button1} onClick={() => handleButtonClick("#agregator")}>
                        {t('startbrowse')}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="8"
                            height="10"
                            viewBox="0 0 8 10"
                            fill="none"
                        >
                            <path
                                d="M4.38911 1.11091C4.38911 0.834771 4.16525 0.610913 3.88911 0.610913C3.61297 0.610913 3.38911 0.834771 3.38911 1.11091L4.38911 1.11091ZM3.53556 9.24264C3.73082 9.4379 4.0474 9.4379 4.24266 9.24264L7.42464 6.06066C7.61991 5.8654 7.61991 5.54882 7.42464 5.35355C7.22938 5.15829 6.9128 5.15829 6.71754 5.35355L3.88911 8.18198L1.06069 5.35355C0.865423 5.15829 0.54884 5.15829 0.353578 5.35355C0.158316 5.54882 0.158316 5.8654 0.353578 6.06066L3.53556 9.24264ZM3.38911 1.11091V8.88909L4.38911 8.88909V1.11091L3.38911 1.11091Z"
                                fill="white"
                            />
                        </svg>
                    </button>
                    <span className={styles.button2} onClick={() => handleButtonClick("#FAQ")}>
                        {t('haveaquestion')}
                    </span>
                </div>
            </div>
        </section>
    )
}

export default Main