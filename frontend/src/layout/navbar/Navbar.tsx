import { useState } from "react";
import { Menu, Beer, ShoppingCart, Heart  } from "lucide-react";
import MenuCard from "./MenuCard";
import { navLinks } from "../../data/navLinks";
import NavLinks from "../../components/Navigation/NavLinks";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const { user, setUser } = useAuth();
  const loggedIn = !!user;

  const queryClient = useQueryClient();

  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  

  const handleLogout = () => {
   setUser(null);
    queryClient.setQueryData(["currentUser"], null);
    setIsOpen(false);
    navigate("/");
  };

  
  return (
    <div className="flex justify-between items-center absolute pt-4 top-0 left-0 w-full z-50 pb-3  ">
      <div className="flex justify-center items-center gap-2 pl-5  ">
        <Beer className="text-black bg-amber-400 rounded-2xl  p-2" size={50} />
        <h1 className="text-white text-xl font-bold">CraftBeer</h1>
      </div>
      <div className=" hidden md:flex  justify-center items-center gap-8   text-gray-300">
        <NavLinks
          links={navLinks}
          className="hidden md:flex gap-8   text-white"
        />
      </div>
      <div className="flex justify-center items-center gap-5 pr-5">
         <Link   to="/favorites" className="text-gray-300">
          <Heart   />
        </Link>
        <Link   to="/cart" className="text-gray-300">
          <ShoppingCart   />
        </Link>
        {loggedIn ? (
          <button
            onClick={handleLogout}
            className=" hidden md:flex text-black py-2 px-5 rounded-xl  bg-amber-400 hover:bg-black hover:text-white"
          >
            Log out
          </button>
        ) : (
          <Link
            to="/login"
            className="hidden md:flex  text-gray-300 py-2 px-5 rounded-xl bg-zinc-900 hover:text-amber-400"
          >
            Sign in
          </Link>
        )}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="md:hidden"
        >
          <Menu className="text-gray-300" />
        </button>
        {isOpen && (
          <MenuCard
            loggedIn={loggedIn}
            onClose={() => setIsOpen((prev) => !prev)}
            onLogout={handleLogout}
          />
        )}
      </div>
    </div>
  );
}
