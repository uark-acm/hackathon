import type { NextPage } from 'next'
import Head from 'next/head'
import CountdownBar from '../components/countdown-bar'
import Details from '../components/details'
import Footer from '../components/footer'
import Hero from '../components/hero'
import Location from '../components/location'
import Schedule from '../components/schedule'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Hackathon</title>
        <meta name="description" content="ACM X JB Hunt Hackathon" />
        <link rel="icon" href="favicon.ico" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://uark-acm.github.io/hackathon/" />
        <meta property="og:title" content="Hackathon" />
        <meta property="og:description" content="Presented by Uark ACM and JB Hunt" />
        <meta property="og:image" content="img/hero.jpg" />
      </Head>

      <main className={styles.main}>
        <Hero />
        <CountdownBar />
        <Location />
        <Schedule />
        <Details />
      </main>

      <Footer />
    </div>
  )
}

export default Home
