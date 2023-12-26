import Header from '@/components/Header/Header';
import initTranslations from '../../../i18n';
import TranslationsProvider from '@/components/TranslationsProvider';
import Form from '@/components/Form/Form';
import '@/styles/global.css'
import ScrollToTopButt from '@/components/Scrolltotopbutt/Scrolltotopbutt';
import SEO from '@/components/Cardinfo/Seoblock';
import Cardinfo from '@/components/Cardinfo/Cardinfoblock';
import Footer from '@/components/Footer/Footer';

const i18nNamespaces = ['common'];

async function getCardinfo(props) {
  const url = `https://api.abcrypto.io/api/items/${props.slug}`;
  const headers = new Headers({
    'App-Locale': props.lang,
  });

  const res = await fetch(url, { headers });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

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

export default async function Home({ params }) {

  const locale = params.locale;
  const name = params.name;
  const { resources } = await initTranslations(locale, i18nNamespaces);
  const cardinfo = await getCardinfo({lang:locale,slug: name});
  const seodata = cardinfo.data.seo;
  const carddes = cardinfo.data.description;
  const cardfeat = cardinfo.data.features;

  const labels = await getLabels(locale);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}>
      <main>
        <Header />
        <Cardinfo cardinfo={cardinfo.data} cardfeatures={cardfeat} carddescriptions={carddes} />
        <SEO data={seodata} />
        <Form />
        <Footer data={labels} />
        <ScrollToTopButt />
      </main>
    </TranslationsProvider>
  );
}
