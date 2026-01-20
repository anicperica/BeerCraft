import { useState } from "react";
import { ShoppingCart, Minus, Plus } from "lucide-react";
import type { BeerDetails } from "../../types";
import { useCart } from "../../context/CartContext";
interface BeerDetail {
  beer: BeerDetails;
}
export default function BeerPriceCard({ beer }: BeerDetail) {
  const { addToCart } = useCart();
  const [qty, setQty] = useState(1);

  const handleAdd = () => {
    addToCart(beer.id, beer.name, qty);
    setQty(1); 
  };

  return (
    <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800">
      <div className="flex items-center justify-between mb-4">
        <span className="text-4xl font-bold text-amber-400">€{beer.price}</span>
        <span className="text-zinc-500">/ bottle</span>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center bg-zinc-800 rounded-xl">
          <button
            className="p-3 text-zinc-400 hover:text-white"
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            type="button"
          >
            <Minus className="w-4 h-4" />
          </button>
          <span className="w-12 text-center text-white font-semibold">{qty}</span>
          <button
            className="p-3 text-zinc-400 hover:text-white"
            onClick={() => setQty((q) => q + 1)}
            type="button"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>

        <button
          className="flex-1 flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-zinc-900 font-semibold py-4 rounded-xl"
          onClick={handleAdd}
          type="button"
        >
          <ShoppingCart className="w-5 h-5" />
          Add to Cart
        </button>
      </div>
    </div>
  );
}
