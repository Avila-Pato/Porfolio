import Head from 'next/head'
import React, { useEffect, useRef } from 'react'
import Layout from './components/Layout'
import AnimatedText from './components/AnimatedText'
import profilePic from '../../public/images/profile/developer-pato.jpg'
import Image from 'next/image'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import Couse from './components/Couse'

const AnimatedNumber = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on('change', (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
}

const About = () => {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name='description' content='Any description' />
      </Head>
      <main className='flex w-full flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-16'>
          <AnimatedText 
            text='La pasión alimenta el propósito.' 
            className='mb-10 text-2xl font-bold lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8 ' 
          />
          <div className='grid w-full  grid-cols-8 gap-16 sm:gap-8 2xl:text-lg xs:p-1 sm:p-2 lg:p-2 2xl:p-5 '>
            <div className='col-span-3  gap-4 flex flex-col items-center justify-center xl:col-span-4 md:order-2 md:col-span-8 '>
              <h2 className='mb-4 text-2xl font-bold uppercase text-dark/75 dark:text-light/75'>Biografia</h2>
              <p className='font-medium '>
              ¡Hola, soy Patricio! con una carrera previa en turismo y hotelería. Durante años, me enfoqué en brindar experiencias y atencion a los huéspedes, A medida que avanzaba en mi carrera, descubrí mi gusto por el mundo digital y decidí comenzar a estudiar desarrollo web.
              </p>
              <p className='my-4 font-medium'>
              Durante este tiempo, he completado cursos  con enfoque en la programación, ampliando así mis habilidades y conocimientos en tecnologías claves tanto el el Front-End como en el Back-End y herramientas que me ayuden a complementarlo.
              Estos cursos y mi aprensidaje autodidacta me han brindado  principios fundamentales de la programación y el desarrollo web
              
              </p>
              <p className='font-medium'>
              Mi enfoque metodológico y mi deseo de innovar constantemente me llevan a buscar nuevas formas de dar vida a las páginas web de manera interactiva y funcional. Creo firmemente que la combinación de mi experiencia en turismo y hotelería con mis habilidades en desarrollo web me proporciona una perspectiva única y valiosa en este campo en constante evolución.
              </p>
            </div>
            <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4
             md:order-1 md:col-span-8'>
              <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light' />
              <Image 
                src={profilePic} 
                alt="Patricio" 
                className='w-full h-auto rounded-2xl  '
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw 
                " 
              />
            </div>
            <div className='col-span-2 flex flex-col 2xl:m-24 xs:m-0 items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
              <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                  <AnimatedNumber value={6}/>+
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>
                  Experiencia laboral
                </h2>
              </div>
              <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                  <AnimatedNumber value={70}/>+
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>
                  Proyectos
                </h2>
              </div>
              <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                  <AnimatedNumber value={1}/>+
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>
                  Programando
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
          <Couse/>
        </Layout>
      </main>
    </>
  )
}

export default About
