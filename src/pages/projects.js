import React from 'react'
import Head from 'next/head'
import AnimatedText from './components/AnimatedText'
import Layout from './components/Layout'
import Link from 'next/link'
import Image from 'next/image'
import { GithubIcon } from '../lib/Icons'
import project1 from '../../public/images/projects/web-tesla.png'
import project2 from '../../public/images/projects/spotyfi-clon.jpg'
import project3 from '../../public/images/projects/Eltiempo.png'
import project4 from '../../public/images/projects/React.jpg'
import project5 from '../../public/images/projects/Router.png'
import project6 from '../../public/images/projects/maxresdefault.jpg'
import { motion } from 'framer-motion'

const FramerImage = motion(Image)

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
    return (
        <article
            className="w-full flex items-center 
        justify-between relative rounded-br-2xl rounded-3xl border border-solid
        border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light
        lg:flex-col lg:p-8  xs:rounded-2xl xs:rounded-br-3xl xs:p-4 

        "
        >
            <div
                className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem]
                 bg-dark dark:bg-light rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]"
            />
            <Link
                href={link}
                target="_blank"
                className=" w-1/2 cursor-pointer overflow-hidden
            rounded-lg lg:w-full"
            >
                <FramerImage
                    src={img}
                    alt={title}
                    className="w-full h-auto"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                />
            </Link>

            <div
                className="w-1/2 flex flex-col items-start justify-between
            pl-6 lg:w-full lg:pl-0 lg:pt-6  "
            >
                <span className="text-primary font-medium text-xl dark:text-primaryDark ">
                    {' '}
                    {type}
                </span>
                <Link
                    href={link}
                    target="_blank"
                    className="hover:underline underline-offset-2 md:text-base"
                >
                    <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light ">
                        {title}
                    </h2>
                </Link>
                <p className="my-2 font-medium text-dark dark:text-light">{summary}</p>
                <div className="mt-2 flex items-center">
                    <Link
                        href={github}
                        target="_blank"
                        className="w-10 md:w-6"
                    >
                        {' '}
                        <GithubIcon />{' '}
                    </Link>
                    <Link
                        href={link}
                        target="_blank"
                        className="ml-4 rounded-lg bg-dark text-light
                p-2 px-6 text-lg font-semibold
                    dark:bg-light dark:text-dark 
                    sm:px-4 sm:text-base"
                    >
                        Visitalo
                    </Link>
                </div>
            </div>
        </article>
    )
}

const Project = ({ type, title, img, link, github, summary }) => {
    return (
        <article
            className="w-full flex flex-col items-center justify-center
        rounded-2xl border border-solid border-dark
        bg-light p-3 relative dark:bg-dark dark:border-light
        xs:p-4  
        "
        >
            <div
                className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark 
          rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]"
            />

            <Link
                href={link}
                target="_blank"
                className=" w-full cursor-pointer overflow-hidden
            rounded-lg lg:w-full "
            >
                <FramerImage
                    src={img}
                    alt={title}
                    className="w-full h-auto"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                    priotity
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw" 
                />
            </Link>

            <div
                className="w-full flex flex-col items-start justify-between
            pl-6 lg:w-full lg:pl-0 lg:pt-6"
            >
                <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">
                    {type}
                </span>
                <Link
                    href={link}
                    target="_blank"
                    className="hover:underline underline-offset-2"
                >
                    <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl"> {title}
                    </h2>
                </Link>
                <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">{summary}</p>
                <div className="w-full mt-2 flex items-center justify-between">
                    <Link
                        href={github}
                        target="_blank"
                        className="w-8 "
                    >
                        <GithubIcon /> {''}
                    </Link>
                </div>
            </div>
        </article>
    )
}

const projects = () => {
    return (
        <>
            <Head>
                <title> Portfolio </title>
                <meta
                    name="description"
                    content="any description"
                />
            </Head>
            <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light  '>
                <Layout classname="p-10">
                    <AnimatedText
                        text="Bienvenido a Mis Proyectos"
                        className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl "
                    />

                    <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0 ">
                        <div className="col-span-12">
                            <FeaturedProject
                                title="Web Tesla con Astro"
                                img={project1}
                                summary="Este proyecto que recrea el sitio web oficial de Tesla utilizando Astro como generador de sitios front-end. Astro, conocido por su rendimiento excepcionalmente rápido, se combina con las tecnologías modernas como React.js y TypeScript para construir una versión eficiente y receptiva del sitio web de Tesla"
                                link="https://645e81ce9873bb1e1ada2033--wonderful-cucurucho-12c589.netlify.app/"
                                github="https://github.com/Avila-Pato/Web-astro"
                                type="Proyectos Destacados"
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                title="Spotify Clon"
                                img={project2}
                                summary="Este repositorio contiene una versión del popular servicio de música Spotify, creado utilizando Astro. Presenta una interfaz web que asegura un rendimiento destacado. Es una herramienta educativa diseñada para explorar el desarrollo de aplicaciones web modernas utilizando Astro."
                                link="https://github.com/Avila-Pato/Clon-Spotify"
                                github="https://github.com/Avila-Pato/Clon-Spotify"
                                type="Proyectos Destacados"
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                title="El tiempo Clon"
                                img={project3}
                                summary="Este un proyecto que replica la funcionalidad y la apariencia de una aplicación o sitio web de pronóstico del tiempo. Desarrollado con React y Vite, este clon ofrece una experiencia de usuario similar a la de las aplicaciones de pronóstico del tiempo"
                                link="https://github.com/Avila-Pato/Weather-React"
                                github="https://github.com/Avila-Pato/Weather-React"
                                type="Proyectos Destacados"
                            />
                        </div>
                        <div className="col-span-12 sm:col-span-12">
                            <FeaturedProject
                                title="React-Ts-js"
                                img={project4}
                                summary="Este proyecto es una implementación básica de un React Router (Demo), añadiendo la capacidad de navegación multiples funcionamientos y enrutamientos a una aplicación React desarrollada con TypeScript."
                                link="https://github.com/Avila-Pato/Task-React-Typescript"
                                github="https://github.com/Avila-Pato/Task-React-Typescript"
                                type="Proyectos Destacados"
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                title="React-Router"
                                img={project5}
                                summary="Esta demostración ilustra cómo utilizar React Router para crear una estructura de navegación efectiva en aplicaciones web React."
                                link="https://github.com/Avila-Pato/React-Router-Demo"
                                github="https://github.com/Avila-Pato/React-Router-Demo"
                                type="Proyectos Destacados"
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                title="Crud-Angular"
                                img={project6}
                                summary="Este proyecto es un servidor backend desarrollado con Node.js y Sequelize, que proporciona una API RESTful para una aplicación frontend construida con Angular."
                                link="https://github.com/Avila-Pato/Back-end-Server_angular-node-sequelize"
                                github="https://github.com/Avila-Pato/Back-end-Server_angular-node-sequelize"
                                type="Proyectos Destacados"
                            />
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    )
}

export default projects
