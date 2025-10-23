import { Shield, Users, Building2, Heart } from "lucide-react";
import { Card } from "./ui/card";

const features = [
  {
    icon: Shield,
    title: "Bản chất nhân dân",
    description: "Đại diện cho lợi ích của nhân dân lao động, không phục vụ thiểu số",
  },
  {
    icon: Users,
    title: "Tính dân tộc sâu sắc",
    description: "Gắn bó mật thiết với dân tộc, bảo vệ độc lập và chủ quyền",
  },
  {
    icon: Building2,
    title: "Sở hữu xã hội",
    description: "Cơ sở kinh tế là chế độ sở hữu xã hội về tư liệu sản xuất",
  },
  {
    icon: Heart,
    title: "Văn hóa tiến bộ",
    description: "Xây dựng văn hóa dựa trên giá trị tiến bộ của nhân loại",
  },
];

const chucNang = [
  {
    title: "Chức năng đối nội",
    points: [
      "Quản lý và phát triển kinh tế",
      "Phát triển văn hóa - xã hội",
      "Bảo đảm an ninh trật tự trong nước",
    ],
  },
  {
    title: "Chức năng đối ngoại",
    points: [
      "Thiết lập quan hệ hợp tác quốc tế",
      "Bảo vệ độc lập, chủ quyền quốc gia",
      "Mở rộng quan hệ với các nước",
    ],
  },
  {
    title: "Chức năng trấn áp",
    points: [
      "Trấn áp giai cấp bóc lột",
      "Bảo vệ thành quả cách mạng",
      "Giữ vững ổn định chính trị",
    ],
  },
  {
    title: "Chức năng xây dựng",
    points: [
      "Tổ chức, quản lý xã hội mới",
      "Phát triển toàn diện đất nước",
      "Nâng cao đời sống nhân dân",
    ],
  },
];

const NhaNouc = () => {
  return (
    <section id="nha-nuoc-xhcn" className="py-20 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Nhà nước Xã hội chủ nghĩa
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nhà nước kiểu mới, ra đời từ đấu tranh của giai cấp công nhân và nhân dân lao động
          </p>
        </div>

        {/* Bản chất */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-primary">
            Bản chất của Nhà nước XHCN
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 glass-effect"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-lg font-semibold mb-3 text-center">{feature.title}</h4>
                <p className="text-muted-foreground text-center text-sm">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Chức năng */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12 text-primary">
            Chức năng của Nhà nước XHCN
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {chucNang.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <h4 className="text-2xl font-bold mb-6 text-primary border-l-4 border-accent pl-4">
                  {item.title}
                </h4>
                <ul className="space-y-3">
                  {item.points.map((point, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 mr-3 flex-shrink-0" />
                      <span className="text-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Mối quan hệ */}
        <div className="mt-20 bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-10 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-6 text-primary">
            Mối quan hệ giữa Dân chủ và Nhà nước XHCN
          </h3>
          <div className="space-y-4 text-lg">
            <p className="text-foreground leading-relaxed">
              <span className="font-semibold text-primary">Dân chủ XHCN</span> là bản chất, là nền tảng của nhà nước xã hội chủ nghĩa. Nhân dân là chủ thể của quyền lực nhà nước.
            </p>
            <p className="text-foreground leading-relaxed">
              <span className="font-semibold text-primary">Nhà nước XHCN</span> là công cụ để thực hiện dân chủ, thể chế hóa ý chí và nguyện vọng của nhân dân thành pháp luật.
            </p>
            <div className="bg-white rounded-xl p-6 mt-6">
              <p className="text-center font-semibold text-xl text-primary">
                "Của dân, do dân và vì dân"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NhaNouc;
