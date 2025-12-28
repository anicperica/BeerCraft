import { ShoppingCart, Minus, Plus } from "lucide-react";
import type { BeerDetails } from "../../types";
interface BeerDetail{
  beer:BeerDetails
}
export default function BeerPriceCard({beer}:BeerDetail) {
  return (
    <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800">
      <div className="flex items-center justify-between mb-4">
        <span className="text-4xl font-bold text-amber-400">€{beer.price}</span>
        <span className="text-zinc-500">/ bottle</span>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center bg-zinc-800 rounded-xl">
          <button className="p-3 text-zinc-400 hover:text-white">
            <Minus className="w-4 h-4" />
          </button>
          <span className="w-12 text-center text-white font-semibold">
            1
          </span>
          <button className="p-3 text-zinc-400 hover:text-white">
            <Plus className="w-4 h-4" />
          </button>
        </div>

        <button className="flex-1 flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-zinc-900 font-semibold py-4 rounded-xl">
          <ShoppingCart className="w-5 h-5" />
          Add to Cart
        </button>
      </div>
    </div>
  );
}
