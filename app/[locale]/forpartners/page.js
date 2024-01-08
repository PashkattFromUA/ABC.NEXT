import initTranslations from '../../i18n';
import Screensblock from "@/components/Screensblock/Screensblock";

const i18nNamespaces = ['common'];

export async function generateMetadata({ params }) {
    const locale = params.locale;
    const { t } = await initTranslations(locale, i18nNamespaces);
    const mainurl = "https://abcrypto.io";

    return {
        title: `${t('titlemain')}`,
        description: `${t('metamain')}`,
        alternates: {
            canonical: `${mainurl}/forpartners`,
            languages: {
                'ru': `${mainurl}/ru/forpartners`,
                'uk': `${mainurl}/uk/forpartners`
            }
        }
    }
}

export default async function ForPartnersPage({ params: { locale } }) {

    const { t } = await initTranslations(locale, i18nNamespaces);

    return (
        <main>
            <Screensblock name={t('sbnamefpp')} title={t('sbtitlefpp')} />
        </main>
    );
}