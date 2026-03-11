import TopBanner from "@/components/TopBanner";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ComparisonSection from "@/components/ComparisonSection";
import SizeSection from "@/components/SizeSection";
import Configurator from "@/components/Configurator";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <TopBanner />
      <Header />
      <Hero />
      <ComparisonSection />
      <SizeSection />
      <Configurator />
      <Footer />
    </div>
  );
}
