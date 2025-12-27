import { useQuery } from "@tanstack/react-query";
import { fetchBeers } from "../../api/Beers";
import BeerCard from "../beerCard/BeerCard";



export default function HomeBeerDisplay() {

  const {
    data:beers,
    isLoading,
    isError,
    error,
  }=useQuery({
    queryKey:["beers"],
    queryFn:fetchBeers
  });

  if (isLoading){
    return <p className="text-white">Loading Beers</p>
  }

  if (isError) {
    return <p className="text-red-500">{(error as Error).message}</p>;
  }

  return (
     <div className="flex flex-col justify-center items-center py-10 px-5 bg-zinc-950">
      <h1 className="text-center text-4xl text-amber-400 font-bold pb-5">
        Our Craft Beer
      </h1>

      <p className="text-center text-gray-300 text-xl mb-10">
        Hand-picked selection of the finest craft beers from around the world
      </p>
      
 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center w-full max-w-[1300px]   ">
      {beers!.map(beer=>(
        <BeerCard key={beer.id} beer={beer}/>
      ))}
  </div>
    </div>
  );
}
