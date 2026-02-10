import { useState } from "react";

export interface UserFormProps {
  user?: { id: string; name: string; email?: string; isAdmin?: boolean };
  onSubmit: (data: { name: string; email?: string; isAdmin?: boolean }) => void;
  onCancel: () => void;
}

export default function UserForm({ user, onSubmit, onCancel }: UserFormProps) {
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    isAdmin: user?.isAdmin || false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((p) => ({ ...p, [name]: checked }));
    } else {
      setFormData((p) => ({ ...p, [name]: value }));
    }
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={submit} className="space-y-6 text-white">
      <div className="flex flex-col">
        <label className="mb-1 text-gray-300">Name *</label>
        <input
          name="name"
          placeholder="User name"
          value={formData.name}
          onChange={handleChange}
          required
          className="bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-white"
        />
      </div>

      <div className="flex flex-col">
        <label className="mb-1 text-gray-300">Email</label>
        <input
          name="email"
          placeholder="user@example.com"
          value={formData.email}
          onChange={handleChange}
          className="bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-white"
        />
      </div>

      <div className="flex items-center gap-3">
        <input
          id="isAdmin"
          name="isAdmin"
          type="checkbox"
          checked={formData.isAdmin}
          onChange={handleChange}
          className="h-4 w-4"
        />
        <label htmlFor="isAdmin" className="text-gray-300">Is Admin</label>
      </div>

      <div className="flex gap-3 pt-4">
        <button
          type="button"
          onClick={onCancel}
          className="flex-1 border border-zinc-600 text-zinc-300 rounded-lg py-2"
        >
          Cancel
        </button>
        <button type="submit" className="flex-1 bg-amber-500 text-black rounded-lg py-2 font-semibold">
          Save
        </button>
      </div>
    </form>
  );
}
