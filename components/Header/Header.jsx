'use client'

import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import Localemodal from "./Locale/Localemodal";
import styles from '@/styles/header.module.css';
import { usePathname } from 'next/navigation';

const Header = () => {

    const { i18n, t } = useTranslation();
    const currentLocale = i18n.language;
    const currentPathname = usePathname();
    let flagsrc = '/images/flagen.svg';
    const [windowWidth, setWindowWidth] = useState(0);
    const [isNavbarExpanded, setIsNavbarExpanded] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    if (currentLocale === "uk") {
        flagsrc = '/images/flaguk.svg';
    } else if (currentLocale === "ru") {
        flagsrc = '/images/flagru.svg';
    } else {
        flagsrc = '/images/flagen.svg';
    }

    const scrollTo = (section) => {
        document.querySelector(section).scrollIntoView({ behavior: "smooth" });
    };

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    useEffect(() => {

        const handleResize = () => {
          setWindowWidth(window.innerWidth);
        };
    
        setWindowWidth(window.innerWidth);
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    return (
        <section>
            {windowWidth < 746 ? (
                <div>
                    {isNavbarExpanded ? (
                        <div className={styles.menumobileexpanded}>
                            <div className={styles.menutop}>
                                <Link href="/">
                                    <img src='/images/Logo.svg' alt="ABC" />
                                </Link>
                                <img
                                    src="/images/closeburger.svg"
                                    alt="X"
                                    onClick={() => setIsNavbarExpanded(false)}
                                />
                            </div>
                            <ul className={styles.mobileheadbuttons}>
                                <Link href="/" className={currentPathname === `/${currentLocale}` ? styles.pactive : styles.pnonactive} >
                                    <li>
                                        <span>{t("main")}</span>
                                    </li>
                                </Link>
                                <Link href="/aggregator" className={currentPathname === `/${currentLocale}/aggregator` ? styles.pactive : styles.pnonactive}>
                                    <li>
                                        <span>{t("aggregator")}</span>
                                    </li>
                                </Link>
                                <Link href="/forpartners" className={currentPathname === `/${currentLocale}/forpartners` ? styles.pactive : styles.pnonactive}>
                                    <li>
                                        <span >{t("forpartners")}</span>
                                    </li>
                                </Link>
                                <Link href="/faq" className={currentPathname === `/${currentLocale}/faq` ? styles.pactive : styles.pnonactive}>
                                    <li>
                                        <span>FAQ</span>
                                    </li>
                                </Link>
                            </ul>
                            <button onClick={() => scrollTo("#form")}>Contact us</button>
                        </div>
                    ) : (
                        <div></div>
                    )}
                    <div className={styles.topmenu}>
                        <Link href="/">
                            <img src='/images/Logo.svg' alt="ABC" />
                        </Link>
                        <div className={styles.navbarr}>
                            <div className={styles.localisator} onClick={toggleModal}>
                                <img src={flagsrc} alt="flag" />
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
                                    <>
                                        <Localemodal isOpen={isModalOpen} />
                                    </>
                                )}
                            </div>
                            <img
                                src="/images/hamburger.svg"
                                alt="menu"
                                onClick={() => setIsNavbarExpanded(true)}
                            />
                        </div>
                    </div>
                </div>
            ) : (
                <div className={styles.topmenu}>
                    <div className={styles.navbarl}>
                        <Link href="/">
                            <img src='/images/Logo.svg' alt="ABC" />
                        </Link>
                        <ul className={styles.headbuttons}>
                            <li>
                                <Link href="/" className={currentPathname === `/${currentLocale}` ? styles.activepage : styles.nonactivepage }>
                                    {t("main")}
                                </Link>
                            </li>
                            <li>
                                <Link href="/aggregator" className={currentPathname === `/${currentLocale}/aggregator` ? styles.activepage : styles.nonactivepage} >
                                    {t("aggregator")}
                                </Link>
                            </li>
                            <li>
                                <Link href="/forpartners" className={currentPathname === `/${currentLocale}/forpartners` ? styles.activepage : styles.nonactivepage} >
                                    {t("forpartners")}
                                </Link>
                            </li>
                            <li>
                                <Link href="/faq" className={currentPathname === `/${currentLocale}/faq` ? styles.activepage : styles.nonactivepage} >
                                    FAQ
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.navbarr}>
                        <div className={styles.localisator} onClick={toggleModal}>
                            <img src={flagsrc} alt="flag" />
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
                                <>
                                    <Localemodal isOpen={isModalOpen} />
                                </>
                            )}
                        </div>
                        <button onClick={() => scrollTo("#form")}>{t("contactus")}</button>
                    </div>
                </div>
            )}
        </section>
    )
}

export default Header