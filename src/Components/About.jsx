import { motion } from "framer-motion";
import { GraduationCap, MapPin, Languages, Sparkles } from "lucide-react";

export default function About() {
  const infoCards = [
    {
      icon: GraduationCap,
      title: "Education",
      content: "Higher National School of Computer Science (ESI)",
      detail: "Information Systems and Web",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Tiaret, Algeria",
      detail: "Available for both remote and in-person work",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Languages,
      title: "Languages",
      content: "Arabic, French, English",
      detail: "Multilingual communication",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Sparkles,
      title: "Status",
      content: "Final Year Student",
      detail: "Expected graduation: June 2026",
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black" />
      
      {/* Animated Lines */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: "100%", opacity: [0, 1, 0] }}
            transition={{
              duration: 10,
              delay: i * 2,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
            style={{ top: `${20 + i * 15}%` }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 bg-clip-text text-transparent"
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            About Me
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            className="h-1 w-32 mx-auto bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"
          />
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-16 max-w-4xl mx-auto"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300" />
            <div className="relative bg-black border border-purple-500/20 rounded-2xl p-8 md:p-12">
              {/* <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                Full Stack Developer with experience in{" "}
                <span className="text-cyan-400 font-semibold">software analysis and design</span>,{" "}
                <span className="text-purple-400 font-semibold">UML modeling</span>, web and SaaS application development,{" "}
                <span className="text-pink-400 font-semibold">microservices architecture</span>, API integration,{" "}
                Dockerized deployments, and distributed systems. Skilled in designing scalable solutions from conception to production deployment using modern technologies such as{" "}
                <span className="text-green-400 font-semibold">Django</span>,{" "}
                <span className="text-blue-400 font-semibold">Spring Boot</span>,{" "}
                <span className="text-cyan-400 font-semibold">React</span>, Kafka, Redis, Docker, Nginx, and VPS environments.
              </p> */}
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Final-year Computer Science student at <span className="text-cyan-400 font-semibold">ESI Sidi Bel Abbès</span>, specializing in
Information Systems and Web Technologies. <span className="text-blue-400 font-semibold">Full-Stack Developer</span> with expertise in
software architecture, backend development, mobile devlopment, distributed
systems, and modern web technologies. Experienced in designing, developing, and
deploying scalable applications from concept to production, with a strong focus on
clean architecture, microservices, and cloud-native solutions.
Proficient in <span className="text-cyan-400 font-semibold">Spring Boot</span>, <span className="text-blue-400 font-semibold">Node.js</span>, <span className="text-purple-400 font-semibold">Nest.js/Express.js</span>, <span className="text-cyan-400 font-semibold">React</span>, <span className="text-pink-400 font-semibold">Flutter</span>, <span className="text-green-400 font-semibold">Docker</span>, <span className="text-yellow-400 font-semibold">Kafka</span>,
<span className="text-red-400 font-semibold">Redis</span>, <span className="text-indigo-400 font-semibold">PostgreSQL</span>, <span className="text-pink-400 font-semibold">MongoDB</span>, and <span className="text-blue-400 font-semibold">Nginx</span>. Adept at API integration, container
orchestration, system modeling with UML, and building secure, high-performance
SaaS and enterprise applications. Strong problem-solving abilities, collaborative
mindset, and commitment to delivering robust software solutions
</p>
            </div>
          </div>
        </motion.div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {infoCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateY: -90 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -10, rotateY: 5 }}
                className="relative group"
              >
                <div className={`absolute -inset-1 bg-gradient-to-br ${card.color} rounded-2xl blur opacity-0 group-hover:opacity-50 transition duration-300`} />
                <div className="relative h-full bg-gradient-to-br from-gray-900 to-black border border-purple-500/20 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className={`w-12 h-12 mb-4 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2 text-white">{card.title}</h3>
                  <p className="text-gray-300 mb-1">{card.content}</p>
                  <p className="text-sm text-gray-500">{card.detail}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}