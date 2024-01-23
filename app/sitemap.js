export default async function sitemap() {

    const baseURL = 'https://abcrypto.io'

    async function getLabels() {
        const url = 'https://api.abcrypto.io/api/categories';

        const res = await fetch(url);

        if (!res.ok) {
            throw new Error('Failed to fetch data');
        }

        return res.json();
    }

    const labels = await getLabels();

    const generateSitemapObject = (baseURL, labels, language) => {
        const sitemapList = labels.map((buttonlabel) => {
            const prefix = language === 'en' ? '' : `/${language}`;

            return {
                url: `${baseURL}${prefix}/${buttonlabel.slug}`,
                lastModified: new Date(),
                changeFrequency: 'monthly',
                priority: 0.8,
                items: buttonlabel.items.map((item) => ({
                    url: `${baseURL}${prefix}/${buttonlabel.slug}/${item.slug}`,
                    lastModified: new Date(),
                    changeFrequency: 'monthly',
                    priority: 0.8,
                })),
            };
        });

        return sitemapList;
    };

    const sitemapObjectEN = generateSitemapObject(baseURL, labels.data, 'en');

    const sitemapObjectRU = generateSitemapObject(baseURL, labels.data, 'ru');

    const sitemapObjectUK = generateSitemapObject(baseURL, labels.data, 'uk');

    const flattenedItemsEN = sitemapObjectEN.flatMap((label) => label.items);
    const flattenedItemsRU = sitemapObjectRU.flatMap((label) => label.items);
    const flattenedItemsUK = sitemapObjectUK.flatMap((label) => label.items);

    return [
        {
            url: baseURL,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseURL}/aggregator`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseURL}/forpartners`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseURL}/faq`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseURL}/news`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseURL}/sitemap`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        ...sitemapObjectEN,
        ...flattenedItemsEN,
        ...sitemapObjectRU,
        ...flattenedItemsRU,
        ...sitemapObjectUK,
        ...flattenedItemsUK
    ]
}