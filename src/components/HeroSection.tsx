import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center pt-20 pb-16 overflow-hidden">
      {/* Blue-purple gradient lines */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 opacity-70">
        {Array.from({ length: 20 }).map((_, i) => (
          <div 
            key={i} 
            className="w-full h-px bg-gradient-to-r from-transparent via-genie-purple to-transparent"
            style={{ 
              transform: `translateY(${i * 20 - 200}px)`,
              opacity: i < 5 || i > 15 ? 0.3 : 0.7
            }}  
          />
        ))}
      </div>

      {/* Content */}
      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-genie-cream mb-4 tracking-tight">
            Globe<span className="font-normal">Genie</span>
          </h1>

          <div className="max-w-3xl mx-auto text-center mb-10 opacity-90">
            <p className="text-lg md:text-xl text-genie-cream mb-6">
              your personal travel assistant
            </p>
          </div>

          {/* Embedded YouTube Video */}
          <div className="w-full max-w-3xl mb-10 aspect-video">
            <iframe 
              className="w-full h-full rounded-lg"
              src="https://my-digital-assets123456.s3.eu-north-1.amazonaws.com/Intro%20Video.mov?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIATPQD5K2J6XTOSBOA%2F20250507%2Feu-north-1%2Fs3%2Faws4_request&X-Amz-Date=20250507T144458Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmV1LW5vcnRoLTEiRzBFAiEAhm0upn5utJCG2Tnsr8euaCa3X0rcYutIM64FgIGPqcMCIAoKFq28zoWUPPt%2FHyCIXv4S53rAWX4TfRbCL8FbYDdnKtcCCGAQABoMMjM5NDUyNjQwOTE1IgxI7EkP%2Fp1Db%2FyPX4cqtAKuD%2FM5DZDubPaD8FaMNuCmY7n9RT9A0P6jSUb81%2BlIlGyxiHWML694zhqg%2BI6CSjCd42MyxmqhNk9YGoEAT4%2B%2Fk2WSzLHiP9qzt092cDfROKFNbz1CYbjrLZvjO0utfvi%2BpHWvWoVlP4rQM6D0tZDhn8SLqA1BWzZIA02pxb7kEaGxL0PFslRFZM47lXB2uXidzrL2X%2FGWWGocxjfzBzy7oROuaOGD3Q2%2F5v4Y2FU0Dpy6E1UlyKphpf7kBVid6DAjeyiRYyv3JuuMTtMWJM6ktAX7Zm4Z8C5A0rSfiUI5UPYWycxaY9k56EFVR1X26Vs7YwFgJM%2FKxwiPvwSZFRS8a5IMxQE%2B7cj7T0H1QL07RPlc3R8GUwg1lBKqrR8l0EYIUyYp8tb42FJbGcuZXTwBvzYYajCa0OvABjqtAteOP0o%2BffNHtSx0p74rza%2Bb5A7BjO132UX7RWSwXe1ohMiGIoLkEdeB5o6bfFPIJOMfLYioC5xxiQQiw0YU6Onc96g6GJFPG5kUa8PoJnz3Fd9wPXceufG5BKFerUxhxoPw7KGZu2Zh6Ny6rmwrSWTMJ1V802cG76vJuqi3SvGYgLE9lyJpKS12GrkJVdgNHNDiA75vjFXbC80O0QnzXxP1jUgEt356DEoSIJVD0mZqE0xfMQGi1IB5i%2B%2FByocaPZfoLTXEqmbgLhyXaZIzXd45y%2FxW25vkdKsutnKMbRVJ6lvl6qfBqd8n%2BeuALdjubBlbXwNINRQaKLDHF9Dxl1QmQ%2BSxAuM4CtCbtrmcu2%2BDEWo%2BuCcg%2F6uXRyEpDQVpTHhkytbT3oIhLuVApLc%3D&X-Amz-Signature=678e9044b3e2821e64d69fd5769b9b8a9c6f2c5c72c4bbe23501ed658dfe79d4&X-Amz-SignedHeaders=host&response-content-disposition=inline" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>

          {/* Floating orb */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-32 h-32 rounded-full bg-gradient-to-b from-genie-purple to-genie-blue opacity-30 blur-2xl animate-float" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
