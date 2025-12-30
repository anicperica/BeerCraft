import type { Brewery } from "../types";

export const fetchBrewery =async (): Promise<Brewery[]> => {
  const url="http://localhost:5000/api/brewery"
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch Brewery");
  }
  return res.json();
};