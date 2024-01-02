'use client'

import styles from '@/styles/loader.module.css'

export default function Loading() {
    return (
        <div className={styles.loaderblock}>
            <div className={styles.loaderbg}>
                Loading...
            </div>
        </div>
    )
}