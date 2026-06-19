import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { RiCarLine, RiCalendarCheckLine } from "react-icons/ri";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Our Fleet", path: "/fleet" },
    { name: "Book a Ride", path: "/booking" },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-neutral-950/70 text-white backdrop-blur-md transition-all duration-300">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-2 group">
          <RiCarLine className="text-2xl text-amber-500 transition-transform duration-300 group-hover:-translate-x-1" />
          <h1 className="text-xl font-black tracking-widest bg-linear-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent">
            LUXDRIVE
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`relative py-1 text-xs font-bold tracking-wider transition-colors duration-300 hover:text-white uppercase
                  ${isActive ? "text-white" : "text-neutral-400"}
                `}
              >
                {link.name}
                {/* Underline Indicator for Active Page */}
                {isActive && (
                  <span className="absolute bottom-0 left-0 h-0.5 w-full bg-linear-to-r from-amber-500 to-orange-500" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Action Button: Hidden on mobile, visible on desktop layout */}
        <div className="hidden md:flex items-center gap-4">
          <Link 
            to="/booking"
            className="flex items-center gap-2 rounded-xl bg-linear-to-r from-amber-500 to-orange-600 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-black shadow-lg shadow-amber-500/10 transition-all duration-300 hover:scale-[1.02] hover:shadow-amber-500/20 active:scale-[0.98]"
          >
            <RiCalendarCheckLine className="text-base" />
            <span>Instant Booking</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="block md:hidden text-2xl text-neutral-300 hover:text-white focus:outline-none"
        >
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`absolute top-full left-0 w-full border-b border-white/5 bg-neutral-950/95 backdrop-blur-lg transition-all duration-300 md:hidden
          ${isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}
        `}
      >
        <div className="flex flex-col gap-4 px-6 py-6">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-base font-bold tracking-wide uppercase ${
                  isActive ? "text-amber-500" : "text-neutral-400 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          {/* Note: The bottom horizontal rule and Instant Booking call-to-action button block have been completely removed from here */}
        </div>
      </div>
    </nav>
  );
}