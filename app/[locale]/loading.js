'use client'

import styles from '@/styles/loader.module.css'
import { RotatingLines } from 'react-loader-spinner'

export default function Loading() {
    return (
        <div className={styles.loaderblock}>
                <RotatingLines strokeColor='#c3c3c3' />
        </div>
    )
}