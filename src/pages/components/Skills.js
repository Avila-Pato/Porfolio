import { motion } from "framer-motion";
import Image from "next/image";

const skills = [
  // Frontend
  { name: "HTML", category: "Frontend", icon: "/svg/HTML.svg" },
  { name: "CSS", category: "Frontend", icon: "/svg/CSS.svg" },
  { name: "JavaScript", category: "Frontend", icon: "/svg/javascript.svg" },
  { name: "TypeScript", category: "Frontend", icon: "/svg/TypeScript.svg" },
  { name: "React", category: "Frontend", icon: "/svg/React-Dark.svg" },
  { name: "Next.js", category: "Frontend", icon: "/svg/NextJS-Dark.svg" },
  { name: "Angular", category: "Frontend", icon: "/svg/iconoAngular.svg" },
  { name: "Vue", category: "Frontend", icon: "/svg/VueJS-Dark.svg" },
  { name: "Tailwind", category: "Frontend", icon: "/svg/TailwindCSS-Dark.svg" },
  { name: "Bootstrap", category: "Frontend", icon: "/svg/Bootstrap.svg" },

  // Backend
  { name: "Node.js", category: "Backend", icon: "/svg/NodeJS-Dark.svg" },
  { name: "Express", category: "Backend", icon: "/svg/ExpressJS-Dark.svg" },
  { name: "Python", category: "Backend", icon: "/svg/Python-Dark.svg" },
  { name: "Django", category: "Backend", icon: "/svg/Django.svg" },
  { name: "PHP", category: "Backend", icon: "/svg/PHP-Dark.svg" },
  { name: "Java", category: "Backend", icon: "/svg/Java-Dark.svg" },

  // Database
  { name: "MongoDB", category: "Database", icon: "/svg/MongoDB.svg" },
  { name: "MySQL", category: "Database", icon: "/svg/MySQL.svg" },
  { name: "Firebase", category: "Database", icon: "/svg/Firebase-Dark.svg" },
  { name: "SQL", category: "Database", icon: "/svg/SQL.svg" },

  // Tools
  { name: "Git", category: "Tools", icon: "/svg/Git.svg" },
  { name: "VS Code", category: "Tools", icon: "/svg/VSCode-Dark.svg" },
  { name: "Figma", category: "Tools", icon: "/svg/Figma-Dark.svg" },
  { name: "Docker", category: "Tools", icon: "/svg/Docker.svg" },
];

const categoryColors = {
  Frontend: {
    bg: "from-purple-100 to-purple-200 dark:from-purple-800 dark:to-purple-900",
    text: "text-purple-800 dark:text-purple-200",
    border: "border-purple-300 dark:border-purple-600"
  },
  Backend: {
    bg: "from-emerald-100 to-emerald-200 dark:from-emerald-800 dark:to-emerald-900",
    text: "text-emerald-800 dark:text-emerald-200",
    border: "border-emerald-300 dark:border-emerald-600"
  },
  Database: {
    bg: "from-amber-100 to-amber-200 dark:from-amber-800 dark:to-amber-900",
    text: "text-amber-800 dark:text-amber-200",
    border: "border-amber-300 dark:border-amber-600"
  },
  Tools: {
    bg: "from-blue-100 to-blue-200 dark:from-blue-800 dark:to-blue-900",
    text: "text-blue-800 dark:text-blue-200",
    border: "border-blue-300 dark:border-blue-600"
  },
};

const Skills = () => {
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#1b1b1b]  py-8 px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl sm:text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
          Habilidades Técnicas
        </h2>

        <div className="space-y-6">
          {Object.entries(groupedSkills).map(([category, skills], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 border-l-2 mx-42 border-r-2 border-orange-500 rounded-lg p-4 shadow-sm dark:shadow-md"
            >
              <h3 className={`text-2xl font-semibold mb-3 text-center    ${categoryColors[category].text}`}>
                {category}
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2">
                {skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.05 }}
                    className={`flex flex-col mx-12 items-center p-2 rounded-md border bg-blue-200 dark:bg-slate-500 ${categoryColors[category].border} ${categoryColors[category].bg} transition-all`}
                  >
                    <div className="relative w-10 h-10 mb-1">
                      <Image
                        src={skill.icon}
                        alt={skill.name}
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                    <span className="text-xs font-medium text-center text-gray-700 dark:text-gray-200">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;