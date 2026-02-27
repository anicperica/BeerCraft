import { Beer } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import type { FormEvent } from "react";
import { useMutation } from "@tanstack/react-query";
import { useAuth } from "../../context/AuthContext";
import { useQueryClient } from "@tanstack/react-query";
import { API_URL } from "../../api/config";
interface LoginFormData {
  email: string;
  password: string;
}

export default function LoginPage() {
 const { setUser } = useAuth();
  const queryClient = useQueryClient();

  const navigate = useNavigate();
  const loginMutation = useMutation({
    mutationFn: async (loginData: LoginFormData) => {
      const res = await fetch(`${API_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(loginData),
      });
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Login Failed");
      }
      const data=await res.json();
     
      return data
    },
    onSuccess: (data) => {
       setUser(data)
      queryClient.setQueryData(["currentUser"], data)
        navigate("/"); 
      
    },
    onError: (error) => {
      console.error("Login Error:", error.message);
    },
  });

  
  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const loginData = Object.fromEntries(
      formData.entries()
    ) as unknown as LoginFormData;
    
    loginMutation.mutate(loginData);
  };

  return (
    <form
      onSubmit={handleLogin}
      className="flex flex-col  justify-center items-center w-full px-5 h-screen bg-zinc-900 "
    >
      <div className="flex flex-col justify-center items-center w-full max-w-[500px] px-10 py-10 border border-amber-500 rounded-2xl">
        <div className="flex flex-col justify-center items-center">
          <Beer className="text-amber-400 " size={60} />
          <h1 className="py-2 text-2xl text-white font-bold">Welcome</h1>
          <h1 className="pb-10  text-l text-white">
            Join the craft beer community
          </h1>
        </div>
        <div className="flex flex-col justify-center items-start w-full gap-7 ">
          <input
            id="email"
            name="email"
            type="text"
            placeholder="your@gmail.com"
            required
            className="w-full  border text-white border-gray-300 rounded-l px-4 py-1 placeholder:text-gray-400 "
          />

          <input
            id="password"
            name="password"
            type="password"
            placeholder="password"
            required
            className=" w-full border text-white border-gray-300 rounded-l px-4 py-1 placeholder:text-gray-400"
          />
        </div>
        <div className="flex flex-col justify-center items-center w-full pt-10 ">
          <button
            type="submit"
            className="w-full py-2 rounded-xl bg-amber-400  font-bold"
          >
            Sign up
          </button>
          <div className=" flex items-center pt-3 gap-2 text-sm">
            <p className="text-gray-300">Dont have and account</p>
            <Link
              to="/register"
              className="text-amber-600 hover:underline hover:text-amber-800 font-medium"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
}
