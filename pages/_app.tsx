import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import MyContext from './src/component/MyContext'

export default function App({ Component, pageProps }: AppProps) {
  return (<MyContext>
  <Component {...pageProps} />
  </MyContext>
  )
}
