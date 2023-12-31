'use client'

import React, { useState } from 'react';
import styles from '@/styles/faqitem.module.css'

function FAQItem(props) {
  const [isContainerOpen, setIsContainerOpen] = useState(false);

  const toggleContainer = () => {
    setIsContainerOpen(!isContainerOpen);
  };

  const [isRotated, setIsRotated] = useState(false);

  const toggleRotation = () => {
    setIsRotated(!isRotated);
  }

  return (
    <div className={styles.FAQitem} onClick={() => {
      toggleContainer();
      toggleRotation();
    }}>
      <div className={styles.FAQblock} >
        <h3>{props.title}</h3>
        <div className={styles.faqbutt}>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none" className={isRotated ? styles.rotated : ''}>
            <circle cx="15" cy="15" r="15" transform="rotate(90 15 15)" fill="#F6F6F6" />
            <path d="M20.107 12.9333L20.1068 12.9335L15.0056 17.7108L9.8943 12.9333C9.63282 12.6889 9.21481 12.6889 8.95333 12.9333C8.68222 13.1867 8.68222 13.6056 8.95333 13.859L14.525 19.0667C14.6565 19.1896 14.8219 19.25 14.9955 19.25C15.1556 19.25 15.3323 19.1916 15.4659 19.0667L21.0351 13.8613C21.3195 13.608 21.3194 13.187 21.0479 12.9333C20.7864 12.6889 20.3684 12.6889 20.107 12.9333Z" fill="black" stroke="black" strokeWidth="0.5" />
          </svg>
        </div>
      </div>
      <div className={`${styles.container} ${isContainerOpen ? styles.containeropen : ''}`}>
        <div className={styles.FAQtext}>
          <p>{props.text}
          </p>
        </div>
      </div>
    </div>
  );
}

export default FAQItem;