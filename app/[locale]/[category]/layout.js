export async function generateStaticParams() {
    const labels = await fetch('https://api.abcrypto.io/api/sitemap').then(res => res.json());
    const catnames = labels.data.filter(item => item.type === 'category');
    const catslugArray = catnames.map(item => ({slug: item.data.slug,}));
    return catslugArray.map(item => ({ category: item.slug}));
}

export default function CategoryPageLayout({ children }) {
    return <section>{children}</section>
  }