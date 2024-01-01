import Form from '@/components/Form/Form';
import Header from '@/components/Header/Header';
import i18nConfig from '@/i18nConfig';
import { dir } from 'i18next';
import { DM_Sans } from 'next/font/google';
import initTranslations from '../i18n';
import TranslationsProvider from '@/components/TranslationsProvider';
import Footer from '@/components/Footer/Footer';
import ScrollToTopButt from '@/components/Scrolltotopbutt/Scrolltotopbutt';
import '@/styles/global.css'

const dmsans = DM_Sans({ subsets: ['latin'] });

export const metadata = {
  title: 'Alhamdulillah',
  description: 'Generated by create next app',
};

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

export function generateStaticParams() {
  return i18nConfig.locales.map(locale => ({ locale }));
}

export default async function RootLayout({ children, params: { locale } }) {

  const i18nNamespaces = ['common'];
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&display=swap" rel="stylesheet" />
      </head>
      <TranslationsProvider
        namespaces={i18nNamespaces}
        locale={locale}
        resources={resources}>
        <body className={dmsans.className}>
          <Header />
          {children}
          <Form />
          <Footer data={catnamesArray} />
          <ScrollToTopButt />
        </body>
      </TranslationsProvider>
    </html>
  );
}