'use client'

import React from 'react'
import { useTranslation } from "react-i18next";
import Localerow from './Localerow';
import { useRouter,usePathname } from 'next/navigation';
import i18nConfig from '@/i18nConfig';
import styles from '@/styles/localemodal.module.css'

const Localemodal = (isOpen) => {

    const { i18n, t } = useTranslation();
    const currentLocale = i18n.language;
    const router = useRouter();
    const currentPathname = usePathname();

    const changeLanguage = (lng) => {
        const newLocale = lng;
        const days = 30;
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        const expires = '; expires=' + date.toUTCString();
        document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

        if (
            currentLocale === i18nConfig.defaultLocale &&
            !i18nConfig.prefixDefault
        ) {
            router.push('/' + newLocale + currentPathname);
        } else {
            router.push(
                currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
            );
        }

        router.refresh();
    };

    if (!isOpen) {
        return null;
      }

    return (
        <div className={styles.localemodal}>
            <span onClick={() => changeLanguage("en")} >
                <Localerow src='/images/flagen.svg' lang={t("english")} currentlang="en" />
            </span>
            <span onClick={() => changeLanguage("ru")}>
                <Localerow src='/images/flagru.svg' lang={t("russian")} currentlang="ru" />
            </span>
            <span onClick={() => changeLanguage("ua")}>
                <Localerow src='/images/flaguk.svg' lang={t("ukrainian")} currentlang="ua" />
            </span>
        </div>
    )
}

export default Localemodal