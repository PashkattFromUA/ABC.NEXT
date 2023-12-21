import Header from '@/components/Header/Header';
import initTranslations from '../../i18n';
import TranslationsProvider from '@/components/TranslationsProvider';
import Form from '@/components/Form/Form';
import '@/styles/global.css'
import ScrollToTopButt from '@/components/Scrolltotopbutt/Scrolltotopbutt';

const i18nNamespaces = ['common'];

export default async function Home({ params }) {

  const locale = params.locale;
  const categoryname = params.category;
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}>
      <main>
        <Header />
        {categoryname}
        <Form />
        <ScrollToTopButt />
      </main>
    </TranslationsProvider>
  );
}
