import FAQ from "@/components/FAQ/FAQ";

export const metadata = {
    title: 'Faq',
};

export default async function FaqPage({ params: { locale } }) {

    return (
            <main>
                <FAQ />
            </main>
    );
}