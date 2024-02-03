import dynamic from 'next/dynamic';
const Agregator = dynamic(() => import('@/components/Agregator/Agregator'));
import initTranslations from '../../i18n';
const Screensblock = dynamic(() => import('@/components/Screensblock/Screensblock'));


const i18nNamespaces = ['common'];

export async function generateMetadata({ params }) {
  const locale = params.locale;
  const { t } = await initTranslations(locale, i18nNamespaces);

  return {
    title: `${t('titlemain')}`,
    description: `${t('metamain')}`,
    alternates: {
      canonical: `/aggregator`,
      languages: {
        'ru': `/ru/aggregator`,
        'uk': `/uk/aggregator`,
        'x-default':'/aggregator',
        'en': '/aggregator'
      }
    },
    openGraph: {
        url: `/aggregator`
    }
  }
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

export default async function Home({ params: { locale } }) {

  const { t } = await initTranslations(locale, i18nNamespaces);
  const labels = await getLabels(locale);

  return (
    <main>
      <Screensblock name={t('sbnameap')} title={t('sbtitleap')} />
      <Agregator data={labels} />
    </main>
  );
}