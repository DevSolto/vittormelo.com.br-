import { About } from "@/sections/about";
import { Depositions } from "@/sections/depositions";
import { Dictionary } from "@/sections/dictionary";
import { Gallery } from "@/sections/gallery";
import { Hero } from "@/sections/hero";
import { Jingles } from "@/sections/jingles";
import { SocialMedia } from "@/sections/socialMedia";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="bg-red-300 mt-5 lg:mt-0">
      <Jingles />
      <About/>
      </div>
      <Gallery/>
      <Depositions/>
      <Dictionary/>
      <SocialMedia />
    </>
  );
}
