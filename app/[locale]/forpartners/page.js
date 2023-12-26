import Form from "@/components/Form/Form";
import Header from "@/components/Header/Header";
import initTranslations from '../../i18n';
import TranslationsProvider from '@/components/TranslationsProvider';
import '@/styles/global.css'
import ScrollToTopButt from "@/components/Scrolltotopbutt/Scrolltotopbutt";
import Screensblock from "@/components/Screensblock/Screensblock";
import Footer from "@/components/Footer/Footer";

export const metadata = {
    title: 'For partners',
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

export default async function ForPartnersPage({ params: { locale } }) {

    const { t, resources } = await initTranslations(locale, i18nNamespaces);
    const labels = await getLabels(locale);

    return (
        <TranslationsProvider
            namespaces={i18nNamespaces}
            locale={locale}
            resources={resources}>
            <main>
                <Header />
                <Screensblock name={t('sbnamefpp')} title={t('sbtitlefpp')} />
                <Form />
                <Footer data={labels.data} />
                <ScrollToTopButt />
            </main>
        </TranslationsProvider>
    );
}