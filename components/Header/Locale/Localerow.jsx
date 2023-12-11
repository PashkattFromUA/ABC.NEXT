'use client'

import React from 'react'
import { useTranslation } from 'next-i18next';
import styles from '@/styles/localerow.module.css'

const Localerow = (props) => {

    const { i18n } = useTranslation();
    const currentLocale = i18n.language;
    const currentlang = props.currentlang;

    return (
        <div className={currentlang === currentLocale ? styles.langrowchoosen : styles.langrow}>
            <img src={props.src} alt="lang" />
            <p>{props.lang}</p>
        </div>
    )
}

export default Localerow