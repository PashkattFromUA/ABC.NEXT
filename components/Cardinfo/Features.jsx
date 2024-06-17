import React from 'react'
import styles from '@/styles/features.module.css'

const Features = (props) => {

    const cardfeatures = props.cardfeatures;

    return (
        <div className={styles.featblock}>
            {cardfeatures.map((cardfeat) => {
                return (
                    <div key={cardfeat.heading}>
                        <p className={styles.main}>{cardfeat.heading}</p>
                        <p className={styles.additional}>{cardfeat.text}</p>
                    </div>
                );
            })}
        </div>
    )
}

export default Features