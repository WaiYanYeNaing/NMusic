import '../styles/globals.css'
import { store } from '../store/store'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeProvider enableSystem={true} attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  )
}

export default MyApp
