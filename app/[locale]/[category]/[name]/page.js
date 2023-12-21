import Header from '@/components/Header/Header';
import initTranslations from '../../../i18n';
import TranslationsProvider from '@/components/TranslationsProvider';
import Form from '@/components/Form/Form';
import '@/styles/global.css'

const i18nNamespaces = ['common'];

export default async function Home({ params }) {

  const locale = params.locale;
  const name = params.name;
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}>
      <main>
        <Header />
        {name}
        <Form />
      </main>
    </TranslationsProvider>
  );
}
