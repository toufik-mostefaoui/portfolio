import { motion } from "framer-motion";
import { Briefcase, Building2, MapPin, Calendar } from "lucide-react";

export default function Experience() {
  const experiences = [
    // {
    //   role: "Full Stack Development Intern",
    //   company: "ThynkTechDZ",
    //   location: "Algiers, Algeria",
    //   period: "January 2026 – June 2026",
    //   color: "from-cyan-500 to-blue-500",
    //   responsibilities: [
    //     "For graduation project, developed a full-stack web application using React for the frontend and Microservices for the backend",
    //     "Implemented RESTful APIs and integrated third-party services to enhance functionality",
    //     "Collaborated with a full stack web developer as a team of twoand participated in code reviews to ensure high-quality code",
    //   ],
    // },
   {
  role: "IT Intern – Algeria Telecom",
  company: "Algeria Telecom",
  location: "Tiaret, Algeria",
  period: "September 2023",
  color: "from-blue-500 to-indigo-500",
  responsibilities: [
    "Completed a technical internship at Algeria Telecom, gaining hands-on exposure to telecommunications infrastructure and enterprise network systems",
    "Assisted in observing and understanding network operations, service management, and maintenance processes"
  ],
    },
    {
  role: "Founder & Full-Stack Developer",
  company: "SILA DZ",
  location: "Algeria",
  period: "2026 – Present",
  color: "from-green-500 to-emerald-500",
  responsibilities: [
    "Designed and developed SILA DZ platform as a startup project focused on real-world service delivery",
    "Built backend services using Node.js and Spring Boot with RESTful APIs",
    "Implemented authentication and security using JWT-based system",
    "Designed microservices architecture and managed inter-service communication",
    "Used Docker for containerization and deployment of services",
    "Worked with MongoDB and PostgreSQL for data modeling and storage",
  ],
}
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-cyan-950/10 to-black" />

      {/* Animated Grid */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />
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
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Experience
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            className="h-1 w-32 mx-auto bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"
          />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500" />

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-center gap-8`}
              >
                {/* Timeline Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.3 }}
                  className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 z-10"
                >
                  <motion.div
                    whileHover={{ scale: 1.5, rotate: 360 }}
                    className={`w-6 h-6 rounded-full bg-gradient-to-r ${exp.color} border-4 border-black shadow-lg`}
                  />
                </motion.div>

                {/* Content */}
                <div className="w-full md:w-5/12 ml-20 md:ml-0">
                  <motion.div
                    whileHover={{ scale: 1.05, y: -10 }}
                    className="relative group"
                  >
                    <div className={`absolute -inset-1 bg-gradient-to-r ${exp.color} rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300`} />
                    <div className="relative bg-gradient-to-br from-gray-900 to-black border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300">
                      {/* Header */}
                      <div className="mb-6">
                        <div className="flex items-start gap-3 mb-3">
                          <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                            className={`w-12 h-12 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center flex-shrink-0`}
                          >
                            <Briefcase className="w-6 h-6 text-white" />
                          </motion.div>
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-white mb-2">
                              {exp.role}
                            </h3>
                            <div className="flex items-center gap-2 text-gray-400 mb-1">
                              <Building2 className="w-4 h-4" />
                              <span className="font-semibold">{exp.company}</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-500 text-sm mb-1">
                              <MapPin className="w-4 h-4" />
                              <span>{exp.location}</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-500 text-sm">
                              <Calendar className="w-4 h-4" />
                              <span>{exp.period}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Responsibilities */}
                      <ul className="space-y-3">
                        {exp.responsibilities.map((resp, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 + i * 0.1 }}
                            whileHover={{ x: 10 }}
                            className="flex items-start gap-3 text-gray-300"
                          >
                            <motion.div
                              whileHover={{ scale: 1.5, rotate: 180 }}
                              className={`w-2 h-2 rounded-full bg-gradient-to-r ${exp.color} mt-2 flex-shrink-0`}
                            />
                            <span>{resp}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}