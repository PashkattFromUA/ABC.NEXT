import { Suspense, lazy } from 'react';
import initTranslations from '../../i18n';
import dynamic from 'next/dynamic';
const Blocktitle = dynamic(() => import('@/components/Blocktitle/Blocktitle'));
const Screensblock = dynamic(() => import('@/components/Screensblock/Screensblock'));
const Cardlist = lazy(() => import('@/components/Agregator/Cardlist'));
import { notFound } from 'next/navigation';
import Loading from '../loading';

const i18nNamespaces = ['common'];

async function getCards(props) {
  const url = `https://api.abcrypto.io/api/categories/${props.catslug}/items/all`;
  const headers = new Headers({
    'App-Locale': props.lang,
  });

  const res = await fetch(url, { headers });

  if (!res.ok) return undefined

  return res.json();
}

async function getLabels(lang) {
  const url = 'https://api.abcrypto.io/api/categories';
  const headers = new Headers({
    'App-Locale': lang,
  });

  const res = await fetch(url, { headers });

  if (!res.ok) return undefined

  return res.json();
}

export async function generateMetadata({ params }) {
  const locale = params.locale;
  const catslug = params.category;
  const { t } = await initTranslations(locale, i18nNamespaces);
  const labels = await getLabels(locale);
  var resultObject = labels.data.find(function (item) {
    return item.slug === catslug;
  });

  if (resultObject === undefined) {
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
      title: `${t('titlecategoryleft')}${resultObject.name}${t('titlecategoryright')}`,
      description: `${t('metacategoryleft')}${resultObject.name}${t('metacategoryright')}`,
      openGraph: {
        title: `${t('titlecategoryleft')}${resultObject.name}${t('titlecategoryright')}`,
        description: `${t('metacategoryleft')}${resultObject.name}${t('metacategoryright')}`,
        url: `/${catslug}`
      }
    }
  }
}

export default async function CategoryPage({ params }) {

  const locale = params.locale;
  const catslug = params.category;
  const { t } = await initTranslations(locale, i18nNamespaces);
  const cards = await getCards({ lang: locale, catslug: catslug });
  if (!cards) {
    notFound()
  }

  const labels = await getLabels(locale);
  if (!labels) {
    notFound()
  }
  var resultObject = labels.data.find(function (item) {
    return item.slug === catslug;
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": cards.data.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "url": `https://abcrypto.io/${catslug}/${item.slug}`,
      "name": item.name
    }))
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Screensblock name={`${resultObject.name}${t('sbnamerightcp')}`} title={`${t('sbtitleleftcp')}${resultObject.name}${t('sbtitlerightcp')}`} />
      <div className="gradient">
        <div className="block" id="categorycardlist">
          <Blocktitle name={t('allin')} title={resultObject.name} />
          <div>
            <Suspense fallback={<Loading />}>
              <Cardlist cardsArray={cards.data} catslug={resultObject.slug} />
            </Suspense>
          </div>
        </div>
      </div>
    </main>
  );
}
