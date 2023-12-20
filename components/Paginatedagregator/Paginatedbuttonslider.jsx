'use client'

import React, { useRef, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styles from '@/styles/paginatedbuttonslider.module.css'
import PaginatedCardlist from '@/components/Paginatedagregator/Paginatedcardlist'

const PaginatedButtonsSlider = (props) => {
  const { t } = useTranslation();
  const buttonLabels = props.data.data;
  const cards = props.cards;

  const containerRef = useRef(null);
  const sortedCategories = buttonLabels.slice().sort((a, b) => a.id - b.id);
  const catname = sortedCategories.map(item => item.name);

  const buttonWidth = 150;
  const handleScroll = (scrollAmount) => {
    const currentScroll = containerRef.current.scrollLeft;
    containerRef.current.scrollLeft = currentScroll + scrollAmount;
  };
  const [selectedCategoryId, setSelectedCategoryId] = useState(1);

  const [buttid, setId] = useState(null);
  const handleButtonClick = (buttonId) => {
    setId(buttonId);
    setSelectedCategoryId(buttonId);
  };


  return (
    <div className={styles.paginationblock}>
      {/* <Blocktitle name={t('aggregator')} title={catname[selectedCategoryId  1]} /> */}
      <div className={styles.carouselinscrollcontainer}>
        <div className={styles.agrsliderblock}>
          <div className={styles.scrollingcontainer} ref={containerRef}>
            <div className={styles.buttoncontainer}>
              {sortedCategories.map((buttonlabel) => (
                <button key={buttonlabel.id} onClick={() => handleButtonClick(buttonlabel.id)} className={buttonlabel.id === selectedCategoryId ? styles.activebutton : styles.nonactivebutton}
                >{buttonlabel.name}</button>
              ))}
            </div>
          </div>
          <div className={styles.agrslider}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none" onClick={() => handleScroll(-buttonWidth)}>
              <circle cx="15" cy="15" r="15" transform="rotate(180 15 15)" fill="#F6F6F6" className={styles.circleslide} />
              <path d="M17.0667 20.107L17.0665 20.1068L12.2892 15.0056L17.0667 9.8943C17.3111 9.63282 17.3111 9.21481 17.0667 8.95333C16.8133 8.68222 16.3944 8.68222 16.141 8.95333L10.9333 14.525C10.8104 14.6565 10.75 14.8219 10.75 14.9955C10.75 15.1556 10.8084 15.3323 10.9333 15.4659L16.1387 21.0351C16.392 21.3195 16.813 21.3194 17.0667 21.0479C17.3111 20.7864 17.3111 20.3684 17.0667 20.107Z" fill="black" stroke="black" strokeWidth="0.5" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none" onClick={() => handleScroll(buttonWidth)}>
              <circle cx="15" cy="15" r="15" fill="#F6F6F6" className={styles.circleslide} />
              <path d="M12.9333 9.89304L12.9335 9.89322L17.7108 14.9944L12.9333 20.1057C12.6889 20.3672 12.6889 20.7852 12.9333 21.0467C13.1867 21.3178 13.6056 21.3178 13.859 21.0467L19.0667 15.475C19.1896 15.3435 19.25 15.1781 19.25 15.0045C19.25 14.8444 19.1916 14.6677 19.0667 14.5341L13.8613 8.96486C13.608 8.68049 13.187 8.68062 12.9333 8.95207C12.6889 9.21355 12.6889 9.63156 12.9333 9.89304Z" fill="black" stroke="black" strokeWidth="0.5" />
            </svg>
          </div>
        </div>
        <PaginatedCardlist cards={cards} />
      </div>
    </div>
  );
};

export default PaginatedButtonsSlider;