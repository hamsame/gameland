import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
export default function Home() {
  return (
    <>
      <Head>
        <title>Gamerland</title>
        <meta name='description' content='Gamerland- A website for gamers' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
    </>
  )
}
