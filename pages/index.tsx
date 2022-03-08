import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import CountdownBar from '../components/countdown-bar'
import Details from '../components/details'
import Hero from '../components/hero'
import Schedule from '../components/schedule'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/jfz7vwd.css" />
      </Head>

      <main className={styles.main}>
        <Hero />
        <CountdownBar />
        <Details />
        <Schedule />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
