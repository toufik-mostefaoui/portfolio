import { motion } from "framer-motion";
import { Home, User, Code, Briefcase, Mail, Award } from "lucide-react";

export default function Navigation({ activeSection }) {
  const navItems = [
    { id: "home", icon: Home, label: "Home" },
    { id: "about", icon: User, label: "About" },
    { id: "skills", icon: Award, label: "Skills" },
    { id: "projects", icon: Code, label: "Projects" },
    { id: "experience", icon: Briefcase, label: "Experience" },
    { id: "contact", icon: Mail, label: "Contact" },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/50 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-2xl font-bold bg-gradient-to-r from-cyan-400 via-indigo-500 to-blue-500 bg-clip-text text-transparent"
          >
            MOSTEFAOUI TOUFIK
          </motion.div>

          <div className="hidden md:flex gap-2 lg:gap-6">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;

              return (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(item.id)}
                  className="relative group"
                >
                  <div className="flex items-center gap-2 px-3 lg:px-4 py-2 rounded-lg transition-all relative z-10">
                    <Icon className={`w-4 h-4 ${isActive ? "text-cyan-400" : "text-gray-400 group-hover:text-cyan-400"} transition-colors`} />
                    <span className={`text-sm lg:text-base ${isActive ? "text-cyan-400" : "text-gray-400 group-hover:text-white"} transition-colors`}>
                      {item.label}
                    </span>
                  </div>
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg border border-cyan-500/40"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>

          <div className="flex md:hidden gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;

              return (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`p-2 rounded-lg ${isActive ? "text-cyan-400 bg-cyan-500/10" : "text-gray-400"} transition-all`}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="w-5 h-5" />
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}