import { Pencil, Trash } from "lucide-react";
import type { Brewery } from "../../types";

interface AdminBrweryCardProps {
  brewery: Brewery;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function AdminBreweryCard({
  brewery,
  onEdit,
  onDelete,
}: AdminBrweryCardProps) {
  return (
    <div className="flex items-center justify-between bg-zinc-900 border border-zinc-800 rounded-xl p-4">
      <h1 className="text-white font-semibold">{brewery.name}</h1>

      <div className="flex gap-3">
        <button
          onClick={() => onEdit(brewery.id)}
          className="text-gray-400 "
          title="Edit beer"
        >
          <Pencil size={18} />
        </button>

        <button
          onClick={() => onDelete(brewery.id)}
          className="text-red-500 hover:text-red-400"
          title="Delete beer"
        >
          <Trash size={18} />
        </button>
      </div>
    </div>
  );
}
