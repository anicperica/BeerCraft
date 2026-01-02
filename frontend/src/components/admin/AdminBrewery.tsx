import AdminBreweryCard from "./AdminBreweryCard";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { useState } from "react";
import BreweryModal from "./breweryForm/BreweryModal";
import BreweryForm from "./breweryForm/BreweryForm";
import type { Brewery } from "../../types";
import {
  fetchAdminBrewery,
  addAdminBrewery,
  updateAdminBrewery,
  deleteAdminBrewery,
} from "../../api/AdminBrewery";

export default function AdminBrewery() {
  const queryClient = useQueryClient();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedBrewery, setSelectedBrewery] = useState<Brewery | undefined>(
    undefined
  );

  const {
    data: adminBeers,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["adminBrewery"],
    queryFn: fetchAdminBrewery,
  });

  const addMutation = useMutation({
    mutationFn: addAdminBrewery,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["adminBrewery"] }),
  });
  const updateMutation = useMutation({
    mutationFn: updateAdminBrewery,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["adminBrewery"] }),
  });
  const deleteMutation = useMutation({
    mutationFn: deleteAdminBrewery,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["adminBrewery"] }),
  });

  const handleAddClick = () => {
    setSelectedBrewery(undefined);
    setModalOpen(true);
  };

  const handleEdit = (brewery: Brewery) => {
    setSelectedBrewery(brewery);
    setModalOpen(true);
  };

  const handleDelete = (id: string) => {
    if (confirm("Are you sure?")) deleteMutation.mutate(id);
  };

  const handleSubmit = (brewery: Brewery) => {
    if (selectedBrewery && selectedBrewery.id) {
      updateMutation.mutate(brewery);
    } else {
      addMutation.mutate(brewery);
    }
    setModalOpen(false);
  };

  if (isLoading) {
    return <p className="text-white">Loading...</p>;
  }

  if (isError) {
    return <p className="text-red-500">Error loading Brewerys</p>;
  }

  return (
    <div className="flex  flex-col w-full bg-zinc-800 border border-zinc-600 rounded-xl px-5  py-3 mt-5 ">
      <div className="flex justify-between items-center">
        <p className="text-white">Manage Brewery</p>
        <button
          className="bg-amber-400 text-black py-1 px-2 rounded-lg"
          onClick={handleAddClick}
        >
          Add Brewery
        </button>
      </div>
      <div>
        <div className="flex justify-between items-center pt-5 text-gray-400 px-1 ">
          <p>Name</p>
          <p>Actions</p>
        </div>
        <div className="flex flex-col gap-3 mt-2 ">
          {adminBeers?.map((brewery) => (
            <AdminBreweryCard
              key={brewery.id}
              brewery={brewery}
              onEdit={() => handleEdit(brewery)}
              onDelete={() => handleDelete(brewery.id)}
            />
          ))}
        </div>

        <BreweryModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          title={selectedBrewery ? "Edit Brewery" : "Add Brewery"}
        >
          <BreweryForm
            brewery={selectedBrewery}
            onSubmit={handleSubmit}
            onCancel={() => setModalOpen(false)}
          />
        </BreweryModal>
      </div>
    </div>
  );
}
