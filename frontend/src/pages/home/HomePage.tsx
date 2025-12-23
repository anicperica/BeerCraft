import HomePicture from "../../assets/homeImage.jpg";
import HeroSection from "../../components/ui/HeroSection";
export default function HomePage() {
  return (
    <section className="relative flex flex-col jusitify-center items-center h-screen bg-cover bg-center ">
      <div
        className="absolute  inset-0 bg-cover bg-center "
        style={{ backgroundImage: `url(${HomePicture})` }}        
      >
       <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/50 via-zinc-950/30 to-zinc-950" />
        <HeroSection/>
 

      </div>
    </section>
  );
}
