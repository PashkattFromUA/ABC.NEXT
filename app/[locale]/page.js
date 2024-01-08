import dynamic from 'next/dynamic';
const Main = dynamic(() => import('@/components/Main/Main'));
const FAQ = dynamic(() => import('@/components/FAQ/FAQ'));
const Agregatormain = dynamic(() => import('@/components/Agregatormain/Agregatormain'));
const Improveus = dynamic(() => import('@/components/Improveus/Improveus'), { ssr: false })

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
