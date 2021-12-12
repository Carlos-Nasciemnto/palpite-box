import React from "react";

const Footer = () =>{
    return(
          <div className='bg-gray-700 p-4'>
            <div className='container mx-auto text-center font-bold text-white'>
            Projeto desenvolvido por:
            Antonio Carlos/  {''}
             <a className='hover:underline' href= 'www.linkedin.com/in/antonio-carlos-2920a2206'>Linkdin</a>/ {''}
             <a className='hover:underline' href='github.com/carlos-nasciemnto'>Github</a>
            <div className='mt-2'>
                     <img className='inline p-4' src='/logo_semana_fsm.png'></img>
                    <img className='inline p-4' src='/logo_devpleno.png'></img>
                </div>
             
            </div>
             
        </div>
    )
}
export default Footer