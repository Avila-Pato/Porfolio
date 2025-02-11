import React from "react";
import Layout from "./Layout";

const Footer = () => {
  return (
    <footer
      className="w-full border-t-2  border-solid border-dark
   font-medium text-lg dark:text-light dark:border-light sm:text-base
  
   "
    >
      <Layout classname="py-2   flex justify-center  sm:py-6 items-center  lg:flex-col lg:py-6  ">
        <span>
          {new Date().getFullYear()} &copy; Todos los Derechos Reservados.
        </span>
      </Layout>
    </footer>
  );
};

export default Footer;
