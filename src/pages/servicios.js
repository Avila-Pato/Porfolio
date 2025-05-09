"use client";
import Image from "next/image";
import { useState } from "react";

import React, { useRef } from "react";

const Services = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <main className="flex flex-col items-center w-full relative overflow-hidden pt-28 md:pt-32">
      {/* SVG decorativo superior */}
      <Image
        src="/service/linea.svg"
        width={1800}
        height={100}
        alt="Decoración superior"
        className="absolute top-10 w-full h-[100px] "
      />

      {/* Imagen central */}
      <div className="2xl:-mt-24  md:-mt-20 z-40">
        <Image
          src="/service/me.png"
          alt="Imagen central"
          width={260}
          height={280}
          className="rounded-full   "
        />
      </div>

      {/* Elementos flotantes decorativos */}
      <div className="flex flex-wrap absolute z-10">
        <Image
          src="/service/Cafe.png"
          alt="Café"
          width={100}
          height={100}
          className="translate-y-16 -translate-x-60"
        />
        <Image
          src="/service/Foco.png"
          alt="Foco"
          width={100}
          height={100}
          className="translate-x-60 "
        />
        <Image
          src="/service/Llama.png"
          alt="Llama"
          width={100}
          height={100}
          className="translate-x-60 translate-y-60 "
        />
      </div>

      {/* Botones */}
      <div className="flex flex-row justify-center items-center gap-4 mt-8 z-10">
        <button
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="bg-transparent hover:bg-blue-500 text-black font-semibold hover:text-white py-4 px-6 border border-blue-500 hover:border-transparent rounded-lg bg-gradient-to-r 
          md:py-2 md:px-4 md:text-md
          from-[#58E6D9] to-[#B63E96]"
        >
          <Image
            alt=""
            width={10}
            height={10}
            src="/service/figma.svg"
            className="w-6 h-6 inline-block mr-2"
          />

          <span className={`texto ${hovered ? "texto-hover" : ""}`}>
            {hovered ? "Empecemos" : "UX/UI Designer"}
          </span>
        </button>

        <button className="bg-transparent hover:bg-blue-500 text-black font-semibold hover:text-white py-4 px-6 border border-blue-500 hover:border-transparent rounded-lg bg-gray-500 dark:text-white md:py-2 md:px-4 md:text-md">
          <Image
            alt=""
            width={10}
            height={10}
            src="/service/web.svg"
            className="w-6 h-6 inline-block mr-2"
          />
          Desarrollador Web
        </button>
      </div>

      {/* Texto de gradiente */}
      <div className="text-center font-bold text-3xl mt-2 px-6 text-transparent bg-clip-text bg-[linear-gradient(135deg,_rgb(74,234,220)_0%,_rgb(151,120,209)_20%,_rgb(207,42,186)_40%,_rgb(238,44,130)_60%,_rgb(251,105,98)_80%,_rgb(151,120,209)_100%)] z-10 md:text-2xl ">
        Creación de interfaces Estéticas e interacciones Fluidas para el Mundo
        Digital
      </div>
      {/* Botón de contacto */}
      <div className="mt-10 z-10">
        <a
          href="mailto:patricio.avila@example.com"
          className="bg-blue-700 hover:bg-blue-800 dark:text-white text-white font-semibold hover:text-white py-4 px-6 border border-blue-500 hover:border-transparent border-x-blue-900 rounded-2xl  md:py-2 md:px-4 md:text-md "
        >
          Contáctame
        </a>
      </div>

      {/* SVG decorativo inferior */}
      <Image
        src="/service/lineacopy.svg"
        width={1800}
        height={900}
        alt="Decoración inferior"
        className="w-full object-cover dark:hidden mask-fade-bottom absolute
         sm:mt-64  md:mt-44 lg:mt-36 2xl:mt-10 "
      />

      {/* NUEVA SECCIÓN ABAJO */}
      <section className="w-full min-h-screen flex flex-col justify-center items-center  py-20 px-28 sm:px-2">
        <h2 className="text-4xl font-bold mb-6  text-gray-600 dark:text-white">
          Mis Servicios
        </h2>
        <div className="mt-10 flex flex-row sm:flex sm:flex-col gap-8">
          <div
            className="bg-[linear-gradient(250deg,_rgb(255,243,231)_0%,_rgb(255,234,215)_100%)] p-6 rounded-xl shadow-lg text-center dark:bg-none dark:text-white
             sm:text-center "
          >
            <Image
              alt=""
              width={30}
              height={30}
              src="/service/figma.svg"
              className="w-16 h-16 inline-block mr-2 sm:w-10 sm:h-10"
            />

            <h3 className="text-2xl font-semibold mb-2">Diseño UI/UX</h3>

            <p className="text-gray-600 dark:text-white ">
              Ofrezco servicios de diseño UI/UX enfocados en ayudarte a
              destacar. Me especializo en crear interfaces intuitivas y
              atractivas que mejoran la experiencia del usuario, participando en
              cada etapa del proceso: desde esquemas iniciales hasta prototipos
              interactivos y diseños finales. Trabajo de manera colaborativa
              para dar vida a tu visión y brindar a tus usuarios una experiencia
              digital única y envolvente.
            </p>
          </div>

          <div
            className="bg-[linear-gradient(150deg,_rgb(255,243,231)_0%,_rgb(220,220,250)_100%)] 
  dark:bg-transparent p-6 rounded-xl shadow-lg text-center dark:text-white dark:bg-none"
          >
            <Image
              alt=""
              width={10}
              height={10}
              src="/service/web.svg"
              className="w-16 h-16  inline-block mr-2 sm:w-10 sm:h-10"
            />
            <h3 className="text-2xl font-semibold mb-2 ">
              Desarrollo Workflow
            </h3>
            <p className="text-gray-600 dark:text-white ">
              Ofrezco servicios de desarrollo personalizados enfocados en crear
              sitios responsivos y visualmente atractivos que funcionan
              perfectamente en cualquier dispositivo. Ya sea para desarrollar un
              sitio desde cero o rediseñar uno existente, combino creatividad y
              tecnología moderna —incluyendo herramientas como Webflow— para
              adaptarme a tus necesidades y ayudarte a cumplir tus objetivos de
              forma eficiente y profesional.
            </p>
          </div>
        </div>
      </section>
      <article className="mb-12 sm:pb-0  text-4xl dark:text-white  text-gray-600 font-medium">
        Mis Procesos
      </article>
      <section
        className="w-full min-h-screen grid grid-cols-3
       sm:flex sm:flex-col  sm:px-2 sm:pb-12  pb-12 px-20  justify-center"
      >
        <div
          className=" items-center dark:text-white  
        flex flex-col sm:mt-2 mt-28 text-2xl  text-gray-600 font-medium"
        >
          Descubrimiento
          <div
            className="mt-2 text-lg justify-center text-gray-600 font-normal 
          sm:pl-4  pl-12  dark:text-white  "
          >
            Comienzo con un diagnóstico detallado, obteniendo una comprensión
            profunda de sus objetivos, público objetivo y requisitos del
            proyecto.
          </div>
 
          <Image
            width={60}
            height={60}
            src="/iconsServicesMobile/desarrollo.png"
            alt="hola"
            className="block sm:block md:hidden lg:hidden xl:hidden 2xl:hidden"
          />
          <div className="mt-48 sm:mt-2 items-center flex flex-col text-2xl text-gray-600 font-medium dark:text-white  ">
            Texting
            <div className="mt-2 text-lg justify-center text-gray-600 font-normal sm:pl-4  pl-12 dark:text-white  ">
              La calidad es el núcleo de nuestro proceso. Probamos rigurosamente
              el proyecto para identificar y resolver cualquier problema.
            </div>
            <Image
            width={60}
            height={60}
            src="/iconsServicesMobile/descubrimiento.png"
            alt="hola"
            className="block sm:mt-6 sm:block md:hidden lg:hidden xl:hidden 2xl:hidden"
          />
          </div>
        </div>

        <div className="  justify-center flex ">
          <Image
            alt=""
            width={900}
            height={900}
            src="/service/proceso.png"
            className="w-16 h-900 sm:hidden xs:hidden"
          />
        </div>

        <div
          className="mt-64 sm:mt-6 items-center  flex flex-col text-2xl text-gray-600 font-medium  dark:text-white  
          "
        >
          Diseño y Desarrollo
          <div className="mt-2 sm:pl-2 text-lg dark:text-white   text-gray-600 font-normal ">
            Una vez aprobados los diseños, les damos vida. Nos aseguramos de que
            cada elemento funcione a la perfección y esté optimizado para el
            rendimiento.
          </div>
          <Image
            width={60}
            height={60}
            src="/iconsServicesMobile/diseno.png"
            alt="hola"
            className="block sm:block md:hidden lg:hidden xl:hidden 2xl:hidden"
          />
          <div className="mt-48 sm:mt-6 items-center flex flex-col text-2xl text-gray-600 font- medium dark:text-white  ">
            lanzamiento
            <div className="mt-2 sm:pl-2  text-lg dark:text-white   text-gray-600 font-normal  ">
              Finalmente, se realiza la entrega de tu proyecto. Te acompaño en
              cada paso del proceso de implementación para asegurar que el
              lanzamiento sea fluido y sin contratiempos
            </div>
            <Image
            width={60}
            height={60}
            src="/iconsServicesMobile/launch.png"
            alt="hola"
            className="block mt-12 sm:block md:hidden lg:hidden xl:hidden 2xl:hidden"
          />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
