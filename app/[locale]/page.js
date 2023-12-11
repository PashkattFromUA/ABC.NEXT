import initTranslations from '../i18n';
import Header from '@/components/Header/Header';
import TranslationsProvider from '@/components/TranslationsProvider';
import '../../styles/global.css'
import Main from '@/components/Main/Main';
import Footer from '@/components/Footer/Footer';

const i18nNamespaces = ['common'];

export default async function Home({ params: { locale } }) {
  const { resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}>
      <main>
        <Header />
        <Main />
        <Footer />
      </main>
    </TranslationsProvider>
  );
}

