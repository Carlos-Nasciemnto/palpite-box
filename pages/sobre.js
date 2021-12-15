import React from "react";
import Link from "next/link";
import pageTitle from "../components/pageTitle";



const Sobre = () => {
    
    return (
        <div>
            <pageTitle title='Sobre' /> 
            <h1>Sobre</h1>
        <div>
            <Link href='/'>
                <a>Home</a>
            </Link>
        </div>
        </div>
        
        )
}

export default Sobre
