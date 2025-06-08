
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Terminal from '@/components/Terminal';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <About />
        <Projects />
        <Contact />
      </main>

      <Terminal />

      {/* Footer */}
      <footer className="py-8 border-t border-electric-blue/20">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            Built with 💙 by Billy • © 2024 • Crafted with React & Tailwind
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
