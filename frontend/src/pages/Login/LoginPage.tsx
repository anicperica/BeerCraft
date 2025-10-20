import { Beer } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import type { FormEvent } from "react";
import { useMutation } from "@tanstack/react-query";

interface LoginFormData {
  email: string;
  password: string;
}

export default function LoginPage() {
  const navigate = useNavigate();
  const loginMutation = useMutation({
    mutationFn: async (loginData: LoginFormData) => {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginData),
      });
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Login Failed");
      }
      return res.json();
    },
    onSuccess: (data) => {
      console.log("Logged in user:", data);
      localStorage.setItem("token", data.token);
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
    console.log(loginData);
    loginMutation.mutate(loginData);
  };

  return (
    <form
      onSubmit={handleLogin}
      className="flex flex-col  justify-center items-center w-full px-5 h-screen bg-amber-50 "
    >
      <div className="flex flex-col justify-center items-center w-full max-w-[500px] px-10 py-10 border border-gray-600 rounded-2xl">
        <div className="flex flex-col justify-center items-center">
          <Beer className="text-orange-900 " size={60} />
          <h1 className="py-2 text-2xl">Welcome</h1>
          <h1 className="pb-10  text-l text-amber-800">
            Join the craft beer community
          </h1>
        </div>
        <div className="flex flex-col justify-center items-start w-full gap-7">
          <input
            id="email"
            name="email"
            type="text"
            placeholder="your@gmail.com"
            required
            className="w-full  border border-gray-500 rounded-l px-4 py-1"
          />

          <input
            id="password"
            name="password"
            type="password"
            placeholder="password"
            required
            className=" w-full border border-gray-500 rounded-l px-4 py-1"
          />
        </div>
        <div className="flex flex-col justify-center items-center w-full pt-10 ">
          <button
            type="submit"
            className="w-full py-2 rounded-xl bg-amber-700 "
          >
            Sign up
          </button>
          <div className=" flex items-center pt-3 gap-2 text-sm">
            <p>Dont have and account</p>
            <Link
              to="/register"
              className="text-blue-600 hover:underline hover:text-blue-800 font-medium"
            >
             Register 
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
}
