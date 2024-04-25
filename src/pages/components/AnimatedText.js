import React from 'react';
import { motion } from "framer-motion";

const quote = {
    initial: {
        opacity: 1,
    },
    animate: {
        opacity: 1,
        transition: {
            delay: 0.5,
            staggerChildren: 0.08,
        }
    }
}

const singelWord = {
    initial: {
        opacity: 0,
        y: 50,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
        }
    }
}

const AnimatedText = ({ text = "", className = "" }) => {
    // Verificar si el texto está vacío o indefinido
    if (!text || text.trim() === "") {
        return null; // Devolver null si el texto está vacío
    }

    return (
        <div className={`w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden ${className}`}>
            <motion.h1
                className={`inline-block w-full text-dark font-bold capitalize text-4xl dark:text-light`}
                variants={quote}
                initial="initial"
                animate="animate"
            >
                {/* Dividir el texto en letras individuales y animarlas */}
                {text.split("").map((word, index) => (
                    <motion.span key={word + '-' + index} className='inline-block' variants={singelWord}>
                        {word}&nbsp;
                    </motion.span>
                ))}
            </motion.h1>
        </div>
    );
};

export default AnimatedText;
