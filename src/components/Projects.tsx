import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A modern shopping experience with real-time inventory and seamless checkout.",
    tags: ["React", "Node.js", "Stripe"],
    color: "from-orange-500/20 to-red-500/20",
  },
  {
    title: "Task Management App",
    description: "Collaborative project management tool with real-time updates and team features.",
    tags: ["TypeScript", "Next.js", "PostgreSQL"],
    color: "from-blue-500/20 to-purple-500/20",
  },
  {
    title: "Analytics Dashboard",
    description: "Data visualization platform with interactive charts and custom reporting.",
    tags: ["React", "D3.js", "Python"],
    color: "from-green-500/20 to-teal-500/20",
  },
  {
    title: "Social Media App",
    description: "Community platform with real-time messaging and content sharing features.",
    tags: ["React Native", "Firebase", "Redux"],
    color: "from-pink-500/20 to-rose-500/20",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 px-6 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">
            Portfolio
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of projects that showcase my skills and passion for building great products.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300"
            >
              {/* Project preview area */}
              <div className={`aspect-video bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                <span className="text-4xl opacity-50 group-hover:opacity-80 transition-opacity">🖼️</span>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-medium bg-secondary rounded-full text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Links */}
                <div className="flex gap-4">
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
