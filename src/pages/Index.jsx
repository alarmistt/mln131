import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import NhaNouc from "@/components/NhaNouc";
import NhaNuocPhapQuyen from "@/components/NhaNuocPhapQuyen";
import PhatHuy from "@/components/PhatHuy";
import Footer from "@/components/Footer";
import ParallaxBackground from "@/components/ParallaxBackground";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <ParallaxBackground>
        <NhaNouc />
        <NhaNuocPhapQuyen />
        <PhatHuy />
      </ParallaxBackground>
      <Footer />
    </div>
  );
};

export default Index;
