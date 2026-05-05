import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import roofing from "../assets/roofing-sheets.png"
import roofing1 from "../assets/roofing1.jpeg"
import chaukhat1 from "../assets/chaukhat1.png"
import color_coated from "../assets/color_coated_slit_coils.jpeg"
import color_coated1 from "../assets/color_coated_slit_coils1.jpeg"

const images = [roofing, roofing1, chaukhat1, color_coated, color_coated1];

const AboutSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative overflow-hidden rounded-lg shadow-2xl h-[400px] w-full bg-white">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`Jindal Steel - ${currentIndex + 1}`}
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(_, info) => {
            if (info.offset.x > 100) {
              setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
            } else if (info.offset.x < -100) {
              setCurrentIndex((prev) => (prev + 1) % images.length);
            }
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover cursor-grab active:cursor-grabbing"
        />
      </AnimatePresence>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-2 h-2 rounded-full transition-all ${i === currentIndex ? "bg-primary w-6" : "bg-primary/30"
              }`}
          />
        ))}
      </div>
    </div>
  );
};

export default AboutSlider;
