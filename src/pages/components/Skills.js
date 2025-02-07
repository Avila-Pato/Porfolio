import { motion } from "framer-motion";
import Image from "next/image";

const skills = [
  { name: "HTML", nivel: "Avanzado", icon: "/svg/HTML.svg" },
  { name: "CSS", nivel: "Avanzado", icon: "/svg/CSS.svg" },
  { name: "VSCode", nivel: "Avanzado", icon: "/svg/VSCode-Dark.svg" },
  { name: "ReactJS", nivel: "Avanzado", icon: "/svg/React-Dark.svg" },
  { name: "NextJS", nivel: "Avanzado", icon: "/svg/NextJS-Dark.svg" },
  { name: "Tailwind", nivel: "Avanzado", icon: "/svg/TailwindCSS-Dark.svg" },
  { name: "GitHub", nivel: "Avanzado", icon: "/svg/GitHub.svg" },
  {
    name: "Javascript",
    nivel: "Avanzado",
    icon: "/svg/javascript.svg",
    width: 250,
    height: 250,
  },
  { name: "Figma", nivel: "Intermedio", icon: "/svg/Figma-Dark.svg" },
  { name: "Angular", nivel: "Intermedio", icon: "/svg/iconoAngular.svg" },
  { name: "AngularJS", nivel: "Intermedio", icon: "/svg/Angular-JS.svg" },
  { name: "Python", nivel: "Intermedio", icon: "/svg/Python-Dark.svg" },
  { name: "NodeJS", nivel: "Intermedio", icon: "/svg/NodeJS-Dark.svg" },
  { name: "Astro", nivel: "Intermedio", icon: "/svg/Astro.svg" },
  { name: "SQL", nivel: "Intermedio", icon: "/svg/SQL.svg" },
  { name: "MySql", nivel: "Intermedio", icon: "/svg/MySQL.svg" },
  { name: "Typescript", nivel: "Avanzado", icon: "/svg/TypeScript.svg" },
  { name: "Firebase", nivel: "Intermedio", icon: "/svg/Firebase-Dark.svg" },
  { name: "WordPress", nivel: "Intermedio", icon: "/svg/wordpress.svg" },
  { name: "Mongoose", nivel: "Intermedio", icon: "/svg/MongoDB.svg" },
  { name: "Django", nivel: "Intermedio", icon: "/svg/Django.svg" },
  { name: "Git", nivel: "Avanzado", icon: "/svg/Git.svg" },
  { name: "Express", nivel: "Intermedio", icon: "/svg/ExpressJS-Dark.svg" },
  { name: "Bootstrap", nivel: "Intermedio", icon: "/svg/Bootstrap.svg" },
  { name: "MaterialUI", nivel: "Intermedio", icon: "/svg/MaterialUI-Dark.svg" },
  { name: "Vue", nivel: "Intermedio", icon: "/svg/VueJS-Dark.svg" },
  { name: "Nest", nivel: "Intermedio", icon: "/svg/NestJS-Dark.svg" },
  { name: "Nuxt", nivel: "Intermedio", icon: "/svg/NuxtJS-Dark.svg" },
  { name: "PHP", nivel: "Intermedio", icon: "/svg/PHP-Dark.svg" },
  { name: "Java", nivel: "Básico", icon: "/svg/Java-Dark.svg" },
  { name: "C#", nivel: "Básico", icon: "/svg/Csharp.svg" },
  { name: ".NET", nivel: "Básico", icon: "/svg/DotNet.svg" },
  { name: "Docker", nivel: "Básico", icon: "/svg/Docker.svg" },
  { name: "Laravel", nivel: "Básico", icon: "/svg/Laravel-Dark.svg" },
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
      bg: "from-emerald-400 to-teal-500 dark:from-emerald-700 dark:to-teal-800",
      hover:
        "hover:from-emerald-500 hover:to-teal-600 dark:hover:from-emerald-600 dark:hover:to-teal-700",
      shadow: "shadow-emerald-500/20 dark:shadow-emerald-700/30",
      text: "text-emerald-900 dark:text-emerald-100",
    },
    Intermedio: {
      bg: "from-sky-400 to-blue-500 dark:from-sky-700 dark:to-blue-800",
      hover:
        "hover:from-sky-500 hover:to-blue-600 dark:hover:from-sky-600 dark:hover:to-blue-700",
      shadow: "shadow-sky-500/20 dark:shadow-sky-700/30",
      text: "text-sky-900 dark:text-sky-100",
    },
    Básico: {
      bg: "from-amber-400 to-orange-500 dark:from-amber-700 dark:to-orange-800",
      hover:
        "hover:from-amber-500 hover:to-orange-600 dark:hover:from-amber-600 dark:hover:to-orange-700",
      shadow: "shadow-amber-500/20 dark:shadow-amber-700/30",
      text: "text-amber-900 dark:text-amber-100",
    },
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 py-16 px-4 transition-colors duration-300">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className=" text-4xl font-bold text-center mb-12 bg-clip-text  bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400"
      >
        Tecnologías
      </motion.h2>

      <div className="max-w-7xl mx-auto space-y-12 ">
        {Object.entries(groupedSkills).map(([nivel, skills], index) => (
          <motion.div
            key={nivel}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl dark:shadow-2xl transition-all duration-300 hover:shadow-2xl dark:hover:shadow-3xl "
          >
            <h3 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">
              {nivel}
            </h3>
            <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 ">
              {skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex flex-col items-center p-4 rounded-2xl
                    bg-gradient-to-br ${skillColors[nivel].bg} ${skillColors[nivel].hover}
                    transform transition-all duration-300 ease-in-out
                    shadow-lg hover:shadow-xl ${skillColors[nivel].shadow}
                    cursor-pointer group`}
                >
                  {skill.icon && (
                    <div className="relative w-16 h-16 mb-4 xs:w-8 xs:h-8 transition-transform duration-300 group-hover:scale-110 ">
                      <Image
                        src={skill.icon}
                        alt={`${skill.name} icon`}
                        layout="fill"
                        objectFit="contain"
                        className="filter drop-shadow-md  "
                      />
                    </div>
                  )}
                  <span
                    className={`font-semibold text-center ${skillColors[nivel].text}`}
                  >
                    {skill.name}
                  </span>
                  <span
                    className={`text-sm mt-2 px-3 py-1   rounded-full font-bold bg-white/20 dark:bg-black/20 ${skillColors[nivel].text}`}
                  >
                    {skill.nivel}
                  </span>
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
