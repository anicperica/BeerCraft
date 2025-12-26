import picture from "../../assets/beerimae.jpg"
import BeerCard from "../beerCard/BeerCard";



const beer = [
  {
    id: "1",
    name: "Punk IPA",
    brewery: "BrewDog",
    description: "Hoppy, citrusy, bold IPA",
    price: 4.5,
    alcohol: "5.6% ABV",
    image: picture, 
  },
  {
    id: "2",
    name: "Hazy Jane",
    brewery: "BrewDog",
    description: "Juicy, hazy and smooth IPA",
    price: 4.8,
    alcohol: "5.0% ABV",
    image: picture,
  },
  {
    id: "2",
    name: "Hazy Jane",
    brewery: "BrewDog",
    description: "Juicy, hazy and smooth IPA",
    price: 4.8,
    alcohol: "5.0% ABV",
    image: picture,
  },
  {
    id: "2",
    name: "Hazy Jane",
    brewery: "BrewDog",
    description: "Juicy, hazy and smooth IPA",
    price: 4.8,
    alcohol: "5.0% ABV",
    image: picture,
  },
  {
    id: "2",
    name: "Hazy Jane",
    brewery: "BrewDog",
    description: "Juicy, hazy and smooth IPA",
    price: 4.8,
    alcohol: "5.0% ABV",
    image: picture,
  },
];

export default function HomeBeerDisplay() {
  return (
     <div className="flex flex-col justify-center items-center py-10 px-5 bg-zinc-950">
      <h1 className="text-center text-4xl text-amber-400 font-bold pb-5">
        Our Craft Beer
      </h1>

      <p className="text-center text-gray-300 text-xl mb-10">
        Hand-picked selection of the finest craft beers from around the world
      </p>
 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center w-full max-w-[1300px]   ">
    {beer.map((b) => (
      <BeerCard key={b.id} beer={b} />
    ))}
  </div>
    </div>
  );
}
