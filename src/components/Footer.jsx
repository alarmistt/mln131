const Footer = () => {
  return (
    <footer className="relative overflow-hidden text-white">
      {/* Ảnh nền giống Hero */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dk3yac2ie/image/upload/v1760968148/abzi5rzwedvzyro7e09m.jpg')",
        }}
      />

      {/* Overlay mờ giống Hero */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Hiệu ứng ánh sáng dịu */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(255,215,0,0.1)_0%,transparent_70%)] blur-3xl pointer-events-none" />

      {/* Nội dung chính */}
      <div className="relative z-10 container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-gradient-gold">
              Về dự án
            </h3>
            <p className="text-white/85 leading-relaxed">
              Bài thuyết trình môn <strong>Chủ nghĩa xã hội khoa học</strong>,
              chủ đề{' '}
              <em>“Dân chủ XHCN và Nhà nước pháp quyền XHCN ở Việt Nam”</em>.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-gradient-gold">
              Nội dung chính
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#nha-nuoc-xhcn"
                  className="text-white/85 hover:text-secondary transition-colors"
                >
                  Dân chủ XHCNVN
                </a>
              </li>
              <li>
                <a
                  href="#nha-nuoc-phap-quyen"
                  className="text-white/85 hover:text-secondary transition-colors"
                >
                  Nhà nước pháp quyền
                </a>
              </li>
              <li>
                <a
                  href="#dan-chu"
                  className="text-white/85 hover:text-secondary transition-colors"
                >
                  Phát huy dân chủ
                </a>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-gradient-gold">
              Thông tin
            </h3>
            <ul className="text-white/85 space-y-1">
              <li>Môn học: Chủ nghĩa xã hội khoa học</li>
              <li>Trường: Đại học FPT</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/20 pt-6 text-center text-white/80 text-sm">
          <p>
            © 2025 – Dự án thuyết trình CNXHKH.{' '}
            <span className="hidden sm:inline">Tất cả quyền được bảo lưu.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
