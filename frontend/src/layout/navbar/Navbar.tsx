import { useState, useEffect } from "react";
import { Menu, Beer, ShoppingCart } from "lucide-react";
import MenuCard from "./MenuCard";
import { navLinks } from "../../data/navLinks";
import NavLinks from "../../components/Navigation/NavLinks";
import { Link } from "react-router-dom";
import { isLoggedIn } from "../../utils/isLoged";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogout = () => {
    document.cookie = "jwt=; max-age=0; path=/";
    setLoggedIn(false);
  };

  useEffect(() => {
    setLoggedIn(isLoggedIn());
  }, []);

  return (
    <div className="flex justify-between items-center absolute pt-4 top-0 left-0 w-full z-50 ">
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
        <button className="text-gray-300">
          <ShoppingCart />
        </button>
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
