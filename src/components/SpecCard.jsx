export default function SpecCard({ icon, title, value }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/5 bg-neutral-900/40 p-5 backdrop-blur-md transition-all duration-300 hover:border-white/10 hover:bg-neutral-900/80 hover:shadow-xl hover:shadow-amber-500/2">
      
      {/* Subtle Background Accent Glow */}
      <div className="absolute -right-6 -top-6 h-16 w-16 rounded-full bg-amber-500/5 blur-xl transition-all duration-500 group-hover:scale-150 group-hover:bg-amber-500/10" />
      
      <div className="flex items-center gap-4">
        {/* Icon Container with Accent Circle */}
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/5 text-xl text-amber-500 transition-all duration-300 group-hover:bg-amber-500 group-hover:text-black">
          {icon}
        </div>

        {/* Text Metric Elements */}
        <div className="min-w-0 flex-1">
          <p className="text-xs font-medium uppercase tracking-widest text-neutral-500 transition-colors duration-300 group-hover:text-neutral-400">
            {title}
          </p>
          <h4 className="mt-0.5 truncate text-lg font-bold tracking-tight text-white">
            {value}
          </h4>
        </div>
      </div>
    </div>
  );
}