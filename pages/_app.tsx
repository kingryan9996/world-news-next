import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import MyContext from './src/component/MyContext'
import NavBar from './src/component/NavBar'
import { QueryClient,QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <MyContext>
        <NavBar/>
        <Component {...pageProps} />
      </MyContext>
    </QueryClientProvider>
  )
}
