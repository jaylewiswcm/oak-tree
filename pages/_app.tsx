import '../sass/app.css';
// Component
import Layout from '../components/layout/Layout';
import OrphanLayout from '../components/layout/OrphanLayout'

function MyApp({ Component, pageProps, router }:any) {
 
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
