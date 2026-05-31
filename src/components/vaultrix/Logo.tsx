export function Logo({ className = "h-8 w-auto" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img
        src="https://i.ibb.co/bjmmT6Xt/7e808e9f3039c537bf2b83926dabcfdc.webp"
        alt="Vaultrix logo"
        className="h-8 w-8 rounded-lg object-cover"
      />
      <span className="font-display text-xl font-bold tracking-tight">Vaultrix</span>
    </div>
  );
}
