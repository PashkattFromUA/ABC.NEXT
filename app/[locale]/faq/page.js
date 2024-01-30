import initTranslations from '../../i18n';
import dynamic from 'next/dynamic';
const FAQ = dynamic(() => import('@/components/FAQ/FAQ'));

const i18nNamespaces = ['common'];

export async function generateMetadata({ params }) {
    const locale = params.locale;
    const { t } = await initTranslations(locale, i18nNamespaces);
    const mainurl = "https://abcrypto.io";
  
    return {
      title: `${t('titlemain')}`,
      description: `${t('metamain')}`,
      alternates: {
        canonical: `${mainurl}/faq`,
        languages: {
          'ru': `${mainurl}/ru/faq`,
          'uk': `${mainurl}/uk/faq`
        }
      },
      openGraph: {
          url: `${mainurl}/faq`
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