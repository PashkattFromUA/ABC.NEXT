'use client'

import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import styles from '@/styles/paginationbuttons.module.css'

const PaginationButtons = ({ currentPage, totalPages, onPageChange }) => {

  const { t } = useTranslation();

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const buttonsToShow = 4;
    const startIndex = Math.max(1, currentPage - Math.floor(buttonsToShow / 2));
    const endIndex = Math.min(totalPages, startIndex + buttonsToShow - 1);

    for (let i = startIndex; i <= endIndex; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => onPageChange(i)}
          className={currentPage === i ? styles.pagesactive : styles.pages}
        >
          {i}
        </button>
      );
    }

    return pageNumbers;
  };

  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    setWindowWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      {windowWidth < 664 ? (
        <div className={styles.mobilepagination}>
          <button
            className={styles.mobileprevious}
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="9"
              height="16"
              viewBox="0 0 9 16"
            >
              <path
                d="M8.53771 14.4264L8.53755 14.4262L2.52593 8.00708L8.53771 1.5752C8.82076 1.27237 8.82076 0.787172 8.53771 0.484344C8.24566 0.171885 7.764 0.171885 7.47195 0.484344L0.962287 7.4489C0.820051 7.60108 0.75 7.79231 0.75 7.99433C0.75 8.18031 0.818072 8.38546 0.962287 8.53976L7.46961 15.5018C7.76147 15.8302 8.24532 15.8301 8.53771 15.5172C8.82076 15.2144 8.82076 14.7292 8.53771 14.4264Z"
                fill="#2A2B2F"
                stroke="#2A2B2F"
                strokeWidth="0.5"
              />
            </svg>
          </button>
          <div className={styles.allpages}>{renderPageNumbers()}</div>
          <button
            className={styles.mobilenext}
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="9"
              height="16"
              viewBox="0 0 9 16"
              fill="none"
            >
              <path
                d="M0.462287 1.57362L0.462454 1.5738L6.47407 7.99292L0.462287 14.4248C0.179238 14.7276 0.179238 15.2128 0.462287 15.5157C0.754337 15.8281 1.236 15.8281 1.52805 15.5157L8.03771 8.5511C8.17995 8.39892 8.25 8.20769 8.25 8.00567C8.25 7.81969 8.18193 7.61454 8.03771 7.46024L1.53039 0.498191C1.23853 0.169836 0.754676 0.169943 0.462287 0.482765C0.179238 0.785594 0.179238 1.27079 0.462287 1.57362Z"
                fill="#2A2B2F"
                stroke="#2A2B2F"
                strokeWidth="0.5"
              />
            </svg>
          </button>
        </div>
      ) : (
        <div className={styles.paginationbuttons}>
          <button
            className={styles.previous}
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            {t('previous')}
          </button>
          <div className={styles.allpages}>{renderPageNumbers()}</div>
          <button
            className={styles.next}
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            {t('next')}
          </button>
        </div>
      )}
    </div>
  );
};

export default PaginationButtons;