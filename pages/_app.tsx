import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import MyContext from './src/component/MyContext'
import NavBar from './src/component/NavBar'

export default function App({ Component, pageProps }: AppProps) {
  return (<MyContext>
    <NavBar/>
  <Component {...pageProps} />
  </MyContext>
  )
}
