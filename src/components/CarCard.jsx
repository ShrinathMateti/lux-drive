import { Link } from "react-router-dom";
import { RiDashboard3Line, RiFlashlightLine, RiSteering2Line } from "react-icons/ri";

export default function CarCard({ car }) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/5 bg-neutral-900/40 backdrop-blur-md transition-all duration-300 hover:border-white/10 hover:bg-neutral-900 hover:shadow-2xl hover:shadow-amber-500/5">
      
      {/* Image Wrapper */}
      <div className="relative aspect-16/10 w-full overflow-hidden bg-neutral-800">
        <img
          src={car.image}
          alt={car.name}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-neutral-950/40 to-transparent" />
        
        <span className="absolute top-4 left-4 rounded-lg bg-black/70 backdrop-blur-md px-3 py-1.5 text-xs font-bold tracking-wider text-amber-400 border border-white/5 uppercase">
          {car.category}
        </span>
      </div>

      {/* Content Details */}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-amber-400">
            {car.name}
          </h3>
          <div className="text-right shrink-0">
            <p className="text-[10px] uppercase tracking-widest text-neutral-500">Per Day</p>
            <p className="text-lg font-black text-white">
              ₹{car.price.toLocaleString("en-IN")}
            </p>
          </div>
        </div>

        <p className="mt-3 text-sm text-neutral-400 line-clamp-2">
          {car.description}
        </p>

        {/* Spec Grid */}
        <div className="mt-6 grid grid-cols-3 gap-2 border-y border-white/5 py-4 text-center text-xs text-neutral-400">
          <div className="flex flex-col items-center gap-1.5 border-r border-white/5">
            <RiFlashlightLine className="text-amber-500 text-base" />
            <span className="font-medium text-neutral-300 truncate w-full px-1">{car.specs.power}</span>
          </div>
          <div className="flex flex-col items-center gap-1.5 border-r border-white/5">
            <RiDashboard3Line className="text-amber-500 text-base" />
            <span className="font-medium text-neutral-300 truncate w-full px-1">{car.specs.fuel}</span>
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <RiSteering2Line className="text-amber-500 text-base" />
            <span className="font-medium text-neutral-300 truncate w-full px-1 capitalize">
              {car.specs.transmission.split(" ")[0]}
            </span>
          </div>
        </div>

        {/* UPGRADED: Button swapped out for an instant state-passing Link router wrapper */}
        <Link
          to="/booking"
          state={{ initialCarId: car.id }}
          className="mt-6 block w-full text-center rounded-xl bg-white/5 border border-white/10 py-3.5 text-xs font-bold uppercase tracking-widest text-white transition-all duration-300 hover:bg-linear-to-r hover:from-amber-500 hover:to-orange-600 hover:text-black hover:border-transparent hover:shadow-lg hover:shadow-amber-500/10 active:scale-[0.98]"
        >
          Rent Luxury Now
        </Link>
      </div>
    </div>
  );
}