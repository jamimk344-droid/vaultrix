export function Logo({ className = "h-8 w-auto" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img
        src="https://i.ibb.co/bjmmT6Xt/7e808e9f3039c537bf2b83926dabcfdc.webp"
        alt="Vaultrix logo"
        className="h-full aspect-square rounded-lg object-cover"
      />
      <span className="font-display text-lg font-bold tracking-tight sm:text-xl">Vaultrix</span>
    </div>
  );
}
