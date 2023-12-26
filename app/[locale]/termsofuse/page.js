import Form from "@/components/Form/Form";
import Header from "@/components/Header/Header";
import initTranslations from '../../i18n';
import TranslationsProvider from '@/components/TranslationsProvider';
import '@/styles/global.css'
import ScrollToTopButt from "@/components/Scrolltotopbutt/Scrolltotopbutt";
import styles from "@/styles/tofpage.module.css"
import Footer from "@/components/Footer/Footer";

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

    const { t, resources } = await initTranslations(locale, i18nNamespaces);
    const labels = await getLabels(locale);

    return (
        <TranslationsProvider
            namespaces={i18nNamespaces}
            locale={locale}
            resources={resources}>
            <main>
                <Header />
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
                <Form />
                <Footer data={labels.data} />
                <ScrollToTopButt />
            </main>
        </TranslationsProvider>
    );
}