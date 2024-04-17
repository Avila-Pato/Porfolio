import React, { useRef } from 'react'
import { useScroll } from 'framer-motion'
import { motion } from 'framer-motion'
import LilIcon from './LilIcon'

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref  = useRef(null);
  return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto  flex flex-col items-center
  justify-between'>

      <LilIcon reference={ref}/>

    <motion.div
    initial={{y:50}}
    whileInView={{y:0}}
    transition={{duration:0.5, type: 'spring'}}
  
    >
      <h3 className='capitalize font-bold  text-2xl'>{position}&nbsp; <a href={companyLink}
        target={"_blank"}
        className='text-red-700 capitalize'
      >{company}</a></h3>
      <span className='capitalize font-medium text-blue-600'>
        {time}|{address}
      </span>
      <p className='font-medium w-full'>
        {work}
      </p>
    </motion.div>
  </li>
}


const Experience = () => {
const ref  = useRef(null);
  const { scrollYProgress } = useScroll(
    {
      
     target:ref,
     offset: ["start end", "center start"]
    }
  );

  return (
    <div className='my-64'>
      <h2 className='font-bold text-5xl mb-32 w-full text-center'>
        Experiencia
      </h2>
      <div ref={ref} className='w-[75%] m-auto relative'>

          <motion.div
          style={{scaleY: scrollYProgress}}
           className='absolute left-8 top-0 w-[4px] h-full bg-dark origin-top'/>

        <ul  className='w-full flex flex-col items-start justify-between ml-4'>
          <Details

            position="Agente de viajes"
            companyLink="Multiviajes"
            company="@Google "
            time="2018-2019 "   
            address="Santiago "
            work="Worked on a team responsible for developing new features for Google's
          search engine, including improving the accuracy and relevance of search results and
          developing new tools for data analysis and visualization."
          />
          <Details

            position="Software Engineer"
            companyLink="www.google.com"
            company="@Google"
            time="2022-Present"
            address="Mountain View, CA"
            work="Worked on a team responsible for developing new features for Google's
            search engine, including improving the accuracy and relevance of search results and
            developing new tools for data analysis and visualization."
          />
          <Details

            position="Software Engineer"
            companyLink="www.google.com"
            company="@Google"
            time="2022-Present"
            address="Mountain View, CA"
            work="Worked on a team responsible for developing new features for Google's
            search engine, including improving the accuracy and relevance of search results and
            developing new tools for data analysis and visualization."
          />
          <Details

            position="Software Engineer"
            companyLink="www.google.com"
            company="@Google"
            time="2022-Present"
            address="Mountain View, CA"
            work="Worked on a team responsible for developing new features for Google's
            search engine, including improving the accuracy and relevance of search results and
            developing new tools for data analysis and visualization."
          />
          <Details

            position="Software Engineer"
            companyLink="www.google.com"
            company="@Google"
            time="2022-Present"
            address="Mountain View, CA"
            work="Worked on a team responsible for developing new features for Google's
            search engine, including improving the accuracy and relevance of search results and
            developing new tools for data analysis and visualization."
          />
        </ul>
      </div>
    </div>
  )
}

export default Experience