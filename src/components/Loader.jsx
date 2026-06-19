import { motion } from "framer-motion";
import { RiLoader5Line, RiCarLine } from "react-icons/ri";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-neutral-950 text-white">
      <div className="relative flex items-center justify-center">
        
        {/* Outer Rotating Luxury Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 1.2,
            ease: "linear",
          }}
          className="text-6xl text-amber-500/80"
        >
          <RiLoader5Line strokeWidth={1} />
        </motion.div>

        {/* Pulsing Center Car Icon */}
        <motion.div
          animate={{
            scale: [0.9, 1.1, 0.9],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.8,
            ease: "easeInOut",
          }}
          className="absolute text-2xl text-white"
        >
          <RiCarLine />
        </motion.div>
      </div>

      {/* Shimmering Tracking Text Subtitle */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-6 flex flex-col items-center gap-1"
      >
        <span className="text-[10px] font-black uppercase tracking-[0.3em] bg-linear-to-r from-white via-neutral-400 to-white bg-clip-text text-transparent animate-pulse">
          LUXDRIVE
        </span>
        <span className="text-[9px] uppercase tracking-widest text-neutral-500 font-medium">
          Securing Fleet Sync...
        </span>
      </motion.div>
    </div>
  );
}