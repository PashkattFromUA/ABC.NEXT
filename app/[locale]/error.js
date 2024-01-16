'use client' // Error components must be Client Components

import { useEffect } from 'react'
import styles from '@/styles/error.module.css'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'


export default function Error({ error, reset }) {
    useEffect(() => {
        console.error(error)
    }, [error])

    const {t} = useTranslation();

    return (
        <main>
            <div className={styles.errorblock}>
                <div>
                    <h1>{t('errorheader')}</h1>
                    <p>{t('errortext')}</p>
                    <button onClick={() => reset()}>{t('tryagain')}</button>
                </div>
                <Image src='/images/Errorimg.svg' width={705} height={315} priority alt="error" />
            </div>
        </main>
    )
}