import React from "react";
import Head from "next/head";
import AnimatedText from "./components/AnimatedText";
import Layout from "./components/Layout";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "../lib/Icons";
import project1 from "../../public/images/projects/capturaPantalla.jpeg";
import project2 from "../../public/images/projects/spotyfi-clon.jpg";
import project3 from "../../public/images/projects/netfliz.jpeg";
import project4 from "../../public/images/projects/texting.png";
import project5 from "../../public/images/projects/Captura de pantalla_31-7-2024_01514_super-mario-bros-demo-js.vercel.app.jpeg";
import project6 from "../../public/images/projects/apiPokemon.jpeg";
import project7 from "../../public/images/projects/angular.jpg";
import project8 from "../../public/images/projects/Blog.jpeg";
import { motion } from "framer-motion";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="w-full flex items-center 
        justify-between relative rounded-br-2xl rounded-3xl border border-solid
        border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light
        lg:flex-col lg:p-8  xs:rounded-2xl xs:rounded-br-3xl xs:p-4"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem]
                 bg-dark dark:bg-light rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]"
      />
      <Link
        href={link || "#"}
        target={link ? "_blank" : "_self"}
        className={`w-1/2 cursor-pointer overflow-hidden
            rounded-lg lg:w-full ${!link && "cursor-not-allowed opacity-50"}`}
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto object-cover"
          style={{ width: "100%", height: "50%" }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
          
        />
      </Link>

      <div
        className="w-1/2 flex flex-col items-start justify-between
            pl-6 lg:w-full lg:pl-0 lg:pt-6"
      >
        <span className="text-primary font-medium text-xl dark:text-primaryDark">
          {type}
        </span>
        <Link
          href={link || "#"}
          target={link ? "_blank" : "_self"}
          className={`hover:underline underline-offset-2 md:text-base ${
            !link && "cursor-not-allowed opacity-50"
          }`}
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link
            href={github || "#"}
            target={github ? "_blank" : "_self"}
            className={`w-10 md:w-6 ${
              !github && "cursor-not-allowed opacity-50"
            }`}
          >
            <GithubIcon />
          </Link>
          <Link
            href={link || "#"}
            target={link ? "_blank" : "_self"}
            className={`ml-4 rounded-lg bg-dark text-light
                p-2 px-6 text-lg font-semibold
                dark:bg-light dark:text-dark 
                sm:px-4 sm:text-base ${
                  !link && "cursor-not-allowed opacity-50"
                }`}
          >
            Visítalo
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ type, title, img, link, github, summary }) => {
  return (
    <article
      className="w-full flex flex-col items-center justify-center
        rounded-2xl border border-solid border-dark
        bg-light p-3 relative dark:bg-dark dark:border-light
        xs:p-4"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark 
          rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]"
      />

      <Link
        href={link || "#"}
        target={link ? "_blank" : "_self"}
        className={`w-full cursor-pointer overflow-hidden
            rounded-lg lg:w-full ${!link && "cursor-not-allowed opacity-50"}`}
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto object-cover"
          style={{ width: "100%", height: "300px" }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
          priority
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
        />
      </Link>

      <div
        className="w-full flex flex-col items-start justify-between
            pl-6 lg:w-full lg:pl-0 lg:pt-6"
      >
        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link || "#"}
          target={link ? "_blank" : "_self"}
          className={`hover:underline underline-offset-2 ${
            !link && "cursor-not-allowed opacity-50"
          }`}
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={github || "#"}
            target={github ? "_blank" : "_self"}
            className={`w-8 ${!github && "cursor-not-allowed opacity-50"}`}
          >
            <GithubIcon />
          </Link>
          <Link
            href={link || "#"}
            target={link ? "_blank" : "_self"}
            className={`ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base ${
              !link && "cursor-not-allowed opacity-50"
            }`}
          >
            Visítalo
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout classname="p-10">
          <AnimatedText
            text="Bienvenido a Mis Proyectos"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="Hotel Web"
                img={project1}
                summary="Este proyecto recrea un sitio Hotel utilizando Construido con NustJs. La intención es proporcionar una experiencia de usuario atractiva y funcional, que sirva como punto de partida para la promoción de Habitaciones."
                link="https://plataforma-hotel-nust-rn7y6ouyl-avila-patos-projects.vercel.app/"
                github="https://github.com/Avila-Pato/Plataforma-Hotel-NustJ"
                type="Proyectos Destacados"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Spotify Clon MERN Full Stack"
                img={project2}
                summary="Este repositorio contiene una versión del popular servicio de música Spotify, creado utilizando el stack MERN (MongoDB, Express, React, Node.js). Este proyecto ofrece una experiencia de usuario rica y funcional, que incluye características como la carga y gestión de canciones y álbumes, visualización de listas de reproducción, y un panel de administración para el control total del contenido multimedia."
                link="https://github.com/Avila-Pato/Spotify-Clon.-M.E.R.N-Full-Stack"
                github="https://github.com/Avila-Pato/Spotify-Clon.--ONLY-Front"
                type="Proyectos Destacados"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="NetFlix Clon"
                img={project3}
                summary="Este proyecto es una aplicación FrontEnd, construida con react y Firebase para gestionar la autenticación de usuarios de forma segura. Para la reproducción de videos, se emplea React Player. La interfaz moderna se construye solo con CSS, asegurando un diseño atractivo y responsivo. Con esta combinación, el proyecto ofrece seguridad, funcionalidad de videos y una experiencia de usuario fluida."
                link="https://spotify-clon-en-curso.vercel.app/"
                github="https://github.com/Avila-Pato/Netflix-clon"o
                type="Proyectos Destacados"
              />
            </div>
            <div className="col-span-12 sm:col-span-12">
              <FeaturedProject
                title="Chat Authentication Firebase"
                img={project4}
                summary="Este proyecto consta  con una autenticación de usuarios con Firebase, y 
                para gestión de datos en firebase store, un chat en tiempo real creado React y TypeScript, proporcionando una interfaz  y funcionalidades avanzadas para la comunicación instantánea."
                link="https://react-ts-firebase-auth-chat.vercel.app/"
                github="https://github.com/Avila-Pato/React-Ts-Firebase-Auth-Chat"
                type="Proyectos"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Super Marios World"
                img={project5}
                summary="Juego Mario Bros: Una versión simple del clásico Mario Bros desarrollada con HTML, CSS y JavaScript. El juego incluye elementos básicos como plataformas y enemigos,  Aun me falta terminarlo pero ya esta en funcionamiento"
                link="https://super-mario-bros-demo-js.vercel.app/"
                github="https://github.com/Avila-Pato/Super-Mario-Bros-demo-js"
                type="Proyectos"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Api Pokemon"
                img={project6}
                summary="Este proyecto es una API de Pokémon que proporciona información detallada sobre los Pokémon, incluyendo sus habilidades, tipos y estadísticas. Utiliza la API de PokéAPI para obtener datos y ofrece una experiencia interactiva para los aficionados de Pokémon."
                link="https://poke-api-two-lilac.vercel.app/"
                github="https://github.com/Avila-Pato/PokeApi"
                type="Proyectos"
              />
            </div>
            <div className="col-span-12 ">
              <FeaturedProject
                title="Angular Auth + Crud"
                img={project7}
                summary="AngularAuthCrud es una aplicación web que ofrece un sistema completo de autenticación y gestión de usuarios utilizando Angular y Firebase. Permite a los usuarios registrarse, iniciar sesión. Además, implementa un sistema completo de CRUD (Crear, Leer, Actualizar y Eliminar) para la gestión de tareas."
                link="https://angular-firebase-auth-flax.vercel.app/auth/sign-in"
                github="https://github.com/Avila-Pato/Angular-Firebase-Auth"
                type="Proyectos"
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                title="BlogReact-OnlyFrontend"
                img={project8}
                summary="El frontend de esta Web está construido utilizando React y Tailwind CSS. Proporciona una experiencia de usuario interactiva con una interfaz limpia y moderna. Se utilizan varias bibliotecas para facilitar la gestión del estado, la interaccion, entre otros."
                link="https://react-block-only-front-9juxjkzok-avila-patos-projects.vercel.app/"
                github="https://github.com/Avila-Pato/ReactBlock-Only-Front-"
                type="Proyectos"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
