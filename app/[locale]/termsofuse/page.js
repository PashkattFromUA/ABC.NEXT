import initTranslations from '../../i18n';
import styles from "@/styles/tofpage.module.css"

export const metadata = {
    title: 'Terms of Use',
};

const i18nNamespaces = ['common'];

async function getLabels(lang) {
    const url = 'https://api.abcrypto.io/api/categories';
    const headers = new Headers({
        'App-Locale': lang,
    });

    const res = await fetch(url, { headers });

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}

export default async function TermsofusePage({ params: { locale } }) {

    const { t } = await initTranslations(locale, i18nNamespaces);

    return (
        <main>
            <div className={styles.toftext}>
                <div className={styles.toftextleft}>
                    <h2>{t('epheadleft')}</h2>
                    <p>{t('eptextleft')}</p>
                </div>
                <div className={styles.toftextright}>
                    <h4>{t('epheader')}</h4>
                    <p>{t('eptext1')}</p>
                    <p>{t('eptext2')}</p>
                    <h5>{t('epheader2')}</h5>
                    <p>{t('eptext3')}</p>
                    <h5>{t('epheader3')}</h5>
                    <p>{t('eptext4')}</p>
                    <p>{t('eptext5')}</p>
                    <h5>{t('epheader4')}</h5>
                    <p>{t('eptext6')}</p>
                </div>
            </div>
        </main>
    );
}