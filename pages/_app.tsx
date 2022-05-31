import '../sass/app.css';
import type { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion';
// Component
import { AppWrapper } from '../context/state'
import Layout from '../components/layout/Layout';
import OrphanLayout from '../components/layout/OrphanLayout'

function MyApp({ Component, pageProps, router }:AppProps) {
 
  if (router.pathname.startsWith('/request')) {
    return (
      <OrphanLayout>   
          <Component {...pageProps}></Component>
      </OrphanLayout>
    )
  }

  return (
    <AppWrapper>
      <Layout>
          <Component {...pageProps}></Component>
      </Layout>
    </AppWrapper>
  )
}


export default MyApp
