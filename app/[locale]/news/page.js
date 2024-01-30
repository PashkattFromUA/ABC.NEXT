import Newsblock from "@/components/Newsblock/Newsblock"

export async function generateMetadata() {

    const mainurl = "https://abcrypto.io";

    return {
        alternates: {
            canonical: `${mainurl}/news`,
            languages: {
                'ru': `${mainurl}/ru/news`,
                'uk': `${mainurl}/uk/news`
            }
        },
        openGraph: {
            url: `${mainurl}/news`
        }
    }
}

const Newspage = () => {


    return (
        <main>
            <Newsblock />
        </main>
    )
}

export default Newspage