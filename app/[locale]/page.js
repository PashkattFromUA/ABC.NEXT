import { lazy, Suspense } from 'react';
import Main from '@/components/Main/Main';
const FAQ = lazy(() => import('@/components/FAQ/FAQ'));
import Agregatormain from '@/components/Agregatormain/Agregatormain';
const Improveus = lazy(() => import('@/components/Improveus/Improveus'));
import Loading from './loading';

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
      <Suspense fallback={<Loading />}>
        <Improveus />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <FAQ />
      </Suspense>
    </main>
  );
}
