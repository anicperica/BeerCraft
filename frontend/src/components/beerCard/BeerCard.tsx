import { useNavigate } from "react-router-dom";
import type { Beer } from "../../types/index";
import { useCart } from "../../context/CartContext";
interface BeerCardProps {
  beer: Beer;
}

export default function BeerCard({ beer }: BeerCardProps) {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const goToDetails = () => {
    navigate(`/beers/${beer.id}`);
  };

  const buyOne = () => {
    addToCart(beer.id, beer.name, 1);
  };
  return (
    <div
      className="
        flex flex-col
        bg-zinc-900
        rounded-2xl
        overflow-hidden
        shadow-lg
        min-w-[260px]
        max-w-[350px]
        lg:max-w-[400px]
        w-full
        transition-transform duration-300
        
      "
    >
      <div className="relative w-full aspect-[4/5] overflow-hidden">
        <img
          src={beer.image}
          alt="Beer"
          loading="lazy"
          className="w-full h-full object-cover
            transition-transform duration-500
            hover:scale-[1.10]"
        />

        <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-3">
          <p className=" font-thin text-amber-300">{beer.brewery}</p>
          <h3 className="text-xl font-bold text-white">{beer.name}</h3>
          <p className="text-sm text-gray-300">{beer.description}</p>
        </div>
      </div>

      <div className="flex flex-col gap-3 p-4 text-gray-300">
        <div className="flex justify-between items-center">
          <span className="text-amber-400 font-bold text-3xl">
            €{beer.price}
          </span>
          <span className="text-sm text-gray-400">{beer.alcohol}</span>
        </div>

        <div className="flex gap-2 mt-2">
          <button
            className="flex-1 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700"
            onClick={goToDetails}
          >
            Details
          </button>
          <button
            className="flex-1 py-2 rounded-lg bg-amber-400 text-black font-semibold hover:bg-amber-500"
            onClick={buyOne}
            type="button"
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  );
}
