'use client'

import React from "react";
import styles from '@/styles/seoblock.module.css'

function SEO(props) {

  const seodata = props.data;

  return (
    <div className={styles.seoblock}>
      {seodata.map((cardseo) => {
        const text = cardseo.text;
        const p = text.split("\n");
        return (
          <div key={cardseo.heading}>
            <h3>{cardseo.heading}</h3>
            {p.map((paragraph)=> {
              return (
                <div key={paragraph}>
                  <p>{paragraph}</p>
                </div>
              )
            })}
          </div>
        );
      })}
    </div>
  );
}

export default SEO;