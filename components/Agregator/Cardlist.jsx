'use client'

import React from 'react';
import Agrcard from '@/components/Agrcard/Agrcard';
import styles from '@/styles/cardlist.module.css'

const Cardlist = (props) => {
    console.log(props.cardsArray)
    const cards = props.cardsArray;
    const sortedCards = cards.slice().sort((a, b) => a.id - b.id);
    const catslug = props.catslug;
    

    return (
        <div className={styles.agrcards}>
            {sortedCards.map((card) => (
                <Agrcard card={card} key={card.id} catslug={catslug} />
            ))}
        </div>
    );
};

export default Cardlist;