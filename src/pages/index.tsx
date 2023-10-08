import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Dashboard from './dashboard'
import Header from './components/Header'
import SideMenu from './components/SideMenu'


export default function Home() {
  return (
    <>
      <Head>
        <title>Todo NextJS</title>
        <meta name="description" content="Todo NextJS<" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Header/>
        <SideMenu/>
        <h1>Home</h1>
      </main>
    </>
  )
}
