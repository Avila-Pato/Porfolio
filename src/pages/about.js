import Head from "next/head";
import React, { useEffect, useRef } from "react";
import Layout from "./components/Layout";
import AnimatedText from "./components/AnimatedText";
import profilePic from "../../public/images/profile/yo.jpeg";
import Image from "next/image";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Couse from "./components/Couse";

const AnimatedNumber = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const About = () => {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Any description" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText className="md:text-8xl" text="La pasión alimenta el propósito." />
          <div className="grid w-full  grid-cols-8  sm:gap-8v 2xl:text-lg xs:p-1 sm:p-2 lg:p-2 2xl:p-11 ">
            <div className="col-span-3 pt-2 lg:pr-12 md:pr-0   gap-2 flex flex-col items-center justify-center xl:col-span-4 md:order-2 md:col-span-8 ">
              <h2 className="mb-4 text-2xl font-bold uppercase text-dark/75 dark:text-light/75">
                Biografia
              </h2>
              <div className=" md:pt-5 flex flex-col">
              <p className="font-medium  tracking-wider">
                ¡Hola, soy Patricio! Con una carrera previa en turismo y
                administracion hotelera, durante años me dediqué a ofrecer experiencias y
                atención personalizada a los huéspedes. Sin embargo, mi interés
                por el mundo digital me llevó a dar un giro en mi trayectoria
                profesional y adentrarme en el desarrollo web.
              </p>
              <br />
              <p className=" font-medium  tracking-wider">
                Desde entonces, he acumulado más de un año de experiencia
                programando, trabajando tanto en proyectos personales como para
                clientes, lo que me ha permitido desarrollar soluciones
                funcionales y creativas adaptadas a distintas necesidades. He
                completado cursos especializados y combinado este aprendizaje
                con un enfoque autodidacta para dominar tecnologías clave en el
                Front-End y el Back-End, además de herramientas complementarias.
              </p>
              <br />
              <p className="font-medium  tracking-wider md:hidden">
                Mi enfoque metodológico por la innovación, y experiencia previa
                en turismo me otorgan una perspectiva donde puedo crear
                experiencias digitales interactivas y funcionales que conectan
                con los usuarios de manera efectiva. Estoy comprometido con el
                aprendizaje continuo y con el desarrollo de proyectos que
                reflejen calidad, creatividad, y funcionalidad.
              </p>
              </div>
            </div>
            <div
              className="col-span-3 top-12 left-12   md:left-0 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-6 dark:bg-dark dark:border-light xl:col-span-4
             md:order-1 md:col-span-8  "
            >
              <div className="absolute top-0 -right-3  -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <Image
                src={profilePic}
                alt="Patricio"
                className="w-full h-auto rounded-2xl  "
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw "
              />
            </div>
            <div className="col-span-2 flex flex-col 2xl:m-24  md:gap-6  xs:m-0 sm:pt-5 justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-5xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumber value={6} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Experiencia laboral
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-5xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumber value={100} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Proyectos Personales
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-5xl  font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumber value={2} />+
                </span>
                <h2 className="text-xl  font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Años Programando
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
          <Couse />
        </Layout>
      </main>
    </>
  );
};

export default About;
