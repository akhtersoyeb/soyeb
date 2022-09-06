import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import SpinningCube from '../component/SpinningCube/SpinningCube'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sk Soyeb Akhter</title>
        <meta name="description" content="Portfolio of Sk Soyeb Akhter." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <SpinningCube />
        <h1 className={styles.title}>
          Sk Soyeb Akhter
        </h1>


      </main>

    </div >
  )
}

export default Home
