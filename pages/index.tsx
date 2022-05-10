import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link';
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dave Boehm - Next app</title>
        <meta name="description" content="Take home code assessment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        
        <h1>Super Amazing and Unnecessary Landing Page!</h1>

        <div>
          <Link href="/entries">
            <a className={styles.buttonLink}>Go To App</a>
          </Link>
        </div>
        
      </main>
    </div>
  )
}

export default Home
