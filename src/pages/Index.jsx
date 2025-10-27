import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import NhaNouc from '@/components/NhaNouc';
import NhaNuocPhapQuyen from '@/components/NhaNuocPhapQuyen';
import PhatHuy from '@/components/PhatHuy';
import Footer from '@/components/Footer';
import ParallaxBackground from '@/components/ParallaxBackground';
import DanChuTypes from '@/components/DanChuTypes';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <ParallaxBackground>
        <NhaNouc />
        <NhaNuocPhapQuyen />
        <PhatHuy />
        <DanChuTypes />
      </ParallaxBackground>
      <Footer />
    </div>
  );
};

export default Index;
