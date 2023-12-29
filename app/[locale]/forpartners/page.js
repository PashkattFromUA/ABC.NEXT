import initTranslations from '../../i18n';
import Screensblock from "@/components/Screensblock/Screensblock";

export const metadata = {
    title: 'For partners',
};

const i18nNamespaces = ['common'];

export default async function ForPartnersPage({ params: { locale } }) {

    const { t } = await initTranslations(locale, i18nNamespaces);

    return (
            <main>
                <Screensblock name={t('sbnamefpp')} title={t('sbtitlefpp')} />
            </main>
    );
}