import { motion } from 'framer-motion';
import { Code2, Lightbulb, Rocket } from 'lucide-react';

const skills = [
  { name: "HTML", nivel: "Avanzado" },
  { name: "CSS", nivel: "Avanzado" },
  { name: "ReactJS", nivel: "Avanzado" },
  { name: "NextJS", nivel: "Avanzado" },
  { name: "Tailwind", nivel: "Avanzado" },
  { name: "GitHub", nivel: "Avanzado" },
  { name: "Javascript", nivel: "Intermedio" },
  { name: "Figma", nivel: "Intermedio" },
  { name: "Angular", nivel: "Intermedio" },
  { name: "Python", nivel: "Intermedio" },
  { name: "NodeJS", nivel: "Intermedio" },
  { name: "Astro", nivel: "Intermedio" },
  { name: "SQL", nivel: "Intermedio" },
  { name: "MySql", nivel: "Intermedio" },
  { name: "Typescript", nivel: "Intermedio" },
  { name: "Firebase", nivel: "Intermedio" },
  { name: "Mongoose", nivel: "Intermedio" },
  { name: "Django", nivel: "Intermedio" },
  { name: "Git", nivel: "Intermedio" },
  { name: "Vercel", nivel: "Intermedio" },
  { name: "Express", nivel: "Intermedio" },
  { name: "Bootstrap", nivel: "Intermedio" },
  { name: "MaterialUI", nivel: "Intermedio" },
  { name: "Cloudflare", nivel: "Intermedio" },
  { name: "Nestjs", nivel: "Intermedio" },
  { name: "Vue", nivel: "Intermedio" },
  { name: "Nuxt", nivel: "Intermedio" },
  { name: "PHP", nivel: "Básico" },
  { name: "Java", nivel: "Básico" },
  { name: "C#", nivel: "Básico" },
  { name: ".NET", nivel: "Básico" },
  { name: "AWS", nivel: "Básico" },
  { name: "Docker", nivel: "Básico" },
  { name: "Laravel", nivel: "Básico" }
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
      hover: "hover:from-blue-600 hover:to-indigo-700",
      shadow: "shadow-blue-500/50"
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
    <div className="min-h-screen bg-gradient-to-br   py-12 px-4">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
      >
        Conocimientos
      </motion.h2>
      
      <div className="max-w-7xl mx-auto space-y-12">
        {Object.entries(groupedSkills).map(([nivel, skills], index) => (
          <motion.div
            key={nivel}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-gray-800/100 backdrop-blur-lg rounded-2xl p-8 shadow-xl"
          >
            <h3 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              {nivel}
            </h3>
            <div className="flex flex-wrap gap-4">
              {skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: [0, -5, 5, 0],
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className={`
                    relative px-6 py-3 rounded-xl font-semibold text-white
                    bg-gradient-to-r ${skillColors[nivel].bg} ${skillColors[nivel].hover}
                    transform transition-all duration-300
                    shadow-lg hover:shadow-xl ${skillColors[nivel].shadow}
                    cursor-pointer
                    before:absolute before:inset-0 before:bg-white/20 before:rounded-xl
                    before:opacity-0 hover:before:opacity-100 before:transition-opacity
                  `}>
                    {skill.name}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-16  -my-48 max-w-7xl mx-auto grid grid-cols-3 lg:grid-cols-2  sm:grid-cols-1 gap-8 px-4">
        {[
          {
            icon: Rocket,
            title: "Experiencia Avanzada",
            description: "Dominio profundo en tecnologías front-end modernas"
          },
          {
            icon: Code2,
            title: "Stack Diverso",
            description: "Amplio conocimiento en múltiples lenguajes y frameworks"
          },
          {
            icon: Lightbulb,
            title: "Aprendizaje Continuo",
            description: "Constantemente expandiendo conocimientos técnicos"
          }
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + index * 0.2 }}
            whileHover={{ y: -10 }}
            className="bg-gray-800/50 backdrop-blur-lg p-6 rounded-xl shadow-lg border border-gray-700"
          >
            <div className="flex items-center gap-4 mb-4">
              <item.icon className="w-8 h-8 text-blue-400" />
              <h3 className="text-xl font-bold text-white">{item.title}</h3>
            </div>
            <p className="text-gray-300">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;