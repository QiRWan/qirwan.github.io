import { useState } from "react";
import { X, Plus, ExternalLink } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  images: string[];
  technologies: string[];
  link?: string;
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
      { 
        id: "1", 
        title: "FPGA Signal Processor", 
        description: "Real-time signal processing on Xilinx FPGA",
        longDescription: "Developed a high-performance signal processing system on a Xilinx Artix-7 FPGA. The project involved implementing FFT algorithms, digital filters, and real-time data streaming capabilities. Achieved processing speeds of over 100 MHz with minimal latency for audio and RF signal applications.",
        images: ["https://images.unsplash.com/photo-1518770660439-4636190af475?w=800", "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800"],
        technologies: ["Verilog", "Vivado", "FPGA", "DSP"],
        link: "https://github.com"
      },
    ],
  },
  {
    name: "C++",
    category: "Programming",
    projects: [
      { 
        id: "3", 
        title: "Game Engine", 
        description: "Custom 2D game engine with physics",
        longDescription: "Built a complete 2D game engine from scratch featuring a component-based architecture, physics simulation with collision detection, sprite rendering with batch optimization, and an event-driven input system. The engine supports custom shaders and includes a level editor.",
        images: ["https://images.unsplash.com/photo-1556438064-2d7646166914?w=800"],
        technologies: ["C++", "OpenGL", "SDL2", "Box2D"],
        link: "https://github.com"
      },
    ],
  },
  {
    name: "Python",
    category: "Programming",
    projects: [
      { 
        id: "5", 
        title: "ML Image Classifier", 
        description: "CNN-based image classification system",
        longDescription: "Created a convolutional neural network for image classification achieving 95% accuracy on custom datasets. Implemented data augmentation, transfer learning with ResNet, and deployed the model as a REST API for real-time predictions.",
        images: ["https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800"],
        technologies: ["Python", "TensorFlow", "Keras", "Flask"],
      },
    ],
  },
  {
    name: "Adobe Illustrator",
    category: "Design",
    projects: [
      { 
        id: "7", 
        title: "Brand Identity", 
        description: "Complete branding for tech startup",
        longDescription: "Designed a comprehensive brand identity system including logo, color palette, typography guidelines, business cards, letterheads, and social media templates. The modern minimalist aesthetic helped establish the startup's professional presence.",
        images: ["https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800", "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800"],
        technologies: ["Illustrator", "Photoshop", "InDesign"],
      },
    ],
  },
  {
    name: "React",
    category: "Web",
    projects: [
      { 
        id: "9", 
        title: "Dashboard App", 
        description: "Analytics dashboard with real-time data",
        longDescription: "Built a comprehensive analytics dashboard featuring real-time data visualization, interactive charts, customizable widgets, and dark mode support. Integrated with multiple data sources via REST APIs and WebSocket connections.",
        images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800"],
        technologies: ["React", "TypeScript", "Recharts", "TailwindCSS"],
        link: "https://github.com"
      },
    ],
  },
  {
    name: "TypeScript",
    category: "Programming",
    projects: [],
  },
  {
    name: "Figma",
    category: "Design",
    projects: [
      { 
        id: "12", 
        title: "Design System", 
        description: "Complete component library",
        longDescription: "Created an extensive design system with over 50 components, variant styles, auto-layout patterns, and documentation. The system improved design consistency across products and reduced design-to-development handoff time by 40%.",
        images: ["https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800"],
        technologies: ["Figma", "Design Tokens", "Auto Layout"],
      },
    ],
  },
  {
    name: "Node.js",
    category: "Backend",
    projects: [],
  },
  {
    name: "MATLAB",
    category: "Engineering",
    projects: [],
  },
  {
    name: "Git",
    category: "Tools",
    projects: [],
  },
  {
    name: "Docker",
    category: "DevOps",
    projects: [],
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

      {/* Side panel with full project view */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent className="w-full sm:max-w-2xl bg-background border-l border-border overflow-y-auto">
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

          <div className="mt-6">
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
              <div className="space-y-8">
                {selectedSkill?.projects.map((project) => (
                  <article key={project.id} className="space-y-6">
                    {/* Project Header */}
                    <div>
                      <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground">{project.description}</p>
                    </div>

                    {/* Project Images */}
                    {project.images.length > 0 && (
                      <div className="space-y-3">
                        <img 
                          src={project.images[0]} 
                          alt={project.title}
                          className="w-full h-64 object-cover rounded-xl"
                        />
                        {project.images.length > 1 && (
                          <div className="grid grid-cols-2 gap-3">
                            {project.images.slice(1).map((img, idx) => (
                              <img 
                                key={idx}
                                src={img} 
                                alt={`${project.title} ${idx + 2}`}
                                className="w-full h-32 object-cover rounded-lg"
                              />
                            ))}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Project Description */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">About this project</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.longDescription}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span 
                            key={tech}
                            className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Project Link */}
                    {project.link && (
                      <a 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        View Project
                      </a>
                    )}

                    {/* Divider between projects */}
                    {selectedSkill.projects.indexOf(project) < selectedSkill.projects.length - 1 && (
                      <hr className="border-border" />
                    )}
                  </article>
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
