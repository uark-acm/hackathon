import type { NextPage } from 'next'
import Head from 'next/head'
import CountdownBar from '../components/countdown-bar'
import Details from '../components/details'
import Footer from '../components/footer'
import Hero from '../components/hero'
import Schedule from '../components/schedule'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Hackathon</title>
        <meta name="description" content="ACM X JB Hunt Hackathon" />
        <link rel="icon" href="favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Hero />
        <CountdownBar />
        <Schedule />
        <Details />
      </main>

      <Footer />
    </div>
  )
}

export default Home
