import React from 'react'
import Link  from 'next/link'
import useSWR from 'swr'
import PageTitle from '../components/pageTitle'

const fetcher = (...args) => fetch(...args).then(res => res.json())

const Index = () => {
    const { data, error} = useSWR('/api/get-promo', fetcher)
   
    return (       
    <div className='mt-12 text-center '> 
     <PageTitle title='seja bem-vindo' /> 
        <p>
            O restaurante Cheiro Bahiano sempre busca por atender melhor seus clientes.<br/>
            Por isso, estamos sempre abertos a ouvir a sua opinião.
        </p>
              <div className='text-center my-12'>
                    <Link href='/pesquisa'>
                    <a className='bg-blue-400 px-12 py-4 font-bold rounded-lg shadow-lg hover:shadow'> Dar opinião ou sugestão </a>                   
                    </Link>
              </div>
              {!data && <p>Carregando...</p>}
              {!error && data && data.showCoupon &&
                <p className='mt-12 text-center '> 
                  {data.message}
                </p>
              }  
    </div>
   ) 
}
export default Index

