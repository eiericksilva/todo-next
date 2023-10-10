import Head from 'next/head'
import HomePage from './home'

export default function Home() {
  return (
    <>
      <Head>
        <title>Todo NextJS</title>
        <meta name="description" content="Todo NextJS<" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HomePage />
      </main>
    </>
  )
}
