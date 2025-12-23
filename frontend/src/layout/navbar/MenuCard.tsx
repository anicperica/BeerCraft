import { X } from "lucide-react";
import NavLinks from "../../components/ui/NavLinks";
import { navLinks } from "../../data/navLinks";
import { Link } from "react-router-dom";
interface MenuProps {
  onClose: () => void;
  loggedIn: boolean;
  onLogout: () => void;
}
export default function MenuCard({  onClose, loggedIn, onLogout}: MenuProps) {

   
  return (
    <div className="absolute  flex flex-col justify-between items-center w-[65%] px-5 bg-zinc-800 border-b border-secondary  top-0  right-0 h-screen   bg-primary md:hidden ">
      <div className=" flex flex-col justify-center w-full   gap-8 text-gray-300">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-300"
        >
          <X size={28} />
        </button>

        <NavLinks
          links={navLinks}
          onClick={onClose}
          className="flex flex-col w-full gap-8 pt-24 px-6 text-gray-300 text-lg"
        />
         </div>
        <div className="flex justify-center items-center pb-10 w-full">
            
         {loggedIn ? (
          <button
            onClick={() => {
            onLogout();
            onClose();
          }}
            className="flex justify-center item-center md:hidden w-full text-black py-2 px-5 rounded-xl bg-amber-400 hover:bg-black hover:text-white"
          >
            Log out
          </button>
        ) : (
          <Link
            to="/login"
            className="flex justify-center item-center md:hidden w-full text-gray-300 py-2 px-5 rounded-xl bg-zinc-900 hover:text-amber-400"
          >
            Sign in
          </Link>
        )}
      </div>
    </div>
  );
}
