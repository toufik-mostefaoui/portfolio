import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-block mb-6"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 blur-3xl opacity-50 animate-pulse" />
              <h2 className="relative text-lg md:text-xl text-cyan-400 tracking-widest uppercase">
                Full-Stack Developer
              </h2>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-purple-300 bg-clip-text text-transparent"
          >
            MOSTEFAOUI TOUFIK
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed"
          >
            Final-year Computer Science student specializing in{" "}
            <span className="text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text font-semibold">
              Information Systems and Web
            </span>
            {" "}at ESI Sidi Bel Abbès
          </motion.p>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const projectsSection = document.getElementById("projects");
              if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="relative px-8 py-4 rounded-full font-semibold text-lg overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 animate-gradient-x" />
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-gradient-x" />
            <span className="relative z-10">View My Work</span>
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-cyan-400 rounded-full p-1"
        >
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-cyan-400 rounded-full mx-auto"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}