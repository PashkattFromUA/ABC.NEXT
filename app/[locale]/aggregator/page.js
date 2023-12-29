import initTranslations from '../../i18n';
import Screensblock from '@/components/Screensblock/Screensblock';
import Agregator from '@/components/Agregator/Agregator';

const i18nNamespaces = ['common'];

export const metadata = {
  title: 'Aggregator',
};

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