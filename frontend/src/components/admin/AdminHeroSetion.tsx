import { ShieldCheckIcon } from "lucide-react";

export default function AdminHeroSection() {
  return (
    <div className="flex flex-col  gap-5 px-5 mb-20" >
      <div className="flex itmes-center gap-2 text-amber-400">
        <ShieldCheckIcon />
        <p>Admin panel</p>
      </div>
      <h1 className=" text-white font-bold text-3xl md:text-4xl">
        Management dashboard
      </h1>
    </div>
  );
}
