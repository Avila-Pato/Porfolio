import Head from 'next/head'
import React from 'react'
import Layout from './components/Layout'
import AnimatedText from './components/AnimatedText'

const about = () => {
  return (
    <>
      <Head>
        <title>Codebucks | About page </title>
        <meta name='description' content='any description' />
      </Head>
      <main className='flex w-full flex-col items-center justify-center'>
        <Layout classname='pt-16'>
          <AnimatedText text='La pasión alimenta el propósito' />
          <div className='grid w-full grid-cols-8 gap-16'>
            <div className='col-span-3 flex flex-col items-center justify-center'>
              <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>Biografia</h2>

              <p>
                Hola, soy Patricio, un desarrollador web y diseñador UI/UX con pasión por crear experiencias digitales hermosas, funcionales y centradas en el usuario. Con 4 años de experiencia en el campo, siempre estoy buscando nuevas e innovadoras formas de dar vida a las visiones de mis clientes.
              </p>
              <p>
                Creo que el diseño es más que simplemente hacer que las cosas se vean bonitas; se trata de resolver problemas y crear experiencias intuitivas y agradables para los usuarios.
              </p>
              <p>
                Ya sea que esté trabajando en un sitio web, una aplicación móvil u otro producto digital, llevo mi compromiso con la excelencia en el diseño y el pensamiento centrado en el usuario a cada proyecto en el que trabajo. Espero con interés la oportunidad de llevar mis habilidades y pasión a tu próximo proyecto.
              </p>

            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}

export default about