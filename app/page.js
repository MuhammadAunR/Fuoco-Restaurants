import DiningEvent from "@/components/DiningEvent";
import HeroSection from "@/components/HeroSection";
import SpecialSection from "@/components/SpecialSection";
import AboutSection from "@/components/AboutSection";


export default function Home() {
  return (

    <>
      <main className="max-w-384 w-full mx-auto">

        <header className="min-h-[80vh] h-fit">
          <HeroSection />
        </header>

        <SpecialSection />
        <DiningEvent />
        <AboutSection />
        
      </main>
    </>
  );
}
