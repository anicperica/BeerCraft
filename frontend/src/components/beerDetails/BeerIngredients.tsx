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
        {beer.ingredients.map((item, index) => (
    <span key={item}>
      {item}
      {index < beer.ingredients.length - 1 && ", "}
    </span>
  ))}
      </p>
    </div>
  );
}
