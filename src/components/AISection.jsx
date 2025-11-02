const AISection = () => {
  const aiTools = [
    {
      name: "Chatbot AI",
      description: "Trợ lý ảo hỗ trợ trả lời câu hỏi và tương tác với người dùng",
      icon: "💬"
    },
    {
      name: "AI Tóm tắt nội dung",
      description: "Tự động tóm tắt và trích xuất thông tin quan trọng từ tài liệu",
      icon: "📄"
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-secondary/10 to-transparent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-primary/10 to-transparent rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-5xl">🤖</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient">
            Công nghệ AI được sử dụng
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Dự án này được hỗ trợ bởi các công nghệ trí tuệ nhân tạo hiện đại
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {aiTools.map((tool, index) => (
            <div
              key={index}
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 p-8 border border-gray-200/50 hover:border-secondary/50 hover:-translate-y-2 overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="relative z-10">
                <div className="text-6xl mb-6 text-center transform group-hover:scale-110 transition-transform duration-500">
                  {tool.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-center bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                  {tool.name}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {tool.description}
                </p>
              </div>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-secondary/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AISection;
