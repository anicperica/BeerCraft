import { MapPin } from "lucide-react";
import  type { BeerDetails } from "../../types";
interface BeerDetail{
  beer:BeerDetails
}


export default function BeerHeader({beer}:BeerDetail) {
  return (
    <>
      <span className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-400 border border-amber-500/30 px-4 py-2 rounded-full w-fit">
        <MapPin className="w-4 h-4" />
        {beer.brewery}
      </span>

      <h1 className="text-4xl md:text-5xl font-bold text-white">
        {beer.name}
      </h1>
    </>
  );
}
