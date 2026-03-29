import { Pencil, Trash } from "lucide-react";
import type { Brewery } from "../../types";
import { useMutation } from "@tanstack/react-query";
import { addBreweryLock } from "../../api/resourceLock";
interface AdminBrweryCardProps {
  brewery: Brewery;
  onEdit: () => void;
  onDelete: (id: string) => void;
}

export default function AdminBreweryCard({
  brewery,
  onEdit,
  onDelete,
}: AdminBrweryCardProps) {

 
const lockBreweryMutation = useMutation({
  mutationFn:addBreweryLock,
  onSuccess:()=>{onEdit()},
  onError:(error)=>{console.log(error);
    alert("This brewery is currently being edited by another admin.")
  }
})
const handleClick = ()=>{
  lockBreweryMutation.mutate(brewery.id)
}




  return (
    <div className="flex items-center justify-between bg-zinc-900 border border-zinc-800 rounded-xl p-4">
      <h1 className="text-white font-semibold">{brewery.name}</h1>

      <div className="flex gap-3">
        <button
          onClick={handleClick}
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
