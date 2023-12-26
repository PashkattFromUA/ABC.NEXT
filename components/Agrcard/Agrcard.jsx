'use client'

import React from "react";
import Link from "next/link";
import { useTranslation } from 'react-i18next';
import styles from '@/styles/agrcard.module.css'

const Agrcard = (props) => {

  const id = props.card.id;
  const { t } = useTranslation();

  return (
    <div className={styles.card1}>
      <div className={styles.cardtop}>
        <div className={styles.icontext}>
          <img src={props.card.icon_url} className={styles.iconcard} alt=" " />
          <div className={styles.cardnameplace}>
            <p className={styles.cardname}>{props.card.name}</p>
            <p className={styles.cardplace}>{props.card.place}</p>
          </div>
        </div>
        <div >
          <a href={props.card.rating_url} className={styles.cardrating} target="_blank" rel="noreferrer"><p>{props.card.rating}</p>
            <img src='/images/Star.svg' alt=" " /></a>
        </div>
      </div>
      <p className={styles.carddescriprion}>
        {props.card.short_description}
      </p>
      <div className={styles.cardbottom}>
          <Link href={`/category/${props.card.slug}`} state={`${id}`}><button>{t('moreinfo')}</button></Link>
        <div className={styles.svgscards}>
          <a href={props.card.link} target="_blank" rel="noreferrer"><svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="20"
              cy="20"
              r="20"
              fill="white"
              className={styles.circlecard}
            />
            <path
              d="M20.345 27.5179C24.5003 27.5179 27.8689 24.1493 27.8689 19.9939C27.8689 15.8386 24.5003 12.47 20.345 12.47C16.1896 12.47 12.821 15.8386 12.821 19.9939C12.821 24.1493 16.1896 27.5179 20.345 27.5179Z"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.821 19.9939H27.8689"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20.3451 27.5179C21.7994 27.5179 22.9784 24.1493 22.9784 19.9939C22.9784 15.8386 21.7994 12.47 20.3451 12.47C18.8907 12.47 17.7117 15.8386 17.7117 19.9939C17.7117 24.1493 18.8907 27.5179 20.3451 27.5179Z"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Agrcard;