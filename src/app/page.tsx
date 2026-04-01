import About from "@/components/sections/about";
import Catalog from "@/components/sections/catalog";
import FAQ from "@/components/sections/faq";
import HeroSection from "@/components/sections/heroSection";
import MediaSocial from "@/components/sections/mediaSocial";
import Testimonial from "@/components/sections/testimoni";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Catalog />
      <About />
      <Testimonial />
      <MediaSocial />
      <FAQ />
    </>
  );
}
