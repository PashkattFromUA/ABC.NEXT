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
                items: buttonlabel.items.map((item) => ({
                    url: `${baseURL}${prefix}/${buttonlabel.slug}/${item.slug}`,
                    lastModified: new Date(),
                    priority: 1,
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
        },
        {
            url: `${baseURL}/aggregator`,
            lastModified: new Date(),
        },
        {
            url: `${baseURL}/forpartners`,
            lastModified: new Date(),
        },
        {
            url: `${baseURL}/faq`,
            lastModified: new Date(),
        },
        {
            url: `${baseURL}/news`,
            lastModified: new Date(),
        },
        {
            url: `${baseURL}/sitemap`,
            lastModified: new Date(),
        },
        {
            url: `${baseURL}/privacypolicy`,
            lastModified: new Date(),
        },
        {
            url: `${baseURL}/termsofuse`,
            lastModified: new Date(),
        },
        {
            url: `${baseURL}/ru`,
            lastModified: new Date(),
        },
        {
            url: `${baseURL}/ru/aggregator`,
            lastModified: new Date(),
        },
        {
            url: `${baseURL}/ru/forpartners`,
            lastModified: new Date(),
        },
        {
            url: `${baseURL}/ru/faq`,
            lastModified: new Date(),
        },
        {
            url: `${baseURL}/ru/news`,
            lastModified: new Date(),
        },
        {
            url: `${baseURL}/ru/sitemap`,
            lastModified: new Date(),
        },
        {
            url: `${baseURL}/ru/privacypolicy`,
            lastModified: new Date(),
        },
        {
            url: `${baseURL}/ru/termsofuse`,
            lastModified: new Date(),
        },
        {
            url: `${baseURL}/uk`,
            lastModified: new Date(),
        },
        {
            url: `${baseURL}/uk/aggregator`,
            lastModified: new Date(),
        },
        {
            url: `${baseURL}/uk/forpartners`,
            lastModified: new Date(),
        },
        {
            url: `${baseURL}/uk/faq`,
            lastModified: new Date(),
        },
        {
            url: `${baseURL}/uk/news`,
            lastModified: new Date(),
        },
        {
            url: `${baseURL}/uk/sitemap`,
            lastModified: new Date(),
        },
        {
            url: `${baseURL}/uk/privacypolicy`,
            lastModified: new Date(),
        },
        {
            url: `${baseURL}/uk/termsofuse`,
            lastModified: new Date(),
        },
        ...sitemapObjectEN,
        ...flattenedItemsEN,
        ...sitemapObjectRU,
        ...flattenedItemsRU,
        ...sitemapObjectUK,
        ...flattenedItemsUK
    ]
}