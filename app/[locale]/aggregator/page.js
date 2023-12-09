import initTranslations from '../../i18n';
import ExampleClientComponent from '@/components/ExampleClientComponent';
import LanguageChanger from '@/components/LanguageChanger';
import TranslationsProvider from '@/components/TranslationsProvider';

const i18nNamespaces = ['common'];

export default async function Home({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}>
      <main>
        <h1>{t('aggregator')}</h1>
        <ExampleClientComponent />
        <LanguageChanger />
      </main>
    </TranslationsProvider>
  );
}