import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
          {/* <script src='https://unpkg.com/ionicons@4.6.2/dist/ionicons.js' /> */}
          <script src="https://unpkg.com/ionicons@4.5.10-0/dist/ionicons.js"></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument
