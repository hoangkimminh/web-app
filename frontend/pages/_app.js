import { Provider } from 'react-redux'
import { CookiesProvider } from 'react-cookie'
import store from '../redux/store'
import '../styles/index.scss'

const MyApp = ({ Component, pageProps }) => (
  <CookiesProvider>
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  </CookiesProvider>
)

export default MyApp
