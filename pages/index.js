import Head from 'next/head'
import Link from 'next/link'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          SEO with Nextjs.
        </h1>
        <h2>* Pages based routing</h2>
        <Link href="/posts"><a>Go to post list page</a></Link>
      </main>
    </div>
  )
}
