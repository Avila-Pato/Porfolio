import React from 'react';
import { motion } from "framer-motion";

const quote = {
    initial: { opacity: 1 },
    animate: { 
        opacity: 1,
        transition: { delay: 0.5, staggerChildren: 0.08 }
    }
};

const quote2 = {
    initial: { opacity: 1 },
    animate: { 
        opacity: 1,
        transition: { delay: 0.5, staggerChildren: 0.02 }
    }
};

const singelWord = {
    initial: { opacity: 0, y: 50 },
    animate: { 
        opacity: 1,
        y: 0,
        transition: { duration: 1 }
    }
};

const AnimatedText = ({ text = "", className = "", animateText = true }) => {
    if (!text || text.trim() === "") return null;

    return (
        <div className="w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden sm:py-0">
            {animateText ? (
                <motion.h1
                    className={`inline-block w-full text-dark font-extrabold capitalize text-3xl dark:text-light my-5 md:text-sm xs:text-xl min-2xl:text-5xl lg:text-2xl sm:text-3xl`}
                    variants={quote}
                    initial="initial"
                    animate="animate"
                >
                    {text.split("").map((word, index) => (
                        <motion.span key={word + '-' + index} className='inline-block' variants={singelWord}>
                            {word}&nbsp;
                        </motion.span>
                    ))}
                </motion.h1>
            ) : (
                <h1 className={`inline-block w-full text-dark font-extrabold capitalize text-3xl dark:text-light my-5 md:text-sm xs:text-xl min-2xl:text-5xl lg:text-2xl sm:text-3xl`}>
                    {text}
                </h1>
            )}
        </div>
    );
};

export const AnimatedTextSub = ({ text = "", className = "", animateText = true }) => {
    if (!text || text.trim() === "") return null;

    return (
        <div className="w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden sm:py-0">
            {animateText ? (
                <motion.h1
                    className={`inline-block w-full text-dark font-extrabold capitalize dark:text-light my-5 md:text-sm xs:text-sm min-2xl:text-5xl lg:text-sm sm:text-3xl`}
                    variants={quote2}
                    initial="initial"
                    animate="animate"
                    transition={{ duration: 0.02 }}
                >
                    {text.split("").map((word, index) => (
                        <motion.span
                            key={word + '-' + index}
                            className='inline-block'
                            variants={singelWord}
                            transition={{ duration: 0.02 }}
                        >
                            {word}&nbsp;
                        </motion.span>
                    ))}
                </motion.h1>
            ) : (
                <h1 className={`inline-block w-full text-dark font-extrabold capitalize dark:text-light my-5 md:text-sm xs:text-sm min-2xl:text-5xl lg:text-sm sm:text-3xl`}>
                    {text}
                </h1>
            )}
        </div>
    );
};

export default AnimatedText;
