'use client'

import React from "react";
import styles from '@/styles/blocktitle.module.css'
const Blocktitle = (props) => {
  return (
    <div className={styles.blocktitle}>
      <h2>{props.name}</h2>
      <p>{props.title}</p>
    </div>
  );
};

export default Blocktitle;