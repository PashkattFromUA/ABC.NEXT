'use client'

import React, { useState, useEffect } from "react";
import Agrcard from '@/components/Agrcard/Agrcard'
import styles from '@/styles/paginatedcardlist.module.css'
import PaginationButtons from "./Paginationbuttons";

const Cardlist = (props) => {
  const cards = props.cards;
  const catslug = props.catslug;
  const cardsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(props.resetpage);
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);

  useEffect(() => {
    setCurrentPage(props.resetpage);
  }, [props.cards, props.resetpage]);

  const scrollTo = (section) => {
    document
      .querySelector(section)
      .scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    scrollTo('#agregator');
  };


  return (
    <div className={styles.cardlistam}>
        <div>
        <div className={styles.paginatedcardlist}>
          {currentCards.map((card) => (
            <Agrcard card={card} key={card.id} catslug={catslug} />
          ))}
        </div>
        <PaginationButtons
            currentPage={currentPage}
            totalPages={Math.ceil(cards.length / cardsPerPage)}
            onPageChange={handlePageChange}
          />
        </div>
    </div>
  );
};

export default Cardlist;