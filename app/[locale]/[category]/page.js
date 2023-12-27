import Header from '@/components/Header/Header';
import initTranslations from '../../i18n';
import TranslationsProvider from '@/components/TranslationsProvider';
import Form from '@/components/Form/Form';
import '@/styles/global.css'
import ScrollToTopButt from '@/components/Scrolltotopbutt/Scrolltotopbutt';
import Blocktitle from '@/components/Blocktitle/Blocktitle';
import Screensblock from '@/components/Screensblock/Screensblock';
import Cardlist from '@/components/Agregator/Cardlist';
import styles from '@/styles/catpage.module.css'
import Footer from '@/components/Footer/Footer';

const i18nNamespaces = ['common'];

async function getCards(props) {
  const url = `https://api.abcrypto.io/api/categories/${props.catslug}/items/all`;
  const headers = new Headers({
    'App-Locale': props.lang,
  });

  const res = await fetch(url, { headers });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

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

export default async function Home({ params }) {

  const locale = params.locale;
  const catslug = params.category;
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  const cards = await getCards({ lang: locale, catslug: catslug });

  const labels = await getLabels(locale);
  var resultObject = labels.data.find(function (item) {
    return item.slug === catslug;
  });

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}>
      <main>
        <Header />
        <Screensblock name={t('sbnameap')} title={`${t('sbtitleleftcp')}${resultObject.name}${t('sbtitlerightcp')}`} />
        <div className={styles.cardlistbg}>
          <div className={styles.cardlistblock} id="categorycardlist">
            <Blocktitle name={t('allin')} title={resultObject.name} />
            <div>
              <Cardlist cardsArray={cards.data} />
            </div>
          </div>
        </div>
        <Form />
        <Footer data={labels.data} />
        <ScrollToTopButt />
      </main>
    </TranslationsProvider>
  );
}
