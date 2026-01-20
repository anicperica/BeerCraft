import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

export default function FavoritesPage() {
  const { favorites, toggleFavorite } = useCart(); 

  return (
    <div className="min-h-screen bg-zinc-950 pt-[120px] px-4 py-8 text-gray-200">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Favorites</h1>

        {favorites.length === 0 ? (
          <p className="text-zinc-400">No favorites yet.</p>
        ) : (
          <div className="space-y-3">
            {favorites.map((beer) => (
              <div
                key={beer.id}
                className="flex items-center justify-between bg-zinc-900 border border-zinc-800 rounded-xl p-4"
              >
                <Link
                  to={`/beers/${beer.id}`}
                  className="text-white font-semibold hover:text-amber-400"
                >
                  {beer.name}
                </Link>

                <button
                  onClick={() => toggleFavorite(beer.id, beer.name)}
                  className="px-3 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white"
                  type="button"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
