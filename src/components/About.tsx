import { GraduationCap, Briefcase, Award } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">
            About Me
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Education & Experience
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Work Experience - Now first */}
          <div className="bg-card border border-border rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold">Work Experience</h3>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-foreground">Recruitment & Outreach Communication Assistant</h4>
                <p className="text-primary text-sm">Engineering Student Recruitment Office, UofT</p>
                <p className="text-xs text-muted-foreground mb-2">September 2025 – Present</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Maintained website using WordPress</li>
                  <li>• Competitor data analysis with Excel</li>
                  <li>• Event photography & promotional materials</li>
                </ul>
              </div>
              
              <div className="pt-4 border-t border-border">
                <h4 className="font-semibold text-foreground">Engineering Intern</h4>
                <p className="text-primary text-sm">Humanitarian Technology Program, Lingnan University</p>
                <p className="text-xs text-muted-foreground mb-2">May – July 2025</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Designed rainwater harvesting system for rural Philippines</li>
                  <li>• Created user-friendly graphic manual with Figma</li>
                  <li>• Conducted on-site field research and feasibility studies</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education - Now second */}
          <div className="bg-card border border-border rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold">Education</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground">University of Toronto</h4>
                <p className="text-primary text-sm">Sep. 2024 – Apr. 2029 (expected)</p>
                <p className="text-muted-foreground mt-2">
                  B.A.Sc. in Computer Engineering + PEY Co-op
                </p>
                <p className="text-muted-foreground">cGPA: 3.83</p>
              </div>
              
              <div className="flex items-start gap-2 pt-4 border-t border-border">
                <Award className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-foreground">Pauline Wong Global Engineering Fellowships</p>
                  <p className="text-sm text-muted-foreground">Dean's Honor List Scholar</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Relevant Courses */}
        <div className="mt-8 bg-card border border-border rounded-2xl p-8">
          <h3 className="font-display text-xl font-semibold mb-6">Relevant Courses</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-medium text-primary text-sm mb-3">Engineering Design</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>Engineering Strategies & Practice</li>
                <li>Software Design and Communication</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-primary text-sm mb-3">Computer Engineering</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>Computer Fundamentals (C#)</li>
                <li>Programming Fundamentals (C++)</li>
                <li>Computer Organization</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-primary text-sm mb-3">Electrical Engineering</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>Digital Systems (Verilog)</li>
                <li>Circuit Analysis</li>
                <li>Signals and Systems</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
