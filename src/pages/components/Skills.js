import React from 'react'
import { motion } from 'framer-motion'




const Skill = ({ name, x, y }) => {
    return (
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light
        lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent
        xs:text-dark xs:dark:text-light xs:font-bold


        '
            whileHover={{ scale: 1.05 }}
            initial={{x:0,y:0}}
            whileInView={{x:x,y:y, transition:{duration: 1.5}}}
            // viewport={{once:true}}
            
        >
            {name}

        </motion.div>
    )
}

const Skills = () => {
    return (
        <>
            <h2 className='font-bold text-6xl mt-64 w-full text-center md:text-4xl md:mt-28 md:m-1 '>Habilidades</h2>
            <div className='w-full h-screen relative flex items-center justify-center bg-circularLight dark:bg-circularDark 
            lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
            lg:bg-circularLightLg lg:dark:bg-circularDarkLg
            md:bg-circularLightMd md:dark:bg-circularDarkMd
            sm:bg-circularLightSm sm:dark:bg-circularDarkSm

            '>

                <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer dark:text-dark dark:bg-light lg:p-6 md:p-4 xs:text-xs xs:p-2
                '
                    whileHover={{ scale: 1.05 }}
                >
                    WEB
                </motion.div>

                    <Skill name="HTML" x="-20vw" y="2vw"/>    
                    <Skill name="CSS" x="-5vw" y="-10vw"/>
                    <Skill name="Javascript" x="20vw" y="6vw"/>
                    <Skill name="ReactJS" x="0vw" y="13vw"/>
                    <Skill name="NextJS" x="-20vw" y="-15vw"/>
                    <Skill name="Figma" x="15vw" y="-12vw"/>
                    <Skill name="Angular" x="32vw" y="-5vw"/>
                    <Skill name="PHP" x="0vw" y="-20vw"/>
                    <Skill name="Java" x="-25vw" y="18vw"/>
                    <Skill name="Tailwind CSS" x="18vw" y="18vw"/>
                    <Skill name="Python" x="-35vw" y="-10vw"/>
                    <Skill name="NodeJS" x="20vw" y="-20vw"/>
                    <Skill name="Astro" x="-30vw" y="9vw"/>
                    <Skill name="SQL" x="30vw" y="8vw"/>
                    <Skill name="MySql" x="16vw" y="-2vw"/>
                    <Skill name="Typescript" x="-15vw" y="-4vw"/>
            </div>
        </>
    )
}

export default Skills