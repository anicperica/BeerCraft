import { Percent, Droplet, Flame, Package } from "lucide-react";
import SpecCard from "./SpecsCard";
import type { BeerDetails } from "../../types";

interface BeerDetail{
  beer:BeerDetails
}

export default function BeerSpecs({beer}:BeerDetail) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      <SpecCard icon={<Percent />} label="ABV" value={beer.alcohol} />
      <SpecCard icon={<Flame />} label="Bitternes" value={beer.bitternes} />
      <SpecCard icon={<Droplet />} label="Volume" value={beer.volume} />
      <SpecCard icon={<Package />} label="Style" value={beer.style} />
    </div>
  );
}
