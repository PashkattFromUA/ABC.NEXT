import Header from '@/components/Header/Header';
import initTranslations from '../../i18n';
import TranslationsProvider from '@/components/TranslationsProvider';
import Form from '@/components/Form/Form';
import ScrollToTopButt from '@/components/Scrolltotopbutt/Scrolltotopbutt';

const i18nNamespaces = ['common'];

export const metadata = {
  title: 'Aggregator',
};

export default async function Home({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}>
      <main>
        <Header />
        Aggregator
        <Form />
        <ScrollToTopButt />
      </main>
    </TranslationsProvider>
  );
}