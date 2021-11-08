import '../sass/app.css';
// Component
import Layout from '../components/layout/Layout';

function MyApp({ Component, pageProps }:any) {
  return (
    <>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  )
}


export default MyApp
