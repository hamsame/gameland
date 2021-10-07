import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
export default function Home() {
  return (
    <div style={{ height: '300vh', position: 'relative', width: 'initial' }}>
      <Head>
        <title>Gamerland</title>
        <meta name='description' content='Gamerland- The place for gamers' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
    </div>
  )
}
