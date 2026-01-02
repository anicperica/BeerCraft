import { useState } from "react";
import AdminHeroSection from "../../components/admin/AdminHeroSetion";
import AdminBeers from "../../components/admin/AdminBeers";
import AdminBrewery from "../../components/admin/AdminBrewery";

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<"beers" | "breweries">("beers");

  return (
    <div className="flex flex-col items-start min-h-screen bg-zinc-950 pt-[120px] md:pt-[180px] py-8 px-5 md:px-10 lg:px-15 ">
      <AdminHeroSection />

      <div className="flex gap-3 mt-10 px-5 ">
        <button
          onClick={() => setActiveTab("beers")}
          className={`px-4 py-2 rounded-lg font-medium transition
            ${
              activeTab === "beers"
                ? "bg-amber-400 text-black"
                : "bg-zinc-800 text-white hover:bg-zinc-700"
            }
          `}
        >
          Beers
        </button>

        <button
          onClick={() => setActiveTab("breweries")}
          className={`px-4 py-2 rounded-lg font-medium transition
            ${
              activeTab === "breweries"
                ? "bg-amber-400 text-black"
                : "bg-zinc-800 text-white hover:bg-zinc-700"
            }
          `}
        >
          Breweries
        </button>
      </div>

      {activeTab === "beers" ? <AdminBeers /> : <AdminBrewery />}
    </div>
  );
}
