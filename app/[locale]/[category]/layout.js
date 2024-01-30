export async function generateStaticParams() {
    const labels = await fetch('https://api.abcrypto.io/api/sitemap').then(res => res.json());
    const catnames = labels.data.filter(item => item.type === 'category');
    const catslugArray = catnames.map(item => ({slug: item.data.slug,}));
    return catslugArray.map(item => ({ category: item.slug}));
}

export async function generateMetadata({ params }) {
    const catname = params.category;
    const mainurl = "https://abcrypto.io";
  
    return {
      alternates: {
        canonical: `${mainurl}/${catname}`,
        languages: {
          'ru': `${mainurl}/ru/${catname}`,
          'uk': `${mainurl}/uk/${catname}`
        }
      },
      openGraph: {
        url: `${mainurl}/${catname}`
      }
    }
  }

export default function CategoryPageLayout({ children }) {
    return <section>{children}</section>
  }