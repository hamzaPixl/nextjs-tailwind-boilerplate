import { useEffect } from 'react'
import { IntlProvider } from 'react-intl'
import nl from '../locales/nl.json'
import en from '../locales/en.json'
import fr from '../locales/fr.json'
import { QueryClient, QueryClientProvider } from 'react-query'
import { useRouter } from 'next/router'
import * as gtag from '../analytics/'
import './globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { Montserrat } from 'next/font/google'

const font = Montserrat({ subsets: ['latin'] })
config.autoAddCss = false

export default function CustomApp({ Component, pageProps }) {
  const router = useRouter()
  const queryClient = new QueryClient()

  const messages = {
    nl,
    en,
    fr,
  }

  useEffect(() => {
    router.events.on('routeChangeComplete', gtag.pageview)
    return () => {
      router.events.off('routeChangeComplete', gtag.pageview)
    }
  }, [router.events])

  return (
    <QueryClientProvider client={queryClient}>
      <IntlProvider locale={router.locale || 'en'} messages={messages[router.locale]}>
        <Component {...pageProps} className={font.className} />
      </IntlProvider>
    </QueryClientProvider>
  )
}
