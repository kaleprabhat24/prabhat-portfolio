import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'SmartShop Genie',
    description: 'AI-powered virtual shopping experience with avatars, smart cart suggestions, virtual store map, hidden deals, and AI assistant.',
    techStack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'shadcn/ui', 'Framer Motion'],
    github: 'https://github.com/kaleprabhat24/smartshop-genie-virtual-retail',
    featured: true,
  },
  {
    title: 'Virtual Lab: DSA',
    description: 'Interactive DSA learning platform with visuals, hands-on coding, and performance analysis for students.',
    techStack: ['React', 'JSX', 'CSS'],
    github: 'https://github.com/kaleprabhat24/dsavirtuallab-myversion',
    featured: true,
  },
  {
    title: 'Atlas-Scan-Act',
    description: 'Digitizes Forest Rights Act claims using OCR, AI, and GIS mapping for efficient documentation.',
    techStack: ['TypeScript', 'OCR', 'GIS', 'AI'],
    github: 'https://github.com/kaleprabhat24/atlas-scan-act',
    featured: true,
  },
  {
    title: 'EmotiSense',
    description: 'ML-based mental health detection system that analyzes text to identify emotional patterns.',
    techStack: ['Python', 'ML', 'NLP'],
    github: 'https://github.com/kaleprabhat24/EmotiSense',
    featured: false,
  },
  {
    title: 'Anandwan Location Tracker',
    description: 'Interactive map application with routes and voice descriptions for navigation.',
    techStack: ['TypeScript', 'Maps API', 'Voice'],
    github: 'https://github.com/kaleprabhat24/anandwan-location-tracker',
    featured: false,
  },
  {
    title: 'Google Form AutoFiller',
    description: 'Chrome extension to auto-fill Google Forms using AI-powered suggestions.',
    techStack: ['JavaScript', 'Chrome Extension', 'AI'],
    github: 'https://github.com/kaleprabhat24/GoogleFormAutoFiller',
    featured: false,
  },
  {
    title: 'MidiHands',
    description: 'Gesture-based MIDI instrument using webcam for creating music with hand movements.',
    techStack: ['Python', 'OpenCV', 'MIDI'],
    github: 'https://github.com/kaleprabhat24/MidiHands',
    featured: false,
  },
  {
    title: 'Django Apps Suite',
    description: 'Collection of Django applications including Ticket Booking, Bookstore, Employee CRUD, and LLMware integration.',
    techStack: ['Python', 'Django', 'SQL', 'REST API'],
    github: 'https://github.com/kaleprabhat24',
    featured: false,
  },
];

export default function Projects() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-center mb-4">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            A showcase of my work spanning AI/ML, full-stack development, and innovative solutions
          </p>

          {/* Featured Projects */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {projects.filter(p => p.featured).map((project, index) => (
              <div
                key={project.title}
                className="card-3d p-6 flex flex-col h-full"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-lg bg-gradient-primary">
                    <Github className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <span className="text-xs font-medium px-2 py-1 rounded bg-primary/10 text-primary">
                    Featured
                  </span>
                </div>
                <h3 className="font-display font-semibold text-xl mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm flex-1 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                      +{project.techStack.length - 4}
                    </span>
                  )}
                </div>
                <Button asChild variant="outline" size="sm" className="w-full">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    View on GitHub
                  </a>
                </Button>
              </div>
            ))}
          </div>

          {/* Other Projects */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {projects.filter(p => !p.featured).map((project, index) => (
              <div
                key={project.title}
                className="card-3d p-5 flex flex-col h-full"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm flex-1 mb-3 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.techStack.slice(0, 2).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 text-sm font-medium flex items-center gap-1"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
