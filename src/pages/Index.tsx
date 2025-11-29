import { Hero } from "@/components/home/Hero";
import { Features } from "@/components/home/Features";
import { CTA } from "@/components/home/CTA";
import { HomeHeader } from "@/components/home/HomeHeader";
import { Footer } from "@/components/home/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HomeHeader />
      <Hero />
      <Features />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;