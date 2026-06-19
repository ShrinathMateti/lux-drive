import { Link } from "react-router-dom";
import { 
  RiCarLine, 
  RiInstagramLine, 
  RiFacebookCircleLine, 
  RiTwitterXLine, 
  RiLinkedinBoxLine,
  RiMailLine,
  RiPhoneLine,
  RiMapPinLine
} from "react-icons/ri";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "About Us", path: "/about" },
      { name: "Our Metros", path: "/hubs" },
      { name: "Careers", path: "/careers" },
      { name: "Media & Press", path: "/press" },
    ],
    services: [
      { name: "Chauffeur Driven VIP", path: "/services/chauffeur" },
      { name: "Self-Drive Luxury", path: "/services/self-drive" },
      { name: "Airport VIP Transfers", path: "/services/airport" },
      { name: "Wedding & Events", path: "/services/weddings" },
    ],
    legal: [
      { name: "Terms of Rental", path: "/terms" },
      { name: "Privacy Policy", path: "/privacy" },
      { name: "GST & Corporate Billing", path: "/gst-billing" },
      { name: "Insurance & Liability", path: "/insurance" },
    ],
  };

  return (
    <footer className="border-t border-white/10 bg-neutral-950 text-neutral-400 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Top Layout: Brand, Directory, and Newsletter */}
        <div className="grid gap-12 lg:grid-cols-12 pb-12 border-b border-white/5">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-2 group w-fit">
              <RiCarLine className="text-2xl text-amber-500 transition-transform duration-300 group-hover:-translate-x-1" />
              <h2 className="text-xl font-black tracking-widest text-white">
                LUXDRIVE
              </h2>
            </Link>
            <p className="text-sm text-neutral-500 max-w-sm mt-2">
              India's premier bespoke supercar and luxury mobility concierge. Servicing elite clients across Mumbai, Delhi NCR, and Bengaluru.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4 mt-2 text-neutral-500">
              <a href="#" className="hover:text-amber-500 transition-colors text-xl"><RiInstagramLine /></a>
              <a href="#" className="hover:text-amber-500 transition-colors text-xl"><RiFacebookCircleLine /></a>
              <a href="#" className="hover:text-amber-500 transition-colors text-xl"><RiTwitterXLine /></a>
              <a href="#" className="hover:text-amber-500 transition-colors text-xl"><RiLinkedinBoxLine /></a>
            </div>
          </div>

          {/* Directory Links */}
          <div className="lg:col-span-5 grid grid-cols-3 gap-4">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Company</h4>
              <ul className="space-y-2.5 text-sm">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="hover:text-white transition-colors duration-200">{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Services</h4>
              <ul className="space-y-2.5 text-sm">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="hover:text-white transition-colors duration-200">{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Compliance</h4>
              <ul className="space-y-2.5 text-sm">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="hover:text-white transition-colors duration-200">{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* India Hubs & Contact */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Corporate Club</h4>
            <p className="text-xs text-neutral-500">Subscribe for custom corporate contracts and priority fleet updates.</p>
            
            <form onSubmit={(e) => e.preventDefault()} className="relative mt-1 flex items-center">
              <input 
                type="email" 
                placeholder="Business email" 
                className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-2.5 text-sm text-white placeholder-neutral-600 focus:border-amber-500/50 focus:outline-none focus:ring-1 focus:ring-amber-500/50"
              />
              <button className="absolute right-2 rounded-lg bg-amber-500 px-3 py-1.5 text-xs font-bold text-black hover:bg-amber-400 transition-all">
                Join
              </button>
            </form>

            <div className="flex flex-col gap-2.5 mt-2 text-xs text-neutral-500">
              <div className="flex items-start gap-2">
                <RiMapPinLine className="text-amber-500 text-sm mt-0.5 shrink-0" />
                <span>India</span>
              </div>
              <div className="flex items-center gap-2">
                <RiPhoneLine className="text-amber-500 shrink-0" />
                <span>1800-200-LUXX (Toll Free)</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 text-xs text-neutral-600">
          <p>© {currentYear} LuxDrive India Private Limited. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:underline">Terms of Use</a>
            <a href="#" className="hover:underline">GSTIN Info</a>
            <a href="#" className="hover:underline">Cookie Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
}