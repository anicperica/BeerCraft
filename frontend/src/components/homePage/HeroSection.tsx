export default function HeroSection() {
  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="flex flex-col justify-center items-center gap-8 z-0">
        <h1 className=" text-center text-5xl  lg:text-8xl font-bold px-5 md:px-20">
          <span className="text-white">A century of </span>
          <span className="text-amber-400">Brewing Excelence</span>
        </h1>
        <h2 className="text-center sm:text-2xl text-gray-300  px-5 md:px-15 ">
          Every beer has a story. Discover hand-crafted brews from legendary
          breweries to bold newcomers.
        </h2>
        <div className="flex md:flex-row flex-col justify-center items-center gap-5 w-full px-10 pt-5  " >
        <button className="w-full md:w-max max-w-[450px] text-center text-black bg-amber-400 px-4 py-2 md:px-10 md:py-3 md:text-xl rounded-xl font-bold hover:bg-black hover:text-white">
            Explore our Beers
        </button>
        <button className="w-4/5 mx-auto md:mx-0 md:w-max max-w-[400px]  text-center text-black bg-gray-300 px-4 py-2  md:px-10 md:py-3 md:text-xl rounded-xl font-bold hover:bg-black hover:text-amber-400">
            Meet the Breweries
        </button>
        </div>
      </div>
    </div>
  );
}
