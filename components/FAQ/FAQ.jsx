'use client'

import React from 'react'
import FAQitem from '@/components/FAQ/FAQitem'
import { useTranslation } from 'react-i18next';
import styles from '@/styles/faq.module.css'

const FAQ = () => {

  const { t } = useTranslation();

  return (
    <section className={styles.faq} id="FAQ">
      <div className={styles.faqleft}>
        <h2>FAQ</h2>
        <p>{t('faqtext')}</p>
      </div>
      <div className={styles.faqright}>
      <FAQitem title={t('faq1h')} text={t('faq1p')} />
      <FAQitem title={t('faq2h')} text={t('faq2p')} />
      <FAQitem title={t('faq3h')} text={t('faq3p')} />
      <FAQitem title={t('faq4h')} text={t('faq4p')} />
      <FAQitem title={t('faq5h')} text={t('faq5p')} />
      <FAQitem title={t('faq6h')} text={t('faq6p')} />
      <FAQitem title={t('faq7h')} text={t('faq7p')} />
      </div>
    </section>
  )
}


export default FAQ