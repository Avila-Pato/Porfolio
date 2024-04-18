import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
   <footer className='w-full border-t-2 border-solid border-dark
   font-medium text-lg
   '>
    <Layout classname="py-8 flex items-center justify-between ">
        <span>{new Date().getFullYear()} &copy; Todos los Derechos Reservados.</span>
        <div className='flex items-center'>
         Construyendo con <span className='text-primary text-2xl px-1 '>&#9825;</span> 
         by&nbsp;<Link href="https://devdreaming.com" className='underline
         underline-offset-2' target={"_blank"}
         > DevDreaming</Link>
        </div>

        <Link href="https://academia.holamundo.io/" target={"_blank"} className='underline
         underline-offset-2' >Hola Mundo!</Link>
    </Layout>
   </footer>
  )
}

export default Footer