import type { Brewery } from "../types";
import { API_URL } from "./config";

export const fetchBrewery =async (): Promise<Brewery[]> => {
  const res = await fetch(`${API_URL}/api/brewery`,{
    credentials:"include",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch Brewery");
  }
  return res.json();
};

export const fetchBreweryById = async (id:string) => {
  const url=`${API_URL}/api/brewery/${id}`
  const res = await fetch(url,{
    credentials:"include",
  });
  if (!res.ok){
    throw new Error("Failed to find brewery");
  }
  return res.json();
}