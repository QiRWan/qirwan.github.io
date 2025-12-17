import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Verilog Wordle Game",
    description: "Implemented the classic Wordle game in Verilog on an FPGA board with PS/2 keyboard and VGA display. Used Finite State Machines, Block RAM-based word database, and LFSR for random word selection.",
    tags: ["Verilog", "FPGA", "ModelSim", "Git"],
    color: "from-blue-500/20 to-cyan-500/20",
    date: "Nov - Dec 2025",
  },
  {
    title: "Flowmeter Assembly Jig",
    description: "Led a team of six to engineer a flowmeter assembly jig for Amico Patient Care Corporation. Managed timeline with Gantt Chart, reduced cost by 64%, and ensured regulatory compliance.",
    tags: ["Project Management", "Excel", "AutoCAD"],
    color: "from-amber-500/20 to-orange-500/20",
    date: "Dec 2024 - Apr 2025",
  },
  {
    title: "Rainwater Harvesting System",
    description: "Designed and prototyped an innovative rainwater harvesting system for rural Philippines communities. Created a user-friendly graphic manual with Figma and conducted on-site field research.",
    tags: ["Figma", "Engineering Design", "Research"],
    color: "from-green-500/20 to-teal-500/20",
    date: "May - Jul 2025",
  },
  {
    title: "Recruitment Website Maintenance",
    description: "Maintained and updated Engineering Student Recruitment website using WordPress. Conducted competitor analysis and created promotional materials with Adobe Creative Suite.",
    tags: ["WordPress", "Adobe Suite", "Excel"],
    color: "from-pink-500/20 to-rose-500/20",
    date: "Sep 2025 - Present",
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
            A selection of projects that showcase my engineering skills and problem-solving abilities.
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
