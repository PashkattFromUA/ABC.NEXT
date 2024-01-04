import React from 'react'
import styles from '@/styles/description.module.css'

const Description = (props) => {

    const carddescriptions = props.carddescriptions;

    return (
        <div className={styles.descblock}>
            {carddescriptions.map((carddes) => {
                const text = carddes.paragraph;
                const p = text.split("\n");
                return (
                    <div key={carddes.heading}>
                        <h2>{carddes.heading}</h2>
                        {p.map((paragraph) => {
                            return (
                                <div key={paragraph}>
                                    <p>{paragraph}</p>
                                </div>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    )
}

export default Description