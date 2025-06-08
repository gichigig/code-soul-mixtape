
import { useState } from 'react';
import { Github } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'AI-Powered Task Manager',
      description: 'A smart productivity app that uses machine learning to optimize task scheduling and predict completion times.',
      tags: ['React', 'Python', 'TensorFlow', 'Firebase'],
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop',
      github: 'https://github.com',
      demo: 'https://demo.com',
      category: 'web'
    },
    {
      id: 2,
      title: 'Flutter Fintech App',
      description: 'A beautiful mobile banking app with biometric authentication and real-time transaction tracking.',
      tags: ['Flutter', 'Dart', 'Firebase', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop',
      github: 'https://github.com',
      demo: 'https://demo.com',
      category: 'mobile'
    },
    {
      id: 3,
      title: 'Open Source CLI Tool',
      description: 'A command-line utility for developers to streamline their workflow and automate repetitive tasks.',
      tags: ['Node.js', 'TypeScript', 'CLI', 'NPM'],
      image: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=500&h=300&fit=crop',
      github: 'https://github.com',
      demo: 'https://demo.com',
      category: 'opensource'
    },
    {
      id: 4,
      title: 'Real-time Chat Platform',
      description: 'A modern messaging platform with end-to-end encryption and multimedia sharing capabilities.',
      tags: ['Next.js', 'WebSocket', 'PostgreSQL', 'Redis'],
      image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=500&h=300&fit=crop',
      github: 'https://github.com',
      demo: 'https://demo.com',
      category: 'web'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Apps' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'opensource', label: 'Open Source' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Featured <span className="electric-text">Projects</span>
          </h2>

          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  filter === category.id
                    ? 'bg-electric-gradient text-background'
                    : 'glass-card hover:bg-electric-blue/10'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="glass-card group hover:glow-border transition-all duration-500 transform hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project image */}
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-electric-gradient opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-electric-blue transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-electric-blue/20 border border-electric-blue/30 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      className="flex items-center gap-2 glass-card px-4 py-2 hover:bg-electric-blue/10 transition-all duration-300"
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm">Code</span>
                    </a>
                    <a
                      href={project.demo}
                      className="flex items-center gap-2 bg-electric-gradient px-4 py-2 rounded text-background text-sm font-medium hover:shadow-lg hover:shadow-electric-blue/25 transition-all duration-300"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View more button */}
          <div className="text-center mt-12">
            <button className="glass-card px-8 py-3 glow-border hover:bg-electric-blue/10 transition-all duration-300 transform hover:scale-105">
              View All Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
