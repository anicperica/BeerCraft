import type { Brewery } from "../types";
import { API_URL } from "./config";


export const fetchAdminBrewery = async (): Promise<Brewery[]> => {
  const res = await fetch(`${API_URL}/api/admin/brewery`, { credentials: "include" });

  if (!res.ok) {
    throw new Error("Failed to fetch Brewery");
  }
  return res.json();
};

export const addAdminBrewery = async (brewery: Brewery) => {
  const res = await fetch(`${API_URL}/api/admin/brewery`, {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(brewery),
  });
  if (!res.ok) throw new Error("Failed to add brewery");
  return res.json();
};

export const updateAdminBrewery = async (brewery: Brewery) => {
  const res = await fetch(`${API_URL}/api/admin/brewery/${brewery.id}`, {
    method: "PUT",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(brewery),
  });
  if (!res.ok) throw new Error("Failed to update brewery");
  return res.json();
};

export const deleteAdminBrewery = async (id: string) => {
  const res = await fetch(`${API_URL}/api/admin/brewery/${id}`, {
    method: "DELETE",
    credentials: "include",
  });
  if (!res.ok) throw new Error("Failed to delete brewery");
  return res.json();
};
