import initTranslations from '../i18n';
import Header from '@/components/Header/Header';
import TranslationsProvider from '@/components/TranslationsProvider';
import '../../styles/global.css'
import Main from '@/components/Main/Main';
import Footer from '@/components/Footer/Footer';

const i18nNamespaces = ['common'];

async function getData(locale) {

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
  const { resources } = await initTranslations(locale, i18nNamespaces);
  const data = await getData(locale)
  

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}>
      <main>
        <Header />
        <Main />
        <Footer data={data} />
      </main>
    </TranslationsProvider>
  );
}

