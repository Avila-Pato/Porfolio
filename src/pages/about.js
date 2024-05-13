import Head from 'next/head'
import React, { useEffect, useRef } from 'react'
import Layout from './components/Layout'
import AnimatedText from './components/AnimatedText'
import profilePic from '../../public/images//profile/developer-pato.jpg'
import Image from 'next/image'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import Course from './components/Couse'

const AnimatedNumber = ({value}) => {
  const  ref  = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {duration: 3000});
  const isInView = useInView(ref, {once: true});


  useEffect(() => {
      if(isInView) {
        motionValue.set(value);
      }
  },[isInView, value, motionValue] );
useEffect(() => {
  springValue.on('change',(latest) => {
      if(ref.current && latest.toFixed(0) <= value) {
          ref.current.textContent = latest.toFixed(0);
      }
  })
}, [springValue, value]  )

  return <span ref={ref}></span>
}

const about = () => {
  return (
    <>
      <Head>
        <title> Portfolio  </title>
        <meta name='description' content='any description' />
      </Head>
      <main className='flex w-full flex-col items-center justify-center  dark:text-light' >
        <Layout classname='pt-16 bg'>
          <AnimatedText text='La pasión alimenta el propósito.' className='mb-10 text-2xl font-bold  lg:!text-7xl sm:!text-6xl xs:!text-4xl 
          sm:mb-8 '/>
          <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
            <div className='col-span-3 flex flex-col items-center justify-center xl:col-span-4 md:order-2 md:col-span-8 '>
              <h2 className='mb-4 text-2xl font-bold uppercase text-dark/75 dark:text-light/75 '>Biografia</h2>

              <p className='font-medium'>
                Hola, soy Patricio, un desarrollador web autodidacta con pasión por crear experiencias digitales interactivas, funcionales y centradas en el usuario. Con 1 año de experiencia en el campo, siempre estoy buscando nuevas e innovadoras formas de dar vida a las Paginas webs.
              </p>
              <p className='my-4 font-medium'>
                Creo que el diseño es más que simplemente hacer que las cosas se vean bonitas; se trata de resolver problemas y crear experiencias intuitivas y agradables para los usuarios.
              </p>
              <p className='font-medium'>
                Ya sea que esté trabajando en un sitio web, una aplicación móvil u otro producto digital, llevo mi compromiso con la excelencia en el diseño y el pensamiento centrado en el usuario a cada proyecto en el que trabajo. Espero con interés la oportunidad de llevar mis habilidades y pasión a tu próximo proyecto.
              </p>
            </div>

            <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark
            bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4  md:order-1 md:col-span-8
            '>
            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light'/>

              <Image src={profilePic} alt="Patricio" className= 'w-full h-auto rounded-2xl'
             priority
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw" 

              />
            </div>

            <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
              <div className='flex flex-col items-end justify-center xl:items-center '>
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                <AnimatedNumber value={6}/>+
                </span>
                  <h2 className='text-xl font-medium capitalize text-dark/75  dark:text-light/75
                  xl:text-center md:text-lg sm:text-base xs:text-sm'>Experiencia laboral</h2>
              </div>
              <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                <AnimatedNumber value={19}/>+
                </span >
                  <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Proyectos</h2>
              </div>
              <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                <AnimatedNumber value={1}/>+
                </span>
                  <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'> Programando </h2>
              </div>
            </div>

            </div>
            <Skills/>
             <Experience/>
             <Education/>
             <Course/>
        </Layout>
      </main>
    </>
  )
}

export default about