import BeerImage from "../../components/beerDetails/BeerImage";
import BeerHeader from "../../components/beerDetails/BeerHeader";
import BeerDescription from "../../components/beerDetails/BeerDescription";
import BeerSpecs from "../../components/beerDetails/BeerSpecs";
import BeerIngredients from "../../components/beerDetails/BeerIngredients";
import BeerPriceCard from "../../components/beerDetails/BeerPriceCard";
import { ArrowLeft } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { fetchBeerById } from "../../api/Beers";
import { Link, useParams } from "react-router-dom";

export default function BeerDetailsLayout() {
  const { id } = useParams();

  const {
    data: beerDetails,
    isLoading,
    isError,
    
  } = useQuery({
    queryKey: ["beer", id],
    queryFn: () => fetchBeerById(id!),
    enabled: !!id,
  });

  if (isLoading) return <p className="text-white">Loading...</p>;
  if (isError) return <p className="text-red-500">Error loading beer</p>;

  return (
    <div className="min-h-screen bg-zinc-950 pt-[120px] py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <Link to="/beers" className="inline-flex items-center  text-amber-400 py-2 px-4 rounded-xl  mb-6 hover:bg-amber-400 hover:text-black">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Beers
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <BeerImage beer={beerDetails} />

          <div className="space-y-6">
            <BeerHeader beer={beerDetails} />
            <BeerDescription beer={beerDetails} />
            <BeerSpecs  beer={beerDetails}/>
            <BeerIngredients beer={beerDetails} />
            <BeerPriceCard beer={beerDetails}/>
          </div>
        </div>
      </div>
    </div>
  );
}
