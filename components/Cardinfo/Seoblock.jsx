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
          <div>
            <h2 key={cardseo.heading}>{cardseo.heading}</h2>
            {p.map((paragraph, index)=> {
              return (
                <div>
                  <p key={index}>{paragraph}</p>
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