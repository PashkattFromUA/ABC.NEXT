import '@/styles/global.css'
import Link from 'next/link'
import styles from '@/styles/error.module.css'

export async function generateMetadata() {

  return {
    title: `Not found 404`,
    description: `Not found 404`
  }
}

export default async function NotFound() {

  return (
      <main>
        <div className={styles.errorblock}>
          <div>
            <h1>Page not found 404</h1>
            <p>The link you clicked may be broken, or the page may have been removed</p>
            <Link href='/'><button>Get you home</button></Link>
          </div>
          <img src='/images/Errorimg.svg' alt="error" />
        </div>
      </main>
  )
}