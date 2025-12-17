import { useState } from "react";
import { Plus, ExternalLink } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies?: string[];
  date?: string;
}

interface Skill {
  name: string;
  category: string;
  projects: Project[];
}

const skillsData: Skill[] = [
  // Software Engineering
  {
    name: "Python",
    category: "Programming",
    projects: [
      { id: "1", title: "Data Analysis Scripts", description: "Using Pandas and NumPy for data processing and analysis" },
    ],
  },
  {
    name: "C++",
    category: "Programming",
    projects: [
      { id: "2", title: "Programming Fundamentals", description: "Core programming concepts and algorithms implementation" },
    ],
  },
  {
    name: "C#",
    category: "Programming",
    projects: [
      { id: "3", title: "Computer Fundamentals", description: "Foundational computer science concepts and applications" },
    ],
  },
  {
    name: "Java",
    category: "Programming",
    projects: [],
  },
  {
    name: "SQL",
    category: "Database",
    projects: [],
  },
  {
    name: "Verilog",
    category: "Hardware",
    projects: [
      { 
        id: "4", 
        title: "Verilog Wordle Game", 
        description: "Classic Wordle game implemented on FPGA",
        longDescription: "Implemented the classic Wordle game in Verilog on an FPGA board. Integrated PS/2 keyboard and VGA display, utilizing Finite State Machines to manage game states and data flow. Designed a Block RAM-based word database accessed via an LFSR to randomly select game words.",
        technologies: ["Verilog", "FPGA", "ModelSim", "Git"],
        date: "November - December 2025"
      },
    ],
  },
  {
    name: "MATLAB",
    category: "Engineering",
    projects: [],
  },
  // Developer Tools
  {
    name: "Git",
    category: "Tools",
    projects: [
      { id: "5", title: "Version Control", description: "Used for collaboration and version control across all projects" },
    ],
  },
  {
    name: "Spice",
    category: "Tools",
    projects: [],
  },
  {
    name: "ModelSim",
    category: "Tools",
    projects: [
      { id: "6", title: "Verilog Debugging", description: "Signal verification and logic correctness testing" },
    ],
  },
  {
    name: "Unix",
    category: "Tools",
    projects: [],
  },
  {
    name: "WordPress",
    category: "Tools",
    projects: [
      { id: "7", title: "Website Maintenance", description: "Maintained and updated recruitment website content" },
    ],
  },
  // Adobe Creative Suite
  {
    name: "Photoshop",
    category: "Design",
    projects: [
      { id: "8", title: "Promotional Materials", description: "Created promotional content for recruitment office" },
    ],
  },
  {
    name: "Lightroom",
    category: "Design",
    projects: [
      { id: "9", title: "Event Photography", description: "Post-processing for event documentation" },
    ],
  },
  {
    name: "Premiere Pro",
    category: "Design",
    projects: [],
  },
  {
    name: "InDesign",
    category: "Design",
    projects: [],
  },
  {
    name: "Audition",
    category: "Design",
    projects: [],
  },
  {
    name: "Figma",
    category: "Design",
    projects: [
      { 
        id: "10", 
        title: "Rainwater Harvesting Manual", 
        description: "User-friendly graphic manual for rural Philippines communities",
        longDescription: "Produced a user-friendly graphic manual using Figma, tailored to the average education level of local users to ensure ease of adoption and maintenance of the rainwater harvesting system.",
        technologies: ["Figma"],
        date: "May - July 2025"
      },
    ],
  },
  // Project Management
  {
    name: "Excel",
    category: "Management",
    projects: [
      { id: "11", title: "Competitor Analysis", description: "Gathered and analyzed competitor data to evaluate market" },
      { id: "12", title: "Project Timeline", description: "Managed project timelines using Gantt charts" },
    ],
  },
  {
    name: "PowerPoint",
    category: "Management",
    projects: [
      { id: "13", title: "Department Presentations", description: "Delivered audience analysis presentations" },
    ],
  },
  {
    name: "Gantt Chart",
    category: "Management",
    projects: [
      { 
        id: "14", 
        title: "Flowmeter Assembly Jig Project", 
        description: "Engineering project for Amico Patient Care Corporation",
        longDescription: "Worked in a team of six to engineer a flowmeter assembly jig for Amico Patient Care Corporation (APC). Managed project timeline using Gantt Chart, utilizing critical points to ensure milestones were met within the timeframe. Coordinated monthly meetings with client to discuss expectation and gain feedback. Effectively reduced cost by 64%, readjusted the shape to make it worker friendly, and ensured compliance with regulation.",
        technologies: ["Excel", "Gantt Chart", "AutoCAD"],
        date: "December 2024 – April 2025"
      },
    ],
  },
];

const categoryColors: Record<string, string> = {
  Hardware: "bg-blue-100 text-blue-700 border-blue-200 hover:bg-blue-200",
  Programming: "bg-emerald-100 text-emerald-700 border-emerald-200 hover:bg-emerald-200",
  Design: "bg-pink-100 text-pink-700 border-pink-200 hover:bg-pink-200",
  Engineering: "bg-cyan-100 text-cyan-700 border-cyan-200 hover:bg-cyan-200",
  Tools: "bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200",
  Database: "bg-indigo-100 text-indigo-700 border-indigo-200 hover:bg-indigo-200",
  Management: "bg-amber-100 text-amber-700 border-amber-200 hover:bg-amber-200",
};

const InteractiveSkills = () => {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleSkillClick = (skill: Skill) => {
    setSelectedSkill(skill);
    setIsOpen(true);
  };

  return (
    <section id="skills" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">
            Expertise
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Click on any skill to view related projects and experience.
          </p>
        </div>

        {/* Skills bubbles */}
        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {skillsData.map((skill) => (
            <button
              key={skill.name}
              onClick={() => handleSkillClick(skill)}
              className={`px-5 py-3 rounded-full border font-medium transition-all duration-200 hover:scale-105 hover:shadow-card cursor-pointer ${
                categoryColors[skill.category] || "bg-secondary text-foreground border-border hover:bg-muted"
              }`}
            >
              {skill.name}
              {skill.projects.length > 0 && (
                <span className="ml-2 text-xs opacity-70">({skill.projects.length})</span>
              )}
            </button>
          ))}
        </div>

        {/* Category legend */}
        <div className="flex flex-wrap justify-center gap-4 mt-12">
          {Object.entries(categoryColors).map(([category, colorClass]) => (
            <div key={category} className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className={`w-3 h-3 rounded-full ${colorClass.split(" ")[0]}`} />
              <span>{category}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Side panel */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent className="w-full sm:max-w-xl bg-background border-l border-border overflow-y-auto">
          <SheetHeader className="pb-6 border-b border-border">
            <div className="flex items-center gap-3">
              <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                categoryColors[selectedSkill?.category || ""] || "bg-secondary"
              }`}>
                {selectedSkill?.category}
              </div>
            </div>
            <SheetTitle className="text-2xl font-display">{selectedSkill?.name}</SheetTitle>
            <SheetDescription>
              {selectedSkill?.projects.length 
                ? `${selectedSkill.projects.length} project${selectedSkill.projects.length > 1 ? 's' : ''} using this skill`
                : "No projects added yet"
              }
            </SheetDescription>
          </SheetHeader>

          <div className="mt-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-foreground">Related Projects</h3>
              <button className="text-primary hover:text-primary/80 text-sm font-medium flex items-center gap-1">
                <Plus className="w-4 h-4" />
                Add Project
              </button>
            </div>

            {selectedSkill?.projects.length === 0 ? (
              <div className="py-12 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
                  <Plus className="w-6 h-6 text-muted-foreground" />
                </div>
                <p className="text-muted-foreground">No projects yet</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Add your first project for {selectedSkill?.name}
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {selectedSkill?.projects.map((project) => (
                  <div
                    key={project.id}
                    className="p-5 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-card transition-all"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="font-semibold text-foreground text-lg">
                        {project.title}
                      </h4>
                      <ExternalLink className="w-4 h-4 text-muted-foreground" />
                    </div>
                    
                    {project.date && (
                      <p className="text-xs text-primary mb-2">{project.date}</p>
                    )}
                    
                    <p className="text-muted-foreground mb-4">
                      {project.longDescription || project.description}
                    </p>
                    
                    {project.technologies && (
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="px-2 py-1 text-xs bg-secondary rounded-full text-muted-foreground">
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default InteractiveSkills;
