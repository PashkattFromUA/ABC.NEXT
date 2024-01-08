'use client'

import { RotatingLines } from "react-loader-spinner";
import styles from '@/styles/loader.module.css'

export default function Loading() {
    return (
        <main>
            <div className={styles.loaderblock}>
                <RotatingLines strokeColor="#C3C3C3" />
            </div>
        </main>
    );
}