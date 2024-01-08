import initTranslations from '../../../i18n';
import SEO from '@/components/Cardinfo/Seoblock';
import Cardinfo from '@/components/Cardinfo/Cardinfo';
import Cardlist from '@/components/Agregator/Cardlist';
import Blocktitle from '@/components/Blocktitle/Blocktitle';
import { notFound } from 'next/navigation'

const i18nNamespaces = ['common'];

export async function generateStaticParams({ params: { category } }) {
  const items = await fetch(`https://api.abcrypto.io/api/categories/${category}/items/all`).then((res) => res.json())
  return items.data.map((item) => ({
    itemname: item.slug,
  }))
}

export async function generateMetadata({ params }) {
  const locale = params.locale;
  const catname = params.category;
  const itemname = params.itemname;
  const mainurl = "https://abcrypto.io";
  const product = await fetch(`https://api.abcrypto.io/api/items/${itemname}`).then((res) => res.json());
  const { t } = await initTranslations(locale, i18nNamespaces);

  return {
    title: `${product.data.name} ${t('titlecard')}`,
    description: `${t('metacard1')}${product.data.name}${t('metacard2')}`,
    alternates: {
      canonical: `${mainurl}/${catname}/${itemname}`,
      languages: {
        'ru': `${mainurl}/ru/${catname}/${itemname}`,
        'uk': `${mainurl}/uk/${catname}/${itemname}`
      }
    }
  }
}

async function getCardinfo(props) {
  const url = `https://api.abcrypto.io/api/items/${props.slug}`;
  const headers = new Headers({
    'App-Locale': props.lang,
  });

  const res = await fetch(url, { headers });

  if (!res.ok) return undefined

  return res.json();
}

async function getCards(props) {
  const url = `https://api.abcrypto.io/api/categories/${props.catslug}/items/all`;
  const headers = new Headers({
    'App-Locale': props.lang,
  });

  const res = await fetch(url, { headers });

  if (!res.ok) return undefined

  return res.json();
}

export default async function Home({ params }) {

  const locale = params.locale;
  const name = params.itemname;
  const { t } = await initTranslations(locale, i18nNamespaces);
  const cardinfo = await getCardinfo({ lang: locale, slug: name });

  if (!cardinfo) {
    notFound()
  }
  const seodata = cardinfo.data.seo;
  const carddes = cardinfo.data.description;
  const cardfeat = cardinfo.data.features;
  const catinfo = cardinfo.data.category;
  const cards = await getCards({ lang: locale, catslug: catinfo.slug });

  return (
    <main>
      <Cardinfo cardinfo={cardinfo.data} cardfeatures={cardfeat} carddescriptions={carddes} />
      <SEO data={seodata} />
      <div className="gradient">
        <div className="block" id="categorycardlist">
          <Blocktitle name={t('morein')} title={catinfo.name} />
          <Cardlist cardsArray={cards.data} catslug={catinfo.slug} />
        </div>
      </div>
    </main>
  );
}
