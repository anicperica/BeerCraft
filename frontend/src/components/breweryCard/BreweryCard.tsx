import { ArrowRight, MapPin, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";

import type { Brewery } from "../../types";
interface BrewerycardProps{
    brewery:Brewery
}

export default function BreweryCard({brewery}:BrewerycardProps) {
  const navigate = useNavigate();

  const goToDetails = () => {
    navigate(`/brewery/${brewery.id}`);
  };

  return (
    <div
      className="
        flex flex-col
        bg-zinc-900
        rounded-2xl
        overflow-hidden
        
        min-w-[260px]
        max-w-[350px]
        lg:max-w-[400px]
        w-full
        
        
      "
    >
      <div className="relative w-full aspect-[5/5] overflow-hidden">
        <img
          src={brewery.image}
          alt="Beer"
          loading="lazy"
          className="w-full h-full object-cover
            transition-transform duration-500
            hover:scale-[1.05]
            will-change-transform"
        />

        <div className="absolute bottom-0 left-0 right-0  p-3 bg-gradient-to-t from-black/90 to-transparent ">
          <h1 className="text-white font-bold text-2xl pb-3">{brewery.name}</h1>
          <div className="flex  items-center gap-4 ">
            <div className="flex  ">
              <MapPin className="text-amber-400" />
              <h3 className=" text-gray-300">{brewery.location}</h3>
            </div>
            <div className="flex jusitfy-center items-center">
              <Calendar className="text-amber-400" />
              <p className="text-sm text-gray-300">{brewery.founded}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 px-4 pt-6 pb-4 text-gray-300">
        <div className="flex justify-between items-center">
          <span>
            {brewery.shortDescription}
          </span>
        </div>
    
        <button
          className="flex justify-center items-center  gap-5 py-2 rounded-lg bg-zinc-800 hover:bg-amber-400 hover:text-black "
          onClick={goToDetails}
        >
          Explore Brewery
          <ArrowRight />
        </button>
      </div>
    </div>
  );
}
