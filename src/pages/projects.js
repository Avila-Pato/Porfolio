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
        border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light"
        >
            <div
                className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light
          rounded-br-3xl"
            />
            <Link
                href={link}
                target="_blank"
                className=" w-1/2 cursor-pointer overflow-hidden
            rounded-lg "
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
            pl-6 "
            >
                <span className="text-primary font-medium text-xl dark:text-primaryDark ">
                    {' '}
                    {type}
                </span>
                <Link
                    href={link}
                    target="_blank"
                    className="hover:underline underline-offset-2"
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
                        className="w-10"
                    >
                        {' '}
                        <GithubIcon />{' '}
                    </Link>
                    <Link
                        href={link}
                        target="_blank"
                        className="ml-4 rounded-lg bg-dark text-light
                p-2 px-6 text-lg font-semibold
                    dark:bg-light dark:text-dark "
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
        bg-light p-6 relative dark:bg-dark dark:border-light
        "
        >
            <div
                className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark
          rounded-br-3xl dark:bg-light"
            />

            <Link
                href={link}
                target="_blank"
                className=" w-full cursor-pointer overflow-hidden
            rounded-lg "
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
                className="w-full flex flex-col items-start justify-between
            mt-4"
            >
                <span className="text-primary font-medium text-xl">
                    {' '}
                    {type}
                </span>
                <Link
                    href={link}
                    target="_blank"
                    className="hover:underline underline-offset-2"
                >
                    <h2 className="my-2 w-full text-left text-3xl font-bold">
                        {title}
                    </h2>
                </Link>
                <p className="my-2 font-medium text-dark dark:text-light ">{summary}</p>
                <div className="w-full mt-2 flex items-center justify-between">
                    <Link
                        href={github}
                        target="_blank"
                        className="w-8"
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
            <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
                <Layout classname="pt-16">
                    <AnimatedText
                        text="Bienvenido a Mis Proyectos"
                        className="mb-10 text-xl lg:text-2xl font-bold"
                    />

                    <div className="grid grid-cols-12 gap-24">
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
                        <div className="col-span-6">
                            <Project
                                title="Spotify Clon"
                                img={project2}
                                summary="Este repositorio contiene una versión del popular servicio de música Spotify, creado utilizando Astro. Presenta una interfaz web que asegura un rendimiento destacado. Es una herramienta educativa diseñada para explorar el desarrollo de aplicaciones web modernas utilizando Astro."
                                link="https://github.com/Avila-Pato/Clon-Spotify"
                                github="https://github.com/Avila-Pato/Clon-Spotify"
                                type="Proyectos Destacados"
                            />
                        </div>
                        <div className="col-span-6">
                            <Project
                                title="El tiempo Clon"
                                img={project3}
                                summary="Este un proyecto que replica la funcionalidad y la apariencia de una aplicación o sitio web de pronóstico del tiempo. Desarrollado con React y Vite, este clon ofrece una experiencia de usuario similar a la de las aplicaciones de pronóstico del tiempo"
                                link="https://github.com/Avila-Pato/Weather-React"
                                github="https://github.com/Avila-Pato/Weather-React"
                                type="Proyectos Destacados"
                            />
                        </div>
                        <div className="col-span-12">
                            <FeaturedProject
                                title="React-Ts-js"
                                img={project4}
                                summary="Este proyecto es una implementación básica de un React Router (Demo), añadiendo la capacidad de navegación multiples funcionamientos y enrutamientos a una aplicación React desarrollada con TypeScript."
                                link="https://github.com/Avila-Pato/Task-React-Typescript"
                                github="https://github.com/Avila-Pato/Task-React-Typescript"
                                type="Proyectos Destacados"
                            />
                        </div>
                        <div className="col-span-6">
                            <Project
                                title="React-Router"
                                img={project5}
                                summary="a feautre-rich crypto Screamer app usiing react, tailwinf and css. content api, react router and it shows 
                                 details regarding almost the cryptocurrency. you can exactly convert the price in yerar
                                  local currency"
                                link="https://github.com/Avila-Pato/React-Router-Demo"
                                github="https://github.com/Avila-Pato/React-Router-Demo"
                                type="Proyectos Destacados"
                            />
                        </div>
                        <div className="col-span-6">
                            <Project
                                title="Crud-Angular"
                                img={project6}
                                summary="a feautre-rich crypto Screamer app usiing react, tailwinf and css. content api, react router and it shows 
                        details regarding almost the cryptocurrency. you can exactly convert the price in yerar
                        local currency"
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
