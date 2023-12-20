'use client'

import { React } from 'react'
import PaginatedButtonsSlider from '@/components/Paginatedagregator/Paginatedbuttonslider'
import styles from '@/styles/agregatormain.module.css'

const Agregatormain = (props) => {

    const cards = props.cards;
    const labels = props.data;
    
    return (
        <section className={styles.agregatormain}>
            <div className={styles.agregatorblockam} id="agregator">
                <div className={styles.agrmenuam}>
                    <PaginatedButtonsSlider data={labels} cards={cards} />
                </div>
            </div>
        </section>
    )
}

export default Agregatormain