'use client'
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Link from "next/link";
const Localemodal = dynamic(() => import('./Locale/Localemodal'));
import styles from '@/styles/header.module.css';
import { usePathname, useRouter } from 'next/navigation';
import scrollTo from '@/utils/scrollTo';
import Image from "next/image";
import Search from "../Search/Search";

const Header = () => {

    const { i18n, t } = useTranslation();
    const currentLocale = i18n.language;
    const currentPathname = usePathname();
    const router = useRouter();
    let flagsrc = '/images/flagen.svg';
    let menubutt = "/images/hamburger.svg";
    const [isNavbarExpanded, setIsNavbarExpanded] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    if (currentLocale === "ua") {
        flagsrc = '/images/flaguk.svg';
    } else if (currentLocale === "ru") {
        flagsrc = '/images/flagru.svg';
    } else {
        flagsrc = '/images/flagen.svg';
    }

    if (isNavbarExpanded === true) {
        menubutt = "/images/closeburger.svg";
    }

    const handleButtonClick = () => {
        scrollTo("#form");
        setIsNavbarExpanded(false)
    };

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const toggleNavbar = () => {
        setIsNavbarExpanded(!isNavbarExpanded);
    };

    return (
        <header className={styles.menu}>
            <div className={styles.logonav}>
                <Link href="/">
                    <Image src='/images/Logo.svg' width={109} height={32} alt="ABC" priority={true} onClick={() => { setIsNavbarExpanded(false) }} />
                </Link>
                <nav className={isNavbarExpanded === true ? styles.navbarlactive : styles.navbarl}>
                    <div className={isNavbarExpanded === true ? styles.navbuttonsactive : styles.navbuttons}>
                        <Link href="/aggregator" className={currentPathname === `/${currentLocale}/aggregator` || currentPathname === `/aggregator` ? styles.activepage : styles.nonactivepage} onClick={() => { setIsNavbarExpanded(false) }}>
                            {t("aggregator")}
                        </Link>
                        <Link href="/forpartners" className={currentPathname === `/${currentLocale}/forpartners` || currentPathname === `/forpartners` ? styles.activepage : styles.nonactivepage} onClick={() => { setIsNavbarExpanded(false) }} >
                            {t("forpartners")}
                        </Link>
                        <Link href="/faq" className={currentPathname === `/${currentLocale}/faq` || currentPathname === `/faq` ? styles.activepage : styles.nonactivepage} onClick={() => { setIsNavbarExpanded(false) }} >
                            FAQ
                        </Link>
                        <Link href="/news" className={currentPathname === `/${currentLocale}/news` || currentPathname === `/news` ? styles.activepage : styles.nonactivepage} onClick={() => { setIsNavbarExpanded(false) }}>
                            {t("news")}
                        </Link>
                    </div>
                    <button className={isNavbarExpanded === true ? styles.contactusmobileactive : styles.contactusmobile} onClick={() => handleButtonClick()}>{t("contactus")}</button>
                </nav>
            </div>
            <div className={styles.headbuttonsmobile}>
                <div className={styles.localisator} onClick={toggleModal}>
                    <Image src={flagsrc} width={16} loading="lazy" height={16} alt="flag" />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="6"
                        viewBox="0 0 12 6"
                        fill="none"
                        className={isModalOpen === true ? styles.shevronopen : styles.shevron}
                    >
                        <path
                            d="M0.122782 5.88406C0.288174 6.03865 0.556936 6.03865 0.722328 5.88406L5.9942 0.94686L11.2764 5.88406C11.4418 6.03865 11.7106 6.03865 11.876 5.88406C12.0413 5.72947 12.0413 5.47826 11.876 5.32367L6.30431 0.115941C6.22161 0.0386462 6.11824 -5.14199e-07 6.00454 -5.2414e-07C5.90117 -5.33177e-07 5.78746 0.0386462 5.70476 0.115941L0.133119 5.32367C-0.0426101 5.47826 -0.0426101 5.72947 0.122782 5.88406Z"
                            fill="black"
                        />
                    </svg>
                    {isModalOpen && (
                        <Localemodal isOpen={isModalOpen} />
                    )}
                </div>
                <button className={styles.menubutton}>
                    <Image src={menubutt} width={24} height={19} loading="lazy" alt="menu" onClick={toggleNavbar} />
                </button>
                <button className={styles.contactusdescktop} onClick={() => handleButtonClick()}>{t("contactus")}</button>
            </div>
        </header>
    )
}

export default Header