import Form from "@/components/Form/Form";
import Header from "@/components/Header/Header";
import initTranslations from '../../i18n';
import TranslationsProvider from '@/components/TranslationsProvider';
import '@/styles/global.css'
import ScrollToTopButt from "@/components/Scrolltotopbutt/Scrolltotopbutt";

export const metadata = {
    title: 'Faq',
};

const i18nNamespaces = ['common'];

export default async function FaqPage({ params: { locale } }) {

    const { t, resources } = await initTranslations(locale, i18nNamespaces);

    return (
        <TranslationsProvider
            namespaces={i18nNamespaces}
            locale={locale}
            resources={resources}>
            <main>
                <Header />
                FaqPage
                <Form />
                <ScrollToTopButt />
            </main>
        </TranslationsProvider>
    );
}