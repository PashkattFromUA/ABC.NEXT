import initTranslations from '../../i18n';
import Screensblock from "@/components/Screensblock/Screensblock";
import Sitemapblock from "@/components/Sitemapblock/Sitemapblock";

export const metadata = {
    title: 'For partners',
};

const i18nNamespaces = ['common'];

async function getLabels(lang) {
    const url = 'https://api.abcrypto.io/api/categories';
    const headers = new Headers({
        'App-Locale': lang,
    });

    const res = await fetch(url, { headers });

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}

export default async function ForPartnersPage({ params: { locale } }) {

    const { t } = await initTranslations(locale, i18nNamespaces);
    const labels = await getLabels(locale);


    return (
            <main>
                <Screensblock name={t('sitemap')} title={t('sitemap')} />
                <Sitemapblock data={labels.data} />
            </main>
    );
}