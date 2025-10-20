import { Beer } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import type { FormEvent } from "react";

interface RegisterFormData {
  name: string;
  email: string;
  password: string;
  passwordconfirm: string;
}

export default function RegistrationPage() {
  const navigate = useNavigate();

  const registerMutation = useMutation({
    mutationFn: async (userData: RegisterFormData) => {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Registration failed");
      }
      return res.json();
    },
    onSuccess: (data) => {
      console.log("User registered", data);
      navigate("/login");
    },
    onError: (error) => {
      console.log("Registration error", error.message);
      alert(error.message);
    },
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const userData = Object.fromEntries(
      formData.entries()
    ) as unknown as RegisterFormData;
    console.log("Submitting user:", userData);
    if (userData.password !== userData.passwordconfirm) {
      alert("passwords do not match!");
      return;
    }
    registerMutation.mutate(userData);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col  justify-center items-center w-full px-5 h-screen  bg-amber-50 "
    >
      <div className="flex flex-col justify-center items-center w-full max-w-[500px] px-10 py-10 border border-gray-600 rounded-2xl">
        <div className="flex flex-col justify-center items-center">
          <Beer className="text-orange-900 " size={60} />
          <h1 className="py-2 text-2xl">Create account</h1>
          <h1 className="pb-10  text-l text-amber-800">
            Join the craft beer community
          </h1>
        </div>
        <div className="flex flex-col justify-center items-start w-full gap-7">
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Name"
            required
            className=" w-full border border-gray-500 rounded-l px-4 py-1"
          />

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

          <input
            id="passwordconfirm"
            name="passwordconfirm"
            type="password"
            placeholder="password"
            required
            className=" w-full border border-gray-500 rounded-l px-4 py-1"
          />
        </div>
        <div className="flex flex-col justify-center items-center w-full pt-10 ">
          <button className="w-full py-2 rounded-xl bg-amber-700 ">
            Sign up
          </button>
          <div className=" flex items-center pt-3 gap-2 text-sm">
            <p>Already have an account?</p>
            <Link
              to="/login"
              className="text-blue-600 hover:underline hover:text-blue-800 font-medium"
            >
              Log in
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
}
