import initTranslations from '../../../i18n';
import TranslationsProvider from '@/components/TranslationsProvider';
import SEO from '@/components/Cardinfo/Seoblock';
import Cardinfo from '@/components/Cardinfo/Cardinfoblock';
import Cardlist from '@/components/Agregator/Cardlist';
import Blocktitle from '@/components/Blocktitle/Blocktitle';
import styles from '@/styles/cardpage.module.css'
import { notFound } from 'next/navigation'

const i18nNamespaces = ['common'];

export async function generateStaticParams({ params: { category } }) {
  const items = await fetch(`https://api.abcrypto.io/api/categories/${category}/items/all`).then((res) => res.json())
  return items.data.map((item) => ({
    itemname: item.slug,
  }))
}

export async function generateMetadata({ params } ) {
  const name = params.itemname;
  const product = await fetch(`https://api.abcrypto.io/api/items/${name}`).then((res) => res.json());
 
  return {
    title: `${product.data.name} Crypto Service Review and Rating`,
    description: `A detailed review of the ${product.data.name} cryptocurrency Service. Description of tools and products the exchange offers to investors and pros and cons`
  }
}

async function getCardinfo(props) {
  const url = `https://api.abcrypto.io/api/items/${props.slug}`;
  const headers = new Headers({
    'App-Locale': props.lang,
  });

  const res = await fetch(url, { headers });

  if (!res.ok) return undefined

  return res.json();
}

async function getCards(props) {
  const url = `https://api.abcrypto.io/api/categories/${props.catslug}/items/all`;
  const headers = new Headers({
    'App-Locale': props.lang,
  });

  const res = await fetch(url, { headers });

  if (!res.ok) return undefined

  return res.json();
}

export default async function Home({ params }) {

  const locale = params.locale;
  const name = params.itemname;
  const { t,resources } = await initTranslations(locale, i18nNamespaces);
  const cardinfo = await getCardinfo({lang:locale,slug: name});

  if (!cardinfo) {
    notFound()
  }
  const seodata = cardinfo.data.seo;
  const carddes = cardinfo.data.description;
  const cardfeat = cardinfo.data.features;
  const catinfo = cardinfo.data.category;
  const cards = await getCards({lang:locale,catslug: catinfo.slug});

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}>
      <main>
        <Cardinfo cardinfo={cardinfo.data} cardfeatures={cardfeat} carddescriptions={carddes} />
        <SEO data={seodata} />
        <div className={styles.cardsbg}>
          <div className={styles.cardsblock} id="categorycardlist">
            <Blocktitle name={t('morein')} title={catinfo.name} />
            <Cardlist cardsArray={cards.data} catslug={catinfo.slug}/>
          </div>
        </div>
      </main>
    </TranslationsProvider>
  );
}
