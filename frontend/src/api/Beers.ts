import type { Beer } from "../types";

export const fetchBeers = async (): Promise<Beer[]> => {
  const res = await fetch("http://localhost:5000/api/beers");

  if (!res.ok) {
    throw new Error("Failed to fetch beers");
  }
  return res.json();
};
