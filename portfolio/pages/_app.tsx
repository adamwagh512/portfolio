import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/navbar1'
import LockOrientation from '../components/LockOrientation';

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>
    <LockOrientation />
    <Navbar />
    <Component {...pageProps} />
  </>
  )
}

export default MyApp
