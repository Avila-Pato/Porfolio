import React, { useRef } from 'react'
import { useScroll } from 'framer-motion'
import { motion } from 'framer-motion'
import LilIcon from './LilIcon'

const Details = ({ type, time, place, info }) => {
    const ref = useRef(null);
    return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto  flex flex-col items-center
  justify-between'>

        <LilIcon reference={ref} />
        <motion.div
            initial={{ y: 50 }}
            whileInView={{ y: 1 }}
            transition={{ duration: 0.5, type: 'spring' }}
        >
            <h3 className='capitalize font-bold  text-2xl'>{type}
            </h3>
            <span className='capitalize font-medium text-dark/75'>
                {time}|{place}
            </span>
            <p className='font-medium w-full'>
                {info}
            </p>
        </motion.div>
    </li>
}
const Education = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    );
    return (
        <div className='my-64'>
            <h2 className='font-bold text-5xl mb-32 w-full text-center'>
                Educación
            </h2>
            <div ref={ref} className='w-[75%] m-auto relative'>

                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className='absolute left-8 top-0 w-[4px] h-full bg-dark origin-top' />

                <ul className='w-full flex flex-col items-start justify-between ml-4'>
                <Details
                        type="Duoc"
                        time="2023-2025"
                        place="Santiago"
                        info="Carrera en analista programador "
                    />
                    <Details
                        type="Iplacex"
                        time="2023-2025"
                        place="Santiago"
                        info="Carrera en analista programador "
                    />
                    <Details
                        type="Koe"
                        time="2023-2025"
                        place="Santiago"
                        info="Carrera en analista programador "
                    />
                   
                </ul>
            </div>
        </div>
    )
}

export default Education