import dynamic from 'next/dynamic';
const Form = dynamic(() => import('@/components/Form/Form'));
const Header = dynamic(() => import('@/components/Header/Header'));
import i18nConfig from '@/i18nConfig';
import { dir } from 'i18next';
import { DM_Sans, Roboto } from 'next/font/google';
import initTranslations from '../i18n';
import TranslationsProvider from '@/components/TranslationsProvider';
const Footer = dynamic(() => import('@/components/Footer/Footer'));
const ScrollToTopButt = dynamic(() => import('@/components/Scrolltotopbutt/Scrolltotopbutt'));
import '@/styles/global.css'
import HolyLoader from "holy-loader";
import { GoogleAnalytics } from '@next/third-parties/google'

const i18nNamespaces = ['common'];

export function generateStaticParams() {
  return i18nConfig.locales.map(locale => ({ locale }));
}

const roboto = Roboto({ subsets: ['cyrillic'], weight: ['400', '500', '700'], });
const dmsans = DM_Sans({ subsets: ['latin'] });

export async function generateMetadata({ params }) {
  const locale = params.locale;
  const { t } = await initTranslations(locale, i18nNamespaces);
  const mainurl = "https://abcrypto.io";

  return {
    title: `${t('titlemain')}`,
    description: `${t('metamain')}`,
    alternates: {
      canonical: `${mainurl}`,
      languages: {
        'ru': `${mainurl}/ru`,
        'uk': `${mainurl}/uk`
      }
    }
  }
}

async function getCategories(lang) {
  const url = 'https://api.abcrypto.io/api/sitemap';
  const headers = new Headers({
    'App-Locale': lang,
  });

  const res = await fetch(url, { headers });

  if (!res.ok) {
    console.error('Failed to fetch data')
  }

  return res.json();
}

export default async function RootLayout({ children, params: { locale } }) {
  const { resources } = await initTranslations(locale, i18nNamespaces);
  const labels = await getCategories(locale);
  const catnames = labels.data.filter(item => item.type === 'category');
  const catnamesArray = catnames.map(item => ({
    id: item.data.id,
    slug: item.data.slug,
    name: item.data.name,
  }));


  return (
    <html lang={locale} dir={dir(locale)}>
      <head>
      </head>
      <TranslationsProvider
        namespaces={i18nNamespaces}
        locale={locale}
        resources={resources}>
        <body className={locale === 'en' ? dmsans.className : roboto.className}>
          <Header />
          {children}
          <Form />
          <Footer data={catnamesArray} />
          <ScrollToTopButt />
          <HolyLoader color="linear-gradient(125deg, #FC6E49 0%, #D368A9 23.67%, #825DE1 45.42%, #4F77EF 71.83%, #53C6E3 100%)" height="4px" />
        </body>
        <GoogleAnalytics gaId="G-R7WJWEWG9V" />
      </TranslationsProvider>
    </html>
  );
}