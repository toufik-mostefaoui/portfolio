import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ProjectCarousel({ images, title, color }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative h-64 md:h-80 overflow-hidden group">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.3 }}
          className="w-full h-full"
        >
          <img
            src={images[currentIndex]}
            alt={`${title} - Image ${currentIndex + 1}`}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/1080x720?text=Image+Not+Found";
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none" />

      {/* Navigation Buttons */}
      {images.length > 1 && (
        <>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevImage}
            className={`absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-gradient-to-r ${color}`}
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextImage}
            className={`absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-gradient-to-r ${color}`}
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        </>
      )}

      {/* Dots Indicator */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {images.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentIndex(index)}
              whileHover={{ scale: 1.2 }}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex
                  ? `bg-gradient-to-r ${color} w-8`
                  : "bg-white/40 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      )}

      {/* Image Counter */}
      <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 text-white text-sm">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}