'use client'

import React, { useState } from 'react';
import Improveusmodal from '@/components/Improveus/Improveusmodal/Improveusmodal';
import { useTranslation } from 'react-i18next';
import styles from '@/styles/improveus.module.css'
import useWindowWidth from "@/hooks/useWindowDimension";
import Image from 'next/image';

const Improveus = () => {
  const { t } = useTranslation();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const scrollTo = (section) => {
    document.querySelector(section).scrollIntoView({ behavior: "smooth" });
  };

  const windowWidth = useWindowWidth();

  return (
    <section >
      {windowWidth < 664 ? (
        <div className={styles.improveus}>
          <div className={styles.improveleft}>
          <h2>{t('improvehead')}</h2>
          <p>{t('improvetext')}</p>
          <div className={styles.improveright}>
            <Image src="/images/improveus.png" width={616} height={472} loading="lazy" alt="Improveus" />
          </div>
          <div className={styles.improvebutt}>
              <button className={styles.button1} onClick={openModal}>{t('improvehead')}<svg xmlns="http://www.w3.org/2000/svg" width="7" height="8" viewBox="0 0 7 8" fill="none" >
                <path d="M0.646447 6.39645C0.451184 6.59171 0.451184 6.90829 0.646447 7.10355C0.841709 7.29882 1.15829 7.29882 1.35355 7.10355L0.646447 6.39645ZM7 1.25C7 0.973858 6.77614 0.75 6.5 0.75H2C1.72386 0.75 1.5 0.973858 1.5 1.25C1.5 1.52614 1.72386 1.75 2 1.75H6V5.75C6 6.02614 6.22386 6.25 6.5 6.25C6.77614 6.25 7 6.02614 7 5.75V1.25ZM1.35355 7.10355L6.85355 1.60355L6.14645 0.896447L0.646447 6.39645L1.35355 7.10355Z" fill="white" />
              </svg></button>
              <Improveusmodal isOpen={isModalOpen} closeModal={closeModal} />
              <span className={styles.button2} onClick={() => scrollTo('#FAQ')}>{t('haveaquestion')}</span>
            </div>
        </div>
        </div>
      ) : (
        <div className={styles.improveus}>
          <div className={styles.improveleft}>
            <h2>{t('improvehead')}</h2>
            <p>{t('improvetext')}</p>
            <div className={styles.improvebutt}>
              <button className={styles.button1} onClick={openModal}>{t('improvehead')}<svg xmlns="http://www.w3.org/2000/svg" width="7" height="8" viewBox="0 0 7 8" fill="none" >
                <path d="M0.646447 6.39645C0.451184 6.59171 0.451184 6.90829 0.646447 7.10355C0.841709 7.29882 1.15829 7.29882 1.35355 7.10355L0.646447 6.39645ZM7 1.25C7 0.973858 6.77614 0.75 6.5 0.75H2C1.72386 0.75 1.5 0.973858 1.5 1.25C1.5 1.52614 1.72386 1.75 2 1.75H6V5.75C6 6.02614 6.22386 6.25 6.5 6.25C6.77614 6.25 7 6.02614 7 5.75V1.25ZM1.35355 7.10355L6.85355 1.60355L6.14645 0.896447L0.646447 6.39645L1.35355 7.10355Z" fill="white" />
              </svg></button>
              <Improveusmodal isOpen={isModalOpen} closeModal={closeModal} />
              <span className={styles.button2} onClick={() => scrollTo('#FAQ')}>{t('haveaquestion')}</span>
            </div>
          </div>
          <div className={styles.improveright}>
            <Image src="/images/improveus.png" width={616} height={472}  loading="lazy" alt="Improveus" />
          </div>
        </div>
      )}
    </section>
  )
}

export default Improveus