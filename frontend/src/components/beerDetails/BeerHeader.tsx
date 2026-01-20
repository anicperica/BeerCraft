import { MapPin, Heart } from "lucide-react";
import type { BeerDetails } from "../../types";
import { useCart } from "../../context/CartContext";

interface BeerDetail {
  beer: BeerDetails;
}

export default function BeerHeader({ beer }: BeerDetail) {
  const { toggleFavorite, isFavorite } = useCart();
  const fav = isFavorite(beer.id);

  return (
    <>
      <div className="flex items-center justify-between gap-4">
        <span className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-400 border border-amber-500/30 px-4 py-2 rounded-full w-fit">
          <MapPin className="w-4 h-4" />
          {beer.brewery}
        </span>

        <button
          type="button"
          onClick={() => toggleFavorite(beer.id, beer.name)}

          className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-600"
          aria-label="Toggle favorite"
        >
          <Heart
            className={`w-6 h-6 ${
              fav ? "text-red-500 fill-red-500" : "text-white"
            }`}
          />
        </button>
      </div>

      <h1 className="text-4xl md:text-5xl font-bold text-white">
        {beer.name}
      </h1>
    </>
  );
}
