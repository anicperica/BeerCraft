import { useState } from "react";
import  type { BeerDetails } from "../../../types/index"; 


export interface BeerFormProps {
  beer?: BeerDetails;
  onSubmit: (data: BeerDetails) => void; 
  onCancel: () => void;
}

export default function BeerForm({ beer, onSubmit, onCancel }: BeerFormProps) {
  const [formData, setFormData] = useState<BeerDetails>({
    id: beer?.id || "",

    name: beer?.name || "",
    brewery: beer?.brewery || "",
    description: beer?.description || "",
    price: beer?.price || 0,
    alcohol: beer?.alcohol || "",
    image: beer?.image || "",

    style: beer?.style || "",
    bitternes: beer?.bitternes || "low",
    volume: beer?.volume || "",
    tastingNotes: beer?.tastingNotes || "",
    ingredients: beer?.ingredients || [],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === "ingredients") {
      setFormData(prev => ({ ...prev, ingredients: value.split(",").map(i => i.trim()) }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
     <form onSubmit={handleSubmit} className="space-y-6 text-white max-h-[80vh]  ">
     
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label className="mb-1 text-gray-300">Name *</label>
          <input
            name="name"
            placeholder="Beer name"
            value={formData.name}
            onChange={handleChange}
            required
            className="bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-white"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 text-gray-300">Brewery *</label>
          <input
            name="brewery"
            placeholder="Brewery"
            value={formData.brewery}
            onChange={handleChange}
            required
            className="bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-white"
          />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="flex flex-col">
          <label className="mb-1 text-gray-300">Price (€)</label>
          <input
            name="price"
            type="number"
            step="0.01"
            value={formData.price}
            onChange={handleChange}
            className="bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-white"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 text-gray-300">Alcohol (%)</label>
          <input
            name="alcohol"
            placeholder="5.5%"
            value={formData.alcohol}
            onChange={handleChange}
            className="bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-white"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 text-gray-300">Volume</label>
          <input
            name="volume"
            placeholder="500 ml"
            value={formData.volume}
            onChange={handleChange}
            className="bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-white"
          />
        </div>
      </div>

      
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label className="mb-1 text-gray-300">Style</label>
          <input
            name="style"
            placeholder="Pale Ale"
            value={formData.style}
            onChange={handleChange}
            className="bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-white"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 text-gray-300">Bitterness</label>
          <select
            name="bitternes"
            value={formData.bitternes}
            onChange={handleChange}
            className="bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-white"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
      </div>

      
      <div className="flex flex-col">
        <label className="mb-1 text-gray-300">Image URL</label>
        <input
          name="image"
          placeholder="/images/piva1.jpg"
          value={formData.image}
          onChange={handleChange}
          className="bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-white"
        />
      </div>

      
      <div className="flex flex-col">
        <label className="mb-1 text-gray-300">Description</label>
        <textarea
          name="description"
          placeholder="Classic pale ale, hoppy and refreshing."
          rows={2}
          value={formData.description}
          onChange={handleChange}
          className="bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-white"
        />
      </div>

      
      <div className="flex flex-col">
        <label className="mb-1 text-gray-300">Tasting Notes</label>
        <input
          name="tastingNotes"
          placeholder="Citrus, floral hops, light malt"
          value={formData.tastingNotes}
          onChange={handleChange}
          className="bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-white"
        />
      </div>

      
      <div className="flex flex-col">
        <label className="mb-1 text-gray-300">Ingredients (comma separated)</label>
        <input
          name="ingredients"
          placeholder="Water, Barley malt, Hops, Yeast"
          value={formData.ingredients.join(", ")}
          onChange={handleChange}
          className="bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-white"
        />
      </div>

      
      <div className="flex gap-3 pt-4">
        <button
          type="button"
          onClick={onCancel}
          className="flex-1 border border-zinc-600 text-zinc-300 rounded-lg py-2"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="flex-1 bg-amber-500 text-black rounded-lg py-2 font-semibold"
        >
          {beer ? "Update Beer" : "Add Beer"}
        </button>
      </div>
    </form>
  );
}
