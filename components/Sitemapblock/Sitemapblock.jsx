'use client'

import React from 'react'
import Link from 'next/link';
import styles from '@/styles/sitemapblock.module.css'
import Blocktitle from '../Blocktitle/Blocktitle';

const Sitemapblock = (props) => {

    const buttonLabels = props.data;
    const sortedCategories = buttonLabels.slice().sort((a, b) => a.id - b.id);
    console.log(sortedCategories[1].items)

    return (
        <div className={styles.sitemapblockbg}>
            <div className={styles.sitemapblock}>
                <Blocktitle name="Sitemap" />
                {sortedCategories.map((buttonlabel) => (
                    <div key={buttonlabel.id}>
                        <Link href={`/${buttonlabel.slug}`} className={styles.categorylink}>
                            {buttonlabel.name}
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7085 5.02398H2.9204C2.23291 5.02398 1.675 5.58189 1.675 6.26937V17.0875C1.675 17.775 2.23291 18.3329 2.9204 18.3329H13.7635C14.451 18.3329 15.0089 17.775 15.0089 17.0875V8.35725H16.6751V17.5021C16.6751 18.8804 15.556 19.9995 14.1772 19.9999H2.50665C1.12793 19.9999 0.00878906 18.8804 0.00878906 17.5021V5.8548C0.00878906 4.47608 1.12793 3.35693 2.50665 3.35693H11.7085V5.02398Z" fill="black" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M20.0002 7.21652H18.3315V2.84952L6.70927 14.4714L5.5293 13.2914L17.152 1.66872H12.7837V0H19.9994L20.0002 0.000416826V7.21652Z" fill="black" />
                            </svg>
                        </Link>
                        {buttonlabel.items && buttonlabel.items.length > 0 && (
                            <div className={styles.cardlinkblock}>
                                {buttonlabel.items.map((item) => (
                                    <Link href={`/${buttonlabel.slug}/${item.slug}`} key={item.id} className={styles.cardlink}>
                                        <img src={item.icon_url} alt='icon' />
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