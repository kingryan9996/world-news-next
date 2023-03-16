import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.scss'
import WorldMap from './src/component/WorldMap'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {


  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta charSet="utf-8" />
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <WorldMap/>
      <h2>위</h2>
      <h2>중간</h2>
      <h2>아래</h2>
      </main>
    </>
  )
}
