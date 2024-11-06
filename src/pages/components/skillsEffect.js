import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Skill = ({ name, x, y, nivel }) => {
  const [showDetail, setShowDetail] = useState(false);

  const handleMouseEnter = () => {
    setShowDetail(true);
  };

  const handleMouseLeave = () => {
    setShowDetail(false);
  };

  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold py-3 px-6 shadow-dark cursor-pointer absolute bg-dark text-light dark:bg-light dark:text-dark xs:font-bold xs:text-xs sm:p-2 sm:text-xs md:px-4 md:py-2 md:text-sm lg:p-6 lg:py-3 lg:text-base"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x, y, transition: { duration: 1.5 } }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {name}

      {showDetail && (
        <div
          className="absolute top-full left-0 mt-2 bg-white dark:bg-gray-800 shadow-lg py-2 px-4 rounded-md xs:py-1 xs:px-2 sm:px-3 sm:py-1.5 md:px-4 md:py-2 lg:px-4 lg:py-2 text-gray-800 dark:text-gray-200 font-bold text-xs sm:text-sm md:text-base lg:text-base z-50"
          style={{ zIndex: 50 }}
        >
          {nivel === 'Avanzado' && <p>Avanzado</p>}
          {nivel === 'Intermedio' && <p>Intermedio</p>}
          {nivel === 'Básico' && <p>Básico</p>}
        </div>
      )}
    </motion.div>
  );
};

export default Skill;
