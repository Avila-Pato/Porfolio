import React from 'react';
import Skill from './skillsEffect';
import { motion } from 'framer-motion';

const Skills = () => {
    return (
        <>
            <h2 className='font-bold text-6xl mt-64 w-full text-center md:text-4xl md:mt-28 md:m-1'>Conocimientos</h2>
            <div className='w-full h-screen relative flex items-center justify-center bg-circularLight dark:bg-circularDark 
            lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
            lg:bg-circularLightLg lg:dark:bg-circularDarkLg
            md:bg-circularLightMd md:dark:bg-circularDarkMd
            sm:bg-circularLightSm sm:dark:bg-circularDarkSm'>

                <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer 
                dark:text-dark dark:bg-light lg:p-6 md:p-4 sm:p-2 xs:p-1'
                    whileHover={{ scale: 1.05 }}
                >
                    <span className="text-xl md:text-lg sm:text-base xs:text-sm">WEB</span> 
                </motion.div>

                <Skill name="HTML" x="13vw" y="2vw" nivel="Intermedio"/>    
                <Skill name="CSS" x="20vw" y="-20vw" nivel="Avanzado"/>
                <Skill name="Javascript" x="20vw" y="10vw" nivel="Avanzado"/>
                <Skill name="ReactJS" x="0vw" y="13vw" nivel="Avanzado"/>
                <Skill name="NextJS" x="-2vw" y="-15vw" nivel="Intermedio"/>
                <Skill name="Figma" x="15vw" y="-11vw" nivel="Básico"/>
                <Skill name="Angular" x="31vw" y="-5vw" nivel="Intermedio"/>
                <Skill name="PHP" x="7vw" y="-28vw" nivel="Avanzado"/>
                <Skill name="Java" x="-17vw" y="18vw" nivel="Avanzado"/>
                <Skill name="Tailwind CSS" x="1vw" y="24vw" nivel="Intermedio"/>
                <Skill name="Python" x="-9vw" y="-30vw" nivel="Básico"/>
                <Skill name="NodeJS" x="-20vw" y="-20vw" nivel="Avanzado"/>
                <Skill name="Astro" x="-30vw" y="9vw" nivel="Intermedio"/>
                <Skill name="SQL" x="-15vw" y="8vw" nivel="Intermedio"/>
                <Skill name="MySql" x="-16vw" y="-9vw" nivel="Básico"/>
                <Skill name="Typescript" x="-32vw" y="-4vw" nivel="Avanzado"/>
            </div>
        </>
    );
};

export default Skills;
