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
           className='flex items-center justify-center rounded-full font-semibold bg-dark xs:bg-dark text-light 
            py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light 
            lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent
            xs:text-light xs:dark:text-light lg:p-6 md:p-4 sm:p-2 xs:p-1 xs:font-bold xs:text-xs'
            whileHover={{ scale: 1.05 }}
            initial={{ x: 0, y: 0 }}
            whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {name}
            {showDetail && (
                <div className="absolute top-full left-0 mt-2 bg-white dark:bg-gray-800 shadow-lg py-2 px-4 rounded-md
                    xs:py-1 xs:px-2 sm:py-1.5 sm:px-3 md:py-2 md:px-4 lg:py-2 lg:px-4
                    xs:bg-transparent xs:dark:bg-transparent
                    xs:text-dark xs:dark:text-light xs:font-bold">
                    {nivel === 'Avanzado' && <p className="text-xs sm:text-sm md:text-base lg:text-base text-gray-800 dark:text-gray-200">Nivel: Avanzado</p>}
                    {nivel === 'Intermedio' && <p className="text-xs sm:text-sm md:text-base lg:text-base text-gray-800 dark:text-gray-200">Nivel: Intermedio</p>}
                    {nivel === 'Básico' && <p className="text-xs sm:text-sm md:text-base lg:text-base text-gray-800 dark:text-gray-200">Nivel: Básico</p>}
                </div>
            )}
        </motion.div>
    );
};

export default Skill;
