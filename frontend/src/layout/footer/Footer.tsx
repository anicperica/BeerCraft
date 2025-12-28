import { Beer } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="flex flex-col justify-center items-start w-full bg-zinc-800 px-5 py-10 gap-5 md:px-15 ">
      <div className="flex  flex-col justify-center items-start w-full md:flex-row md:justify-between  ">
        <div className="flex flex-col justify-center items-start gap-2   ">
          <div className="flex justify-center items-center gap-2">
            <Beer
              className="text-black bg-amber-400 rounded-2xl  p-2"
              size={50}
            />
            <h1 className="text-white text-xl font-bold">CraftBeer</h1>
          </div>
          <p className="text-gray-300  md:w-[400px]">
            Every beer has a story. Discover hand-crafted brews from legendary
            breweries to bold newcomers. A century of brewing excellence.
          </p>
        </div>
        <div className="flex flex-col justify-center items-start gap-3">
          <h3 className="text-white font-bold text-lg">Quick links</h3>
          <Link className="text-gray-400 hover:text-amber-400" to="/">
            Home
          </Link>
          <Link className="text-gray-400 hover:text-amber-400 " to="/beers">
            Beers
          </Link>
          <Link className="text-gray-400 hover:text-amber-400 " to="/breweris">
            Breweries
          </Link>
        </div>

        <div className="flex flex-col justify-center items-start gap-3">
          <h3 className="text-white font-bold text-lg">Contact</h3>
          <p className="text-gray-400">info@craftBeer.com</p>
          <p className="text-gray-400">+385 1234578</p>
        </div>
      </div>
      <hr className="w-full text-gray-500" />
      <p className="  text-center text-gray-400">
        © 2026 CraftBrew. All rights reserved. Drink responsibly.
      </p>
    </div>
  );
}
