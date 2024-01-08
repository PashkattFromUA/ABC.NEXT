import initTranslations from '../../i18n';
import Blocktitle from '@/components/Blocktitle/Blocktitle';
import Screensblock from '@/components/Screensblock/Screensblock';
import Cardlist from '@/components/Agregator/Cardlist';
import { notFound } from 'next/navigation';

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

  if (!res.ok) {
    console.error('Failed to fetch data')
  }

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

  return {
    title: `${t('titlecategoryleft')}${resultObject.name}${t('titlecategoryright')}`,
    description: `${t('metacategoryleft')}${resultObject.name}${t('metacategoryright')}`
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
  var resultObject = labels.data.find(function (item) {
    return item.slug === catslug;
  });

  return (
    <main>
      <Screensblock name={t('sbnameap')} title={`${t('sbtitleleftcp')}${resultObject.name}${t('sbtitlerightcp')}`} />
      <div className="gradient">
        <div className="block" id="categorycardlist">
            <Blocktitle name={t('allin')} title={resultObject.name} />
            <div>
              <Cardlist cardsArray={cards.data} catslug={resultObject.slug} />
            </div>
        </div>
      </div>
    </main>
  );
}
