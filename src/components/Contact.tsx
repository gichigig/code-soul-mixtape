
import { useState } from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Let's <span className="electric-text">Connect</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact info */}
            <div className="space-y-8 animate-slide-in-left">
              <div className="glass-card p-6">
                <h3 className="text-xl font-semibold mb-4 electric-text">Ready to collaborate?</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  I'm always excited to work on new projects and meet fellow creators. 
                  Whether you have a wild idea or just want to chat about tech, drop me a line!
                </p>
                
                <div className="space-y-4">
                  <div>
                    <span className="text-sm text-muted-foreground">Email</span>
                    <p className="text-electric-blue">billy@example.com</p>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Location</span>
                    <p>San Francisco, CA</p>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Response Time</span>
                    <p>Usually within 24 hours</p>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="glass-card p-6">
                <h3 className="text-lg font-semibold mb-4 electric-text">Find me elsewhere</h3>
                <div className="space-y-3">
                  {[
                    { icon: Github, label: 'GitHub', href: '#', handle: '@billy-dev' },
                    { icon: Linkedin, label: 'LinkedIn', href: '#', handle: '/in/billy-engineer' },
                    { icon: Twitter, label: 'Twitter', href: '#', handle: '@billy_codes' }
                  ].map(({ icon: Icon, label, href, handle }) => (
                    <a
                      key={label}
                      href={href}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-electric-blue/10 transition-all duration-300 group"
                    >
                      <div className="glass-card p-2 group-hover:glow-border transition-all duration-300">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-medium">{label}</p>
                        <p className="text-sm text-muted-foreground">{handle}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="animate-fade-in">
              <div className="glass-card p-6">
                <h3 className="text-xl font-semibold mb-6 electric-text">Send a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full p-3 bg-background/50 border border-electric-blue/30 rounded-lg focus:ring-2 focus:ring-electric-blue/50 focus:border-electric-blue transition-all duration-300"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-3 bg-background/50 border border-electric-blue/30 rounded-lg focus:ring-2 focus:ring-electric-blue/50 focus:border-electric-blue transition-all duration-300"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full p-3 bg-background/50 border border-electric-blue/30 rounded-lg focus:ring-2 focus:ring-electric-blue/50 focus:border-electric-blue transition-all duration-300"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full p-3 bg-background/50 border border-electric-blue/30 rounded-lg focus:ring-2 focus:ring-electric-blue/50 focus:border-electric-blue transition-all duration-300 resize-none"
                      placeholder="Tell me about your project or just say hello!"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-electric-gradient py-3 rounded-lg text-background font-medium hover:shadow-lg hover:shadow-electric-blue/25 transition-all duration-300 transform hover:scale-105"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Easter egg */}
              <div className="mt-6 glass-card p-4 text-center">
                <p className="text-sm text-muted-foreground">
                  🎵 <span className="electric-text">Fun fact:</span> This site was built with coffee, code, and a playlist of 90s hip-hop
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
