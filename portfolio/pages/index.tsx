import type { NextPage } from 'next'
import Head from 'next/head'
import Main from '../components/homePage'
import Navbar from '../components/navbar1'
import About from '../components/About'
import Skills from '../components/Skills'
import Project from '../components/p_projects'
import Contact from '../components/Contact' 
import Image from 'next/image'



const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        {/* Page Title */}
        <title>Adam | Full Stack Developer</title>
        
        {/* Favicon Controller */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Main />
      <About />
      <Skills />
      <Project />
      <Contact />
      
    </div>
  )
}

export default Home
