import { ArrowLeft, MapPin, Calendar, Beer } from "lucide-react";
import { Link } from "react-router-dom";
import type { Brewery } from "../../types";

interface BreweryDetails{
  brewery:Brewery
  beerNumbers?:number
}

export default function BreweryHero( {brewery,beerNumbers}:BreweryDetails) {



  return (
    <section className="relative h-[70vh] min-h-[500px] ">
   
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:`url(${brewery.image})`,
        }}
      />

    
      <div className="absolute  inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent" />

      <div className="absolute inset-0 flex flex-col justify-end px-5 md:px-10 lg:px-30 pb-12">
        <div className="w-full space-y-4">
          <Link
            to="/brewery"
            className="inline-flex items-center text-amber-400 hover:text-amber-400 hover:bg-black py-2 px-4 rounded-xl"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Breweries
          </Link>

          <h1 className="text-4xl md:text-6xl font-bold text-white">
           {brewery.name}
          </h1>

          <div className="flex flex-wrap gap-3">
            {brewery.location && (
              <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/80 border border-zinc-800 text-amber-400 text-sm">
                <MapPin className="w-4 h-4" />
                {brewery.location}
              </span>
            )}

            {brewery.founded && (
              <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/80 border border-zinc-800 text-amber-400 text-sm">
                <Calendar className="w-4 h-4" />
                Est. {brewery.founded}
              </span>
            )}

            <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-amber-400 text-zinc-900 text-sm font-semibold">
              <Beer className="w-4 h-4" />
               {beerNumbers} 
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
