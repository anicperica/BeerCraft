import type {  BeerDetails } from "../../types";

interface BeerDetail{
  beer:BeerDetails
}

export default function BeerIngredients({beer}:BeerDetail) {
  return (
    <div>
      <h3 className="text-amber-400 font-semibold mb-2">
        Ingredients
      </h3>
      <p className="text-zinc-400">
        {beer.ingredients}
      </p>
    </div>
  );
}
