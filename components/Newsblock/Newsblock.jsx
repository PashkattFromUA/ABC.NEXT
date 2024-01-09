'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
const Newsmodal = dynamic(() => import('@/components/Newsblock/Newsmodal/Newsmodal'), { ssr: false })
import styles from '@/styles/newspage.module.css'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'

const Newsblock = () => {

    const {t} = useTranslation();

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className={styles.newsblock}>
            <div>
                <h1>{t('comingsoon')}</h1>
                <p>{t('newsblocktext')}</p>
                <button className={styles.newsbutt} onClick={openModal}>{t('newsmodalbutt')}</button>
                {isModalOpen && <Newsmodal isOpen={isModalOpen} closeModal={closeModal} />}
            </div>
            <Image src='/images/Comingsoon.svg' width={705} height={315} priority alt="error" />
        </div>
    )
}

export default Newsblock