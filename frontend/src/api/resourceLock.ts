import { API_URL } from "./config";



export const addBeerLock = async (beerId:string) => {
  const res = await fetch(`${API_URL}/api/admin/beers/${beerId}/lock`, {
    method: "POST",
    credentials: "include",
  });
  if (!res.ok) {
    throw new Error("Failed to lock beer");
  }

  return res.json();
};

export const removeBeerLock = async (beerId:string) => {
  const res = await fetch(`${API_URL}/api/admin/beers/${beerId}/unlock`, {
    method: "POST",
    credentials: "include",
  });
  if (!res.ok) {
    throw new Error("Failed to unlock  beer");
  }

  return res.json();
};
