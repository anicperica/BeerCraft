import type { Beer, BeerDetails } from "../../types";

interface BeerDetail{
  beer:BeerDetails
}

export default function BeerDescription({beer}:BeerDetail) {
  return (
    <>
      <p className="text-zinc-400 text-lg leading-relaxed">
        {beer.description}
      </p>

      <div className="bg-zinc-900/50 rounded-xl p-4 border border-zinc-800">
        <h3 className="text-amber-400 font-semibold mb-2">
          Tasting Notes
        </h3>
        <p className="text-zinc-300">
          {beer.tastingNotes}
        </p>
      </div>
    </>
  );
}
