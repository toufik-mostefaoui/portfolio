import { motion } from "framer-motion";
import { Code, Server, Database, Wrench, Boxes, Users } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      color: "from-cyan-500 to-blue-500",
      skills: ["Python", "Java", "JavaScript","Typescript", "Dart"],
    },
    {
      icon: Server,
      title: "Backend Development",
      color: "from-purple-500 to-pink-500",
      skills: [
        "NodeJs","NestJs/ExpressJs",
        "SpringBoot",
        "Rest APIs",
        "JWT authentication",
        "Microservices Architecture",
      ],
    },
    {
      icon: Code,
      title: "Frontend Development",
      color: "from-green-500 to-emerald-500",
      skills: ["React.js", "Material UI", "Tailwind CSS", "Responsive Design"],
    },
    {
      icon: Code,
      title: "Mobile Development",
      color: "from-purple-500 to-indigo-500",
      skills: ["Flutter", "Dart", "Cross-platform Development","Rest APIs Integration","Local Storage"],
    },
    {
      icon: Database,
      title: "Databases",
      color: "from-orange-500 to-red-500",
      skills: ["MySQL", "PostgreSQL", "MongoDB"],
    },
    {
      icon: Wrench,
      title: "DevOps & Deployment",
      color: "from-blue-500 to-indigo-500",
      skills: [
        "Docker & Containerization",
        "VPS Deployment",
        "Nginx Configuration",
        "Git & GitHub",
        "Basic CI/CD concepts",
      ],
    },
    {
      icon: Boxes,
      title: "Distributed Systems",
      color: "from-pink-500 to-rose-500",
      skills: ["Apache Kafka","RabbitMQ","Redis", "WebSockets","SSE"],
    },
  ];

  const softSkills = [
    "Leadership and Team Coordination",
    "Project Planning and Organization",
    "Problem Solving and Analytical Thinking",
    "Adaptability and Continuous Learning",
    "Time Management",
    "Discipline and Professionalism",
    "Collaboration in Multidisciplinary Teams",
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-cyan-950/10 to-black" />
      
      {/* Animated Particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
              opacity: 0,
            }}
            animate={{
              y: [null, Math.random() * -500],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Technical Skills
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            className="h-1 w-32 mx-auto bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"
          />
        </motion.div>

        {/* Technical Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, scale: 0.5, rotateX: -90 }}
                whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="relative group"
              >
                <div className={`absolute -inset-1 bg-gradient-to-br ${category.color} rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300`} />
                <div className="relative h-full bg-gradient-to-br from-gray-900 to-black border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className={`w-14 h-14 mb-4 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-4 text-white">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${category.color} text-white shadow-lg`}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Soft Skills
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="relative group max-w-5xl mx-auto"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300" />
          <div className="relative bg-gradient-to-br from-gray-900 to-black border border-purple-500/20 rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center"
              >
                <Users className="w-6 h-6 text-white" />
              </motion.div>
              <h3 className="text-2xl font-bold text-white">Professional Competencies</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-3 group"
                >
                  <motion.div
                    whileHover={{ scale: 1.5, rotate: 360 }}
                    className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"
                  />
                  <span className="text-gray-300 group-hover:text-white transition-colors">
                    {skill}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}