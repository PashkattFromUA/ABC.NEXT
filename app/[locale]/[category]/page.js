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

const i18nNamespaces = ['common'];

async function getLabels(props) {
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

export default async function Home({ params }) {

  const locale = params.locale;
  const catslug = params.category;
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  const cards = await getLabels({lang:locale,catslug: catslug});

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}>
      <main>
        <Header />
        <Screensblock name={t('sbnameap')} title={`${t('sbtitleleftcp')}${t('sbtitlerightcp')}`} />
        <div className={styles.cardlistbg}>
        <div className={styles.cardlistblock} id="categorycardlist">
          <Blocktitle name={t('allin')} title={"catname[buttid - 1]"} />
          <div>
            <Cardlist cardsArray={cards.data} />
          </div>
        </div>
        </div>
        <Form />
        <ScrollToTopButt />
      </main>
    </TranslationsProvider>
  );
}
