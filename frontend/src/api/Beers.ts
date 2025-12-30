import type { Beer } from "../types";

export const fetchBeers = async (limit?:number): Promise<Beer[]> => {
  const url=limit ? `http://localhost:5000/api/beers?limit=${limit}` :
  `http://localhost:5000/api/beers`;
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch beers");
  }
  return res.json();
};


export const fetchBeerById = async (id:string) => {
  const res = await fetch(`http://localhost:5000/api/beers/${id}`);
  if (!res.ok){
    throw new Error("Failed to find beer");
  }
  return res.json();
}

export const fetchBeersOfBreweryByName = async (breweryName: string): Promise<Beer[]> => {
  const res = await fetch(`http://localhost:5000/api/beers/brewery/name/${encodeURIComponent(breweryName)}`);
  if (!res.ok) throw new Error("Failed to fetch beers");
  return res.json();
};