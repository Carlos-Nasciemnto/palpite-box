import React from "react";
import '../css/styles.css';



const MyApp = ({Components, pageProps}) => {

    return(
        <layout>
           <Components {...pageProps} />
        </layout>
    )
}


export default MyApp