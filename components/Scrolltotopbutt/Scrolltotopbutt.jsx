'use client'

import React, { useState, useEffect } from "react";
import styles from '@/styles/scrolltotopbutt.module.css'

const ScrollToTopButt = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={ isVisible === true ? styles.scrolltotopbuttvisible : styles.scrolltotopbutt }
      onClick={scrollToTop}
    >
      <svg
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="25" cy="25" r="25" fill="#fff" />
        <path
          d="M14.6154 30.9508L14.6155 30.9506L24.9886 21.2361L35.3821 30.9508C35.809 31.3497 36.4958 31.3497 36.9226 30.9508C37.3591 30.5428 37.3591 29.8727 36.9226 29.4647L25.7793 19.0492C25.5651 18.849 25.2964 18.75 25.0091 18.75C24.7456 18.75 24.4551 18.8471 24.2388 19.0492L13.0981 29.4623C12.6379 29.8701 12.638 30.5424 13.0749 30.9508C13.5017 31.3497 14.1885 31.3497 14.6154 30.9508Z"
          fill="black"
          stroke="black"
          strokeWidth="0.5"
        />
      </svg>
    </div>
  );
};

export default ScrollToTopButt;