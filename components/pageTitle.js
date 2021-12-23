import React from "react"
import Head from "next/head"

const PageTitle = ({ title }) =>{
    return(
        <head>
            <title>{title} - PalpiteBox</title>  
        </head>
    ) 
}
export default PageTitle