import Form from "@/components/Form/Form";
import Header from "@/components/Header/Header";
import initTranslations from '../../i18n';
import TranslationsProvider from '@/components/TranslationsProvider';
import '@/styles/global.css'

export const metadata = {
    title: 'Privacy policy',
};

const i18nNamespaces = ['common'];

export default async function PrivacypolicyPage({ params: { locale } }) {

    const { t, resources } = await initTranslations(locale, i18nNamespaces);

    return (
        <TranslationsProvider
            namespaces={i18nNamespaces}
            locale={locale}
            resources={resources}>
            <main>
                <Header />
                PrivacypolicyPage
                <Form />
            </main>
        </TranslationsProvider>
    );
}