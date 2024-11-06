import React from "react";
import Skill from "./skillsEffect";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-6xl mt-64 w-full text-center md:text-4xl md:mt-28 md:m-1">
        Conocimientos
      </h2>
      <div
        className="w-full h-screen relative flex items-center  justify-center bg-circularLight dark:bg-circularDark 
            lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
            lg:bg-circularLightLg lg:dark:bg-circularDarkLg
            md:bg-circularLightMd md:dark:bg-circularDarkMd
            sm:bg-circularLightSm sm:dark:bg-circularDarkSm"
      >
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold
                 bg-dark text-light p-8 shadow-dark cursor-pointer 
                 dark:text-dark dark:bg-light lg:p-6 md:p-4 sm:p-2 xs:p-1"
          whileHover={{ scale: 1.05 }}
        >
          <span className="text-xl md:text-lg sm:text-base xs:text-sm">
            WEB
          </span>
        </motion.div>

        <Skill
          name="HTML"
          x="8vw"
          y="0vw"
          nivel="Intermedio"
          style="font-size: 0.6em; "
        />
        <Skill
          name="CSS"
          x="15vw"
          y="-10vw"
          nivel="Avanzado"
          style="font-size: 0.6em;"
        />
        <Skill
          name="Javascript"
          x="15vw"
          y="4vw"
          nivel="Intermedio"
          style="font-size: 0.6em;"
        />
        <Skill
          name="ReactJS"
          x="5vw"
          y="6vw"
          nivel="Intermedio"
          style="font-size: 0.6em;"
        />
        <Skill
          name="NextJS"
          x="-7vw"
          y="-10vw"
          nivel="Intermedio"
          style="font-size: 0.6em;"
        />
        <Skill
          name="Figma"
          x="10vw"
          y="-6vw"
          nivel="Básico"
          style="font-size: 0.6em;"
        />
        <Skill
          name="Angular"
          x="22vw"
          y="-7vw"
          nivel="Básico"
          style="font-size: 0.6em;"
        />
        <Skill
          name="PHP"
          x="2vw"
          y="-12vw"
          nivel="Básico"
          style="font-size: 0.6em;"
        />
        <Skill
          name="Java"
          x="-10vw"
          y="8vw"
          nivel="Básico"
          style="font-size: 0.6em;"
        />
        <Skill
          name="Tailwind"
          x="-2vw"
          y="12vw"
          nivel="Intermedio"
          style="font-size: 0.6em;"
        />
        <Skill
          name="Python"
          x="-5vw"
          y="-16vw"
          nivel="Básico"
          style="font-size: 0.6em;"
        />
        <Skill
          name="NodeJS"
          x="-15vw"
          y="-8vw"
          nivel="Intermedio"
          style="font-size: 0.6em;"
        />
        <Skill
          name="Astro"
          x="-20vw"
          y="4vw"
          nivel="Intermedio"
          style="font-size: 0.6em;"
        />
        <Skill
          name="SQL"
          x="-8vw"
          y="4vw"
          nivel="Intermedio"
          style="font-size: 0.6em;"
        />
        <Skill
          name="MySql"
          x="-10vw"
          y="-5vw"
          nivel="Intermedio"
          style="font-size: 0.6em; "
        />
        <Skill
          name="Typescript"
          x="-27vw"
          y="-1vw"
          nivel="Intermedio"
          style="font-size: 0.6em;"
        />

        <Skill
          name="C#"
          x="-7vw"
          y="-1vw"
          nivel="Básico"
          style="font-size: 0.6em;"
        />
        <Skill
          name=".NET"
          x="2vw"
          y="-7vw"
          nivel="Básico"
          style="font-size: 0.6em;"
        />
        <Skill
          name="Firebase"
          x="10vw"
          y="12vw"
          nivel="Básico"
          style="font-size: 0.6em;"
        />
        <Skill
          name="Mongoose"
          x="20vw"
          y="-1vw"
          nivel="Básico"
          style="font-size: 0.6em;"
        />
        <Skill
          name="React"
          x="-14vw"
          y="-15vw"
          nivel="Intermedio"
          style="font-size: 0.6em;"
        />

        <Skill
          name="Git"
          x="-22vw"
          y="-12vw"
          nivel="Intermedio"
          style="font-size: 0.6em;"
        />
        <Skill
          name="GitHub"
          x="-vw"
          y="-7vw"
          nivel="Intermedio"
          style="font-size: 0.6em;"
        />

        <Skill
          name="Vercel"
          x="18vw"
          y="10vw"
          nivel="Intermedio"
          style="font-size: 0.6em;"
        />
        <Skill
          name="AWS"
          x="8vw"
          y="-16vw"
          nivel="Intermedio"
          style="font-size: 0.6em;"
        />
        <Skill
          name="Docker"
          x="-18vw"
          y="0vw"
          nivel="Intermedio"
          style="font-size: 0.6em;"
        />
        <Skill
          name="Express"
          x="-15vw"
          y="12vw"
          nivel="Intermedio"
          style="font-size: 0.6em;"
        />
        <Skill
          name="Bootstrap"
          x="24vw"
          y="6vw"
          nivel="Intermedio"
          style="font-size: 0.6em;"
        />
        <Skill
          name="MaterialUI"
          x="17vw"
          y="-15vw"
          nivel="Intermedio"
          style="font-size: 0.6em;"
        />
        <Skill
          name="Cloudflare"
          x="-30vw"
          y="6vw"
          nivel="Intermedio"
          style="font-size: 0.6em;"
        />
        <Skill
          name="Nestjs"
          x="34vw"
          y="-2vw"
          nivel="Intermedio"
          style="font-size: 0.6em;"
        />
      </div>
    </>
  );
};

export default Skills;
