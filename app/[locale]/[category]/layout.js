import initTranslations from '../../i18n';

const i18nNamespaces = ['common'];

export async function generateStaticParams() {
    const labels = await fetch('https://api.abcrypto.io/api/sitemap').then(res => res.json());
    const catnames = labels.data.filter(item => item.type === 'category');
    const catslugArray = catnames.map(item => ({slug: item.data.slug,}));
    return catslugArray.map(item => ({ category: item.slug}));
}

export async function generateMetadata({ params }) {
    const locale = params.locale;
    const catname = params.category;
    const { t } = await initTranslations(locale, i18nNamespaces);
    const mainurl = "https://abcrypto.io";
  
    return {
      title: `${t('titlemain')}`,
      description: `${t('metamain')}`,
      alternates: {
        canonical: `${mainurl}/${catname}`,
        languages: {
          'ru': `${mainurl}/ru/${catname}`,
          'uk': `${mainurl}/uk/${catname}`
        }
      }
    }
  }

export default function CategoryPageLayout({ children }) {
    return <section>{children}</section>
  }