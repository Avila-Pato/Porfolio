"use client"
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
      <div className="flex flex-row justify-center items-center gap-4 mt-12 z-10">
        <button
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="bg-transparent hover:bg-blue-500 text-black font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full bg-gradient-to-r from-[#58E6D9] to-[#B63E96]"
        >
          <span className={`texto ${hovered ? "texto-hover" : ""}`}>
            {hovered ? "Empecemos" : "UX/UI Designer"}
          </span>
        </button>

        <button className="bg-transparent hover:bg-blue-500 text-black font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full bg-gray-500">
          Frontend Developer
        </button>
      </div>

      {/* Texto de gradiente */}
      <div className="text-center font-bold text-2xl mt-10 px-6 text-transparent bg-clip-text bg-[linear-gradient(135deg,_rgb(74,234,220)_0%,_rgb(151,120,209)_20%,_rgb(207,42,186)_40%,_rgb(238,44,130)_60%,_rgb(251,105,98)_80%,_rgb(151,120,209)_100%)] z-10">
        Creación de interfaces Estéticas e interacciones Fluidas para el Mundo Digital
      </div>

      {/* Botón de contacto */}
      <div className="mt-10 z-10">
        <button className="bg-transparent hover:bg-blue-800 dark:text-white text-black font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-2xl bg-blue-700">
          Contáctame
        </button>
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
      <section className="w-full min-h-screen flex flex-col justify-center items-center  py-20 px-6">

        <h2 className="text-4xl font-bold mb-6 text-gray-800">Mis Servicios</h2>
        <p className="max-w-xl text-center text-gray-700 text-lg">
        Como desarrollador Frontend. No solo trabajo como desarrollador, sino que constantemente busco aprender por mi cuenta, explorar nuevas tecnologías y perfeccionar cada detalle del diseño y la experiencia de usuario. Mi enfoque está en construir interfaces intuitivas y visualmente atractivas que realmente conecten con las personas y mejoren cada interacción.
        </p>

        <div className="mt-10 flex flex-row  gap-8">

          <div className="bg-gradient-to-r from-[#ebabf3] to-[#e9e3e7] p-6 rounded-xl shadow-lg  text-center">
            <h3 className="text-xl font-semibold mb-2">Diseño UI/UX</h3>
            <p className="text-gray-600">Mi servicio de diseño UI/UX está pensado para ayudarte a destacar. Como profesional autodidacta, me especializo en crear interfaces de usuario intuitivas y atractivas que no solo se ven bien, sino que también aseguran una navegación fluida y agradable. Trabajo de forma independiente, guiando cada etapa del proceso: desde los primeros esquemas hasta prototipos interactivos y diseños finales. Colaboro contigo de manera cercana para dar vida a tu visión y brindar a tus usuarios una experiencia única y envolvente.</p>
          </div>

          <div className="bg-gradient-to-l from-[#c7abf3] to-[#e9e3e7] p-6 rounded-xl shadow-lg text-center">
            <h3 className="text-xl font-semibold mb-2">Desarrollo Web</h3>
            <p className="text-gray-600">Ofrezco un servicio de desarrollo web personalizado, enfocado en crear sitios responsivos y visualmente atractivos que funcionen perfectamente en todos los dispositivos. Ya sea que necesites un sitio nuevo o quieras rediseñar uno existente, combino creatividad y tecnología para ayudarte a cumplir tus objetivos. Trabajo de forma independiente y autodidacta, adaptándome a tus necesidades específicas y utilizando herramientas modernas como Webflow para dar vida a tu proyecto de forma eficiente y profesional.</p>
          </div>

         
        </div>
      </section>
    </main>
  );
};

export default Services;
