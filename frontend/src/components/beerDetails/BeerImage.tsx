import type { BeerDetails } from "../../types";
interface BeerDetail{
  beer:BeerDetails
}


export default function BeerImage({beer}:BeerDetail) {
  return (
    <div className="relative">
      <div className="aspect-square rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800">
        <img
          src={beer.image}
          alt="Beer"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute top-4 right-4 flex flex-col gap-2">
        <span className="bg-amber-500 text-zinc-900 font-bold text-lg px-4 py-2 rounded-full">
          {beer.alcohol}ABV
        </span>
        <span className=" bg-zinc-900/90 text-amber-400 border border-amber-500/50 px-4 py-2 rounded-full">
          {beer.style}
        </span>
      </div>
    </div>
  );
}
