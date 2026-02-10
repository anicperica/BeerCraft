import UserModal from "../../components/admin/userForm/UserModal";
import UserForm from "../../components/admin/userForm/UserForm";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchAllRegularUsers, updateUser } from "../../api/Users";
import { useState } from "react";


export default function AdminUser() {
  const [editingUser, setEditingUser] = useState<any | null>(null);
  const qc = useQueryClient();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["adminUsers"],
    queryFn: fetchAllRegularUsers,
  });

  const mutation = useMutation({
    mutationFn: ({ id, data }: any) => updateUser(id, data),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["adminUsers"] });
      setEditingUser(null);
    },
  });

  const handleSave = (formData: any) => {
    if (!editingUser) return;
    mutation.mutate({ id: editingUser.id, data: formData });
  };

  if (isLoading) return <div className="text-white">Loading users...</div>;
  if (isError) return <div className="text-white">Error loading users</div>;

  const users = data?.users || [];

  return (
    <div className="mt-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {users.map((u: any) => (
          <div key={u.id} className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 flex justify-between items-center">
            <div>
              <div className="text-white font-medium">{u.name}</div>
              <div className="text-zinc-400 text-sm">{u.email}</div>
            </div>
            <div className="flex gap-2">
              <button onClick={() => setEditingUser(u)} className="px-3 py-1 bg-amber-500 text-black rounded">Edit</button>
            </div>
          </div>
        ))}
      </div>

      <UserModal isOpen={!!editingUser} onClose={() => setEditingUser(null)} title="Edit User">
        <UserForm user={editingUser} onCancel={() => setEditingUser(null)} onSubmit={handleSave} />
      </UserModal>
    </div>
  );
}