import { useParams, Link } from "react-router-dom";
import { cars } from "../data/cars";

import {
  Gauge,
  Fuel,
  Settings,
  Users,
  Zap,
} from "lucide-react";

export default function CarDetails() {
  const { id } = useParams();

  const car = cars.find(
    (item) => item.id === Number(id)
  );

  if (!car) {
    return (
      <div className="pt-40 text-center">
        Car not found
      </div>
    );
  }

  return (
    <div className="bg-black text-white">
      {/* Hero */}
      <section className="relative h-[70vh]">
        <img
          src={car.image}
          alt={car.name}
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute bottom-10 left-10">
          <p className="text-yellow-500">
            {car.category}
          </p>

          <h1 className="mt-2 text-6xl font-bold">
            {car.name}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-16 lg:grid-cols-3">
          
          {/* Left */}
          <div className="lg:col-span-2">
            <h2 className="mb-6 text-3xl font-bold">
              About This Vehicle
            </h2>

            <p className="text-zinc-400 leading-relaxed">
              {car.description}
            </p>

            {/* Gallery */}
            <div className="mt-12 grid gap-4 md:grid-cols-3">
              {car.gallery.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt=""
                  className="h-52 w-full rounded-2xl object-cover"
                />
              ))}
            </div>

            {/* Specs */}
            <div className="mt-16">
              <h3 className="mb-8 text-2xl font-bold">
                Specifications
              </h3>

              <div className="grid gap-6 md:grid-cols-2">
                <SpecCard
                  icon={<Zap />}
                  title="Power"
                  value={car.specs.power}
                />

                <SpecCard
                  icon={<Gauge />}
                  title="Top Speed"
                  value={car.specs.topSpeed}
                />

                <SpecCard
                  icon={<Fuel />}
                  title="Fuel"
                  value={car.specs.fuel}
                />

                <SpecCard
                  icon={<Users />}
                  title="Seats"
                  value={car.specs.seats}
                />

                <SpecCard
                  icon={<Settings />}
                  title="Transmission"
                  value={car.specs.transmission}
                />

                <SpecCard
                  icon={<Zap />}
                  title="Engine"
                  value={car.specs.engine}
                />
              </div>
            </div>
          </div>

          {/* Booking Card */}
          <div>
            <div className="sticky top-28 rounded-3xl border border-white/10 bg-zinc-900 p-8">
              <h3 className="text-3xl font-bold">
                ₹{car.price.toLocaleString()}
              </h3>

              <p className="text-zinc-400">
                Per Day
              </p>

              <div className="mt-8 space-y-4">
                <input
                  type="date"
                  className="w-full rounded-xl bg-black p-4"
                />

                <input
                  type="date"
                  className="w-full rounded-xl bg-black p-4"
                />
              </div>

              <Link to="/booking">
                <button className="mt-6 w-full rounded-xl bg-yellow-500 py-4 font-semibold text-black">
                  Reserve Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}