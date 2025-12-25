import { useState } from "react";
import { Code, Palette, Users, Camera } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";

// Photography images
import photo1 from "@/assets/photo-1.jpg";
import photo2 from "@/assets/photo-2.jpg";
import photo3 from "@/assets/photo-3.jpg";
import photo4 from "@/assets/photo-4.jpg";

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies?: string[];
  date?: string;
  images?: string[];
  linkedProject?: boolean;
}

interface Skill {
  name: string;
  category: string;
  projects: Project[];
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
  secondarySkills?: Skill[];
  colorScheme: string;
  secondaryColorScheme?: string;
  bgColor: string;
}

const computerEngineeringSkills: Skill[] = [
  { name: "Python", category: "Computer Engineering", projects: [{ id: "1", title: "Data Analysis Scripts", description: "Using Pandas and NumPy for data processing and analysis" }] },
  { name: "C++", category: "Computer Engineering", projects: [{ id: "2", title: "Relevant Courses: Programming Fundamentals", description: "Core programming concepts and algorithms implementation" }] },
  { name: "C#", category: "Computer Engineering", projects: [{ id: "3", title: "Relevant Courses: Computer Fundamentals", description: "Foundational computer science concepts and applications" }] },
  { name: "Java", category: "Computer Engineering", projects: [] },
  { name: "TypeScript / HTML / CSS", category: "Computer Engineering", projects: [{ id: "19", title: "This Website", description: "" }] },
  { name: "SQL", category: "Computer Engineering", projects: [] },
  { name: "MATLAB", category: "Computer Engineering", projects: [{ id: "20", title: "Relevant Courses: Linear Algebra", description: "Relevant course taken: Linear Algebra" }] },
  { name: "Verilog", category: "Computer Engineering", projects: [{ id: "verilog-wordle", title: "Verilog Wordle Game", description: "Implemented Classic Wordle game on FPGA with PS/2 keyboard and VGA display", linkedProject: true }] },
  { name: "Git", category: "Computer Engineering", projects: [{ id: "map-journal", title: "Interactive Map Web Journal App", description: "Used Git/GitHub for version control and pull-request-driven workflow", linkedProject: true }] },
  { name: "Spice", category: "Computer Engineering", projects: [{ id: "21", title: "Relevant Courses: Introductory Electronics", description: "" }] },
  { name: "ModelSim", category: "Computer Engineering", projects: [{ id: "verilog-wordle", title: "Verilog Wordle Game", description: "Wrote testbench files and utilized ModelSim to debug Verilog projects", linkedProject: true }] },
  { name: "Unix", category: "Computer Engineering", projects: [] },
];

const creativeToolsSkills: Skill[] = [
  { name: "Photoshop", category: "Creative & Productivity", projects: [{ id: "comm-av", title: "Communication & AudioVisual Projects", description: "Created promotional materials and graphics for student recruitment", linkedProject: true }] },
  { name: "Illustrator", category: "Creative & Productivity", projects: [] },
  { name: "Lightroom", category: "Creative & Productivity", projects: [{ id: "9", title: "Event Photography", description: "Post-processing for event documentation" }] },
  { name: "Premiere Pro", category: "Creative & Productivity", projects: [{ id: "comm-av", title: "Communication & AudioVisual Projects", description: "Developed video content for student recruitment initiatives", linkedProject: true }] },
  { name: "InDesign", category: "Creative & Productivity", projects: [] },
  { name: "Audition", category: "Creative & Productivity", projects: [] },
  { name: "Figma", category: "Creative & Productivity", projects: [{ id: "rainwater", title: "Rainwater Harvesting System", description: "Created a user-friendly graphic manual tailored to local users", linkedProject: true }] },
  { name: "Photography", category: "Creative & Productivity", projects: [{ id: "22", title: "Travel & Portrait Photography", description: "Capturing moments through street photography, portraits, and travel documentation", longDescription: "Passionate about visual storytelling through photography. Experienced in portrait, street, and travel photography using Sony cameras and Adobe Lightroom for post-processing.", technologies: ["Sony Camera", "Adobe Lightroom", "Photoshop"], images: [photo1, photo2, photo3, photo4] }] },
];

const productivityToolsSkills: Skill[] = [
  { name: "Excel", category: "Creative & Productivity", projects: [{ id: "flowmeter", title: "Flowmeter Assembly Jig", description: "Gathered and analyzed competitor data for market evaluation", linkedProject: true }] },
  { name: "PowerPoint", category: "Creative & Productivity", projects: [{ id: "13", title: "Department Presentations", description: "Delivered audience analysis presentations" }] },
  { name: "Gantt Chart", category: "Creative & Productivity", projects: [{ id: "flowmeter", title: "Flowmeter Assembly Jig", description: "Managed project timeline with Gantt Chart for engineering project", linkedProject: true }] },
];

const professionalSkills: Skill[] = [
  { name: "Communication", category: "Professional", projects: [{ id: "comm-av", title: "Communication & AudioVisual Projects", description: "Created promotional materials and multimedia content", linkedProject: true }] },
  { name: "Collaboration", category: "Professional", projects: [{ id: "rainwater", title: "Rainwater Harvesting System", description: "Worked in cross-functional teams for engineering internship", linkedProject: true }] },
  { name: "Client Relations", category: "Professional", projects: [{ id: "flowmeter", title: "Flowmeter Assembly Jig", description: "Coordinated monthly meetings with Amico Patient Care Corporation", linkedProject: true }] },
  { name: "Project Management", category: "Professional", projects: [{ id: "flowmeter", title: "Flowmeter Assembly Jig", description: "Led a team of six, managed timeline, reduced cost by 64%", linkedProject: true }] },
  { name: "Event Coordination", category: "Professional", projects: [{ id: "culture-fest", title: "International Culture Fest 2024", description: "Co-organized festival with over 10,000 participants", linkedProject: true }] },
];

const skillCategories: SkillCategory[] = [
  {
    title: "Computer Engineering",
    icon: <Code className="w-6 h-6" />,
    skills: computerEngineeringSkills,
    colorScheme: "bg-blue-100 text-blue-700 border-blue-200 hover:bg-blue-200",
    bgColor: "from-blue-500/10 to-cyan-500/10",
  },
  {
    title: "Creative Tools\n&\nProductivity",
    icon: <Palette className="w-6 h-6" />,
    skills: creativeToolsSkills,
    secondarySkills: productivityToolsSkills,
    colorScheme: "bg-pink-100 text-pink-700 border-pink-200 hover:bg-pink-200",
    secondaryColorScheme: "bg-purple-100 text-purple-700 border-purple-200 hover:bg-purple-200",
    bgColor: "from-pink-500/10 to-purple-500/10",
  },
  {
    title: "Professional Skills",
    icon: <Users className="w-6 h-6" />,
    skills: professionalSkills,
    colorScheme: "bg-amber-100 text-amber-700 border-amber-200 hover:bg-amber-200",
    bgColor: "from-amber-500/10 to-orange-500/10",
  },
];

const InteractiveSkills = () => {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleSkillClick = (skill: Skill) => {
    setSelectedSkill(skill);
    setIsOpen(true);
  };

  return (
    <section id="skills" className="py-32 px-8 md:px-16 lg:px-24">
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

        {/* Three skill boxes */}
        <div className="flex flex-col gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className={`p-6 rounded-2xl border border-border bg-gradient-to-br ${category.bgColor} backdrop-blur-sm`}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
                <div className="flex items-center gap-3 md:min-w-[200px] md:pt-2">
                  <div className={`p-2 rounded-lg ${category.colorScheme.split(" ").slice(0, 2).join(" ")}`}>
                    {category.icon}
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground whitespace-pre-line leading-tight">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-col gap-3 flex-1">
                  {/* Primary skills row */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <button
                        key={skill.name}
                        onClick={() => handleSkillClick(skill)}
                        className={`px-4 py-2 rounded-full border font-medium text-sm transition-all duration-200 hover:scale-105 hover:shadow-card cursor-pointer ${category.colorScheme}`}
                      >
                        {skill.name}
                      </button>
                    ))}
                  </div>
                  
                  {/* Secondary skills row (if exists) */}
                  {category.secondarySkills && (
                    <div className="flex flex-wrap gap-2">
                      {category.secondarySkills.map((skill) => (
                        <button
                          key={skill.name}
                          onClick={() => handleSkillClick(skill)}
                          className={`px-4 py-2 rounded-full border font-medium text-sm transition-all duration-200 hover:scale-105 hover:shadow-card cursor-pointer ${category.secondaryColorScheme || category.colorScheme}`}
                        >
                          {skill.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Side panel */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent className="w-full sm:max-w-xl bg-background border-l border-border overflow-y-auto">
          <SheetHeader className="pb-6 border-b border-border">
            <div className="flex items-center gap-3">
              <div className="px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
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
            {selectedSkill?.projects.length === 0 ? (
              <div className="py-12 text-center">
                <p className="text-muted-foreground">No details available yet.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {selectedSkill?.projects.map((project) => (
                  <div key={project.id} className="space-y-4">
                    {project.linkedProject ? (
                      <a 
                        href="#projects" 
                        onClick={() => setIsOpen(false)}
                        className="block p-4 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-200 group"
                      >
                        <h4 className="font-semibold text-foreground text-lg group-hover:text-primary transition-colors">
                          {project.title} →
                        </h4>
                        <p className="text-muted-foreground text-sm mt-1">
                          {project.description}
                        </p>
                      </a>
                    ) : (
                      <>
                        {project.title && project.title !== "This Website" && (
                          <h4 className="font-semibold text-foreground text-lg">
                            {project.title}
                          </h4>
                        )}
                        
                        {project.date && (
                          <p className="text-sm text-primary">{project.date}</p>
                        )}
                        
                        <p className="text-muted-foreground text-lg leading-relaxed">
                          {project.longDescription || project.description}
                        </p>
                        
                        {project.technologies && (
                          <div className="flex flex-wrap gap-2 pt-2">
                            {project.technologies.map((tech) => (
                              <span key={tech} className="px-3 py-1 text-sm bg-secondary rounded-full text-muted-foreground">
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}

                        {/* Photo gallery for skills with images */}
                        {project.images && project.images.length > 0 && (
                          <div className="flex flex-col gap-4 pt-4">
                            {project.images.map((img, idx) => (
                              <img
                                key={idx}
                                src={img}
                                alt={`Photography sample ${idx + 1}`}
                                className="w-full rounded-lg hover:scale-[1.02] transition-transform duration-300 cursor-pointer"
                              />
                            ))}
                          </div>
                        )}
                      </>
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
