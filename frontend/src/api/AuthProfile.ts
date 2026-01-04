import type { User } from "../types"; 


export const fetchCurrentUser = async (): Promise<User> => {
  const res = await fetch("http://localhost:5000/api/auth/profile", {
    credentials: "include", 
  });

  if (!res.ok) {
    throw new Error("Not authenticated");
  }

  return res.json(); 
};
