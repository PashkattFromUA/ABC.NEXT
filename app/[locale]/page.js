import initTranslations from '../i18n';
import Header from '@/components/Header/Header';
import TranslationsProvider from '@/components/TranslationsProvider';
import '../../styles/global.css'

const i18nNamespaces = ['common'];

export default async function Home({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}>
      <main>
        <Header />
      </main>
    </TranslationsProvider>
  );
}