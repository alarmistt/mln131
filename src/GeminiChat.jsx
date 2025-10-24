import React, { useState, useRef, useEffect } from "react";
import { MessageSquareText, X, Send, Loader2, Bot, Sparkles, ChevronDown } from "lucide-react";

const API_KEY = "AIzaSyDbx_ifR-qHHKrU3yfaAR9LAavaBPjeAmk";
const API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";

// Hàm gọi Gemini API
async function askGemini(prompt) {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-goog-api-key': API_KEY,
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: `Bạn là một trợ lý AI chuyên nghiệp, hãy trả lời bằng tiếng Việt theo format sau:

Format cần tuân thủ:
1. Mỗi điểm bắt đầu bằng dấu * (một dấu duy nhất)
2. Tiêu đề và nội dung cách nhau bởi dấu hai chấm
3. Không sử dụng bất kỳ markdown nào (**bold**, *italic*, etc.)
4. Không để dòng trống giữa các điểm
5. Viết liền mạch, rõ ràng

Ví dụ format:
* Tiêu đề: Nội dung chi tiết
* Điểm tiếp theo: Chi tiết tiếp theo
* Điểm cuối: Nội dung kết thúc

Đây là câu hỏi của người dùng: ${prompt}`
          }]
        }]
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    if (data.candidates && data.candidates[0]?.content?.parts?.[0]?.text) {
      return data.candidates[0].content.parts[0].text;
    } else {
      throw new Error('Unexpected response structure');
    }
  } catch (error) {
    console.error('Error details:', error);
    throw error;
  }
}

export default function GeminiChat() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = { role: "user", text: input };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const reply = await askGemini(input);
      // Xử lý và format lại response
      const formattedReply = reply
        // Xử lý các dấu bullet và tiêu đề
        .replace(/^[•\*]\s*/gm, '• ') // Chuẩn hóa tất cả dấu bullet
        .replace(/\n[•\*]\s*/g, '\n• ') // Chuẩn hóa bullet sau xuống dòng
        // Xử lý các tiêu đề in đậm
        .replace(/\*\*([^*\n]+)\*\*:/g, '$1:') // Bỏ ** cho tiêu đề có dấu :
        .replace(/\*\*([^*\n]+)\*\*/g, '$1') // Bỏ ** cho các phần in đậm khác
        // Xử lý khoảng cách và dấu hai chấm
        .replace(/:\s+/g, ': ') // Chuẩn hóa khoảng cách sau dấu hai chấm
        .replace(/\n\s*\n/g, '\n') // Xóa dòng trống thừa
        .replace(/•\s*•/g, '•') // Xóa bullet thừa
        .trim();
      const botMsg = { role: "bot", text: formattedReply };
      setMessages((m) => [...m, botMsg]);
    } catch (err) {
      console.error(err);
      setMessages((m) => [
        ...m,
        { role: "bot", text: "❌ Lỗi: Không thể nhận được phản hồi." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chat Button with pulse effect */}
      <button
        onClick={() => setIsOpen(true)}
        className={`w-14 h-14 rounded-full bg-gradient-to-r from-primary to-primary/80 text-white flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ${
          isOpen ? 'hidden' : 'animate-bounce'
        }`}
      >
        <div className="absolute w-full h-full rounded-full bg-primary/20 animate-ping" />
        <MessageSquareText className="w-7 h-7" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 w-[380px] h-[600px] bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-100 animate-slideUp">
          {/* Glass effect background */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-white/50 pointer-events-none" />
          
          {/* Header */}
          <div className="relative p-4 bg-gradient-to-r from-primary to-primary/90 text-white flex items-center justify-between shadow-md">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm border border-white/30">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-white/95">Trợ lý AI</h3>
                <p className="text-xs text-white/80 font-medium">Luôn sẵn sàng hỗ trợ bạn</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="relative flex-1 overflow-y-auto p-6 space-y-6">
            {messages.length === 0 && (
              <div className="text-center mt-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 blur-2xl rounded-full" />
                  <Sparkles className="w-16 h-16 mx-auto mb-4 text-primary/40" />
                </div>
                <p className="text-sm text-gray-500 font-medium">Bắt đầu cuộc trò chuyện với Trợ lý AI</p>
                <p className="text-xs text-gray-400 mt-2">Hãy đặt câu hỏi bất kỳ</p>
                <div className="mt-6 flex flex-col items-center gap-2">
                  <p className="text-xs text-gray-500">Gợi ý câu hỏi:</p>
                  <div className="flex flex-wrap justify-center gap-2 max-w-[280px]">
                    {[
                      "Nhà nước pháp quyền XHCN là gì?",
                      "Nguồn gốc và tư tưởng của nhà nước?",
                      "Mục tiêu và bản chất của nhà nước?",
                      "Những đặc điểm cơ bản của nhà nước?"
                    ].map((suggestion) => (
                      <button
                        key={suggestion}
                        onClick={() => {
                          setInput(suggestion);
                          handleSend();
                        }}
                        className="px-3 py-1.5 text-xs rounded-full bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-gray-700 transition-colors"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                  <ChevronDown className="w-4 h-4 text-gray-400 animate-bounce mt-4" />
                </div>
              </div>
            )}
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                } items-end space-x-2`}
              >
                {msg.role !== "user" && (
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center">
                    <Bot className="w-4 h-4 text-primary" />
                  </div>
                )}
                <div
                  className={`max-w-[80%] p-4 rounded-2xl ${
                    msg.role === "user"
                      ? "bg-gradient-to-r from-primary to-primary/90 text-white rounded-br-none shadow-lg"
                      : "bg-white/90 backdrop-blur-sm rounded-bl-none shadow-sm border border-gray-100/50 hover:shadow-md transition-shadow"
                  }`}
                >
                  <div 
                    className={`space-y-1 text-sm leading-relaxed ${
                      msg.role === "user" 
                        ? "text-white/95" 
                        : "text-gray-700"
                    }`}
                  >
                    {msg.text.split('\n').map((line, i) => (
                      <React.Fragment key={i}>
                        {line.startsWith('• ') ? (
                          <div className="flex items-start gap-3 my-1.5 group">
                            <span className={`text-lg ${msg.role === "user" ? "text-white/80" : "text-primary/70"}`}>•</span>
                            <div className="flex-1">
                              {line.substring(2).split(':').map((part, j) => 
                                j === 0 ? 
                                  <strong key={j} className={
                                    msg.role === "user" 
                                      ? "text-white/95 font-semibold" 
                                      : "text-primary/90 font-semibold"
                                  }>{part + ':'}</strong>
                                : 
                                <span key={j} className={
                                  msg.role === "user"
                                    ? "text-white/90"
                                    : "text-gray-700"
                                }>{part}</span>
                              )}
                            </div>
                          </div>
                        ) : (
                          <p className={`my-1.5 ${!line && 'my-3'}`}>{line}</p>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex items-center space-x-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm w-fit border border-gray-100/50">
                <Loader2 className="h-4 w-4 animate-spin text-primary" />
                <p className="text-sm text-gray-600 font-medium">AI đang suy nghĩ...</p>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-white/95 backdrop-blur-md border-t border-gray-100/50">
            <div className="flex gap-2 items-center bg-gray-50/80 rounded-xl p-2 shadow-inner hover:shadow-inner hover:bg-gray-50/90 transition-all">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSend();
                  }
                }}
                placeholder="Nhập câu hỏi của bạn..."
                className="flex-1 bg-transparent px-3 py-2 focus:outline-none text-gray-700 placeholder-gray-400 rounded-lg"
              />
              <button
                onClick={handleSend}
                disabled={loading || !input.trim()}
                className={`p-2 rounded-xl ${
                  loading || !input.trim()
                    ? 'bg-gray-200 cursor-not-allowed'
                    : 'bg-gradient-to-r from-primary to-primary/80 text-white hover:shadow-md transition-all duration-300'
                }`}
              >
                {loading ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  <Send className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
