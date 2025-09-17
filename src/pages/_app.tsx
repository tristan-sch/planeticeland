import 'focus-visible'

import { Analytics } from '@vercel/analytics/next'
import { AppProps } from 'next/app'

import 'styles/tailwind.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}
