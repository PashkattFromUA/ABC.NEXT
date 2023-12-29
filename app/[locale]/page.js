import Main from '@/components/Main/Main';
import FAQ from '@/components/FAQ/FAQ';
import Agregatormain from '@/components/Agregatormain/Agregatormain';
import Improveus from '@/components/Improveus/Improveus';

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


export default async function Home({ params: { locale }  }) {
  const labels = await getLabels(locale);

  return (
      <main>
        <Main />
        <Agregatormain data={labels} />
        <Improveus />
        <FAQ />
      </main>
  );
}
