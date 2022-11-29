import '../styles/globals.css'

import Head from 'next/head'
import Layout from "../components/Layout"
function App({Component ,pageProps}){
  return (
  <>
  <Head>
    <title>Sample Next js</title>
    <link rel="shortcut icon" href="/logo.jpg" />
    <meta
      name="Description"
      content="simple pagina de next js"
    />
  </Head>
  <Layout>
    <Component {...pageProps} />
  </Layout>
  </>
  )
}
export default App

