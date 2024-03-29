import { AppProps } from "next/app"
import '../styles/global.css'
import { AuthProvider } from '../contexts/AuthContexts'


function MyApp({ Component, pageProps }: AppProps) {
  return (
     <AuthProvider>
        <Component {...pageProps} />
     </AuthProvider>
  )
}

export default MyApp
