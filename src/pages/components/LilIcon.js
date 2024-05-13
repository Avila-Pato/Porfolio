import React from 'react';
import { motion, useScroll } from 'framer-motion';

const LilIcon = ({ reference }) => {
    const { scrollYProgress } = useScroll({
        target: reference,
        offset: ["start end", "center start"]
    });

    return (
        <figure className='absolute left-0 stroke-dark dark:stroke-light'>
            <svg className='-rotate-90 md:w-[60px] md:h-[60px] xs:w-[40px] xs:h-[40px]' width="75" height="75" viewBox="-3 4 100 100">
                <circle cx="75" cy="50" r="20" className='stroke-primary dark:stroke-primaryDark stroke-1 fill-none' />
                <motion.circle
                cx="75" cy="50" r="20"
                className='stroke-[5px] fill-light dark:fill-dark'
                style={{ pathLength: scrollYProgress }}
                />
                <circle cx="75" cy="50" r="10" className='stroke-1 animate-pulse fill-red-700 dark:fill-primaryDark' />
            </svg>
        </figure>
    );
};

export default LilIcon;
