import initTranslations from '../../i18n';
import '@/styles/global.css'
import Blocktitle from '@/components/Blocktitle/Blocktitle';
import Screensblock from '@/components/Screensblock/Screensblock';
import Cardlist from '@/components/Agregator/Cardlist';
import styles from '@/styles/catpage.module.css'
import { notFound } from 'next/navigation'

const i18nNamespaces = ['common'];

export async function generateStaticParams() {
  const labels = await fetch('https://api.abcrypto.io/api/sitemap').then(res => res.json());
  const catnames = labels.data.filter(item => item.type === 'category');
  const catslugArray = catnames.map(item => ({slug: item.data.slug,}));
  return catslugArray.map(item => ({ category: item.slug}));
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

export default async function Home({ params }) {

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
        <div className={styles.cardlistbg}>
          <div className={styles.cardlistblock} id="categorycardlist">
            <Blocktitle name={t('allin')} title={resultObject.name} />
            <div>
              <Cardlist cardsArray={cards.data} catslug={resultObject.slug} />
            </div>
          </div>
        </div>
      </main>
  );
}
