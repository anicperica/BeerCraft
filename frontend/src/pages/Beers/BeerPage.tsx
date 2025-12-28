import { useQuery } from "@tanstack/react-query";
import { fetchBeers } from "../../api/Beers";
import BeerCard from "../../components/beerCard/BeerCard";

export default function BeerPage() {
  const {
    data: beers,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["beer", "all"],
    queryFn: () => fetchBeers(),
  });

  if (isLoading) {
    return <p className="text-white">Loading Beers</p>;
  }

  if (isError) {
    return <p className="text-red-500">{(error as Error).message}</p>;
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-zinc-950 pt-[120px] md:pt-[180px] py-8 px-4 ">
      <div className="flex flex-col justify-center items-center gap-5">
        <h1 className="text-center text-white font-bold text-4xl md:text-6xl">
          All Craft Beers
        </h1>
        <p className="text-center text-amber-500 italic md:text-xl">
          A complete lineup of our craft beers authentic flavors, quality
          ingredients, and styles crafted for true beer lovers.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center w-full max-w-[1300px] pt-15  ">
          {beers?.map((beer) => (
            <BeerCard key={beer.id} beer={beer} />
          ))}
        </div>
      </div>
    </div>
  );
}
