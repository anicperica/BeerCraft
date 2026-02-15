import { API_URL } from "./config";

interface RegularUser {
  id: string;
  name: string;
  role: string;
}

interface UsersResponse {
  message: string;
  users: RegularUser[];
}

export const fetchAllRegularUsers = async (): Promise<UsersResponse> => {
  const res = await fetch(`${API_URL}/api/auth/users`, {
    method: "GET",
    credentials: "include",
  });

  if (!res.ok) {
    if (res.status === 403) {
      throw new Error("Admin access required");
    }
    throw new Error("Failed to fetch users");
  }

  return res.json();
};

export const updateUser = async (
  id: string,
  data: { name?: string; email?: string; isAdmin?: boolean },
) => {
  const res = await fetch(`${API_URL}/api/auth/users/${id}`, {
    method: "PUT",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error("Failed to update user");

  return res.json();
};

export const deleteUser = async (id: string) => {
  const res = await fetch(`${API_URL}/api/auth/users/${id}`, {
    method: "DELETE",
    credentials: "include",
  });

  if (!res.ok) throw new Error("Failed to delete user");

  return res.json();
};
