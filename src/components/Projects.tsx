import { ExternalLink, Github } from "lucide-react";

const technicalProjects = [
  {
    title: "Verilog Wordle Game",
    description: "Implemented the classic Wordle game in Verilog on an FPGA board with PS/2 keyboard and VGA display. Used Finite State Machines, Block RAM-based word database, and LFSR for random word selection.",
    tags: ["Verilog", "FPGA", "ModelSim", "Git"],
    color: "from-blue-500/20 to-cyan-500/20",
    date: "Nov - Dec 2025",
  },
  {
    title: "Rainwater Harvesting System",
    description: "Designed and prototyped an innovative rainwater harvesting system for rural Philippines communities during Engineering Internship. Created a user-friendly graphic manual with Figma and conducted on-site field research.",
    tags: ["Figma", "Engineering Design", "Prototyping", "Research"],
    color: "from-green-500/20 to-teal-500/20",
    date: "May - Jul 2025",
  },
];

const professionalProjects = [
  {
    title: "Flowmeter Assembly Jig",
    description: "Led a team of six to engineer a flowmeter assembly jig for Amico Patient Care Corporation. Managed timeline with Gantt Chart, reduced cost by 64%, and ensured regulatory compliance.",
    tags: ["Project Management", "Excel", "AutoCAD", "Leadership"],
    color: "from-amber-500/20 to-orange-500/20",
    date: "Dec 2024 - Apr 2025",
  },
  {
    title: "Recruitment Website Maintenance",
    description: "Maintained and updated Engineering Student Recruitment website using WordPress. Conducted competitor analysis and created promotional materials with Adobe Creative Suite.",
    tags: ["WordPress", "Adobe Suite", "Content Management"],
    color: "from-pink-500/20 to-rose-500/20",
    date: "Sep 2025 - Present",
  },
  {
    title: "International Culture Fest 2024",
    description: "Co-organized the largest festival in Southwestern New Brunswick with over 10,000 participants. Coordinated logistics, volunteers, and multi-cultural programming.",
    tags: ["Event Coordination", "Communication", "Teamwork"],
    color: "from-purple-500/20 to-violet-500/20",
    date: "Jun - Aug 2024",
  },
];

const ProjectCard = ({ project, index }: { project: typeof technicalProjects[0]; index: number }) => (
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
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-display text-xl font-semibold group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <span className="text-xs text-primary">{project.date}</span>
      </div>
      <p className="text-muted-foreground mb-4 text-sm">
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
);

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
            A selection of projects that showcase my engineering skills and problem-solving abilities.
          </p>
        </div>
        
        {/* Technical Projects */}
        <div className="mb-12">
          <h3 className="font-display text-2xl font-semibold mb-6 text-foreground">Technical Projects</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {technicalProjects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
        
        {/* Professional Projects */}
        <div>
          <h3 className="font-display text-2xl font-semibold mb-6 text-foreground">Leadership & Professional Projects</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {professionalProjects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
