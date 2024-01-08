import '@/styles/global.css'
import Link from 'next/link'
import styles from '@/styles/error.module.css'
import Image from 'next/image'

export default async function NotFound() {

  return (
      <main>
        <div className={styles.errorblock}>
          <div>
            <h1>Page not found 404</h1>
            <p>The link you clicked may be broken, or the page may have been removed</p>
            <Link href='/'><button>Get you home</button></Link>
          </div>
          <Image src='/images/Errorimg.svg' width={705} height={315} priority alt="error" />
        </div>
      </main>
  )
}