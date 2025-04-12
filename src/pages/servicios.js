"use client";
import Image from "next/image";
import { useState } from "react";

const Services = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <main className="flex flex-col items-center w-full relative overflow-hidden">
      {/* SVG decorativo superior */}
      <Image
        src="/service/linea.svg"
        width={1800}
        height={100}
        alt="Decoración superior"
        className="absolute top-10 w-full h-[100px]  "
      />

      {/* Imagen central */}
      <div className="mt-50 z-40">
        <Image
          src="/service/me.png"
          alt="Imagen central"
          width={260}
          height={280}
          className="rounded-full  "
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
          className="bg-transparent hover:bg-blue-500 text-black font-semibold hover:text-white py-4 px-6 border border-blue-500 hover:border-transparent rounded-lg bg-gradient-to-r from-[#58E6D9] to-[#B63E96]"
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

        <button className="bg-transparent hover:bg-blue-500 text-black font-semibold hover:text-white py-4 px-6 border border-blue-500 hover:border-transparent rounded-lg bg-gray-500">
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
      <div className="text-center font-bold text-2xl mt-2 px-6 text-transparent bg-clip-text bg-[linear-gradient(135deg,_rgb(74,234,220)_0%,_rgb(151,120,209)_20%,_rgb(207,42,186)_40%,_rgb(238,44,130)_60%,_rgb(251,105,98)_80%,_rgb(151,120,209)_100%)] z-10">
        Creación de interfaces Estéticas e interacciones Fluidas para el Mundo
        Digital
      </div>

      {/* Botón de contacto */}
      <div className="mt-10 z-10">
        <a
          href="mailto:p.avilaf1998@gmail.com"
          className="bg-blue-700 hover:bg-blue-800 dark:text-white text-white font-semibold hover:text-white py-4 px-6 border border-blue-500 hover:border-transparent border-x-blue-900 rounded-2xl   "
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
        className="w-full object-cover dark:hidden mask-fade-bottom absolute mt-32 "
      />

      {/* NUEVA SECCIÓN ABAJO */}
      <section className="w-full min-h-screen flex flex-col justify-center items-center  py-20 px-28">
        <h2 className="text-4xl font-bold mb-6 text-gray-800">Mis Servicios</h2>
        <div className="mt-10 flex flex-row  gap-8">
          <div
            className="bg-[linear-gradient(250deg,_rgb(255,206,236,1)_50%,_rgb(152,150,240)_100%)] 
p-6 rounded-xl shadow-lg text-center "
          >
            <Image
              alt=""
              width={30}
              height={30}
              src="/service/figma.svg"
              className="w-16 h-16 inline-block mr-2"
            />

            <h3 className="text-2xl font-semibold mb-2">Diseño UI/UX</h3>

            <p className="text-gray-600">
              Además como como desarrollador web, también ofrezco servicios de
              diseño UI/UX enfocados en ayudarte a destacar. Me especializo en
              crear interfaces intuitivas y atractivas que mejoran la
              experiencia del usuario, participando en cada etapa del proceso:
              desde esquemas iniciales hasta prototipos interactivos y diseños
              finales. Trabajo de manera colaborativa para dar vida a tu visión
              y brindar a tus usuarios una experiencia digital única y
              envolvente.
            </p>
          </div>

          <div className="bg-gradient-to-l from-[#c7abf3] to-[#e9e3e7] p-6 rounded-xl shadow-lg text-center">
            <Image
              alt=""
              width={10}
              height={10}
              src="/service/web.svg"
              className="w-16 h-16  inline-block mr-2"
            />
            <h3 className="text-2xl font-semibold mb-2">Desarrollo Web</h3>
            <p className="text-gray-600">
              Además de mi rol como desarrollador web, ofrezco servicios de
              desarrollo personalizados enfocados en crear sitios responsivos y
              visualmente atractivos que funcionan perfectamente en cualquier
              dispositivo. Ya sea para desarrollar un sitio desde cero o
              rediseñar uno existente, combino creatividad y tecnología moderna
              —incluyendo herramientas como Webflow— para adaptarme a tus
              necesidades y ayudarte a cumplir tus objetivos de forma eficiente
              y profesional.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
