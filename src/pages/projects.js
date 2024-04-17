import React from 'react'
import Head from 'next/head'
import AnimatedText from './components/AnimatedText'
import Layout from './components/Layout'
import Link from 'next/link'
import Image from 'next/image'
import { GithubIcon } from './components/Icons'
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg"


const FeaturedProject = ({ type, title, summary, img, link, github }) => {

    return (
        <article className='w-full flex items-center
        justify-between relative rounded-br-2xl rounded-3xl border border-solid
        border-dark bg-light shadow-2xl p-12
        '
        >
          <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark
          rounded-br-3xl'/>
          
            <Link href={link} target='_blank'
                className=' w-1/2 cursor-pointer overflow-hidden
            rounded-lg '>
                <Image src={img} alt={title} className="w-full h-auto" />
            </Link>

            <div className='w-1/2 flex flex-col items-start justify-between
            pl-6 '>
                <span className='text-primary font-medium text-xl'> {type}</span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark'>{summary}</p>
                <div className='mt-2 flex items-center'>
                    <Link href={github} target='_blank' className='w-10'> <GithubIcon /> </Link>
                    <Link href={link} target='_blank'
                        className='ml-4 rounded-lg bg-dark text-light
                p-2 px-6 text-lg font-semibold'>Visita los Proyectos</Link>
                </div>
            </div>
        </article>

    )
}

const Project = ({ type, title, img, link, github }) => {

    return (
        <article className='w-full flex flex-col items-center justify-center
        rounded-2xl border border-solid border-dark
        bg-light p-6 relative
        '>
         <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark
          rounded-br-3xl'/>

            <Link href={link} target='_blank'
                className=' w-full cursor-pointer overflow-hidden
            rounded-lg '>
                <Image src={img} alt={title} className="w-full h-auto" />
            </Link>

            <div className='w-full flex flex-col items-start justify-between
            mt-4'>
                <span className='text-primary font-medium text-xl'> {type}</span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-3xl font-bold'>{title}</h2>

                </Link>
                <div className='w-full mt-2 flex items-center justify-between'>
                <Link href={link} target='_blank'
                className='text-lg font-semibold underline'
                >
                Visitalo
                </Link>
                    <Link href={github} target='_blank' className='w-8'> 
                    <GithubIcon /> {""}
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
                <title> Portfolio  </title>
                <meta name='description' content='any description' />
            </Head>
            <main>
                <Layout classname='pt-16'>
                    <AnimatedText text="Imaginación  sobre el Conocimiento" 
                    className='text-4xl mb-16' 
                    
                     />

                    <div className='grid grid-cols-12 gap-24'>
                        <div className='col-span-12'>
                            <FeaturedProject
                                title="Crypto Scremae aplicaccions"
                                img={project1}
                                summary="a feautre-rich crypto Screamer app usiing react, tailwinf and css. content api, react router and it shows 
                        details regarding almost the cryptocurrency. you can exactly convert the price in yerar
                        local currency"
                                link="/"
                                github=""
                                type="feature Projects"
                            />
                        </div>
                        <div className='col-span-6'>
                        <Project 
                                title="Crypto Scremae aplicaccions"
                                img={project1}
                                summary="a feautre-rich crypto Screamer app usiing react, tailwinf and css. content api, react router and it shows 
                        details regarding almost the cryptocurrency. you can exactly convert the price in yerar
                        local currency"
                                link="/"
                                github=""
                                type="feature Projects"
                            />
                        </div>
                        <div className='col-span-6'>
                        <Project 
                                title="Crypto Scremae aplicaccions"
                                img={project1}
                                summary="a feautre-rich crypto Screamer app usiing react, tailwinf and css. content api, react router and it shows 
                        details regarding almost the cryptocurrency. you can exactly convert the price in yerar
                        local currency"
                                link="/"
                                github=""
                                type="feature Projects"
                            />
                        </div>
                        <div className='col-span-12'>
                        <FeaturedProject
                                title="Crypto Scremae aplicaccions"
                                img={project1}
                                summary="a feautre-rich crypto Screamer app usiing react, tailwinf and css. content api, react router and it shows 
                        details regarding almost the cryptocurrency. you can exactly convert the price in yerar
                        local currency"
                                link="/"
                                github=""
                                type="feature Projects"
                            />
                        </div>
                        <div className='col-span-6'>
                            <Project 
                                title="Crypto Scremae aplicaccions"
                                img={project1}
                                summary="a feautre-rich crypto Screamer app usiing react, tailwinf and css. content api, react router and it shows 
                        details regarding almost the cryptocurrency. you can exactly convert the price in yerar
                        local currency"
                                link="/"
                                github=""
                                type="feature Projects"
                            />
                        </div>
                        <div className='col-span-6'>
                            <Project 
                                title="Crypto Scremae aplicaccions"
                                img={project1}
                                summary="a feautre-rich crypto Screamer app usiing react, tailwinf and css. content api, react router and it shows 
                        details regarding almost the cryptocurrency. you can exactly convert the price in yerar
                        local currency"
                                link="/"
                                github=""
                                type="feature Projects"
                            />
                        </div>

                    </div>


                </Layout>
            </main>
        </>
    )
}

export default projects