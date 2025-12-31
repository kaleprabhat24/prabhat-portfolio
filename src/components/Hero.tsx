import { useEffect, useState } from 'react';
import { ArrowDown, FileText, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profilePhoto from '@/assets/profile-photo.jpg';

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Building Innovative AI/ML and Full-Stack Solutions';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,hsl(var(--background))_70%)]" />
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Profile Image */}
          <div className="relative">
            <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-primary/30 glow animate-float">
              <img
                src={profilePhoto}
                alt="Prabhat Sudhakar Kale"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative rings */}
            <div className="absolute inset-0 -z-10 w-64 h-64 sm:w-80 sm:h-80 rounded-full border-2 border-primary/20 scale-110" />
            <div className="absolute inset-0 -z-10 w-64 h-64 sm:w-80 sm:h-80 rounded-full border border-accent/10 scale-125" />
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <p className="text-primary font-medium mb-2 animate-fade-in-up">Hello, I'm</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <span className="text-gradient">Prabhat Sudhakar Kale</span>
            </h1>
            <div className="h-12 mb-6" style={{ animationDelay: '0.2s' }}>
              <p className="text-xl sm:text-2xl text-muted-foreground font-medium">
                {displayText}
                <span className="animate-pulse">|</span>
              </p>
            </div>
            <p className="text-muted-foreground max-w-xl mb-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              Pre-final year BTech student at Shri Ramdeobaba College of Engineering and Management 
              specializing in AI/ML. Passionate about problem-solving, learning new skills, 
              and delivering impactful solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90 text-primary-foreground glow-sm">
                <a href="#contact">
                  <Mail className="w-5 h-5 mr-2" />
                  Get in Touch
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary/50 hover:bg-primary/10">
                <a href="https://drive.google.com/file/d/1pNXp6ojljJh3Alyj07oZjZaj-9UPfTUt/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                  <FileText className="w-5 h-5 mr-2" />
                  View Resume
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors">
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
