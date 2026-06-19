import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { RiUserLine, RiMailLine, RiCarLine, RiCalendarLine, RiShieldFlashLine, RiCheckboxCircleLine, RiCloseLine } from "react-icons/ri";

const premiumFleet = [
  { id: 1, name: "Mercedes-Benz S-Class (S 450e)", price: 85000 },
  { id: 2, name: "BMW M340i xDrive", price: 45000 },
  { id: 3, name: "Land Rover Defender 110", price: 65000 },
  { id: 4, name: "Porsche 911 Carrera S", price: 135000 },
  { id: 5, name: "Audi Q8 E-Tron", price: 55000 },
  { id: 6, name: "Toyota Vellfire Executive Lounge", price: 70000 },
];

export default function Booking() {
  const location = useLocation();
  const passedCarId = location.state?.initialCarId;

  const [selectedCarId, setSelectedCarId] = useState(passedCarId || 1);
  const [days, setDays] = useState(1);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", startDate: "" });
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (passedCarId) {
      setSelectedCarId(passedCarId);
    }
  }, [passedCarId]);

  const activeCar = premiumFleet.find((car) => car.id === Number(selectedCarId)) || premiumFleet[0];
  const baseTotal = activeCar.price * days;
  const gstAmount = Math.round(baseTotal * 0.18);
  const finalTotal = baseTotal + gstAmount;

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowToast(true);
  };

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  return (
    /* 1. FIXED: Changed h-screen to min-h-screen, removed overflow-hidden, adjusted padding */
    <section className="relative flex min-h-screen w-full items-center justify-center bg-neutral-950 pt-28 pb-16 text-neutral-200">
      
      {/* LUXURY SLIDE-IN TOAST ALERT */}
      <div className={`fixed top-24 right-6 z-50 flex w-full max-w-sm items-start gap-3 rounded-2xl border border-amber-500/20 bg-neutral-900/90 p-4 shadow-2xl shadow-amber-500/10 backdrop-blur-xl transition-all duration-500 ${
        showToast ? "translate-x-0 opacity-100 visible" : "translate-x-12 opacity-0 invisible pointer-events-none"
      }`}>
        <RiCheckboxCircleLine className="mt-0.5 shrink-0 text-xl text-amber-500" />
        <div className="flex-1">
          <h4 className="text-xs font-bold uppercase tracking-wider text-white">Inquiry Transmitted</h4>
          <p className="mt-1 text-xs text-neutral-400 leading-normal">
            Bespoke request logged for the <span className="text-amber-400 font-medium">{activeCar.name}</span>. A luxury lifestyle manager will call you within 15 minutes.
          </p>
        </div>
        <button onClick={() => setShowToast(false)} className="text-neutral-500 hover:text-white transition-colors">
          <RiCloseLine className="text-lg" />
        </button>
      </div>

      {/* 2. FIXED: Removed h-full so it doesn't try to inherit a locked screen height */}
      <div className="flex w-full max-w-6xl flex-col justify-center px-6">
        
        {/* Compact Header */}
        <div className="mb-6 shrink-0">
          <span className="text-[10px] font-bold uppercase tracking-widest text-amber-500">Concierge Desk</span>
          <h1 className="text-2xl font-black tracking-tight text-white md:text-3xl">
            Bespoke Reservation
          </h1>
        </div>

        {/* Form Grid Frame */}
        <div className="grid gap-6 lg:grid-cols-12 items-stretch">
          
          {/* Intake Column */}
          <form onSubmit={handleSubmit} className="flex flex-col justify-between lg:col-span-7 bg-neutral-900/30 border border-white/5 rounded-2xl p-5 backdrop-blur-md gap-4">
            <div className="space-y-3.5">
              
              {/* Dropdown Selection */}
              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">Select Fleet Vehicle</label>
                <div className="relative flex items-center">
                  <RiCarLine className="absolute left-3.5 text-amber-500 text-base pointer-events-none" />
                  <select
                    value={selectedCarId}
                    onChange={(e) => setSelectedCarId(e.target.value)}
                    className="w-full rounded-xl bg-neutral-900/80 border border-white/5 p-3 pl-10 text-xs text-white focus:border-amber-500/50 focus:outline-none appearance-none cursor-pointer font-medium"
                  >
                    {premiumFleet.map((car) => (
                      <option key={car.id} value={car.id} className="bg-neutral-900 text-white">
                        {car.name} — (₹{car.price.toLocaleString("en-IN")}/day)
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Full Name */}
              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">Full Name</label>
                <div className="relative flex items-center">
                  <RiUserLine className="absolute left-3.5 text-neutral-500 text-base" />
                  <input
                    type="text"
                    required
                    placeholder="e.g., Aryan Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-xl bg-neutral-900/80 border border-white/5 p-3 pl-10 text-xs text-white placeholder-neutral-600 focus:border-amber-500/50 focus:outline-none"
                  />
                </div>
              </div>

              {/* Contact Credentials */}
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">Corporate Email</label>
                  <div className="relative flex items-center">
                    <RiMailLine className="absolute left-3.5 text-neutral-500 text-base" />
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-xl bg-neutral-900/80 border border-white/5 p-3 pl-10 text-xs text-white placeholder-neutral-600 focus:border-amber-500/50 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">Mobile Number</label>
                  <div className="relative flex items-center">
                    <span className="absolute left-3.5 text-xs font-bold text-amber-500/80 pointer-events-none">+91</span>
                    <input
                      type="tel"
                      required
                      maxLength="10"
                      pattern="[6-9][0-9]{9}"
                      placeholder="98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, "") })}
                      className="w-full rounded-xl bg-neutral-900/80 border border-white/5 p-3 pl-10 text-xs text-white placeholder-neutral-600 focus:border-amber-500/50 focus:outline-none tracking-wider"
                    />
                  </div>
                </div>
              </div>

              {/* Tenure Specifications */}
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">Commencement Date</label>
                  <div className="relative flex items-center">
                    <RiCalendarLine className="absolute left-3.5 text-neutral-500 text-base z-10 pointer-events-none" />
                    <input
                      type="date"
                      required
                      value={formData.startDate}
                      onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                      className="w-full rounded-xl bg-neutral-900/80 border border-white/5 p-3 pl-10 text-xs text-white focus:border-amber-500/50 focus:outline-none cursor-pointer"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">Duration (Days)</label>
                  <div className="flex gap-1.5">
                    {[1, 3, 5, 7].map((d) => (
                      <button
                        key={d}
                        type="button"
                        onClick={() => setDays(d)}
                        className={`flex-1 rounded-xl py-3 text-[11px] font-bold transition-all border ${
                          days === d 
                            ? "bg-amber-500 border-transparent text-black" 
                            : "bg-neutral-900/50 border-white/5 text-neutral-400 hover:text-white"
                        }`}
                      >
                        {d}D
                      </button>
                    ))}
                    <input
                      type="number"
                      min="1"
                      max="30"
                      value={days}
                      onChange={(e) => setDays(Math.max(1, Number(e.target.value)))}
                      className="w-12 rounded-xl bg-neutral-900/80 border border-white/5 text-center text-xs font-bold text-white focus:border-amber-500/50 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

            </div>

            <button
              type="submit"
              className="mt-4 w-full rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 py-3.5 text-xs font-bold uppercase tracking-widest text-black shadow-lg transition-all duration-300 active:scale-[0.99]"
            >
              Request Secure Reservation
            </button>
          </form>

          {/* Pricing Analysis Summary Column */}
          <div className="flex flex-col justify-between lg:col-span-5 border border-white/5 bg-gradient-to-b from-neutral-900/60 to-neutral-950 rounded-2xl p-5 backdrop-blur-md gap-6">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse" />
                Live Estimate Summary
              </h3>

              <div className="space-y-3 text-xs">
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-neutral-500">Selected Vehicle</span>
                  <span className="font-semibold text-white max-w-40 truncate">{activeCar.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">Base Tariff ({days} days)</span>
                  <span className="font-medium text-neutral-300">₹{baseTotal.toLocaleString("en-IN")}</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-neutral-500">Statutory GST (18%)</span>
                  <span className="font-medium text-neutral-300">₹{gstAmount.toLocaleString("en-IN")}</span>
                </div>
                
                <div className="flex justify-between items-baseline pt-1">
                  <span className="text-[10px] font-bold text-white uppercase tracking-wider">Estimated Outlay</span>
                  <span className="text-xl font-black text-amber-400 tracking-tight">
                    ₹{finalTotal.toLocaleString("en-IN")}
                  </span>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-white/5 border border-white/5 p-3 flex gap-2.5 text-[11px] text-neutral-500 leading-normal">
              <RiShieldFlashLine className="text-amber-500 text-sm shrink-0 mt-0.5" />
              <p>
                Rates include fully comprehensive passenger insurance coverage, zero hidden fuel premiums, and 24/7 dedicated support.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}