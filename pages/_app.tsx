import '../sass/app.css';
import type { AppProps } from 'next/app'
// Component
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
    <Layout>
      <Component {...pageProps}></Component>
    </Layout>
  )

  // return (
  //   <>
  //   <Layout>
  //     <Component {...pageProps} />
  //   </Layout>
  //   </>
  // )
}


export default MyApp
