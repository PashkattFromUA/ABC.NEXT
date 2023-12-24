'use client'

import { React } from 'react'
import ButtonSlider from './Buttonslider'
import styles from '@/styles/agregator.module.css'

const Agregator = (props) => {
    const labels = props.data;
    
    return (
        <section className={styles.agregator}>
            <div className={styles.agregatorblock}>
                <div className={styles.agrmenu}>
                    <ButtonSlider data={labels} />
                </div>
            </div>
        </section>
    )
}

export default Agregator