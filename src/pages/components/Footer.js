import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
   <footer className='w-full border-t-2 border-solid border-dark
   font-medium text-lg dark:text-light dark:border-light sm:text-base
  
   '>
    <Layout classname="py-2 sm:py-6 flex items-center justify-between lg:flex-col lg:py-6 ">
        <span>{new Date().getFullYear()} &copy; Todos los Derechos Reservados.</span>

        <Link href="https://academia.holamundo.io/" target={"_blank"} className='underline
         underline-offset-4' >Hola Mundo!&#9825;</Link>
    </Layout>
   </footer>
  )
}

export default Footer