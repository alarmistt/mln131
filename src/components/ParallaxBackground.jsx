import { useEffect, useRef } from 'react';

const ParallaxBackground = ({ children }) => {
  const bgRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (bgRef.current) {
        const offset = window.scrollY * 0.5; // tốc độ cuộn (chậm hơn nội dung)
        bgRef.current.style.backgroundPositionY = `${offset}px`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      ref={bgRef}
      className="relative overflow-hidden min-h-screen bg-center bg-fixed -mt-24 z-0"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dk3yac2ie/image/upload/v1760944336/lzef6q4iw9nqwvmmh7nm.jpg')",
        backgroundSize: "100% auto",
        backgroundPosition: "center top",
        backgroundRepeat: "repeat",
        backgroundAttachment: "scroll",
      }}
    >
      <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default ParallaxBackground;
