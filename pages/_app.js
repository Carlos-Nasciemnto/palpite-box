import React from "react";
import layout from "../components/layout";
import '../css/styles.css';



const MyApp = ({components, pageProps}) => {

    return(
        <layout>
           <components {...pageProps} />
        </layout>
    )
}


export default MyApp