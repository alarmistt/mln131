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
      <div className="fixed bottom-4 left-4 select-none z-50">
        <div className="relative group">
          {
          <div className="text-xs md:text-sm text-gray-700 bg-white/50 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm cursor-pointer">
            Nhóm 5 – GD1708
          </div>

          }
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 bg-white/50 backdrop-blur-sm text-gray-700 text-xs rounded-lg shadow-sm p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
            <ul className="space-y-1 text-center">
              <li>Hà Huy Tài</li>
              <li>Hà Minh Đức</li>
              <li>Châu Lệ Xuân</li>
              <li>Phạm Ngọc Phi Bảo</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
