
import { useState, useEffect } from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = "Building logic with soul, one line at a time.";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 50);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-electric-blue/20 via-electric-violet/10 to-transparent"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-electric-blue rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="glass-card p-8 md:p-12 max-w-4xl mx-auto animate-fade-in">
          {/* Avatar */}
          <div className="mb-8">
            <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full bg-gradient-to-br from-electric-blue to-electric-violet p-1 animate-glow">
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center text-6xl font-bold electric-text">
                B
              </div>
            </div>
          </div>

          {/* Name and title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Hi, I'm <span className="electric-text">Billy</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-8">
            Software Engineer & Digital Craftsman
          </h2>

          {/* Typewriter tagline */}
          <div className="text-lg md:text-xl mb-12 min-h-[60px] flex items-center justify-center">
            <span className="terminal-font">
              {text}
              <span className="animate-terminal-blink">|</span>
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button className="glass-card px-8 py-3 glow-border hover:bg-electric-blue/10 transition-all duration-300 transform hover:scale-105">
              View My Work
            </button>
            <button className="bg-electric-gradient px-8 py-3 rounded-lg text-background font-medium hover:shadow-lg hover:shadow-electric-blue/25 transition-all duration-300 transform hover:scale-105">
              Get In Touch
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            {[
              { icon: Github, href: '#', label: 'GitHub' },
              { icon: Linkedin, href: '#', label: 'LinkedIn' },
              { icon: Twitter, href: '#', label: 'Twitter' }
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="glass-card p-3 hover:bg-electric-blue/10 transition-all duration-300 transform hover:scale-110 hover:glow-border"
                aria-label={label}
              >
                <Icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-electric-blue/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-electric-blue rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
