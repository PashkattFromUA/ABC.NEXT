import initTranslations from '../../../i18n';
import TranslationsProvider from '@/components/TranslationsProvider';
import '@/styles/global.css'
import SEO from '@/components/Cardinfo/Seoblock';
import Cardinfo from '@/components/Cardinfo/Cardinfoblock';
import Cardlist from '@/components/Agregator/Cardlist';
import Blocktitle from '@/components/Blocktitle/Blocktitle';
import styles from '@/styles/cardpage.module.css'

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

async function getCards(props) {
  const url = `https://api.abcrypto.io/api/categories/${props.catslug}/items/all`;
  const headers = new Headers({
    'App-Locale': props.lang,
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
  const catinfo = cardinfo.data.category;
  const cards = await getCards({lang:locale,catslug: catinfo.slug});

  const labels = await getLabels(locale);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}>
      <main>
        <Cardinfo cardinfo={cardinfo.data} cardfeatures={cardfeat} carddescriptions={carddes} />
        <SEO data={seodata} />
        <div className={styles.cardsbg}>
          <div className={styles.cardsblock}>
            <Blocktitle name="More in" title={catinfo.name} />
            <Cardlist cardsArray={cards.data} />
          </div>
        </div>
      </main>
    </TranslationsProvider>
  );
}
