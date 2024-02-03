export async function generateStaticParams() {
    const labels = await fetch('https://api.abcrypto.io/api/sitemap').then(res => res.json());
    const catnames = labels.data.filter(item => item.type === 'category');
    const catslugArray = catnames.map(item => ({slug: item.data.slug,}));
    return catslugArray.map(item => ({ category: item.slug}));
}

export async function generateMetadata({ params }) {
    const catname = params.category;
  
    return {
      alternates: {
        canonical: `/${catname}`,
        languages: {
          'ru': `/ru/${catname}`,
          'uk': `/uk/${catname}`,
          'x-default':`/${catname}`,
          'en': `/${catname}`
        }
      },
      openGraph: {
        url: `/${catname}`
      }
    }
  }

export default function CategoryPageLayout({ children }) {
    return <section>{children}</section>
  }