import type { User } from "../types";
import { API_URL } from "./config";

export const fetchCurrentUser = async (): Promise<User> => {
  const res = await fetch(`${API_URL}/api/auth/profile`, {
    credentials: "include",
  });

  if (!res.ok) {
    throw new Error("Not authenticated");
  }

  return res.json();
};
