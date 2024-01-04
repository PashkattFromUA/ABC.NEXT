import React from 'react'
import styles from '@/styles/features.module.css'

const Features = (props) => {

    const cardfeatures = props.cardfeatures;

    return (
        <div className={styles.featblock}>
            {cardfeatures.map((cardfeat) => {
                return (
                    <div key={cardfeat.heading}>
                        <h2>{cardfeat.heading}</h2>
                        <p>{cardfeat.text}</p>
                    </div>
                );
            })}
        </div>
    )
}

export default Features