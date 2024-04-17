import React from 'react';
import { motion, useScroll } from 'framer-motion';

const LilIcon = ({ reference }) => {
    const { scrollYProgress } = useScroll({
        target: reference,
        offset: ["start end", "center start"]
    });

    return (
        <figure className='absolute left-0 stroke-dark'>
            <svg className='-rotate-90' width="75" height="75" viewBox="-3 4 100 100">
                <circle cx="75" cy="50" r="20" className='stroke-primary stroke-1 fill-none' />
                <motion.circle
                cx="75" cy="50" r="20"
                className='stroke-[5px] fill-light'
                style={{ pathLength: scrollYProgress }}
                />
                <circle cx="75" cy="50" r="10" className='stroke-1 animate-pulse fill-red-700' />
            </svg>
        </figure>
    );
};

export default LilIcon;
