'use client'

import React from "react";
import styles from "@/styles/screensblock.module.css";

const Screensblock = (props) => {
  return (
    <div className={styles.screensblock}>
      <h1>{props.name}</h1>
      <p>{props.title}</p>
    </div>
  );
};

export default Screensblock;