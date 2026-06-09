import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function AnimatedBackground() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const newStars = Array.from({ length: 200 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.5,
      duration: Math.random() * 4 + 2,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.7 + 0.2,
    }));

    setStars(newStars);
  }, []);

  return (
    <>
      {/* Deep space background with radial gradient */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          background: "radial-gradient(ellipse at center, #0a0a2a 0%, #000000 100%)"
        }}
      />
      
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Brighter stars for space effect */}
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute rounded-full"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              backgroundColor: `rgba(255, 255, 255, ${star.opacity})`,
              boxShadow: star.size > 1.5 ? `0 0 ${star.size * 2}px rgba(255,255,255,0.5)` : 'none',
            }}
            animate={{
              opacity: [star.opacity, star.opacity * 0.2, star.opacity],
            }}
            transition={{
              duration: star.duration,
              delay: star.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Nebula Clouds with different colors */}
        <motion.div
          className="absolute top-20 -left-40 w-96 h-96 rounded-full blur-3xl"
          style={{ background: "rgba(128, 0, 255, 0.08)" }}
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-40 -right-40 w-[500px] h-[500px] rounded-full blur-3xl"
          style={{ background: "rgba(0, 150, 255, 0.06)" }}
          animate={{
            x: [0, -60, 0],
            y: [0, -40, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute top-1/2 left-1/2 w-[400px] h-[400px] rounded-full blur-3xl"
          style={{ background: "rgba(255, 0, 150, 0.04)" }}
          animate={{
            x: [-200, -150, -200],
            y: [-200, -150, -200],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Shooting Stars with trails */}
        <motion.div
          className="absolute"
          style={{
            top: "15%",
            left: "-5%",
          }}
          animate={{
            x: [0, 900],
            y: [0, 400],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 7,
            ease: "linear",
          }}
        >
          <div 
            className="w-1 h-1 bg-white rounded-full"
            style={{
              boxShadow: "0 0 20px 4px white",
              background: "linear-gradient(90deg, white, transparent)"
            }}
          />
        </motion.div>

        <motion.div
          className="absolute w-0.5 h-0.5 bg-cyan-300 rounded-full"
          style={{
            top: "60%",
            left: "-3%",
            boxShadow: "0 0 15px 3px rgba(6, 182, 212, 0.9)",
          }}
          animate={{
            x: [0, 650],
            y: [0, 280],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatDelay: 9,
            delay: 2,
            ease: "easeOut",
          }}
        />
      </div>
    </>
  );
}