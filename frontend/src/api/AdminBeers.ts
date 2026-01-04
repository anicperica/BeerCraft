import type { BeerDetails } from "../types";

export const fetchAdminBeers = async (): Promise<BeerDetails[]> => {
  const url = "http://localhost:5000/api/admin/beers";
  const res = await fetch(url, { credentials: "include" });

  if (!res.ok) {
    throw new Error("Failed to fetch beers");
  }
  return res.json();
};

export const addAdminBeer = async (beer: BeerDetails) => {
  const url = "http://localhost:5000/api/admin/beers";

  const res = await fetch(url, {
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
  const url = `http://localhost:5000/api/admin/beers/${beer.id}`;
  const res = await fetch(url, {
    method: "PUT",
     credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(beer),
  });

  if (!res.ok) throw new Error("Failed to update beer");
  return res.json();
};
export const deleteAdminBeer = async (id: string) => {
  const url = `http://localhost:5000/api/admin/beers/${id}`;
  const res = await fetch(url, {
    credentials: "include",
    method: "DELETE",
  });

  if (!res.ok) throw new Error("Failed to Delete  beer");
  return res.json();
};
