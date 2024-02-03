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
  const product = await fetch(`https://api.abcrypto.io/api/items/${itemname}`).then((res) => res.json());
  const { t } = await initTranslations(locale, i18nNamespaces);

  if (product.data.name === undefined) {
    return {
      title: `404: This page could not be found.`,
      description: `404: This page could not be found.`,
      alternates: {
        canonical: `/404`,
        languages: {
          'ru': `/ru/404`,
          'uk': `/uk/404`,
          'x-default':'/404',
          'en': '/404'
        }
      }
    }
  } else {
    return {
      title: `${product.data.name}${t('titlecard')}`,
      description: `${t('metacard1')}${product.data.name}${t('metacard2')}`,
      alternates: {
        canonical: `/${catname}/${itemname}`,
        languages: {
          'ru': `/ru/${catname}/${itemname}`,
          'uk': `/uk/${catname}/${itemname}`,
          'x-default':`/${catname}/${itemname}`,
          'en': `/${catname}/${itemname}`
        }
      },
      openGraph: {
        title: `${product.data.name}${t('titlecard')}`,
        description: `${t('metacard1')}${product.data.name}${t('metacard2')}`,
        url: `/${catname}/${itemname}`
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

  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": cardinfo.data.name,
    "description": cardinfo.data.short_description,
    "review": {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": cardinfo.data.rating,
        "bestRating": 5
      },
      "author": {
        "@type": "Person",
        "name": "ABCrypto"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": cardinfo.data.rating,
      "reviewCount": 30
    }
  }

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
