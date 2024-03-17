'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/search.module.css'
import { useTranslation } from 'react-i18next';

const Search = (props) => {

    const searchimagesrc = '/images/search.svg';
    const closesearchimagesrc = '/images/closesearch.svg';
    const [cards, setCards] = useState([]);
    const {t} = useTranslation()

    const [searchResults, setSearchResults] = useState([]);
    const itemsWithSlug = cards.flatMap(category =>
        category.items.map(item => ({
            ...item,
            catslug: category.slug,
            catname: category.name
        }))
    );

    useEffect(() => {
        const getCards = async () => {
            const response = await fetch('/api/search');
            const data = await response.json();
            setCards(data.data);
        };
        getCards();
    }, []);

    useEffect(() => {
        const results = itemsWithSlug.filter(element =>
            element.name.toLowerCase().includes(props.searchparams.toLowerCase())
        );
        if (props.searchparams === '') {
            setSearchResults([]);
        } else {
            setSearchResults(results);
        }
    }, [props.searchparams, cards]);

    return (
        <div className={styles.searchblock}>
            <button onClick={props.openSearch} className={props.isSearchOpen ? styles.opensearchopen : styles.opensearchclosed}><Image src={searchimagesrc} width={19.25} height={19.25} alt='search' /></button>
            <div className={props.isSearchOpen ? styles.searchinputopen : styles.searchinputclosed}>
                <div className={styles.inputimg}>
                    <Image src={searchimagesrc} width={19.25} height={19.25} alt='search' />
                    <input
                        type='text'
                        placeholder={t('searchplaceholder')}
                        value={props.searchparams}
                        onChange={(e) => props.setQuery(e.target.value)}
                    />
                </div>
                <button onClick={props.closeSearch}><Image src={closesearchimagesrc} width={19.25} height={19.25} alt='closesearch' /></button>
            </div>
            <div className={props.searchparams === '' ? styles.noresult : styles.result}>
                {searchResults.length === 0 && props.searchparams !== '' ? <div className={styles.notfound}>{t('noresult')}</div> :
                    searchResults.map(card => (
                        <Link href={`/${card.catslug}/${card.slug}`} key={card.id} onClick={props.handleLinkClick}>
                            <img src={card.icon_url} alt={card.name} width={44} height={44} />
                            <div className={styles.namecat}>
                                <p>{card.name}</p>
                                <span>{card.catname}</span>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Search;
