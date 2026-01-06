import BreweryHero from "../../components/breweryDetails/BreweryHero";
import BreweryStory from "../../components/breweryDetails/BreweryStory";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchBreweryById } from "../../api/Brewery";
import {fetchBeersOfBreweryById} from "../../api/Beers"
import BeerCard from "../../components/beerCard/BeerCard";
export default function BreweryDetailsPage() {
  const { id } = useParams();

  const {
    data: breweryDetails,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["brewery", id],
    queryFn: () => fetchBreweryById(id!),
    enabled: !!id,
  });

  const {
    data: breweryBeers = [],
    isLoading: beersLoading,
    isError: beersError,
  } = useQuery({
    queryKey: ["breweryBeers", id],
    queryFn: () => fetchBeersOfBreweryById(id!),
    enabled: !!id,
  });

  if (isLoading || beersLoading)
    return <p className="text-white">Loading...</p>;
  if (isError || beersError)
    return <p className="text-red-500">Error loading brewery details</p>;

  return (
    <div className="min-h-screen bg-zinc-950">
      <BreweryHero brewery={breweryDetails} beerNumbers={breweryBeers.length} />

      <div className=" px-5 md:px-10 lg:px-30 py-12 space-y-16">
        <BreweryStory brewery={breweryDetails} />
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-white mb-6">Beers</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {breweryBeers.length > 0 ? (
              breweryBeers.map((beer: any) => (
                <BeerCard key={beer.id} beer={beer} />
              ))
            ) : (
              <p className="text-zinc-400 col-span-full text-center">
                No beers found for this brewery
              </p>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
