import { ToastProvider } from 'react-toast-notifications'

import '../styles.scss'

const MyApp = ({ Component, pageProps }) => (
  <ToastProvider autoDismiss autoDismissTimeout={3000} placement='bottom-right'>
    <Component {...pageProps} />
  </ToastProvider>
)

export default MyApp
