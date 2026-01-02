import { Pencil, Trash } from "lucide-react";
import type { BeerDetails } from "../../types";

interface AdminBeerCardProps {
  beer: BeerDetails;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function AdminBeerCard({
  beer,
  onEdit,
  onDelete,
}: AdminBeerCardProps) {
  
  return (
    <div className="flex items-center justify-between bg-zinc-900 border border-zinc-800 rounded-xl p-4">
      <h1 className="text-white font-semibold">{beer.name}</h1>
      
      <div className="flex gap-3">
        <button
          onClick={() => onEdit(beer.id)}
          className="text-gray-400 "
          title="Edit beer"
        >
          <Pencil size={18} />
        </button>

        <button
          onClick={() => onDelete(beer.id)}
          className="text-red-500 hover:text-red-400"
          title="Delete beer"
        >
          <Trash size={18} />
        </button>
      </div>
    </div>
  );
}
