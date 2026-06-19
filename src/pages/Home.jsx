import Hero from "../components/Hero";
import { cars } from "../data/cars"; 
import { Link } from "react-router-dom";
import { RiSpeedLine, RiDashboard3Line } from "react-icons/ri";

export default function Home() {
  
  const featuredCars = cars.slice(0, 3);

  return (
    <div className="bg-neutral-950 text-white min-h-screen">
      <Hero />

      {/* Featured Fleet Section */}
      <section className="py-24 bg-linear-to-b from-neutral-950 to-neutral-900">
        <div className="mx-auto max-w-7xl px-6">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-sm font-bold tracking-widest text-amber-500 uppercase">
                Handpicked Collection
              </span>
              <h2 className="text-4xl font-black tracking-tight mt-1 sm:text-5xl">
                Featured Fleet
              </h2>
            </div>
            <Link
              to="/fleet"
              className="text-sm font-semibold text-neutral-400 hover:text-amber-500 transition-colors duration-300 underline underline-offset-4"
            >
              View Full Fleet &rarr;
            </Link>
          </div>

          {/* Grid Layout */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredCars.map((car) => (
              <div
                key={car.id}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/5 bg-neutral-900/50 backdrop-blur-sm transition-all duration-300 hover:border-white/10 hover:bg-neutral-900"
              >
                {/* Image Container with Zoom Effect */}
                <div className="relative aspect-16/10 overflow-hidden bg-neutral-800">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  {/* Category Badge */}
                  <span className="absolute top-4 left-4 rounded-md bg-black/70 backdrop-blur-md px-3 py-1 text-xs font-medium tracking-wide text-amber-400 border border-white/5">
                    {car.category}
                  </span>
                </div>

                {/* Content Details */}
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-amber-400 transition-colors duration-300">
                      {car.name}
                    </h3>

                    <div className="text-right">
                      <p className="text-xs text-neutral-400 uppercase tracking-wider">
                        Per Day
                      </p>
                      <p className="text-lg font-black text-white">
                        ₹{car.price.toLocaleString("en-IN")}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-neutral-400 line-clamp-2 mb-6">
                    {car.description}
                  </p>

                  {/* Highlights Specs Divider Line */}
                  <div className="mt-auto border-t border-white/5 pt-4 flex items-center justify-between text-xs text-neutral-400">
                    <div className="flex items-center gap-1.5">
                      <RiDashboard3Line className="text-amber-500 text-base" />
                      <span>{car.specs.power}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <RiSpeedLine className="text-amber-500 text-base" />
                      <span>{car.specs.topSpeed}</span>
                    </div>
                    <span className="capitalize">{car.specs.transmission}</span>
                  </div>

                  
                  <Link
                    to="/booking"
                    state={{ initialCarId: car.id }}
                    className="mt-6 block w-full text-center rounded-xl bg-white/5 border border-white/10 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-linear-to-r hover:from-amber-500 hover:to-orange-600 hover:text-black hover:border-transparent"
                  >
                     Book Fleet
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}