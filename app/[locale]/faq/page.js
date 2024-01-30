import initTranslations from '../../i18n';
import dynamic from 'next/dynamic';
const FAQ = dynamic(() => import('@/components/FAQ/FAQ'));

const i18nNamespaces = ['common'];

export async function generateMetadata({ params }) {
    const locale = params.locale;
    const { t } = await initTranslations(locale, i18nNamespaces);
  
    return {
      title: `${t('titlemain')}`,
      description: `${t('metamain')}`,
      alternates: {
        canonical: `/faq`,
        languages: {
          'ru': `/ru/faq`,
          'uk': `/uk/faq`
        }
      },
      openGraph: {
          url: `/faq`
      }
    }
  }

export default async function FaqPage() {

    return (
            <main>
                <FAQ />
            </main>
    );
}