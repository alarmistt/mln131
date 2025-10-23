import { TrendingUp, Building, Shield, GraduationCap, CheckCircle2 } from "lucide-react";

const giaiPhap = [
  {
    icon: TrendingUp,
    title: "Hoàn thiện thể chế kinh tế",
    color: "from-blue-500 to-blue-600",
    solutions: [
      "Phát triển đa dạng hình thức sở hữu",
      "Bảo hộ quyền và lợi ích hợp pháp",
      "Cải cách hành chính, phát triển thị trường",
      "Thực hiện cơ chế giá thị trường",
    ],
  },
  {
    icon: Building,
    title: "Hoàn thiện hệ thống chính trị",
    color: "from-red-500 to-red-600",
    solutions: [
      "Xây dựng Đảng trong sạch, vững mạnh",
      "Thực hiện nghiêm nguyên tắc tập trung dân chủ",
      "Xây dựng NNPQ XHCN vững mạnh",
      "Nâng cao vai trò giám sát, phản biện xã hội",
    ],
  },
  {
    icon: Shield,
    title: "Xây dựng hệ thống giám sát",
    color: "from-green-500 to-green-600",
    solutions: [
      "Công khai hóa, minh bạch hóa thông tin",
      "Dân chủ hóa các chủ trương, chính sách",
      "Cụ thể hóa quy chế lắng nghe ý kiến nhân dân",
      "Tôn trọng quyền giám sát của nhân dân",
    ],
  },
  {
    icon: GraduationCap,
    title: "Nâng cao dân trí",
    color: "from-purple-500 to-purple-600",
    solutions: [
      "Bình đẳng về thông tin cho nhân dân",
      "Nâng cao văn hóa pháp luật toàn xã hội",
      "Khắc phục hạn chế về ý thức dân chủ",
      "Giáo dục ý thức tuân thủ pháp luật",
    ],
  },
];

const nhiemVu = [
  {
    title: "Xây dựng dưới sự lãnh đạo của Đảng",
    description: "Đảm bảo quyền lực thống nhất, phân công rõ ràng giữa lập pháp, hành pháp, tư pháp",
  },
  {
    title: "Cải cách thể chế và phương thức hoạt động",
    description: "Quốc hội là cơ quan quyền lực cao nhất. Chính phủ xây dựng nền hành chính dân chủ, hiện đại",
  },
  {
    title: "Xây dựng đội ngũ cán bộ trong sạch",
    description: "Nâng cao chất lượng về bản lĩnh chính trị, phẩm chất đạo đức, năng lực quản lý",
  },
  {
    title: "Đấu tranh phòng chống tham nhũng",
    description: "Hoàn thiện thể chế pháp luật, xử lý nghiêm minh vi phạm, thực hành tiết kiệm",
  },
];

const PhatHuy = () => {
  return (
    <section id="dan-chu" className="py-20 bg-gradient-to-br from-muted/50 to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Phát huy Dân chủ XHCN
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold text-primary mb-4">
            Xây dựng Nhà nước pháp quyền XHCN
          </h3>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Phương hướng và giải pháp phát triển ở Việt Nam hiện nay
          </p>
        </div>

        {/* Bối cảnh */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-destructive/10 border-l-4 border-destructive rounded-r-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-destructive">
              Những vấn đề đặt ra
            </h3>
            <div className="space-y-3">
              <p className="flex items-start text-foreground">
                <span className="text-destructive font-bold mr-3">✗</span>
                <span>Nhận thức hạn chế về dân chủ ở một bộ phận cán bộ, đảng viên và nhân dân</span>
              </p>
              <p className="flex items-start text-foreground">
                <span className="text-destructive font-bold mr-3">✗</span>
                <span>Tình trạng tách rời, đối lập giữa dân chủ và kỷ cương, pháp luật</span>
              </p>
              <p className="flex items-start text-foreground">
                <span className="text-destructive font-bold mr-3">✗</span>
                <span>Quyền làm chủ của nhân dân còn bị vi phạm ở nhiều nơi, nhiều lĩnh vực</span>
              </p>
              <p className="flex items-start text-foreground">
                <span className="text-destructive font-bold mr-3">✗</span>
                <span>Việc thực hiện dân chủ còn hạn chế, mang tính hình thức</span>
              </p>
            </div>
          </div>
        </div>

        {/* 4 Giải pháp chính */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-primary">
            4 Nhóm giải pháp chủ yếu
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {giaiPhap.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className={`h-3 bg-gradient-to-r ${item.color}`} />
                <div className="p-8">
                  <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold mb-6 text-foreground">
                    {item.title}
                  </h4>
                  <ul className="space-y-3">
                    {item.solutions.map((solution, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                        <span className="text-muted-foreground">{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Nhiệm vụ xây dựng NNPQ */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-4 text-primary">
            Nhiệm vụ xây dựng Nhà nước pháp quyền
          </h3>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Tiếp tục hoàn thiện Nhà nước pháp quyền XHCN Việt Nam
          </p>
          
          <div className="max-w-5xl mx-auto space-y-6">
            {nhiemVu.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-white to-muted/30 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-primary"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-xl">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold mb-3 text-primary">
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-20 text-center">
          <div className="inline-block bg-gradient-to-r from-primary to-accent rounded-3xl p-10 shadow-2xl">
            <p className="text-2xl md:text-3xl font-bold text-white mb-4">
              "Xây dựng Nhà nước pháp quyền XHCN"
            </p>
            <p className="text-xl text-white/90">
              Của dân, do dân, vì dân - Việt Nam vững mạnh
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhatHuy;
