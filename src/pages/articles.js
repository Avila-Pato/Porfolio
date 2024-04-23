import React, { useRef } from 'react'
import Head from 'next/head'
import Layout from './components/Layout'
import AnimatedText from './components/AnimatedText'
import Link from 'next/link'
import Image from 'next/image'
import article1 from '../../public/images/articles/Retos Javascript (2).jpeg'
import article2 from '../../public/images/articles/Javascript Retos.jpeg'
import article3 from '../../public/images/articles/create loading screen in react js.jpg'
import article4 from '../../public/images/articles/What is higher order component in React.jpg'
import article5 from '../../public/images/articles/What is Redux with easy explanation.png'

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
            <h2 className="capitalize text-xl font-semibold hover:underline ">
                {title}
            </h2>

            <FramerImage
                style={{ x: x, y: y }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, transition: { duration: 0.5 } }}
                ref={imgRef}
                src={img}
                alt={title}
                className=" z-10 w-96 h-auto hidden absolute rounded-lg"
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
            className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center
        justify-between bg-light text-dark first:mt-0 border border-solid border-dark
        border-r-4 border-b-4 dark:bg-dark dark:border-light  dark:text-light"
        >
            <MovingImg
                title={title}
                img={img}
                link={link}
            />
            <span className="text-primary font-semibold pl-4 ">{date}</span>
        </motion.li>
    )
}

const FeaturedArticles = ({ img, title, time, summary, link }) => {
    return (
        <li className="relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl dark:bg-dark dark:border-light">
            <div
                className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark
          rounded-br-3xl dark:bg-light"
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
                />
            </Link>
            <Link
                href={link}
                target="_blank"
            >
                <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline  dark:text-light ">
                    {' '}
                    {title}{' '}
                </h2>
            </Link>
            <p className="text-sm mb-2 text-dark dark:text-light "> {summary} </p>
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
                        className="mb-10 text-xl lg:text-4xl font-bold dark:text-light"
                    />
                    <ul className="grid grid-cols-2 gap-16 ">
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
                    <h2 className="font-bold text-4xl w-full text-center my-16 mt-32 dark:text-light">
                        Todos los Articulos{' '}
                    </h2>
                    <ul className=''>
                        <Article
                            title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                            date="una fecha aleotoria"
                            link="/"
                            img={article3}
                        />
                        <Article
                            title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                            date="una fecha aleotoria"
                            link="/"
                            img={article4}
                        />
                        <Article
                            title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                            date="una fecha aleotoria"
                            link="/"
                            img={article5}
                        />
                        <Article
                            title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                            date="una fecha aleotoria"
                            link="/"
                            img={article3}
                        />
                        <Article
                            title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                            date="una fecha aleotoria"
                            link="/"
                            img={article3}
                        />
                        <Article
                            title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                            date="una fecha aleotoria"
                            link="/"
                            img={article3}
                        />
                    </ul>
                </Layout>
            </main>
        </>
    )
}

export default articles
