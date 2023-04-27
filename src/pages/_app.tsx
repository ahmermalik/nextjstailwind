import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Router>
      <Component {...pageProps} />
    </Router>
  )
}
