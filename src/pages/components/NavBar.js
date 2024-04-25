import Link from 'next/link'
import React from 'react'
import Logo from './Logo'
import { useRouter } from 'next/router'
import {
    TwiterIcon,
    DribbbleIcon,
    GithubIcon,
    LinkedInIcon,
    PinterestIcon,
    SunIcon,
    MoonIcon,
} from '../../lib/Icons'
import { motion } from 'framer-motion'
import useThemeSwitcher from './hooks/useThemeSwitcher'


const CustomLink = ({ href, title, className }) => {
    const router = useRouter()
    return (
        <Link
            href={href}
            className={`${className} relative group`}
        >
            {title}

            <span
                className={`h-[1px] inline-block bg-dark 
      absolute left-0 -bottom-0.5
      group-hover:w-full transition-[width] ease duration-300
      ${router.asPath === href ? 'w-full' : 'w-0'}
       dark:bg-light`}
      
            >
                &nbsp;
            </span>
        </Link>
    )
}

const NavBar = () => {

    const [mode, setMode] = useThemeSwitcher();

    return (
        <header className="w-full px-32 py-9 font-medium flex items-center justify-between text-xl 
        dark:text-light">
            <nav>
                <CustomLink
                    href="/"
                    title="Inicio"
                    className="mr-4"
                />
                <CustomLink
                    href="/about"
                    title="De Mi"
                    className="mr-4"
                />
                <CustomLink
                    href="/projects"
                    title="Proyectos"
                    className="mr-4"
                />
                <CustomLink
                    href="/articles"
                    title="Articulos"
                    className="mr-4"
                />
            </nav>
            <nav className="flex items-center justify-center flex-wrap text-xl ">
                <motion.a
                    href="https://twitter.com/avilaf1998"
                    target={'_blank'}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-6 mx-1"
                >
                    {' '}
                    <TwiterIcon />
                </motion.a>
                <motion.a
                    href="https://github.com/Avila-Pato"
                    target={'_blank'}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-6 mx-3"
                >
                    <GithubIcon />
                </motion.a>
                <motion.a
                    href="https://www.linkedin.com/in/pavilafigueroa/"
                    target={'_blank'}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-6 mx-3"
                >
                    <LinkedInIcon />
                </motion.a>
                <motion.a
                    href="https://www.pinterest.cl/pavilaf1998/"
                    target={'_blank'}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-6 mx-3"
                >
                    <PinterestIcon />
                </motion.a>
                <motion.a
                    href="https://dribbble.com/Nietshi"
                    target={'_blank'}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-6 ml-3"
                >
                    <DribbbleIcon />
                </motion.a>

                    <button
                    onClick={ () => setMode(mode === "light" ? "dark" : "light") }
                    className={`ml-3 flex items-center justify-center rounded-center rounded-full p-1
                    ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"} 
                    `}
                    >
                    {
                     mode === "dark"?
                     <MoonIcon className={"fill-dark"}/>
                     :<SunIcon className={"fill-dark"}/>
                    }
                    </button>

            </nav>
            <div className="absolute left-[50%] top-2 translate-x-[-50%]">
                <Logo />
            </div>
        </header>
    )
}

export default NavBar
