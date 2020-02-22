import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel='shortcut icon'
            type='image/svg+xml'
            href='/static/logo-night-watch.svg'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src='https://unpkg.com/ionicons@5.0.0/dist/ionicons.js' />
        </body>
      </Html>
    )
  }
}

export default MyDocument
