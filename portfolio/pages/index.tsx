import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/navbar1'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        {/* Page Title */}
        <title>Adam | Full Stack Developer</title>
        {/* Favicon Controller */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Navbar />
      
    </div>
  )
}

export default Home
