import React from 'react'
import '../CSS/styles.css'
import Layout from '../components/layout'



const MyApp = ({ Component, pageProps }) => {    
    return(        
        <Layout>
           <Component {...pageProps} />
        </Layout>
     )
}   
export default MyApp