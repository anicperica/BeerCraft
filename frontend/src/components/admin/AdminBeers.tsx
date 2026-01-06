import AdminBeerCard from "./AdminBeerCard";
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  deleteAdminBeer,
  fetchAdminBeers,
  addAdminBeer,
  updateAdminBeer,
} from "../../api/AdminBeers";
import BeerModal from "./beerForm/BeerModal";
import BeerForm from "./beerForm/BeerForm";
import type { BeerDetails } from "../../types/index";


export default function AdminBeers() {
  const queryClient = useQueryClient();

  const {
    data: adminBeers,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["adminBeers"],
    queryFn: fetchAdminBeers,
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedBeer, setSelectedBeer] = useState<BeerDetails | undefined>(
    undefined
  );

  const addMutation = useMutation({
    mutationFn: addAdminBeer,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["adminBeers"] }),
  });

  const updateMutation = useMutation({
    mutationFn: updateAdminBeer,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["adminBeers"] }),
  });

  const deleteMutation = useMutation({
    mutationFn: deleteAdminBeer,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["adminBeers"] }),
  });
  const handleAddClick = () => {
    setSelectedBeer(undefined);
    setModalOpen(true);
  };

  const handleEdit = (beer: BeerDetails) => {
    setSelectedBeer(beer);
    setModalOpen(true);
  };

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this beer?")) {
      deleteMutation.mutate(id);
    }
  };

  const handleSubmit = (beer: BeerDetails) => {
    if (selectedBeer && selectedBeer.id) {
      updateMutation.mutate(beer);
    } else {
      addMutation.mutate(beer);
    }
    setModalOpen(false);
  };

  if (isLoading) {
    return <p className="text-white">Loading...</p>;
  }

  if (isError) {
    return <p className="text-red-500">Error loading beers</p>;
  }

  return (
    <div className="flex flex-col w-full bg-zinc-800 border border-zinc-600 rounded-xl px-5 py-3 mt-5">
      <div className="flex justify-between items-center mb-4">
        <p className="text-white font-semibold">Manage Beers</p>
        <button
          className="bg-amber-400 text-black py-1 px-2 rounded-lg"
          onClick={handleAddClick}
        >
          Add Beer
        </button>
      </div>

      <div className="flex justify-between items-center pt-2 text-gray-400 px-1">
        <p>Name</p>
        <p>Actions</p>
      </div>

      <div className="flex flex-col gap-3 mt-2">
        {adminBeers?.map((beer) => (
          <AdminBeerCard
            key={beer.id}
            beer={beer}
            onEdit={() => handleEdit(beer)}
            onDelete={() => handleDelete(beer.id)}
          />
        ))}
      </div>

      <BeerModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={selectedBeer ? "Edit Beer" : "Add Beer"}
      >
        <BeerForm
          beer={selectedBeer}
          onSubmit={handleSubmit}
          onCancel={() => setModalOpen(false)}
        />
      </BeerModal>
    </div>
  );
}
