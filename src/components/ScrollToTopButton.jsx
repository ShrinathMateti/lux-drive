import { useState, useEffect } from "react";
import { RiArrowUpLine } from "react-icons/ri";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Seamless fluid viewport glide back to root origin coordinates
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      className={`fixed bottom-8 right-8 z-40 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-neutral-900/80 text-lg text-neutral-400 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-amber-500/30 hover:bg-neutral-900 hover:text-amber-500 active:scale-95 ${
        isVisible 
          ? "translate-y-0 opacity-100 visible" 
          : "translate-y-4 opacity-0 invisible pointer-events-none"
      }`}
    >
      <RiArrowUpLine className="transition-transform duration-300 hover:-translate-y-0.5" />
    </button>
  );
}