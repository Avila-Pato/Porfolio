import { mix, motion } from 'framer-motion';
import Image from 'next/image';

const skills = [
  { name: "HTML", nivel: "Avanzado", icon: "/svg/HTML.svg" },
  { name: "CSS", nivel: "Avanzado", icon: "/svg/CSS.svg" },
  { name: "VSCode", nivel: "Avanzado", icon: "/svg/VSCode-Dark.svg" },
  { name: "ReactJS", nivel: "Avanzado", icon: "/svg/React-Dark.svg" },
  { name: "NextJS", nivel: "Avanzado", icon: "/svg/NextJS-Dark.svg" },
  { name: "Tailwind", nivel: "Avanzado", icon: "/svg/TailwindCSS-Dark.svg" },
  { name: "GitHub", nivel: "Avanzado", icon: "/svg/GitHub-Dark.svg" },
  { name: "Javascript", nivel: "Avanzado", icon: "/svg/Javascript.svg" },
  { name: "Figma", nivel: "Intermedio", icon: "/svg/Figma-Dark.svg" },
  { name: "Angular", nivel: "Intermedio", icon: "/svg/iconoAngular.svg" },
  { name: "AngularJS", nivel: "Intermedio", icon: "/svg/Angular-JS.svg" },
  { name: "Python", nivel: "Intermedio", icon: "/svg/Python-Dark.svg" },
  { name: "NodeJS", nivel: "Intermedio", icon: "/svg/NodeJS-Dark.svg" },
  { name: "Astro", nivel: "Intermedio", icon: "/svg/Astro.svg" },
  { name: "SQL", nivel: "Intermedio", icon: "/svg/SQL.svg" },
  { name: "MySql", nivel: "Intermedio", icon: "/svg/MySql-Dark.svg" },
  { name: "Typescript", nivel: "Avanzado", icon: "/svg/TypeScript.svg" },
  { name: "Firebase", nivel: "Intermedio", icon: "/svg/Firebase-Dark.svg" },
  { name: "Mongoose", nivel: "Intermedio", icon: "/svg/MongoDB.svg" },
  { name: "Django", nivel: "Intermedio", icon: "/svg/Django.svg" },
  { name: "Git", nivel: "Avanzado", icon: "/svg/Git.svg" },
  { name: "Express", nivel: "Intermedio", icon: "/svg/ExpressJS-Dark.svg" },
  { name: "Bootstrap", nivel: "Intermedio", icon: "/svg/iconoBootstrap.svg" },
  { name: "MaterialUI", nivel: "Intermedio", icon: "/svg/MaterialUI-Dark.svg" },
  { name: "Vue", nivel: "Intermedio", icon: "/svg/VueJS-Dark.svg" },
  { name: "Nuxt", nivel: "Intermedio", icon: "/svg/NuxtJS-Dark.svg" },
  { name: "PHP", nivel: "Básico", icon: "/svg/PHP-Dark.svg" },
  { name: "Java", nivel: "Básico", icon: "/svg/Java-Dark.svg" },
  { name: "C#", nivel: "Básico", icon: "/svg/Csharp.svg" },
  { name: ".NET", nivel: "Básico", icon: "/svg/DotNet.svg" },
  { name: "Docker", nivel: "Básico", icon: "/svg/Docker.svg" },
  { name: "Laravel", nivel: "Básico", icon: "/svg/Laravel-Dark.svg" }
];

const Skills = () => {
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.nivel]) {
      acc[skill.nivel] = [];
    }
    acc[skill.nivel].push(skill);
    return acc;
  }, {});

  const skillColors = {
    Avanzado: {
      bg: "from-blue-500 to-indigo-600",
      hover: "hover:from-blue-600  hover:to-indigo-700",
      shadow: "shadow-blue-500/50",
      mix: "mix-blend-color-dodge ",
    },
    Intermedio: {
      bg: "from-purple-500 to-pink-500",
      hover: "hover:from-purple-600 hover:to-pink-600",
      shadow: "shadow-purple-500/50"
    },
    Básico: {
      bg: "from-orange-500 to-red-500",
      hover: "hover:from-orange-600 hover:to-red-600",
      shadow: "shadow-orange-500/50"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br py-12 px-4">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-dark/75 dark:text-light/75 text-4xl font-bold text-center mb-12 bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
      >
        Técnologias
      </motion.h2>
      
      <div className="max-w-7xl mx-auto space-y-12">
        {Object.entries(groupedSkills).map(([nivel, skills], index) => (
          <motion.div
            key={nivel}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-gray-800/100 backdrop-blur-lg  dark:bg-gray-800/75  dark:bg-opacity-10 rounded-2xl p-6 shadow-xl"
          >
            <h3 className="text-3xl font-bold mb-6 text-transparent 
            bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              {nivel}
            </h3>
            <div className="flex flex-wrap gap-4">
              {skills.map(skill => (
                <motion.div
                  key={skill.name}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative px-6 py-3 rounded-xl font-semibold text-white
                    bg-gradient-to-r ${skillColors[nivel].bg} ${skillColors[nivel].hover}
                    transform transition-all duration-300
                    shadow-lg hover:shadow-xl ${skillColors[nivel].shadow}
                    cursor-pointer`}
                >
                  {skill.icon ? (
                    <Image 
                      src={skill.icon} 
                      alt={`${skill.name} icon`} 
                      width={20}
                      height={20}
                      className="w-12 h-12 mb-2 mx-auto"
                     
                    />
                  ) : null}
                  <span className='flex justify-center relative   '>{skill.name}</span>
                  <br />
                  <span className='flex  relative  backdrop-brightness-125 rounded-full p-1 px-3 '>{skill.nivel}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
