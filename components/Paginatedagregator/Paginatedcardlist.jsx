'use client'

import React, { useState } from "react";
import Agrcard from '@/components/Agrcard/Agrcard'
import styles from '@/styles/paginatedcardlist.module.css'
import PaginationButtons from "./Paginationbuttons";

const Cardlist = (props) => {
  const cards = props.cards.data;
  const cardsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);

  // const scrollTo = (section) => {
  //   document
  //     .querySelector(section)
  //     .scrollIntoView({ behavior: "smooth", block: "start" });
  // };

  // const scrollSetPage = (page) => {
  //   setPage({ p: page });
  //   // scrollTo("#agregator");
  // };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };


  return (
    <div className={styles.cardlistam}>
        <div>
        <div className={styles.paginatedcardlist}>
          {currentCards.map((card) => (
            <Agrcard card={card} key={card.id} />
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