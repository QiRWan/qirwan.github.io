import { ExternalLink, Github } from "lucide-react";
import verilogWordleImg from "@/assets/verilog-wordle.jpeg";
import flowmeterJigImg from "@/assets/flowmeter-jig.png";
import cultureFestImg from "@/assets/culture-fest.jpeg";
import mapJournalImg from "@/assets/map-journal.png";
import rainwaterSystemImg from "@/assets/rainwater-system.png";

const technicalProjects = [
  {
    title: "Coding Project: Verilog Wordle Game",
    description: [
      "Implemented the classic Wordle game in Verilog on an FPGA board",
      "Integrated PS/2 keyboard input and VGA display output",
      "Used Finite State Machines and Block RAM-based word database",
      "Implemented LFSR for random word selection",
    ],
    tags: [
      ["Verilog", "FPGA"],
      ["ModelSim", "Git"],
    ],
    color: "from-blue-500/20 to-cyan-500/20",
    date: "Nov - Dec 2025",
    image: verilogWordleImg,
  },
  {
    title: "Engineering Project: Flowmeter Assembly Jig",
    description: [
      "Led a team of six to engineer a flowmeter assembly jig for Amico Patient Care Corporation",
      "Managed project timeline with Gantt Chart",
      "Reduced manufacturing cost by 64%",
      "Ensured regulatory compliance with industry standards",
    ],
    tags: [
      ["Project Management", "Leadership"],
      ["Excel", "AutoCAD", "Client Relation"],
    ],
    color: "from-amber-500/20 to-orange-500/20",
    date: "Dec 2024 - Apr 2025",
    image: flowmeterJigImg,
  },
  {
    title: "Engineering Project: Rainwater Harvesting System",
    description: [
      "Designed and prototyped an innovative rainwater harvesting system",
      "Targeted rural Philippines communities during Engineering Internship",
      "Created a user-friendly graphic manual with Figma",
      "Conducted on-site field research and community engagement",
    ],
    tags: [
      ["Figma", "Engineering Design"],
      ["Prototyping", "Site Research"],
      ["Teamwork", "Regulation Compliance"],
    ],
    color: "from-green-500/20 to-teal-500/20",
    date: "May - Jul 2025",
    image: rainwaterSystemImg,
  },
  {
    title: "Coding Project: Interactive Map Web Journal App",
    description: [
      "Developed a responsive single-page web application using JavaScript, HTML, and CSS with an interactive map featuring categorized points-of-interest",
      "Integrated the Nominatim (OpenStreetMap) geocoding/search API via fetch for client-side place search and map navigation",
      "Designed and iterated on the UI including dark theme and visual filtering for accessibility and visual clarity",
      "Worked collaboratively using Git/GitHub for version control and pull-request-driven workflow",
      "Performed iterative bug fixes and feature improvements based on commit-driven development",
    ],
    tags: [
      ["JavaScript", "HTML", "CSS"],
      ["OpenStreetMap API", "Git/GitHub"],
    ],
    color: "from-indigo-500/20 to-blue-500/20",
    date: "October 2025",
    image: mapJournalImg,
  },
];

const professionalProjects = [
  {
    title: "Communication & AudioVisual Projects",
    description: [
      "Created promotional materials and multimedia content using Adobe Creative Suite",
      "Developed video content for student recruitment initiatives",
      "Designed graphics and visual communications for outreach",
    ],
    tags: [
      ["Adobe Premiere", "Photoshop"],
      ["Video Production", "Graphic Design"],
    ],
    color: "from-pink-500/20 to-rose-500/20",
    date: "Sep 2025 - Present",
  },
  {
    title: "International Culture Fest 2024",
    description: [
      "Co-organized the largest festival in Southwestern New Brunswick",
      "Managed event with over 10,000 participants",
      "Coordinated logistics and volunteer teams",
      "Programmed multi-cultural activities and performances",
    ],
    tags: [
      ["Event Coordination", "Communication"],
      ["Teamwork", "Leadership"],
    ],
    color: "from-purple-500/20 to-violet-500/20",
    date: "Jun - Aug 2024",
    image: cultureFestImg,
  },
];

type Project = {
  title: string;
  description: string[];
  tags: string[][];
  color: string;
  date: string;
  image?: string;
};

const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
  <div 
    key={index}
    className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300"
  >
    {/* Project preview area */}
    <div className={`aspect-video bg-gradient-to-br ${project.color} flex items-center justify-center overflow-hidden`}>
      {project.image ? (
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      ) : (
        <span className="text-4xl opacity-50 group-hover:opacity-80 transition-opacity">🖼️</span>
      )}
    </div>
    
    {/* Content */}
    <div className="p-6">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-display text-xl font-semibold group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <span className="text-xs text-primary">{project.date}</span>
      </div>
      
      {/* Bullet point description */}
      <ul className="text-muted-foreground mb-4 text-sm list-disc list-inside space-y-1">
        {project.description.map((point, pointIndex) => (
          <li key={pointIndex}>{point}</li>
        ))}
      </ul>
      
      {/* Tags on separate lines */}
      <div className="flex flex-col gap-2 mb-4">
        {project.tags.map((tagRow, rowIndex) => (
          <div key={rowIndex} className="flex flex-wrap gap-2">
            {tagRow.map((tag, tagIndex) => (
              <span 
                key={tagIndex}
                className="px-3 py-1 text-xs font-medium bg-secondary rounded-full text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
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
