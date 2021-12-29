import React from "react";
import '../css/styles.css';
import PageTitle from "../components/pageTitle"



const MyApp = ({Components, pageProps}) => {

    return(
        <layout>
           <Components {...pageProps} />
        </layout>
    )
}


export default MyApp