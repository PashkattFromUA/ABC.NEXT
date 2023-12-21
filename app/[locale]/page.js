import initTranslations from '../i18n';
import Header from '@/components/Header/Header';
import TranslationsProvider from '@/components/TranslationsProvider';
import '@/styles/global.css'
import Main from '@/components/Main/Main';
import Footer from '@/components/Footer/Footer';
import FAQ from '@/components/FAQ/FAQ';
import Agregatormain from '@/components/Agregatormain/Agregatormain';
import Improveus from '@/components/Improveus/Improveus';
import Form from '@/components/Form/Form';
import ScrollToTopButt from '@/components/Scrolltotopbutt/Scrolltotopbutt';

const i18nNamespaces = ['common'];

async function getLabels(locale) {

  const headers = {
    'App-Locale': `${locale}`
  };

  const res = await fetch('https://api.abcrypto.io/api/categories', { headers });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

async function getCards(locale) {

  const headers = {
    'App-Locale': `${locale}`
  };

  const res = await fetch(`https://api.abcrypto.io/api/categories/1/items/all`, { headers });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Home({ params: { locale } }) {
  const { resources } = await initTranslations(locale, i18nNamespaces);
  const labels = await getLabels(locale)
  const cards = await getCards(locale);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}>
      <main>
        <Header />
        <Main />
        <Agregatormain data={labels} cards={cards} />
        <Improveus />
        <FAQ />
        <Form />
        <Footer data={labels} />
        <ScrollToTopButt />
      </main>
    </TranslationsProvider>
  );
}
