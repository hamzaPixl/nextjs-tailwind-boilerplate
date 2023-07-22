import { useEffect } from 'react'
import { IntlProvider } from 'react-intl'
import { QueryClient, QueryClientProvider } from 'react-query'
import { useRouter } from 'next/router'
import * as gtag from '../analytics'
import './globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { Montserrat } from 'next/font/google'
import { useLocale } from '../hooks/useLocale'

const font = Montserrat({ subsets: ['latin'] })
config.autoAddCss = false

export default function CustomApp({ Component, pageProps }) {
  const router = useRouter()
  const queryClient = new QueryClient()
  const { locale, messages } = useLocale()

  useEffect(() => {
    router.events.on('routeChangeComplete', gtag.pageview)
    return () => {
      router.events.off('routeChangeComplete', gtag.pageview)
    }
  }, [router.events])

  return (
    <QueryClientProvider client={queryClient}>
      <IntlProvider locale={locale} messages={messages}>
        <Component {...pageProps} className={font.className} />
      </IntlProvider>
    </QueryClientProvider>
  )
}
