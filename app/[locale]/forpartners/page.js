import initTranslations from '../../i18n';
import dynamic from 'next/dynamic';
const Screensblock = dynamic(() => import('@/components/Screensblock/Screensblock'));

const i18nNamespaces = ['common'];

export async function generateMetadata({ params }) {
    const locale = params.locale;
    const { t } = await initTranslations(locale, i18nNamespaces);

    return {
        title: `${t('titlemain')}`,
        description: `${t('metamain')}`,
        alternates: {
            canonical: `/forpartners`,
            languages: {
                'ru': `/ru/forpartners`,
                'uk': `/uk/forpartners`
            }
        },
        openGraph: {
            url: `/forpartners`
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