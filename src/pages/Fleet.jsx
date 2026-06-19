import { useState, useMemo } from "react";
import { cars } from "../data/cars";
import CarCard from "../components/CarCard";
import { RiMenu2Line, RiSpeedUpLine, RiSuitcaseLine, RiLeafLine, RiCompass3Line } from "react-icons/ri";

export default function Fleet() {
  const [activeCategory, setActiveCategory] = useState("All");

  
  const filterCategories = useMemo(() => {
    return ["All", ...new Set(cars.map((car) => car.category))];
  }, []);

  
  const getCategoryIcon = (category) => {
    switch (category) {
      case "All": return <RiMenu2Line />;
      case "Ultra-Luxury Sedan": return <RiSuitcaseLine />;
      case "Performance Sport": return <RiSpeedUpLine />;
      case "Luxury Off-Roader": return <RiCompass3Line />;
      case "Supercar": return <RiSpeedUpLine />;
      case "Premium Luxury EV": return <RiLeafLine />;
      default: return <RiMenu2Line />;
    }
  };

  
  const filteredCars = useMemo(() => {
    if (activeCategory === "All") return cars;
    return cars.filter((car) => car.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="min-h-screen bg-neutral-950 pt-32 pb-20 text-neutral-200">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Missing Element 1: Premium Context Header */}
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-amber-500">LuxDrive Garage</span>
            <h1 className="mt-2 text-4xl font-black tracking-tight text-white md:text-5xl">
              The Elite Fleet
            </h1>
            <p className="mt-3 max-w-lg text-sm text-neutral-500 leading-relaxed">
              Explore our hand-picked collection of exceptional mechanical assets. Maintained to pristine engineering standards with white-glove concierge backup.
            </p>
          </div>
          
          {/* Missing Element 2: Total Counter Metrics */}
          <div className="text-left md:text-right">
            <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-500">Available Garaged Assets</span>
            <p className="text-3xl font-black text-white tracking-tight">
              {filteredCars.length} <span className="text-sm font-medium text-neutral-600">/ {cars.length} Units</span>
            </p>
          </div>
        </div>

        {/* Missing Element 3: Interactive Glassmorphic Category Filter Tabs */}
        <div className="mb-10 flex flex-wrap gap-2.5 border-b border-white/5 pb-6">
          {filterCategories.map((category) => {
            const isSelected = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold uppercase tracking-wider border transition-all duration-300 ${
                  isSelected
                    ? "bg-amber-500 border-transparent text-black shadow-lg shadow-amber-500/10"
                    : "bg-neutral-900/40 border-white/5 text-neutral-400 hover:border-white/10 hover:text-white"
                }`}
              >
                <span className={isSelected ? "text-black" : "text-amber-500"}>
                  {getCategoryIcon(category)}
                </span>
                {category}
              </button>
            );
          })}
        </div>

        {/* Car Display Grid Container */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredCars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>

      </div>
    </section>
  );
}