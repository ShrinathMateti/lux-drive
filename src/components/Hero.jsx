import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7", // Black Supercar
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70", // Porsche 911
  "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8", // Mercedes S-Class
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  // Auto-play feature: slides change every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex(
      (prev) => (prev - 1 + HERO_IMAGES.length) % HERO_IMAGES.length,
    );
  };

  // Variants for smooth background crossfades and panning
  const slideVariants = {
    enter: (dir) => ({
      opacity: 0,
      scale: 1.05,
    }),
    center: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.2, ease: "easeInOut" },
    },
    exit: (dir) => ({
      opacity: 0,
      filter: "blur(4px)",
      transition: { duration: 1.2, ease: "easeInOut" },
    }),
  };

  // Text animation container variants (staggered delay)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative flex h-screen items-center overflow-hidden bg-black text-white">
      {/* Dynamic Background Image Carousel */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={currentIndex}
            src={HERO_IMAGES[currentIndex]}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute h-full w-full object-cover"
          />
        </AnimatePresence>
      </div>

      {/* Cinematic Dark Overlay */}
      <div className="absolute inset-0 z-10 bg-linear-to-r from-black/80 via-black/50 to-transparent" />

      {/* Content Area */}
      {/* Content Area */}
      <div className="relative z-20 mx-auto w-full max-w-7xl px-6">
        {/* The container wrapper must wrap around its animated children */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl font-black tracking-tight sm:text-7xl lg:text-8xl"
          >
            Drive Beyond <br />
            <span className="bg-linear-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              Luxury
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-xl text-lg text-zinc-300 sm:text-xl"
          >
            Premium sports cars, executive sedans, and luxury SUVs engineered
            for those who demand the absolute best.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-10">
            <button className="group relative overflow-hidden rounded-xl bg-linear-to-r from-amber-500 to-orange-600 px-8 py-4 font-bold text-black transition-transform duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-amber-500/20">
              <span className="relative z-10">Explore Fleet</span>
              <div className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-300 group-hover:translate-x-0" />
            </button>
          </motion.div>
        </motion.div>
      </div>

      

      {/* Carousel Progress Indicators (Dots) */}
      <div className="absolute bottom-12 left-6 z-20 flex gap-2 sm:left-12">
        {HERO_IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "w-8 bg-amber-500"
                : "w-2 bg-white/30 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
