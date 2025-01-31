import React, { useRef } from "react";
import { useScroll } from "framer-motion";
import { motion } from "framer-motion";
import LilIcon from "./LilIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto  flex flex-col items-center
  justify-between md:w-[80%]"
    >
      <LilIcon reference={ref} />

      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold  text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;{" "}
          <a
            href={companyLink}
            target={"_blank"}
            className="text-red-700 dark:text-primaryDark capitalize"
          >
            {company}
          </a>
        </h3>
        <span className="capitalize font-medium text-blue-600 dark:text-light/75 xs:text-sm">
          {time}|{address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-5xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16 ">
        Experiencia
      </h2>
      <div ref={ref} className="w-[75%] m-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-8 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
            md:w-[2px] md:left-[30px] xs:left-[20px]
           
           "
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Promotor de ventas"
            companyLink="Travel Rock"
            // time="2018-2019 "
            address=" Santiago | La Concepcion "
            work="Asesoré a clientes sobre paquetes turísticos, brindando información detallada y resolviendo sus dudas. Gestioné reservas, asegurando un proceso eficiente y sin inconvenientes. Participé en la ejecución de campañas promocionales para atraer nuevos clientes y aumentar las ventas. Además, realicé seguimiento post-venta para garantizar la satisfacción del cliente y fomentar la fidelización."
          />
          <Details
            position="Agente de viajes"
            companyLink="Multiviajes"
            // time="2018-2019 "
            address=" Santiago | Calle Ahumada "
            work="Experiencia de ventas de paquetes turísticos,
            centrada en abordar las necesidades integrales
            de los clientes a lo largo de todo su viaje.
            brindando orientación y experiencias de viaje
            satisfactorias.
            "
          />
          <Details
            position="Operador de turismo(Rutacruz)"
            companyLink="www.google.com,"
            // time=" 2020-2021 "
            address=" Santiago | San Antonio 65"
            work="Venta y promoción del producto
            dentro del stand y exterior.
            Gestión de experiencia
            Propuesta de nuevos productos
            Apoyo en gestión de Tours en Santiago
            "
          />
          <Details
            position="Staff (Turistik)"
            companyLink="www.google.com"
            // time=" 2022-2023 "
            address=" Santiago | Calle Pedro De Valdivia"
            work="Experiencia multifacética en diversos
            departamentos del parque, desde anfitrión y
            ventas, manejo de grupos y atención al público.
            Especializado en operaciones específicas como
            teleférico, funicular .
            "
          />
          <Details
            position="Desarrollador Frontend"
            companyLink="www.google.com"
            // time=" 2019-2020 "
            address=" Santiago | Pasaje Republica"
            work="Diseñé y desarrollé formularios dinámicos para la creación y edición de entidades. Implementé autenticación segura utilizando Google, Azure y JWT. Configuré roles y permisos para garantizar un acceso controlado. Implementé diseño responsivo utilizando Flexbox y Grid. Optimicé aplicaciones para mejorar el rendimiento y la velocidad de carga, utilizando técnicas como la carga perezosa (lazy loading) y la minimización de recursos. Integré APIs RESTful para la gestión de datos dinámicos en la aplicación web.
            "
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
