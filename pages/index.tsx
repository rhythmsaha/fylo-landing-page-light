import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import EarlyAccess from '../components/EarlyAccess'
import Featured from '../components/Featured'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        <Hero />
        <div className="mt-20 w-full bg-mobile bg-cover bg-no-repeat py-8 sm:bg-desktop lg:mt-36" />
        <Featured />
        <EarlyAccess />
      </main>
    </>
  )
}

export default Home
