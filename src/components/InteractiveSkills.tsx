import { useState } from "react";
import { X, Plus, ExternalLink } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";

interface Project {
  id: string;
  title: string;
  description: string;
}

interface Skill {
  name: string;
  category: string;
  projects: Project[];
}

const skillsData: Skill[] = [
  {
    name: "Verilog",
    category: "Hardware",
    projects: [
      { id: "1", title: "FPGA Signal Processor", description: "Real-time signal processing on Xilinx FPGA" },
      { id: "2", title: "UART Controller", description: "Custom UART communication module" },
    ],
  },
  {
    name: "C++",
    category: "Programming",
    projects: [
      { id: "3", title: "Game Engine", description: "Custom 2D game engine with physics" },
      { id: "4", title: "Data Structures Library", description: "Optimized implementations of common data structures" },
    ],
  },
  {
    name: "Python",
    category: "Programming",
    projects: [
      { id: "5", title: "ML Image Classifier", description: "CNN-based image classification system" },
      { id: "6", title: "Automation Scripts", description: "Workflow automation tools" },
    ],
  },
  {
    name: "Adobe Illustrator",
    category: "Design",
    projects: [
      { id: "7", title: "Brand Identity", description: "Complete branding for tech startup" },
      { id: "8", title: "Icon Set", description: "Custom icon library with 200+ icons" },
    ],
  },
  {
    name: "React",
    category: "Web",
    projects: [
      { id: "9", title: "Dashboard App", description: "Analytics dashboard with real-time data" },
      { id: "10", title: "E-commerce Platform", description: "Full-stack shopping experience" },
    ],
  },
  {
    name: "TypeScript",
    category: "Programming",
    projects: [
      { id: "11", title: "API Library", description: "Type-safe REST API wrapper" },
    ],
  },
  {
    name: "Figma",
    category: "Design",
    projects: [
      { id: "12", title: "Design System", description: "Complete component library" },
      { id: "13", title: "Mobile App UI", description: "iOS app redesign" },
    ],
  },
  {
    name: "Node.js",
    category: "Backend",
    projects: [
      { id: "14", title: "REST API", description: "Scalable backend for mobile app" },
    ],
  },
  {
    name: "MATLAB",
    category: "Engineering",
    projects: [
      { id: "15", title: "Control Systems", description: "PID controller simulation" },
    ],
  },
  {
    name: "Git",
    category: "Tools",
    projects: [],
  },
  {
    name: "Docker",
    category: "DevOps",
    projects: [
      { id: "16", title: "Microservices", description: "Containerized application deployment" },
    ],
  },
  {
    name: "PostgreSQL",
    category: "Database",
    projects: [],
  },
];

const categoryColors: Record<string, string> = {
  Hardware: "bg-blue-100 text-blue-700 border-blue-200 hover:bg-blue-200",
  Programming: "bg-emerald-100 text-emerald-700 border-emerald-200 hover:bg-emerald-200",
  Design: "bg-pink-100 text-pink-700 border-pink-200 hover:bg-pink-200",
  Web: "bg-violet-100 text-violet-700 border-violet-200 hover:bg-violet-200",
  Backend: "bg-amber-100 text-amber-700 border-amber-200 hover:bg-amber-200",
  Engineering: "bg-cyan-100 text-cyan-700 border-cyan-200 hover:bg-cyan-200",
  Tools: "bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200",
  DevOps: "bg-orange-100 text-orange-700 border-orange-200 hover:bg-orange-200",
  Database: "bg-indigo-100 text-indigo-700 border-indigo-200 hover:bg-indigo-200",
};

const InteractiveSkills = () => {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleSkillClick = (skill: Skill) => {
    setSelectedSkill(skill);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => setSelectedSkill(null), 300);
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
          {Object.entries(categoryColors).slice(0, 5).map(([category, colorClass]) => (
            <div key={category} className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className={`w-3 h-3 rounded-full ${colorClass.split(" ")[0]}`} />
              <span>{category}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Side panel */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent className="w-full sm:max-w-lg bg-background border-l border-border">
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
              <div className="space-y-3">
                {selectedSkill?.projects.map((project) => (
                  <div
                    key={project.id}
                    className="p-4 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-card transition-all group cursor-pointer"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {project.title}
                        </h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          {project.description}
                        </p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
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
