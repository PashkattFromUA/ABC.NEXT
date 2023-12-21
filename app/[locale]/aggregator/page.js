import Header from '@/components/Header/Header';
import initTranslations from '../../i18n';
import TranslationsProvider from '@/components/TranslationsProvider';
import Form from '@/components/Form/Form';
import ScrollToTopButt from '@/components/Scrolltotopbutt/Scrolltotopbutt';
import Screensblock from '@/components/Screensblock/Screensblock';
import '@/styles/global.css'
import Footer from '@/components/Footer/Footer';

const i18nNamespaces = ['common'];

export const metadata = {
  title: 'Aggregator',
};

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

export default async function Home({ params: { locale } }) {

  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  const labels = await getLabels(locale);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}>
      <main>
        <Header />
        <Screensblock name={t('sbnameap')} title={t('sbtitleap')} />
        <Form />
        <Footer data={labels} />
        <ScrollToTopButt />
      </main>
    </TranslationsProvider>
  );
}