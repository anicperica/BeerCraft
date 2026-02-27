import { useState } from "react";
import type { BeerDetails, Brewery } from "../../../types/index";
import { useQuery } from "@tanstack/react-query";
import { fetchAdminBrewery } from "../../../api/AdminBrewery";
export interface BeerFormProps {
  beer?: BeerDetails;
  onSubmit: (data: BeerDetails) => void;
  onCancel: () => void;
}

export default function BeerForm({ beer, onSubmit, onCancel }: BeerFormProps) {
  const { data: breweries } = useQuery<Brewery[]>({
    queryKey: ["adminBrewery"],
    queryFn: fetchAdminBrewery,
  });
const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(beer?.image || null);
  const [uploading, setUploading] = useState(false);

  const [formData, setFormData] = useState<BeerDetails>({
    id: beer?.id || "",
    name: beer?.name || "",

    brewery:
      typeof beer?.brewery === "string"
        ? beer.brewery
        : (beer?.brewery as any)?.id || "",

    description: beer?.description || "",
    price: beer?.price || 0,
    alcohol: beer?.alcohol || "",
    image: beer?.image || "",
    imagePublicId: beer?.imagePublicId || "",
    style: beer?.style || "",
    bitternes: beer?.bitternes || "low",
    volume: beer?.volume || "",
    tastingNotes: beer?.tastingNotes || "",
    ingredients: beer?.ingredients || [],
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    if (name === "ingredients") {
      setFormData((prev) => ({
        ...prev,
        ingredients: value.split(",").map((i) => i.trim()),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

   const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setSelectedFile(file);
    setPreview(URL.createObjectURL(file));
  };

   const removeImage = () => {
    setSelectedFile(null);
    setPreview(null);
    setFormData((prev) => ({
      ...prev,
      image: "",
      imagePublicId: "",
    }));
  };

    const uploadImageToCloudinary = async () => {
    if (!selectedFile) return null;

    const formDataUpload = new FormData();
    formDataUpload.append("image", selectedFile);

    const res = await fetch("http://localhost:5000/api/admin/upload", {
      method: "POST",
      credentials:"include",
      body: formDataUpload,
    });

    if (!res.ok) throw new Error("Upload failed");

    return res.json();
  };

   const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    setUploading(true);

    let payload = { ...formData };

    if (selectedFile) {
      const uploaded = await uploadImageToCloudinary();

      if (uploaded) {
        payload.image = uploaded.url;
        payload.imagePublicId = uploaded.public_id;
      }
    }

    onSubmit(payload);

  } catch (err) {
    console.error(err);
    alert("Image upload failed");
  } finally {
    setUploading(false);
  }
};
  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 text-white max-h-[80vh]  "
    >
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
          <select
            name="brewery"
            value={formData.brewery}
            onChange={handleChange}
            required
            className="bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2"
          >
            <option value="">Select brewery</option>
            {breweries?.map((b) => (
              <option key={b.id} value={b.id}>
                {b.name}
              </option>
            ))}
          </select>
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
        <label className="mb-1 text-gray-300">
          Ingredients (comma separated)
        </label>
        <input
          name="ingredients"
          placeholder="Water, Barley malt, Hops, Yeast"
          value={formData.ingredients.join(", ")}
          onChange={handleChange}
          className="bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-white"
        />
      </div>

     <div className="flex flex-col">
        <label className="mb-2 text-gray-300">Image</label>

        {preview ? (
          <div className="relative w-40">
            <img
              src={preview}
              className="rounded-lg border border-zinc-700"
            />
            <button
              type="button"
              onClick={removeImage}
              className="absolute top-1 right-1 bg-red-500 text-white px-2 rounded"
            >
              ✕
            </button>
          </div>
        ) : (
          <input type="file" accept="image/*" className="hover:bg-zinc-800 px-3 py-2 border rounded-lg border-zinc-700" onChange={handleImageSelect} />
        )}
      </div>

      <div className="flex gap-3 pt-4 pb-5">
        <button
          type="button"
          onClick={onCancel}
          className="flex-1 border border-zinc-600 text-zinc-300 rounded-lg py-2"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={uploading}
          className="flex-1 bg-amber-500 text-black rounded-lg py-2 font-semibold"
        >
          {uploading ? "Uploading..." : beer ? "Update Beer" : "Add Beer"}
        </button>
      </div>
    </form>
  );
}
