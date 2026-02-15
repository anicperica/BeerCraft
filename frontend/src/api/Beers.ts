import type { Beer } from "../types";
import { API_URL } from "./config";

export const fetchBeers = async (limit?: number): Promise<Beer[]> => {
  const url = limit
    ? `${API_URL}/api/beers?limit=${limit}`
    : `${API_URL}/api/beers`;
  const res = await fetch(url, {
    credentials: "include",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch beers");
  }
  return res.json();
};

export const fetchBeerById = async (id: string) => {
  const res = await fetch(`${API_URL}/api/beers/${id}`, {
    credentials: "include",
  });
  if (!res.ok) {
    throw new Error("Failed to find beer");
  }
  return res.json();
};

export const fetchBeersOfBreweryById = async (id: string) => {
  const res = await fetch(`${API_URL}/api/beers/brewery/${id}`, {
    credentials: "include",
  });
  if (!res.ok) throw new Error("Failed to fetch beers");
  return res.json();
};
