import Document, { Html, Head, Main, NextScript } from 'next/document'
import { GtagScript, GA_TRACKING_ID } from '../analytics'

export default class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang='en-US'>
        <Head />
        {GA_TRACKING_ID && <GtagScript />}
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
