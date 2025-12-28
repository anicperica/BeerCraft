import type { ReactNode } from "react";


interface SpecCardProps {
  icon: ReactNode;
  label: string;
  value: string | number;
}

export default function SpecCard({ icon, label, value }:SpecCardProps) {
  return (
    <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4 text-center">
      <div className="w-6 h-6 text-amber-400 mx-auto mb-2">
        {icon}
      </div>
      <p className="text-xs text-zinc-500 uppercase">{label}</p>
      <p className="text-xl font-bold text-white">{value}</p>
    </div>
  );
}
