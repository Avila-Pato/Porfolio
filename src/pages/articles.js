import React, { useRef } from 'react'
import Head from 'next/head'
import Layout from './components/Layout'
import AnimatedText from './components/AnimatedText'
import Link from 'next/link'
import Image from 'next/image'
import article1 from '../../public/images/articles/pagination component in reactjs.jpg'
import article2 from '../../public/images/articles/create modal component in react using react portals.png'
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
            <h2 className="capitalize text-xl font-semibold hover:underline">
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
        border-r-4 border-b-4"
        >
            <MovingImg
                title={title}
                img={img}
                link={link}
            />
            <span className="text-primary font-semibold pl-4">{date}</span>
        </motion.li>
    )
}

const FeaturedArticles = ({ img, title, time, summary, link }) => {
    return (
        <li className="relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl">
            <div
                className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark
          rounded-br-3xl"
            />
            <Link
                href={link}
                target="_blank"
                className=" w-full inline-block cursor-pointer overflow-hidden
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
            <Link
                href={link}
                target="_blank"
            >
                <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline">
                    {' '}
                    {title}{' '}
                </h2>
            </Link>
            <p className="text-sm mb-2"> {summary} </p>
            <span className="text-primary font-bold"> {time} </span>
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
            justify-center overflow-hidden"
            >
                <Layout classname="pt-16">
                    <AnimatedText
                        text="Quepassa gente "
                        className="mb-16 "
                    />
                    <ul className="grid grid-cols-2 gap-16">
                        <FeaturedArticles
                            title="Build a custom pagination component in reactjs from scratch"
                            summary="learn how to build a custom pagination component in reactjs from scratch
                            follow along as we build a reusable pagination component in reactjs"
                            time="9 min read"
                            link="/"
                            img={article1}
                        />

                        <FeaturedArticles
                            title="Build a custom pagination component in reactjs from scratch"
                            summary="learn how to build a custom pagination component in reactjs from scratch
                            follow along as we build a reusable pagination component in reactjs"
                            time="9 min read"
                            link="/"
                            img={article2}
                        />
                    </ul>
                    <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
                        Todos los Articulos{' '}
                    </h2>
                    <ul>
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
