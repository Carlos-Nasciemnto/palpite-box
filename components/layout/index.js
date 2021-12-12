import React from "react";
import Header from '../header';
import Footer from '../footer';

const Layout = ({children}) =>{
    return(
        <div>
        <Header/>
        <div className = 'container mx-auto'>
           {children}
        </div>
           <Footer/>
    </div>
    )
}
export default Layout