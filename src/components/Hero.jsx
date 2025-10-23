import { ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToContent = () => {
    const element = document.getElementById("nha-nuoc-xhcn");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[120vh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dk3yac2ie/image/upload/v1760968148/abzi5rzwedvzyro7e09m.jpg')",
        }}
      />

      {/* Overlay mờ */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAgMy4zMTQtMi42ODYgNi02IDZzLTYtMi42ODYtNi02IDIuNjg2LTYgNi02IDYgMi42ODYgNiA2ek0wIDBoMzB2MzBIMHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-25" />

      {/* Content */}
      <div className="container mx-auto px-6 text-center relative z-10 -translate-y-10 md:-translate-y-16">
        {/* Floating national emblem / symbol */}
        <div className="inline-block mb-8 animate-float">
          <div className="relative">
            {/* Vòng sáng dịu hơn */}
            <div className="absolute inset-0 bg-secondary/20 blur-lg rounded-full" />

            {/* Viền và bóng nhẹ hơn */}
            <div className="relative w-28 h-28 rounded-full flex items-center justify-center overflow-hidden border-2 border-secondary/30 shadow-[0_0_25px_hsl(var(--vietnam-gold)/0.3)]">
              <img
                src="https://res.cloudinary.com/dk3yac2ie/image/upload/v1760936334/b4hqe2jsxzp0kbr6awoo.webp"
                alt="Biểu tượng Nhà nước pháp quyền XHCN Việt Nam"
                className="w-28 h-28 object-contain transition-all duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>

        <h1 className="font-cinzel text-4xl md:text-6xl font-black text-white mb-4 drop-shadow-2xl tracking-tight uppercase">
          DÂN CHỦ XÃ HỘI CHỦ NGHĨA
        </h1>

        <h2 className="font-playfair text-2xl md:text-4xl font-bold mb-8">
          <span className="text-gradient-gold drop-shadow-lg">
            Và Nhà Nước Pháp Quyền Ở Việt Nam
          </span>
        </h2>

        <div className="max-w-3xl mx-auto mb-12">
          <p className="font-sans text-lg md:text-xl text-white/95 leading-relaxed mb-4">
            Khám phá sự ra đời, bản chất và vai trò của Nhà nước xã hội chủ
            nghĩa Việt Nam – kiểu nhà nước mới đại diện cho quyền lực của nhân
            dân lao động, hướng tới xã hội công bằng, dân chủ và văn minh.
          </p>
          <p className="font-playfair text-xl md:text-2xl text-secondary font-semibold italic">
            “Của dân – Do dân – Vì dân”
          </p>
        </div>

        <button
          onClick={scrollToContent}
          className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-primary via-accent to-primary hover:shadow-hero text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-500 hover:scale-110 border-2 border-secondary/50 overflow-hidden"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shine" />
          <span className="relative">Tìm hiểu ngay</span>
          <ChevronDown className="w-6 h-6 group-hover:translate-y-1 transition-transform relative" />
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white/60" />
      </div>
    </section>
  );
};

export default Hero;
