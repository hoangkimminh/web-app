import { Provider } from 'react-redux'
import '../styles/index.scss'

const MyApp = ({ Component, pageProps }) => (
    <Provider>
      <Component {...pageProps} />
    </Provider>
)

export default MyApp
