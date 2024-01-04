'use client'

import React from 'react'
import Link from 'next/link';
import styles from '@/styles/sitemapblock.module.css'
import Blocktitle from '../Blocktitle/Blocktitle';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

const Sitemapblock = (props) => {

    const buttonLabels = props.data;
    const sortedCategories = buttonLabels.slice().sort((a, b) => a.id - b.id);
    const {t} = useTranslation();

    return (
        <div className="gradient">
            <div className="block">
                <Blocktitle name={t('sitemap')} />
                {sortedCategories.map((buttonlabel) => (
                    <div key={buttonlabel.id}>
                        <Link href={`/${buttonlabel.slug}`} className={styles.categorylink}>
                            {buttonlabel.name}
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M8.78165 4.26787H2.19054C1.67493 4.26787 1.2565 4.68629 1.2565 5.20191V13.3155C1.2565 13.8311 1.67493 14.2495 2.19054 14.2495H10.3229C10.8385 14.2495 11.2569 13.8311 11.2569 13.3155V6.76781H12.5066V13.6264C12.5066 14.6601 11.6672 15.4995 10.6332 15.4998H1.88023C0.846193 15.4998 0.00683594 14.6601 0.00683594 13.6264V4.89098C0.00683594 3.85694 0.846193 3.01758 1.88023 3.01758H8.78165V4.26787Z" fill="black" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M15.0007 5.91239H13.7491V2.63714L5.03244 11.3535L4.14746 10.4685L12.8645 1.75154H9.58829V0.5H15L15.0007 0.500313V5.91239Z" fill="black" />
                            </svg>
                        </Link>
                        {buttonlabel.items && buttonlabel.items.length > 0 && (
                            <div className={styles.cardlinkblock}>
                                {buttonlabel.items.map((item) => (
                                    <Link href={`/${buttonlabel.slug}/${item.slug}`} key={item.id} className={styles.cardlink}>
                                        <Image src={item.icon_url} width={40} height={40} loading='lazy' alt='icon' />
                                        <span>{item.name}</span>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Sitemapblock