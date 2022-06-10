import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { RecoilRoot } from "recoil"
import Header from '../src/components/Header'
import MenuBar from '../src/components/MenuBar'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Header />
      <MenuBar />
      <Component {...pageProps} />
    </RecoilRoot>
  )
}

export default MyApp
