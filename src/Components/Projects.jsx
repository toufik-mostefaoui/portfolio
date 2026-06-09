import { motion } from "framer-motion";
import { ExternalLink, Calendar, Tag} from "lucide-react"; 
import { FaGithub } from 'react-icons/fa';
import ProjectCarousel from "./ProjectCarousel";
import triphubdzlanding from "../assets/projects/TripHubDZ/triphubdz-landing.png";
import silaLandingPage from "../assets/projects/silaDz/landig page.png";
import silaDashboard from "../assets/projects/silaDz/dashboard page.png";
import silaMobile from "../assets/projects/silaDz/silaMobile.png";
import silaLoginPage from "../assets/projects/silaDz/login page.png";
import geoalert from "../assets/projects/GeoAlert/GeoAlertHome.png";
import eCommerceApp from "../assets/projects/E-commerceApp/image (4).png";
import tawaf from "../assets/projects/Tawaf/Screenshot 2026-06-09 163929.png"
import landingagence from "../assets/projects/TripHubDZ/landing-agence.png";
import searchflight from "../assets/projects/TripHubDZ/search-flight.png";
import newdashboard from "../assets/projects/darlokman/newdashboard.png"
import newlogin from "../assets/projects/darlokman/newlogin.png"
import chat from "../assets/projects/darlokman/chat.png"
import logincode from "../assets/projects/Codegrad/logincode.png"
import dashboardcode from "../assets/projects/Codegrad/dashboardcode.png"
import loginhora from "../assets/projects/horapay/loginhora.jpg"
import emploi from "../assets/projects/horapay/emploi.jpg"
import consultation from "../assets/projects/horapay/consultation.jpg"
import dash from "../assets/projects/assirem/dash.png"
import hero from "../assets/projects/portfoliov1/hero.png"
import dashboard_loan from "../assets/projects/loan/dashboard.png"
import result from "../assets/projects/loan/result.png"
export default function Projects() {
  const projects = [
    {
      title: "SILA DZ",
      subtitle: " B2B Import & Procurement Platform (Founder & Full-Stack Developer)",
      period: "Graduation Project (january 2026 - Present)",
      description:
        "Designed and developed a B2B platform connecting Algerian businesses with international suppliers.",
      tags: [
        "Microservices",
        "Docker",
        "Kafka",
        "Redis",
        "Django",
        "React",
        "i18n",
        "REST APIs",
        "WebSockets",
        "Nginx",
        "VPS",
      ],
      color: "from-cyan-500 to-blue-500",
      highlights: [
        "Multi-tenant architecture with tenant isolation",
        "Microservices-based backend services",
        "External API integrations",
        "Scalable architecture with Redis & Kafka",
        "VPS deployment with Nginx configuration",
      ],
      images: [
        silaLandingPage, silaLoginPage, silaDashboard, silaMobile
      ],
      github: "https://github.com/toufik-mostefaoui/PFE-startup.git",
      demo: "https://siladz.store/",
    },
    {
      title: "GeoAlert",
      subtitle: "Real-Time Geolocated Alert Platform (Backend Developer)",
      period: "February – May 2025",
      description:
        "My personal portfolio website showcasing my projects, skills, and experience with a modern design and interactive features.",
      tags: [
        "React",
        "Framer Motion",
        "Tailwind CSS",
      ],
      color: "from-yellow-500 to-orange-500",
      highlights: [
        "Showcase of projects and skills",
        "Interactive animations with Framer Motion",
        "Responsive design with Tailwind CSS",
        "Clean and modern UI/UX design",
      ],
      images: [
        geoalert
      ],
      github: "https://github.com/toufik-mostefaoui/GeoAlert_Backend.git",
      // demo: "https://portfolio-sooty-kappa-11.vercel.app/",
    },
    {
      title: "Mobile E-Commerce Application",
      subtitle: "Stock Management Software",
      period: "June – August 2025",
      description:
        "Developed a desktop stock management application for comprehensive inventory, supplier, and sales management with role-based access control.",
      tags: ["Django", "React", "Authentication", "Desktop App"],
      color: "from-purple-500 to-pink-500",
      highlights: [
        "Product & inventory management",
        "Supplier & purchase tracking",
        "Sales & payment facilities",
        "Authentication & role-based access",
        "Business workflow optimization",
      ],
      images: [
        eCommerceApp
      ],
      github: "https://github.com/toufik-mostefaoui/E-commerce-App.git",
      demo: "",
    },
    {
      title: "Tawaf ",
      subtitle: "Pilgrimage Management Platform (Backend Developer)",
      period: "February – May 2024",
      description:
        "A cross-platform desktop application for calculating loan eligibility based on salary, charges, duration, and bank rates.",
      tags: ["Electron", "React", "Django REST Framework", "Git & GitHub"],
      // github: "https://github.com/Oumaimadjemai/loan_front.git",
      // demo: "https://loan-front-aqno.onrender.com",
      images: [tawaf],
      color: "from-[#121358] to-blue-600",
      highlights: [
        "Loan eligibility calculation based on salary and monthly charges",
        "Automatic computation of borrowing capacity and monthly payments",
        "Support for custom bank interest rates and loan durations",
        "Real-time calculation with a clean and intuitive UI",
        "Cross-platform desktop support (Windows, macOS, Linux)",
      ],
    },
    // {
    //   title: "CodeGrad",
    //   subtitle: "Educational Project Platform",
    //   period: "February – May 2025",
    //   description:
    //     "Platform designed for the Higher School of Computer Science to manage multidisciplinary projects and final-year projects efficiently.",
    //   tags: ["Django", "React", "Education", "Project Management"],
    //   color: "from-green-500 to-emerald-500",
    //   highlights: [
    //     "Project lifecycle management",
    //     "Student & faculty collaboration",
    //     "Submission & evaluation system",
    //     "Real-time progress tracking",
    //   ],
    //   images: [
    //     logincode, dashboardcode
    //   ],
    //   github: "https://github.com/Oumaimadjemai/projet_2cs_v1.git",
    //   demo: "",
    // },
    // {
    //   title: "HoraPay",
    //   subtitle: "University Work Hours Platform",
    //   period: "February – May 2024",
    //   description:
    //     "Platform designed for university faculty and directors to calculate and manage overtime hours with automated calculations and reporting.",
    //   tags: ["Django", "React", "University", "HR Management"],
    //   color: "from-orange-500 to-red-500",
    //   highlights: [
    //     "Automated overtime calculations",
    //     "Faculty time tracking",
    //     "Administrative reporting",
    //     "Role-based access control",
    //   ],
    //   images: [
    //     loginhora,
    //     emploi,
    //     consultation
    //   ],
    //   github: "https://github.com/Oumaimadjemai/heure_sup_project.git",
    //   demo: "",
    // },
    // {
    //   title: "Assurem",
    //   subtitle: "Recruitment Platform",
    //   period: "February – May 2023",
    //   description:
    //     "Platform dedicated to recruiters and young job seekers, facilitating the connection between talent and opportunities.",
    //   tags: ["Django", "React", "Recruitment", "Job Portal"],
    //   color: "from-blue-500 to-indigo-500",
    //   highlights: [
    //     "Job posting & application system",
    //     "Recruiter & candidate matching",
    //     "Profile management",
    //     "Application tracking",
    //   ],
    //   images: [
    //     dash
    //   ],
    //   github: "",
    //   demo: "",
    // },
  ];

  return (
    <section className="relative min-h-screen py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black" />

      <div className="relative z-10 max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent"
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Projects
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            className="h-1 w-32 mx-auto bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"
          />
        </motion.div>

        {/* Projects Container - Centered with max width */}
        <div className="flex flex-col items-center justify-center">
          <div className="w-full max-w-4xl space-y-12">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100, rotateX: -30 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="relative group"
              >
                <div className={`absolute -inset-1 bg-gradient-to-r ${project.color} rounded-3xl blur-lg opacity-25 group-hover:opacity-50 transition duration-500`} />
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="relative bg-gradient-to-br from-gray-900 to-black border border-purple-500/20 rounded-3xl overflow-hidden hover:border-purple-500/50 transition-all duration-300"
                >
                  {/* Project Image Carousel */}
                  <ProjectCarousel
                    images={project.images}
                    title={project.title}
                    color={project.color}
                  />

                  <div className="p-8 md:p-10">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                            className={`w-3 h-3 rounded-full bg-gradient-to-r ${project.color}`}
                          />
                          <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                            {project.title}
                          </h3>
                        </div>
                        <p className="text-xl text-gray-400 mb-3">{project.subtitle}</p>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Calendar className="w-4 h-4" />
                          <span>{project.period}</span>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        {project.github && (
                          <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                            className="px-6 py-3 rounded-full bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 text-white font-semibold flex items-center gap-2 shadow-lg hover:border-gray-500 transition-colors"
                          >
                            <FaGithub className="w-5 h-5" />
                            GitHub
                          </motion.a>
                        )}
                        {project.demo && (
                          <motion.a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                            className={`px-6 py-3 rounded-full bg-gradient-to-r ${project.color} text-white font-semibold flex items-center gap-2 shadow-lg`}
                          >
                            <ExternalLink className="w-5 h-5" />
                            Demo
                          </motion.a>
                        )}
                      </div>
                    </div>

                    <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Highlights */}
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Tag className="w-4 h-4 text-cyan-400" />
                        <h4 className="text-lg font-semibold text-cyan-400">Key Features</h4>
                      </div>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {project.highlights.map((highlight, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ x: 10 }}
                            className="flex items-center gap-2 text-gray-400"
                          >
                            <motion.div
                              whileHover={{ scale: 1.5 }}
                              className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.color}`}
                            />
                            {highlight}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.05 }}
                          whileHover={{ scale: 1.1, y: -2 }}
                          className={`px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r ${project.color} text-white shadow-lg`}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}