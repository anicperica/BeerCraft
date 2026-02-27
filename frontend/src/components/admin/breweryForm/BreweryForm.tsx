import { useState } from "react";
import type { Brewery } from "../../../types/index";

export interface BreweryFormProps {
  brewery?: Brewery;
  onSubmit: (data: Brewery) => void;
  onCancel: () => void;
}

export default function BreweryForm({
  brewery,
  onSubmit,
  onCancel,
}: BreweryFormProps) {

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(brewery?.image || null);
  const [uploading, setUploading] = useState(false);

  const [formData, setFormData] = useState<Brewery>({
    id: brewery?.id || "",
    name: brewery?.name || "",
    shortDescription: brewery?.shortDescription || "",
    location: brewery?.location || "",
    founded: brewery?.founded || 0,
    story: brewery?.story || "",
    image: brewery?.image || "",
    imagePublicId: brewery?.imagePublicId || "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
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
    setFormData(prev => ({
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
      credentials: "include",
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

      <div className="flex flex-col">
        <label className="mb-2 text-gray-300">Image</label>

        {preview ? (
          <div className="relative w-40">
            <img src={preview} className="rounded-lg border border-zinc-700" />
            <button
              type="button"
              onClick={removeImage}
              className="absolute top-1 right-1 bg-red-500 text-white px-2 rounded"
            >
              ✕
            </button>
          </div>
        ) : (
          <input
            type="file"
            accept="image/*"
            onChange={handleImageSelect}
            className="hover:bg-zinc-800 px-3 py-2 border rounded-lg border-zinc-700"
          />
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
          className="flex-1 bg-amber-500 text-black rounded-lg py-2 font-semibold"
        >
          {uploading ? "uploading " :brewery ? "Update Brewery" : "Add Brewery"}
        </button>
      </div>
    </form>
  );
}
