import React from 'react'
import styles from '@/styles/description.module.css'

const Description = (props) => {

    const carddescriptions = props.carddescriptions;

    return (
        <div className={styles.descblock}>
            {carddescriptions.map((carddes, index) => {
                const text = carddes.paragraph;
                const p = text.split("\n");
                return (
                    <div key={carddes.heading}>
                        {index === 0 ? <h2>{carddes.heading}</h2> : <h3>{carddes.heading}</h3>}
                        {p.map((paragraph, pIndex) => {
                            return (
                                <div key={pIndex}>
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
