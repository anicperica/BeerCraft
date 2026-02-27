import type { BeerDetails } from "../types";
import { API_URL } from "./config";
export const fetchAdminBeers = async (): Promise<BeerDetails[]> => {
  const res = await fetch(`${API_URL}/api/admin/beers`, { credentials: "include" });

  if (!res.ok) {
    throw new Error("Failed to fetch beers");
  }
  return res.json();
};

export const addAdminBeer = async (beer: BeerDetails) => {
  const res = await fetch(`${API_URL}/api/admin/beers`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(beer),
  });

  if (!res.ok) {
    throw new Error("Failed to add beer");
  }

  return res.json();
};

export const updateAdminBeer = async (beer: BeerDetails) => {
  const res = await fetch(`${API_URL}/api/admin/beers/${beer.id}`, {
    method: "PUT",
     credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(beer),
  });

  if (!res.ok) throw new Error("Failed to update beer");
  return res.json();
};
export const deleteAdminBeer = async (id: string) => {
  
  const res = await fetch(`${API_URL}/api/admin/beers/${id}`, {
    credentials: "include",
    method: "DELETE",
  });

  if (!res.ok) throw new Error("Failed to Delete  beer");
  return res.json();
};
