import initTranslations from '../../i18n';
import dynamic from 'next/dynamic';
const Screensblock = dynamic(() => import('@/components/Screensblock/Screensblock'));
const Sitemapblock = dynamic(() => import('@/components/Sitemapblock/Sitemapblock'));

const i18nNamespaces = ['common'];

export async function generateMetadata({ params: { locale } }) {
   
    const { t } = await initTranslations(locale, i18nNamespaces);
    const mainurl = "https://abcrypto.io";

    return {
      title: `${t('sitemap')} acrypto.io`,
      description: `${t('metamain')}`,
      alternates: {
        canonical: `${mainurl}/sitemap`,
        languages: {
          'ru': `${mainurl}/ru/sitemap`,
          'uk': `${mainurl}/uk/${catname}/sitemap`
        }
      },
      openGraph: {
        url: `${mainurl}/sitemap`
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

export default async function SitemapPage({ params: { locale } }) {

    const { t } = await initTranslations(locale, i18nNamespaces);
    const labels = await getLabels(locale);

    return (
            <main>
                <Screensblock name={t('sbnameap')} title={t('sbtitleap')} />
                <Sitemapblock data={labels.data} />
            </main>
    );
}