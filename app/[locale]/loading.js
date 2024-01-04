'use client'

import styles from '@/styles/loader.module.css'
import { RotatingLines } from 'react-loader-spinner'

export default function Loading() {
    return (
        <div className={styles.loaderblock}>
                <RotatingLines strokeColor='#656565' />
        </div>
    )
}