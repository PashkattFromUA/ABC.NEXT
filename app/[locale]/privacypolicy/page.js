import initTranslations from '../../i18n';
import styles from '@/styles/pppage.module.css'

const i18nNamespaces = ['common'];

export async function generateMetadata({ params }) {
    const locale = params.locale;
    const { t } = await initTranslations(locale, i18nNamespaces);

    return {
        title: `${t('titlemain')}`,
        description: `${t('metamain')}`,
        alternates: {
            canonical: `/privacypolicy`,
            languages: {
                'ru': `/ru/privacypolicy`,
                'ua': `/ua/privacypolicy`,
                'x-default':'/privacypolicy',
                'en': '/privacypolicy'
            }
        },
        openGraph: {
            url: `/privacypolicy`
        }
    }
}

export default async function PrivacypolicyPage({ params: { locale } }) {

    const { t } = await initTranslations(locale, i18nNamespaces);

    return (
        <main>
            <div className={styles.pptext}>
                <div className={styles.pptextleft}>
                    <h2>{t('ppheader')}</h2>
                    <p>{t('pptextleft')}</p>
                </div>
                <div className={styles.pptextright}>
                    <h4>{t('ppheader')}</h4>
                    <p>{t('pptext1')}</p>
                    <p>{t('pptext2')}</p>
                    <p>{t('pptext3')}</p>
                    <h5>{t('ppheader2')}</h5>
                    <p>{t('pptext4')}</p>
                    <ul>
                        <li>{t('ppli1')}</li>
                        <li>{t('ppli2')}</li>
                        <li>{t('ppli3')}</li>
                        <li>{t('ppli4')}</li>
                        <li>{t('ppli5')}</li>
                        <li>{t('ppli6')}</li>
                        <li>{t('ppli7')}</li>
                        <li>{t('ppli8')}</li>
                        <li>{t('ppli9')}</li>
                        <li>{t('ppli10')}</li>
                        <li>{t('ppli11')}</li>
                        <li>{t('ppli12')}</li>
                    </ul>
                    <h5>{t('ppheader3')}</h5>
                    <p>{t('pptext5')}</p>
                    <ul>
                        <li>{t('ppli13')}</li>
                        <li>{t('ppli14')}</li>
                        <li>{t('ppli15')}</li>
                        <li>{t('ppli16')}</li>
                        <li>{t('ppli17')}</li>
                        <li>{t('ppli18')}</li>
                        <li>{t('ppli19')}</li>
                        <li>{t('ppli20')}</li>
                        <li>{t('ppli21')}</li>
                    </ul>
                    <p>{t('pptext6')}</p>
                </div>
            </div>
        </main>
    );
}