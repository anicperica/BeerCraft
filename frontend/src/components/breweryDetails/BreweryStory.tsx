import type { Brewery } from "../../types";
interface BreweryDetails{
  brewery:Brewery
}

export default function BreweryHero({brewery}:BreweryDetails) {
  return (
    <div>
      <h2 className="text-3xl font-semibold text-white mb-5">Our Story</h2>

      <p className="text-zinc-400 leading-relaxed">
        {brewery.story}
      </p>
    </div>
  );
}
