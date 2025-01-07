import React, { useRef } from 'react'
import Head from 'next/head'
import Layout from './components/Layout'
import AnimatedText from './components/AnimatedText'
import Link from 'next/link'
import Image from 'next/image'
import article1 from '../../public/images/articles/Retos Javascript (2).jpeg'
import article2 from '../../public/images/articles/Javascript Retos.jpeg'
import article3 from '../../public/images/articles/nexjt.nexjtt.jpg'
import article4 from '../../public/images/articles/javascript.png'
import article5 from '../../public/images/articles/ANGULAR-JS.jpg'
import article6 from '../../public/images/articles/REACT.jpg'
import article7 from '../../public/images/articles/miduddev.jpg'
import article8 from '../../public/images/articles/hqdefault.jpg'

import { motion, useMotionValue } from 'framer-motion'

const FramerImage = motion(Image)

const MovingImg = ({ title, img, link }) => {
    const x = useMotionValue(0)
    const y = useMotionValue(0)
    const imgRef = React.useRef(null)

    function handleMouse(event) {
        imgRef.current.style.display = 'inline-block'
        x.set(event.pageX)
        y.set(-10)
    }

    function handleMouseleave(event) {
        imgRef.current.style.display = 'none'
        x.set(0)
        y.set(0)
    }

    return (
        <Link
            href={link}
            target="_blank"
            onMouseMove={handleMouse}
            onMouseLeave={handleMouseleave}
        >
            <h2 className="capitalize text-xl font-semibold hover:underline ml-1 sm:text-2xl">
                {title}
            </h2>

            <FramerImage
                style={{ x: x, y: y }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, transition: { duration: 0.5 } }}
                ref={imgRef}
                src={img}
                alt={title}
                className=" z-10 w-40 h-auto hidden absolute rounded-lg "
            />
        </Link>
    )
}

const Article = ({ img, title, date, link }) => {
    return (
        <motion.li
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
            // viewport={{ once: true }}
            className="relative w-auto p-4 py-6 my-4 rounded-xl flex items-center
        justify-between bg-light text-dark first:mt-0 border border-solid border-dark
        border-r-4 border-b-4 dark:bg-dark dark:border-light  dark:text-light
        sm:flex-col   "
        >
            <MovingImg
                title={title}
                img={img}
                link={link}
            />
            <span className="text-primary font-semibold pl-4 dark:text-primaryDark sm:self-start sm:pl-0 xs:text-sm">
                {date}
            </span>
        </motion.li>
    )
}

const FeaturedArticles = ({ img, title, time, summary, link }) => {
    return (
        <li className="relative col-span-1 w-full p-3 bg-light border border-solid border-dark rounded-2xl dark:bg-dark dark:border-light">
            <div
                className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark
          rounded-br-3xl dark:bg-light "
            />
            <Link
                href={link}
                target="_blank"
                className=" w-full inline-block cursor-pointer overflow-hidden
              rounded-lg  "
            >
                <FramerImage
                    src={img}
                    alt={title}
                    className="w-full h-auto  "
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                    priotity
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw " 
                />
            </Link>
            <Link
                href={link}
                target="_blank"
            >
                <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline  dark:text-light xs:text-lg ">
                    {' '}
                    {title}{' '}
                </h2>
            </Link>
            <p className="my-2 font-medium text-dark dark:text-light  ">
                {' '}
                {summary}{' '}
            </p>
            <span className="text-primary font-bold "> {time} </span>
        </li>
    )
}

const articles = () => {
    return (
        <>
            <Head>
                <title> Portfolio </title>
                <meta
                    name="Portfolio"
                    content="any description"
                />
            </Head>
            <main
                className="w-full mb-16 flex flex-col items-center
            justify-center overflow-hidden "
            >
                <Layout classname="pt-16 ">
                    <AnimatedText
                        text="Articulos De Interes"
                        className=" "
                    />
                    <ul className="grid grid-cols-2 gap-2 
            xl:grid-cols-2 xl:gap-3 xl:px-2
            2xl:grid-cols-2 2xl:gap-10 2xl:px-16
            lg:grid-cols-2 lg:gap-8 lg:px-8
            md:grid-cols-2 md:gap-6 md:px-6
            sm:grid-cols-1 sm:gap-6 sm:px-4
            xs:grid-cols-1 xs:gap-6 xs:px-4
            min-2xl:grid-cols-2 min-2xl:gap-10 min-2xl:px-16">
                        <FeaturedArticles
                            title="Potenciando el desarrollo web"
                            summary=" Ya seas un principiante que está aprendiendo los conceptos básicos o un desarrollador experimentado que busca desafíos más avanzados, la pagina web
                            ofrece multiples ejercicios para mejorar el desarrollo web. "
                            time="000 min read"
                            link="https://lenguajejs.com/retos/"
                            img={article1}
                        />

                        <FeaturedArticles
                            title="Potenciando el Desarrollo logistico"
                            summary=" Una amplia gama de ejercicios diseñados para mejorar tus habilidades cognitivas y velocidad de ejecución. fortaleza, nivel logistico, cada  diseñado para desafiar y pensar de manera creativa para problemas logísticos complejos.
                             "
                            time="9 min read"
                            link="https://adventjs.dev/es"
                            img={article2}
                        />
                    </ul>
                    <h2 className="font-bold text-4xl w-full text-center my-16 mt-32 dark:text-light 
                    ">
                        Otros los Articulos{' '}
                    </h2>
                    <ul className=" 2xl:grid-cols-2 2xl:gap-10 2xl:px-16
            xl:grid-cols-2 xl:gap-10 xl:px-12
            lg:grid-cols-2 lg:gap-8 lg:px-8
            md:grid-cols-2 md:gap-6 md:px-6
            sm:grid-cols-1 sm:gap-6 sm:px-4
            xs:grid-cols-1 xs:gap-6 xs:px-4
            min-2xl:grid-cols-2 min-2xl:gap-10 min-2xl:px-16 ">
                        <Article
                            title={`Pase de principiante a experto aprendiendo los fundamentos de Next.js y creando un sitio web de demostración completamente funcional que utilice las últimas funciones.`}
                            date={`📅`}
                            link="https://nextjs.org/learn"
                            img={article3}
                        />
                        <Article
                            title={`Lenguaje de programación interpretado utilizado en el lado del cliente (front-end) para dotar de mejoras dinámicas e interactivas a las páginas web.`}
                            date={`📅`}
                            link="https://lenguajejs.com/javascript/"
                            img={article4}
                        />
                        <Article
                            title={`Esta documentación de Angular te ayuda a aprender y usar el framework y la plataforma de desarrollo, desde tu primera aplicación hasta la optimización de aplicaciones complejas de una sola página, para empresas. Los tutoriales y guías incluyen ejemplos descargables para acelerar tus proyectos`}
                            date={`📅`}
                            link="https://docs.angular.lat/docs"
                            img={article5}
                        />
                        <Article
                            title={`Documentación de React! hechas a partir de componentes. Un componente es una pieza de UI (siglas en inglés de interfaz de usuario) que tiene su propia lógica y apariencia. Un componente puede ser tan pequeño como un botón, o tan grande como toda una página.`}
                            date={`📅`}
                            link="https://es.react.dev/"
                            img={article6}
                        />
                        <Article
                            title={`Variedad de recursos para aprender programacion con javascript y GRATIS!!`}
                            date={`📅`}
                            link="https://midu.dev/"
                            img={article7}
                        />
                        <Article
                            title={`Curso de LÓGICA DE PROGRAMACIÓN Desde Cero`}
                            date={`📅`}
                            link="https://www.youtube.com/watch?v=TdITcVD64zI"
                            img={article8}
                        />
                    </ul>
                </Layout>
            </main>
        </>
    )
}

export default articles
