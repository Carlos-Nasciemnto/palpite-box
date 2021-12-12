import React, { useState } from "react";
import Link from  "next/link"

const  Pesquisa = () => {
    const [ form, setForm ] = useState({
        Nome: '',
        Email: '',
        WhaltSapp:'',
    })
    const [sucess, setSuccess] = useState(false)
    const [ retorno, setRetorno] = useState({})
    const save = async () => {
       try{
        const response = await fetch('/api/save', {
            method: 'POST',
            body: JSON.stringify(form)
        })
        const data = await response.json()
        setSuccess(true)
        setRetorno(data)
     }catch (err){
  } 
}
const onChage = evt => {
    const value = evt.target.value
    const key = evt.target.name
    setForm(old => ({
        ...old, 
        [key]: value
    }))
}
    return (
        <div className='pt-6'>

            <h1 className='text-center font-bold my-4 text-2xl'>Críticas e sugestões</h1>
            <p className='text-center mb-6'>
                O restaurante cheiro Bahiano sempre busca por atender melhor seus clientes.<br />
                Por isso, estamos sempre abertos a ouvir a sua opinião.
            </p>
            
            {!sucess &&  <div className='w-1/5 mx-auto'>
               <label className='font-bold'>Seu Nome: </label>
               <input type='text' className='p-4 block shadow bg-blue-100 my-2 rouder' placeholder="Nome" onChage={onChage} name = 'Nome' value={form.Nome}/>
               <label className='font-bold'>Seu Email: </label>
               <input type='text' className='p-4 block shadow bg-blue-100 my-2 rouder' placeholder="Email" onChage={onChage} name = 'Email' value={form.Email}/>
               <label className='font-bold'>Seu WhatlSapp: </label>
               <input type='text' className='p-4 block shadow bg-blue-100 my-2 rouder' placeholder="WhaltSapp" onChage={onChage} name = 'WhaltSapp' value={form.WhaltSapp}/>
               <button className='bg-blue-400 px-12 py-4 font-bold rounded-lg shadow-lg hover:shadow' onClick={save}>Salvar</button> 
              
        </div> }
        {sucess && <div className='w-1/5 mx-auto'> 
            <p className="">Obrigado por contribuir com sua sugestão ou crítica</p>  
        cupom: {JSON.stringify(retorno)}</div>}

      </div>  
    )
}
export default Pesquisa