import MainLayout from '@/components/layout/main-layout'
import '@/styles/globals.css'
import '@/styles/general.sass'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  )
}
