'use client'

import { Oval } from "react-loader-spinner";
import styles from '@/styles/loader.module.css'

export default function Loading() {
    return (
        <div className={styles.loaderblock}>
            <div className={styles.loaderbg}>
                <Oval color="#1e1e21"  secondaryColor="#656565;" />
            </div>
        </div>
    )
}