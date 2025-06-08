
import { useState, useEffect, useRef } from 'react';

const Terminal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([
    'Welcome to Billy\'s terminal! Type "help" for commands.',
  ]);
  const terminalRef = useRef<HTMLDivElement>(null);

  const commands = {
    help: () => [
      'Available commands:',
      '  about    - Learn more about Billy',
      '  projects - View featured projects',
      '  skills   - See technical skills',
      '  contact  - Get contact information',
      '  clear    - Clear terminal',
      '  exit     - Close terminal',
    ],
    about: () => [
      'Billy - Software Engineer & Digital Craftsman',
      '',
      'A passionate developer who believes code is poetry.',
      'Specializes in building elegant solutions to complex problems.',
      'Currently focused on AI/ML integration and modern web technologies.',
    ],
    projects: () => [
      'Featured Projects:',
      '  1. AI-Powered Task Manager - React, Python, TensorFlow',
      '  2. Flutter Fintech App - Flutter, Firebase, Stripe',  
      '  3. Open Source CLI Tool - Node.js, TypeScript',
      '  4. Real-time Chat Platform - Next.js, WebSocket',
      '',
      'Use "cd projects" to view them on the site.',
    ],
    skills: () => [
      'Technical Skills:',
      '  Frontend: React, Next.js, TypeScript, Flutter',
      '  Backend: Node.js, Python, Firebase, Supabase', 
      '  Tools: Git, Docker, AWS, Vercel',
      '  Currently Learning: AI/ML, Web3, DevOps',
    ],
    contact: () => [
      'Contact Information:',
      '  Email: billy@example.com',
      '  GitHub: @billy-dev',
      '  LinkedIn: /in/billy-engineer',
      '  Twitter: @billy_codes',
      '',
      'Always open to new opportunities and collaborations!',
    ],
    clear: () => {
      setHistory([]);
      return [];
    },
  };

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    
    if (trimmedCmd === 'exit') {
      setIsOpen(false);
      return;
    }

    const output = commands[trimmedCmd as keyof typeof commands];
    const result = output ? output() : [`Command not found: ${cmd}. Type "help" for available commands.`];
    
    setHistory(prev => [
      ...prev,
      `$ ${cmd}`,
      ...result,
      '',
    ]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      handleCommand(input);
      setInput('');
    }
  };

  useEffect(() => {
    if (isOpen && terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history, isOpen]);

  return (
    <>
      {/* Terminal toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 glass-card p-3 glow-border hover:bg-electric-blue/10 transition-all duration-300 transform hover:scale-105"
        aria-label="Toggle terminal"
      >
        <span className="terminal-font text-electric-blue">{'>'}_</span>
      </button>

      {/* Terminal window */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 w-80 md:w-96 h-96 glass-card border border-electric-blue/30 rounded-lg overflow-hidden z-40 animate-fade-in">
          {/* Terminal header */}
          <div className="flex items-center justify-between p-3 border-b border-electric-blue/30">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <span className="terminal-font text-sm text-muted-foreground">billy@terminal</span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              ×
            </button>
          </div>

          {/* Terminal content */}
          <div className="flex flex-col h-full">
            <div
              ref={terminalRef}
              className="flex-1 p-3 terminal-font text-sm overflow-y-auto scrollbar-thin scrollbar-thumb-electric-blue/30"
            >
              {history.map((line, index) => (
                <div key={index} className={line.startsWith('$') ? 'text-electric-blue' : 'text-muted-foreground'}>
                  {line}
                </div>
              ))}
            </div>

            {/* Terminal input */}
            <form onSubmit={handleSubmit} className="p-3 border-t border-electric-blue/30">
              <div className="flex items-center space-x-2">
                <span className="terminal-font text-electric-blue">$</span>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-1 bg-transparent terminal-font text-sm focus:outline-none"
                  placeholder="Type a command..."
                  autoFocus
                />
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Terminal;
