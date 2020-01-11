import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
          <script
            type='module'
            src='https://unpkg.com/ionicons@4.5.10-0/dist/ionicons/ionicons.esm.js'
          />
          <script
            nomodule=''
            src='https://unpkg.com/ionicons@4.5.10-0/dist/ionicons/ionicons.js'
          />
        </body>
      </Html>
    )
  }
}

export default MyDocument
