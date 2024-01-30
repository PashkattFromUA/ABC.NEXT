import initTranslations from '../../../i18n';
import { Suspense, lazy } from 'react';
import dynamic from 'next/dynamic';
const Blocktitle = dynamic(() => import('@/components/Blocktitle/Blocktitle'));
const SEO = dynamic(() => import('@/components/Cardinfo/Seoblock'));
const Cardinfo = dynamic(() => import('@/components/Cardinfo/Cardinfo'));
const Cardlist = lazy(() => import('@/components/Agregator/Cardlist'));
import { notFound } from 'next/navigation';
import Loading from '../../loading';

const i18nNamespaces = ['common'];

export async function generateStaticParams({ params: { category } }) {
  const items = await fetch(`https://api.abcrypto.io/api/categories/${category}/items/all`).then((res) => res.json())
  return items.data.map((item) => ({
    itemname: item.slug,
  }))
}

export async function generateMetadata({ params }) {
  const locale = params.locale;
  const catname = params.category;
  const itemname = params.itemname;
  const mainurl = "https://abcrypto.io";
  const product = await fetch(`https://api.abcrypto.io/api/items/${itemname}`).then((res) => res.json());
  const { t } = await initTranslations(locale, i18nNamespaces);

  console.log(product)

  if (product.data.name === undefined) {
    return {
      title: `404: This page could not be found.`,
      description: `404: This page could not be found.`,
      alternates: {
        canonical: `${mainurl}/404`,
        languages: {
          'ru': `${mainurl}/ru/404`,
          'uk': `${mainurl}/uk/404`
        }
      }
    }
  } else {
    return {
      title: `${product.data.name} ${t('titlecard')}`,
      description: `${t('metacard1')}${product.data.name}${t('metacard2')}`,
      alternates: {
        canonical: `${mainurl}/${catname}/${itemname}`,
        languages: {
          'ru': `${mainurl}/ru/${catname}/${itemname}`,
          'uk': `${mainurl}/uk/${catname}/${itemname}`
        }
      },
      openGraph: {
        title: `${product.data.name} ${t('titlecard')}`,
        description: `${t('metacard1')}${product.data.name}${t('metacard2')}`,
        url: `${mainurl}/${catname}/${itemname}`,
        images: [
          {
            url: `${product.data.image_url}`,
            width: 1440,
            height: 900,
          }
        ],
        siteName: 'ABCrypto',
        type: 'website',
      }
    }
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
  const { t } = await initTranslations(locale, i18nNamespaces);
  const cardinfo = await getCardinfo({ lang: locale, slug: name });

  if (!cardinfo) {
    notFound()
  }
  const seodata = cardinfo.data.seo;
  const carddes = cardinfo.data.description;
  const cardfeat = cardinfo.data.features;
  const catinfo = cardinfo.data.category;
  const cards = await getCards({ lang: locale, catslug: catinfo.slug });

  return (
    <main>
      <Cardinfo cardinfo={cardinfo.data} cardfeatures={cardfeat} carddescriptions={carddes} />
      <SEO data={seodata} />
      <div className="gradient">
        <div className="block" id="categorycardlist">
          <Blocktitle name={t('morein')} title={catinfo.name} />
          <Suspense fallback={<Loading />}>
          <Cardlist cardsArray={cards.data} catslug={catinfo.slug} />
          </Suspense>
        </div>
      </div>
    </main>
  );
}
