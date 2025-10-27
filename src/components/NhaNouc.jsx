import { History, Star, BookOpen, Users2, GraduationCap, ScrollText, CalendarDays, ArrowRight } from "lucide-react";
import React from "react";
import { Card } from "./ui/card";
import { Separator } from "./ui/separator";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";

const timelineEvents = [
  {
  year: "1976",
  title: "Giai đoạn đầu xây dựng chế độ dân chủ xã hội chủ nghĩa",
  description:
    "Sau khi thống nhất đất nước và đổi tên nước thành Cộng hòa XHCN Việt Nam, Đảng bắt đầu nêu quan điểm về chế độ làm chủ tập thể, nhưng khái niệm dân chủ XHCN chưa được xác định rõ.",
  content: [
    "Sau thắng lợi của Cách mạng Tháng Tám 1945, chế độ dân chủ nhân dân được xác lập, mở đầu cho quá trình xây dựng nền dân chủ ở Việt Nam.",
    "Năm 1976, đất nước thống nhất và Quốc hội khóa VI quyết định đổi tên nước thành Cộng hòa xã hội chủ nghĩa Việt Nam.",
    "Trong các Văn kiện Đảng giai đoạn này, cụm từ 'dân chủ xã hội chủ nghĩa' hầu như chưa được sử dụng.",
    "Từ Đại hội IV (1976), Đảng nêu chủ trương 'xây dựng chế độ làm chủ tập thể xã hội chủ nghĩa' gắn với 'nắm vững chuyên chính vô sản', nhưng chưa coi dân chủ XHCN là mục tiêu phát triển.",
    "Bản chất và mối quan hệ giữa dân chủ XHCN với Nhà nước pháp quyền XHCN chưa được xác định rõ; việc thực hiện dân chủ phù hợp với đặc điểm kinh tế, văn hóa, xã hội Việt Nam cũng chưa được đặt ra cụ thể."
  ],
  image: "https://sketchnote-datn-fall25.s3.ap-southeast-1.amazonaws.com/a039e7866f47217192a7c81c699e9bbe-15913469552325952408.webp",
  imageCaption: "Lễ thống nhất đất nước và đổi tên nước năm 1976",
}
,
  {
  year: "1986",
  title: "Đại hội VI – Đổi mới toàn diện đất nước",
  description: "Đề ra đường lối đổi mới toàn diện, khẳng định tư tưởng 'lấy dân làm gốc' và phát huy dân chủ xã hội chủ nghĩa.",
  content: [
    "Đại hội VI của Đảng (năm 1986) đã đề ra đường lối đổi mới toàn diện đất nước, nhấn mạnh việc phát huy dân chủ để tạo ra động lực mạnh mẽ cho phát triển kinh tế – xã hội.",
    "Đại hội khẳng định: 'Trong toàn bộ hoạt động của mình, Đảng phải quán triệt tư tưởng lấy dân làm gốc, xây dựng và phát huy quyền làm chủ của nhân dân lao động'.",
    "Bài học 'Cách mạng là sự nghiệp của quần chúng' được nhấn mạnh: ở đâu nhân dân có ý thức làm chủ và được làm chủ thật sự, ở đó phong trào cách mạng phát triển mạnh mẽ.",
    "Kế thừa tư tưởng 'làm chủ tập thể' từ các Đại hội trước, Đại hội VI khẳng định: 'Làm chủ tập thể xã hội chủ nghĩa là bản chất của chế độ dân chủ xã hội chủ nghĩa, cần được thể hiện trong mọi lĩnh vực của đời sống'.",
    "Đại hội xác định rõ cơ chế trong quản lý xã hội: Đảng lãnh đạo – Nhân dân làm chủ – Nhà nước quản lý."
  ],
  image: "https://sketchnote-datn-fall25.s3.ap-southeast-1.amazonaws.com/dhvi.jpg",
  imageCaption: "Đại hội đại biểu toàn quốc lần thứ VI của Đảng năm 1986",
}
,
  {
  year: "1991",
  title: "Đại hội VII – Cương lĩnh xây dựng đất nước trong thời kỳ quá độ lên CNXH",
  description:
    "Thông qua Cương lĩnh 1991, khẳng định 'sự nghiệp cách mạng là của nhân dân, do nhân dân và vì nhân dân'.",
  content: [
    "Đại hội VII của Đảng (năm 1991) đã thông qua Cương lĩnh xây dựng đất nước trong thời kỳ quá độ lên chủ nghĩa xã hội (Cương lĩnh năm 1991).",
    "Cương lĩnh rút ra bài học lớn: 'Sự nghiệp cách mạng là của nhân dân, do nhân dân và vì nhân dân'.",
    "Cương lĩnh đã phác họa 6 đặc trưng cơ bản của xã hội xã hội chủ nghĩa mà nhân dân ta xây dựng, trong đó đặc trưng đầu tiên là: 'Do nhân dân lao động làm chủ'.",
    "Đồng thời, Cương lĩnh khẳng định: 'Toàn bộ tổ chức và hoạt động của hệ thống chính trị nước ta trong giai đoạn mới là nhằm xây dựng và từng bước hoàn thiện nền dân chủ xã hội chủ nghĩa, bảo đảm quyền lực thuộc về nhân dân'.",
    "Dân chủ gắn liền với công bằng xã hội, phải được thực hiện trong thực tế cuộc sống trên tất cả các lĩnh vực chính trị, kinh tế, văn hóa, xã hội thông qua hoạt động của Nhà nước do nhân dân cử ra và bằng các hình thức dân chủ trực tiếp.",
    "Dân chủ đi đôi với kỷ luật, kỷ cương, phải được thể chế hóa bằng pháp luật và được pháp luật bảo đảm."
  ],
  image: "https://sketchnote-datn-fall25.s3.ap-southeast-1.amazonaws.com/lan7.jpg",
  imageCaption: "Đại hội đại biểu toàn quốc lần thứ VII của Đảng năm 1991",
}
,
  {
  year: "2001",
  title: "Đại hội IX - Bài học đổi mới",
  description: "Khẳng định vai trò của nhân dân và bổ sung 'dân chủ' vào mục tiêu phát triển đất nước",
  content: [
    "Tổng kết 15 năm đổi mới, Đại hội IX của Đảng (năm 2001) đã rút ra bốn bài học chủ yếu, trong đó có bài học: 'Đổi mới phải dựa vào nhân dân, vì lợi ích của nhân dân, phù hợp với thực tiễn, luôn luôn sáng tạo'.",
    "Một trong những điểm mới của Đại hội là bổ sung nội dung 'dân chủ' vào mục tiêu chung của cách mạng Việt Nam: độc lập dân tộc gắn liền với chủ nghĩa xã hội, dân giàu, nước mạnh, xã hội công bằng, dân chủ, văn minh.",
    "Đây là một bước tiến quan trọng trong nhận thức và thực tiễn về dân chủ, khẳng định vai trò trung tâm của nhân dân trong công cuộc đổi mới và phát triển đất nước."
  ],
  image: "https://sketchnote-datn-fall25.s3.ap-southeast-1.amazonaws.com/lan9.jpg",
  imageCaption: "Đại hội đại biểu toàn quốc lần thứ IX của Đảng năm 2001"
},
  {
  year: "2006",
  title: "Đại hội X - Hoàn thiện nền dân chủ xã hội chủ nghĩa",
  description: "Khẳng định dân chủ xã hội chủ nghĩa vừa là mục tiêu vừa là động lực của công cuộc đổi mới",
  content: [
    "Trên cơ sở những quan điểm đã được xác lập, Đại hội X của Đảng (năm 2006) đã có những phát triển mới về dân chủ.",
    "Đại hội chỉ rõ: 'Xây dựng và từng bước hoàn thiện nền dân chủ xã hội chủ nghĩa, bảo đảm quyền lực thuộc về nhân dân'.",
    "Đại hội khẳng định: 'Dân chủ xã hội chủ nghĩa vừa là mục tiêu vừa là động lực của công cuộc đổi mới, xây dựng và bảo vệ Tổ quốc', thể hiện mối quan hệ gắn bó giữa Đảng, Nhà nước và nhân dân."
  ],
  image: "https://sketchnote-datn-fall25.s3.ap-southeast-1.amazonaws.com/10.jpg",
  imageCaption: "Đại hội đại biểu toàn quốc lần thứ X của Đảng năm 2006"
}
,
 {
  year: "2011",
  title: "Cương lĩnh (bổ sung, phát triển năm 2011)",
  description: "Khẳng định dân chủ xã hội chủ nghĩa là bản chất của chế độ, vừa là mục tiêu vừa là động lực phát triển đất nước",
  content: [
    "Trong Cương lĩnh xây dựng đất nước trong thời kỳ quá độ lên chủ nghĩa xã hội (bổ sung, phát triển năm 2011), nhận thức về dân chủ ở Việt Nam đã có bước tiến dài.",
    "Đảng ta khẳng định: 'Dân chủ xã hội chủ nghĩa là bản chất của chế độ ta, vừa là mục tiêu, vừa là động lực của sự phát triển đất nước'.",
    "Xây dựng và từng bước hoàn thiện nền dân chủ xã hội chủ nghĩa, bảo đảm dân chủ được thực hiện trong thực tế cuộc sống ở mỗi cấp, trên tất cả các lĩnh vực.",
    "Dân chủ gắn liền với kỷ luật, kỷ cương và phải được thể chế hóa bằng pháp luật, được pháp luật bảo đảm."
  ],
  image: "https://sketchnote-datn-fall25.s3.ap-southeast-1.amazonaws.com/11.jpg",
  imageCaption: "Đại hội đại biểu toàn quốc lần thứ XI của Đảng năm 2011"
}
,
  {
  year: "2016",
  title: "Đại hội XII - Phát huy dân chủ xã hội chủ nghĩa",
  description: "Bổ sung dân chủ XHCN vào chủ đề Đại hội và dành mục riêng về phát huy dân chủ, quyền làm chủ của nhân dân",
  content: [
    "Tại Đại hội XII của Đảng, thành tố dân chủ xã hội chủ nghĩa đã được đưa vào tên của chủ đề Đại hội, thể hiện bước tiến mới trong nhận thức về dân chủ.",
    "Văn kiện Đại hội dành một mục riêng với tiêu đề: 'Phát huy dân chủ xã hội chủ nghĩa, bảo đảm thực hiện quyền làm chủ của nhân dân'.",
    "Đại hội nhấn mạnh: Hoàn thiện và phát huy dân chủ phải gắn liền với phát huy quyền làm chủ của nhân dân, vì nhân dân là chủ thể của mọi quyền lực và cũng là người trực tiếp thực hành dân chủ.",
    "Việc bổ sung nội dung này thể hiện nhận thức sâu sắc của Đảng về bản chất và vai trò to lớn của dân chủ xã hội chủ nghĩa: không phát huy dân chủ, không phát huy quyền làm chủ của nhân dân thì không thể có chủ nghĩa xã hội."
  ],
  image: "https://sketchnote-datn-fall25.s3.ap-southeast-1.amazonaws.com/123.jpg",
  imageCaption: "Đại hội đại biểu toàn quốc lần thứ XII của Đảng năm 2016"
}

];

const principles = [
  {
    icon: Users2,
    title: "Quyền lực thuộc về nhân dân",
    description: "Nhân dân là chủ thể của quyền lực nhà nước, thực hiện quyền làm chủ thông qua các hình thức dân chủ"
  },
  {
    icon: Star,
    title: "Bản chất của chế độ",
    description: "Dân chủ XHCN là bản chất của chế độ ta, vừa là mục tiêu, vừa là động lực của sự phát triển đất nước"
  },
  {
    icon: ScrollText,
    title: "Thể chế hóa bằng pháp luật",
    description: "Dân chủ gắn liền với kỷ luật, kỷ cương và được thể chế hóa bằng pháp luật"
  },
  {
    icon: GraduationCap,
    title: "Phát triển toàn diện",
    description: "Thực hiện dân chủ trong mọi lĩnh vực của đời sống xã hội: chính trị, kinh tế, văn hóa, xã hội"
  }
];

const quotes = [
  {
    content: "Nước ta là nước dân chủ, bao nhiêu lợi ích đều vì dân, bao nhiêu quyền hạn đều của dân",
    author: "Hồ Chí Minh"
  },
  {
    content: "Dân chủ xã hội chủ nghĩa vừa là mục tiêu vừa là động lực của công cuộc đổi mới",
    author: "Văn kiện Đại hội X"
  }
];

const NhaNouc = () => {
  const [openDialogIndex, setOpenDialogIndex] = React.useState(null);

  const handleCloseAll = () => {
    setOpenDialogIndex(null);
  };

  return (
    <section id="nha-nuoc-xhcn" className="py-20 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-4">
        {/* Main Title */}
        <div className="text-center mb-12 relative">
          {/* Background decoration */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/10 rounded-full blur-2xl animate-pulse"></div>
          </div>
          
          {/* Title content */}
          <div className="relative">
            <span className="inline-block text-sm font-medium text-primary mb-3 px-4 py-1 bg-primary/10 rounded-full">
              Nền tảng phát triển đất nước
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary/80 via-primary to-primary/80 text-transparent bg-clip-text animate-gradient">
              Dân chủ xã hội chủ nghĩa<br/>Việt Nam
            </h1>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-[2px] w-12 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
              <Star className="w-5 h-5 text-primary animate-spin-slow" />
              <div className="h-[2px] w-12 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Nền dân chủ xã hội chủ nghĩa là bản chất của chế độ ta,
              <span className="text-primary font-medium"> vừa là mục tiêu, vừa là động lực </span>của sự phát triển đất nước
            </p>
          </div>
        </div>

        {/* Development Section */}
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-primary flex items-center justify-center gap-3">
            <History className="w-8 h-8" />
            Sự ra đời, phát triển của nền dân chủ XHCN Việt Nam
          </h3>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hành trình phát triển và hoàn thiện nền dân chủ xã hội chủ nghĩa ở Việt Nam
          </p>
        </div>

        {/* Timeline Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-primary flex items-center justify-center gap-3">
            <History className="w-8 h-8" />
            Lịch sử phát triển
          </h3>
          <div className="max-w-5xl mx-auto relative">
            {/* Center line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/50" />
            
            {/* Timeline events */}
            {timelineEvents.map((event, index) => (
              <Dialog 
                key={index} 
                open={openDialogIndex === index}
                onOpenChange={(open) => {
                  if (!open) handleCloseAll();
                  else setOpenDialogIndex(index);
                }}
              >
                <DialogTrigger asChild>
                  <div className={`relative flex items-center mb-12 group cursor-pointer ${
                    index % 2 === 0 ? 'justify-end' : ''
                  }`} data-year={event.year}>
                    {/* Content box */}
                    <div className={`w-[45%] rounded-lg border bg-card text-card-foreground shadow-sm p-6 hover:shadow-xl transition-all duration-300 ${
                      index % 2 === 0 ? 'mr-8' : 'ml-8'
                    }`}>
                      {/* Thumbnail image */}
                      <div className="aspect-video mb-4 rounded-lg overflow-hidden bg-muted">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      {/* Content */}
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <CalendarDays className="w-5 h-5 text-primary" />
                          <span className="text-xl font-bold text-primary">{event.year}</span>
                        </div>
                        <h4 className="text-lg font-semibold group-hover:text-primary transition-colors">
                          {event.title}
                        </h4>
                        <p className="text-muted-foreground text-sm">{event.description}</p>
                        <Button variant="link" className="p-0 text-primary hover:text-primary/80">
                          Xem chi tiết
                          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </div>

                    {/* Center dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full shadow-lg border-2 border-background">
                      <div className="absolute w-full h-full rounded-full bg-primary/20 animate-ping" />
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="flex items-center gap-3 text-3xl">
                      <span className="text-primary font-bold">{event.year}</span>
                      <Separator orientation="vertical" className="h-8" />
                      <span>{event.title}</span>
                    </DialogTitle>
                  </DialogHeader>
                    <div className="mt-8">
                    {/* Hero Image Section */}
                    <div className="relative h-[400px] rounded-2xl overflow-hidden mb-8">
                      <img
                        src={event.image}
                        alt={event.imageCaption}
                        className="w-full h-full object-cover object-center"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <p className="text-lg font-medium">{event.imageCaption}</p>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="bg-card rounded-xl border shadow-lg p-8">
                      <div className="max-w-3xl mx-auto">
                        {/* Title and Year Section */}
                        <div className="flex items-center gap-4 mb-6 pb-6 border-b">
                          <div className="flex items-center gap-2 text-primary">
                            <CalendarDays className="w-6 h-6" />
                            <span className="text-2xl font-bold">{event.year}</span>
                          </div>
                          <div className="h-6 w-px bg-muted-foreground/30" />
                          <h3 className="text-xl font-semibold text-foreground">{event.title}</h3>
                        </div>
                        
                        {/* Description */}
                        <div className="mb-8 text-lg text-muted-foreground/90 italic border-l-4 border-primary/20 pl-4">
                          {event.description}
                        </div>
                        
                        {/* Main Content */}
                        <div className="space-y-6">
                          {event.content.map((paragraph, idx) => (
                            <div key={idx} className="relative pl-6">
                              <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-primary/40"></div>
                              <p className="text-muted-foreground leading-relaxed">
                                {paragraph}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>                    {/* Navigation Section */}
                    <div className="flex justify-between items-center pt-4">
                      {index > 0 && (
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              variant="outline"
                              className="flex items-center gap-2"
                            >
                              <ArrowRight className="w-4 h-4 rotate-180" />
                              {timelineEvents[index - 1].year}
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-4xl h-[90vh] overflow-y-auto">
                            <DialogHeader>
                              <DialogTitle className="flex items-center gap-3 text-3xl">
                                <span className="text-primary font-bold">{timelineEvents[index - 1].year}</span>
                                <Separator orientation="vertical" className="h-8" />
                                <span>{timelineEvents[index - 1].title}</span>
                              </DialogTitle>
                            </DialogHeader>
                            {/* Nội dung giống như dialog chính */}
                            <div className="mt-8">
                              <div className="relative h-[400px] rounded-2xl overflow-hidden mb-8">
                                <img
                                  src={timelineEvents[index - 1].image}
                                  alt={timelineEvents[index - 1].imageCaption}
                                  className="w-full h-full object-cover object-center"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                  <p className="text-lg font-medium">{timelineEvents[index - 1].imageCaption}</p>
                                </div>
                              </div>
                              <div className="bg-card rounded-xl border shadow-lg p-8">
                                <div className="max-w-3xl mx-auto">
                                  {/* Title and Year Section */}
                                  <div className="flex items-center gap-4 mb-6 pb-6 border-b">
                                    <div className="flex items-center gap-2 text-primary">
                                      <CalendarDays className="w-6 h-6" />
                                      <span className="text-2xl font-bold">{timelineEvents[index - 1].year}</span>
                                    </div>
                                    <div className="h-6 w-px bg-muted-foreground/30" />
                                    <h3 className="text-xl font-semibold text-foreground">{timelineEvents[index - 1].title}</h3>
                                  </div>
                                  
                                  {/* Description */}
                                  <div className="mb-8 text-lg text-muted-foreground/90 italic border-l-4 border-primary/20 pl-4">
                                    {timelineEvents[index - 1].description}
                                  </div>
                                  
                                  {/* Main Content */}
                                  <div className="space-y-6">
                                    {timelineEvents[index - 1].content.map((paragraph, idx) => (
                                      <div key={idx} className="relative pl-6">
                                        <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-primary/40"></div>
                                        <p className="text-muted-foreground leading-relaxed">
                                          {paragraph}
                                        </p>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                              {/* Navigation Section cho popup trước */}
                              <div className="flex justify-between items-center pt-4">
                                {index - 1 > 0 && (
                                  <Button variant="outline" className="flex items-center gap-2"
                                    onClick={() => {
                                      handleCloseAll();
                                      setOpenDialogIndex(index - 2);
                                    }}
                                  >
                                    <ArrowRight className="w-4 h-4 rotate-180" />
                                    {timelineEvents[index - 2].year}
                                  </Button>
                                )}
                                {index < timelineEvents.length - 1 && (
                                  <Button variant="outline" className="flex items-center gap-2 ml-auto"
                                    onClick={() => {
                                      handleCloseAll();
                                      setOpenDialogIndex(index);
                                    }}
                                  >
                                    {timelineEvents[index].year}
                                    <ArrowRight className="w-4 h-4" />
                                  </Button>
                                )}
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                      )}
                      {index < timelineEvents.length - 1 && (
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              variant="outline"
                              className="flex items-center gap-2 ml-auto"
                            >
                              {timelineEvents[index + 1].year}
                              <ArrowRight className="w-4 h-4" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-4xl h-[90vh] overflow-y-auto">
                            <DialogHeader>
                              <DialogTitle className="flex items-center gap-3 text-3xl">
                                <span className="text-primary font-bold">{timelineEvents[index + 1].year}</span>
                                <Separator orientation="vertical" className="h-8" />
                                <span>{timelineEvents[index + 1].title}</span>
                              </DialogTitle>
                            </DialogHeader>
                            {/* Nội dung giống như dialog chính */}
                            <div className="mt-8">
                              <div className="relative h-[300px] rounded-2xl overflow-hidden mb-8">
                                <img
                                  src={timelineEvents[index + 1].image}
                                  alt={timelineEvents[index + 1].imageCaption}
                                  className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                  <p className="text-lg font-medium">{timelineEvents[index + 1].imageCaption}</p>
                                </div>
                              </div>
                              <div className="bg-card rounded-xl border shadow-lg p-8">
                                <div className="max-w-3xl mx-auto">
                                  {/* Title and Year Section */}
                                  <div className="flex items-center gap-4 mb-6 pb-6 border-b">
                                    <div className="flex items-center gap-2 text-primary">
                                      <CalendarDays className="w-6 h-6" />
                                      <span className="text-2xl font-bold">{timelineEvents[index + 1].year}</span>
                                    </div>
                                    <div className="h-6 w-px bg-muted-foreground/30" />
                                    <h3 className="text-xl font-semibold text-foreground">{timelineEvents[index + 1].title}</h3>
                                  </div>
                                  
                                  {/* Description */}
                                  <div className="mb-8 text-lg text-muted-foreground/90 italic border-l-4 border-primary/20 pl-4">
                                    {timelineEvents[index + 1].description}
                                  </div>
                                  
                                  {/* Main Content */}
                                  <div className="space-y-6">
                                    {timelineEvents[index + 1].content.map((paragraph, idx) => (
                                      <div key={idx} className="relative pl-6">
                                        <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-primary/40"></div>
                                        <p className="text-muted-foreground leading-relaxed">
                                          {paragraph}
                                        </p>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                              {/* Navigation Section cho popup sau */}
                              <div className="flex justify-between items-center pt-4">
                                {index + 1 > 0 && (
                                  <Button variant="outline" className="flex items-center gap-2"
                                    onClick={() => {
                                      handleCloseAll();
                                      setOpenDialogIndex(index);
                                    }}
                                  >
                                    <ArrowRight className="w-4 h-4 rotate-180" />
                                    {timelineEvents[index].year}
                                  </Button>
                                )}
                                {index + 2 < timelineEvents.length && (
                                  <Button variant="outline" className="flex items-center gap-2 ml-auto"
                                    onClick={() => {
                                      handleCloseAll();
                                      setOpenDialogIndex(index + 2);
                                    }}
                                  >
                                    {timelineEvents[index + 2].year}
                                    <ArrowRight className="w-4 h-4" />
                                  </Button>
                                )}
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                      )}
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>

        {/* Principles Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-primary flex items-center justify-center gap-3">
            <BookOpen className="w-8 h-8" />
            Bản chất của nền dân chủ XHCN
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {principles.map((principle, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <principle.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">{principle.title}</h4>
                    <p className="text-muted-foreground">{principle.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Key Points Section */}
        <div className="mb-20 bg-muted/30 rounded-3xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-center mb-12 text-primary flex items-center justify-center gap-3">
            <Star className="w-8 h-8" />
            Điểm nhấn quan trọng
          </h3>
          <div className="prose prose-lg max-w-4xl mx-auto">
            <p className="text-lg leading-relaxed mb-6">
              Nền dân chủ xã hội chủ nghĩa ở nước ta đã hình thành và phát triển qua các thời kỳ cách mạng. 
              Qua mỗi kỳ đại hội của Đảng, dân chủ ngày càng được nhận thức, phát triển và hoàn thiện đúng đắn, 
              phù hợp hơn với điều kiện cụ thể của nước ta.
            </p>
            <p className="text-lg leading-relaxed">
              Bản chất của nền dân chủ xã hội chủ nghĩa ở Việt Nam là dựa vào Nhà nước xã hội chủ nghĩa 
              và sự ủng hộ, giúp đỡ của nhân dân. Đây là nền dân chủ mà con người là thành viên trong xã hội 
              với tư cách công dân, tư cách của người làm chủ.
            </p>
          </div>
        </div>

        {/* Quotes Section */}
        <div className="max-w-4xl mx-auto">
          <Separator className="mb-12" />
          <div className="space-y-8">
            {quotes.map((quote, index) => (
              <blockquote key={index} className="bg-primary/5 p-6 rounded-lg">
                <p className="text-lg italic mb-4">"{quote.content}"</p>
                <footer className="text-right font-semibold text-primary">— {quote.author}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NhaNouc;
