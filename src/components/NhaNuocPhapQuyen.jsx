import { Scale, Users2, FileCheck, Eye, Award, Network } from "lucide-react";
import { Card } from "./ui/card";

const dacDiem = [
  {
    icon: Users2,
    number: "01",
    title: "Của dân, do dân, vì dân",
    description: "Nhà nước do nhân dân lao động làm chủ",
  },
  {
    icon: Scale,
    number: "02",
    title: "Dựa trên Hiến pháp và pháp luật",
    description: "Pháp luật ở vị trí tối thượng điều chỉnh quan hệ xã hội",
  },
  {
    icon: Network,
    number: "03",
    title: "Quyền lực thống nhất",
    description: "Có phân công, phối hợp và kiểm soát giữa các cơ quan",
  },
  {
    icon: FileCheck,
    number: "04",
    title: "Do Đảng lãnh đạo",
    description: "Nhà nước chịu sự giám sát của nhân dân",
  },
  {
    icon: Award,
    number: "05",
    title: "Tôn trọng quyền con người",
    description: "Con người là trung tâm của sự phát triển",
  },
  {
    icon: Eye,
    number: "06",
    title: "Tập trung dân chủ",
    description: "Bảo đảm chỉ đạo thống nhất của Trung ương",
  },
];

const NhaNuocPhapQuyen = () => {
  return (
    <section
      id="nha-nuoc-phap-quyen"
      className="py-20 bg-gradient-to-br from-background to-muted/30"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Nhà nước pháp quyền XHCN
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Việt Nam - Xây dựng nhà nước pháp quyền xã hội chủ nghĩa của dân, do
            dân, vì dân
          </p>
        </div>

        {/* Nguồn gốc */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              Nguồn gốc tư tưởng
            </h3>
            <div className="space-y-4 text-lg">
              <p className="flex items-start">
                <span className="text-accent font-bold mr-3 text-2xl">•</span>
                <span>
                  Cơ sở tư tưởng: Tư tưởng dân chủ và pháp quyền trong lịch sử,
                  tiếp thu có chọn lọc các giá trị của nhà nước pháp quyền tư
                  sản
                </span>
              </p>
              <p className="flex items-start">
                <span className="text-accent font-bold mr-3 text-2xl">•</span>
                <span>
                  Quan điểm của Đảng: Đề cao vai trò tối thượng của Hiến pháp và
                  pháp luật
                </span>
              </p>
              <p className="flex items-start">
                <span className="text-accent font-bold mr-3 text-2xl">•</span>
                <span>
                  Tổ chức bộ máy: Quyền lực thống nhất, nhưng có phân công, phân
                  cấp rõ ràng
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* 6 Đặc điểm */}
        <div className="mb-20">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary">
            6 Đặc điểm cơ bản
          </h3>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            của Nhà nước pháp quyền XHCN Việt Nam
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dacDiem.map((item, index) => (
              <Card
                key={index}
                className="relative overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative p-8">
                  {/* Number badge */}
                  <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <span className="text-white font-bold">{item.number}</span>
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h4 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Ba trụ cột quyền lực */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-primary">
            Ba nhánh quyền lực
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                <FileCheck className="w-12 h-12 text-white" />
              </div>
              <h4 className="text-2xl font-bold mb-4 text-primary">Lập pháp</h4>
              <p className="text-lg font-semibold mb-3">Quốc hội</p>
              <p className="text-muted-foreground">
                Cơ quan quyền lực nhà nước cao nhất, duy nhất có quyền lập hiến
                và lập pháp
              </p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                <Users2 className="w-12 h-12 text-white" />
              </div>
              <h4 className="text-2xl font-bold mb-4 text-primary">
                Hành pháp
              </h4>
              <p className="text-lg font-semibold mb-3">Chính phủ</p>
              <p className="text-muted-foreground">
                Cơ quan hành chính nhà nước cao nhất, thực thi pháp luật và quản
                lý đất nước
              </p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                <Scale className="w-12 h-12 text-white" />
              </div>
              <h4 className="text-2xl font-bold mb-4 text-primary">Tư pháp</h4>
              <p className="text-lg font-semibold mb-3">
                Tòa án & Viện kiểm sát
              </p>
              <p className="text-muted-foreground">
                Bảo vệ công lý, xét xử độc lập, giám sát tuân thủ pháp luật
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NhaNuocPhapQuyen;
