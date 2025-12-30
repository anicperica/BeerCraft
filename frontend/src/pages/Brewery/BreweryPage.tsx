import { Sparkles } from "lucide-react";
import BreweryCard from "../../components/breweryCard/BreweryCard";
import { fetchBrewery } from "../../api/Brewery";
import { useQuery } from "@tanstack/react-query";
export default function BreweryPage() {
  const {
    data: brewery,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["brewery"],
    queryFn: () => fetchBrewery(),
  });

  if (isLoading) {
    return <p className="text-white">Loading Beers</p>;
  }

  if (isError) {
    return <p className="text-red-500">{(error as Error).message}</p>;
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-zinc-950 pt-[120px] md:pt-[180px] py-8 px-4  ">
      <div className="flex flex-col justify-center items-center gap-10">
        <h1 className="text-center text-white font-bold text-4xl md:text-6xl">
          Meet the Breweries
        </h1>
        <p className="text-center text-amber-400 italic md:text-xl px-3">
          From traditional family breweries to innovative craft pioneers,
          discover the stories behind every brew.
        </p>

        <div className="flex flex-col justify-center items-center w-full gap-5 bg-zinc-800 rounded-2xl px-5 py-5 border border-zinc-600 md:text-xl">
          <Sparkles className="text-amber-400 " />
          <p className="text-center text-gray-400 ">
            "Behind every great beer is a passionate brewer with a story to
            tell."
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center w-full max-w-[1300px] pt-15  ">
          {brewery?.map((brewery) => (
            <BreweryCard key={brewery.id} brewery={brewery} />
          ))}
        </div>
      </div>
    </div>
  );
}
