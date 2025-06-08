
const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            About <span className="electric-text">Me</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text content */}
            <div className="space-y-6 animate-slide-in-left">
              <div className="glass-card p-6">
                <h3 className="text-xl font-semibold mb-4 electric-text">The Human Behind the Code</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm a software engineer who believes that code is poetry in motion. With a passion for crafting 
                  elegant solutions to complex problems, I spend my days building digital experiences that matter.
                </p>
              </div>
              
              <div className="glass-card p-6">
                <h3 className="text-xl font-semibold mb-4 electric-text">My Philosophy</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Every line of code I write carries intention. I believe in clean architecture, meaningful 
                  user experiences, and the power of technology to create positive change in the world.
                </p>
              </div>
              
              <div className="glass-card p-6">
                <h3 className="text-xl font-semibold mb-4 electric-text">Beyond the Screen</h3>
                <p className="text-muted-foreground leading-relaxed">
                  When I'm not coding, you'll find me exploring new technologies, contributing to open source, 
                  or writing about the intersection of creativity and logic in software development.
                </p>
              </div>
            </div>

            {/* Skills visualization */}
            <div className="space-y-6 animate-fade-in">
              <div className="glass-card p-6">
                <h3 className="text-xl font-semibold mb-6 electric-text">Technical Arsenal</h3>
                
                {[
                  { name: 'JavaScript/TypeScript', level: 95 },
                  { name: 'React/Next.js', level: 90 },
                  { name: 'Node.js', level: 85 },
                  { name: 'Python', level: 80 },
                  { name: 'Flutter/Dart', level: 75 },
                  { name: 'Firebase/Supabase', level: 85 }
                ].map((skill, index) => (
                  <div key={skill.name} className="mb-4" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm electric-text">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-electric-gradient h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="glass-card p-6">
                <h3 className="text-xl font-semibold mb-4 electric-text">Current Focus</h3>
                <div className="flex flex-wrap gap-2">
                  {['AI/ML Integration', 'Web3', 'Mobile Development', 'DevOps', 'Open Source'].map((focus) => (
                    <span 
                      key={focus}
                      className="px-3 py-1 bg-electric-blue/20 border border-electric-blue/30 rounded-full text-sm hover:bg-electric-blue/30 transition-colors duration-300"
                    >
                      {focus}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
