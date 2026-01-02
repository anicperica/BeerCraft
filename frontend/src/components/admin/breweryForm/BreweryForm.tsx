import { useState } from "react";
import type { Brewery } from "../../../types/index";

export interface BreweryFormProps {
  brewery?: Brewery;
  onSubmit: (data: Brewery) => void;
  onCancel: () => void;
}

export default function BreweryForm({ brewery, onSubmit, onCancel }: BreweryFormProps) {
  const [formData, setFormData] = useState<Brewery>({
    id: brewery?.id || "",
    name: brewery?.name || "",
    shortDescription: brewery?.shortDescription || "",
    location: brewery?.location || "",
    founded: brewery?.founded || 0,
    story: brewery?.story || "",
    image: brewery?.image || "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 text-white max-h-[80vh] ">
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label className="mb-1 text-gray-300">Name *</label>
          <input
            name="name"
            placeholder="Brewery Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-white"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 text-gray-300">Location</label>
          <input
            name="location"
            placeholder="City, Country"
            value={formData.location}
            onChange={handleChange}
            className="bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-white"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label className="mb-1 text-gray-300">Founded Year</label>
          <input
            name="founded"
            type="number"
            placeholder="1994"
            value={formData.founded}
            onChange={handleChange}
            className="bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-white"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 text-gray-300">Image URL</label>
          <input
            name="image"
            placeholder="/imagesBrewery/pivnica1.jpg"
            value={formData.image}
            onChange={handleChange}
            className="bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-white"
          />
        </div>
      </div>

      <div className="flex flex-col">
        <label className="mb-1 text-gray-300">Short Description</label>
        <textarea
          name="shortDescription"
          placeholder="Brief description of the brewery"
          rows={2}
          value={formData.shortDescription}
          onChange={handleChange}
          className="bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-white"
        />
      </div>

      <div className="flex flex-col">
        <label className="mb-1 text-gray-300">Story</label>
        <textarea
          name="story"
          placeholder="Full story of the brewery"
          rows={4}
          value={formData.story}
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
          {brewery ? "Update Brewery" : "Add Brewery"}
        </button>
      </div>
    </form>
  );
}
