import Newsblock from "@/components/Newsblock/Newsblock"

export async function generateMetadata({ params }) {

    const mainurl = "https://abcrypto.io";

    return {
        alternates: {
            canonical: `${mainurl}/news`,
            languages: {
                'ru': `${mainurl}/ru/news`,
                'uk': `${mainurl}/uk/news`
            }
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