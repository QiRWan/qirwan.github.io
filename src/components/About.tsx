const About = () => {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image placeholder */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-secondary to-card overflow-hidden border border-border">
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-transparent flex items-center justify-center">
                <span className="text-6xl">👨‍💻</span>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/20 rounded-2xl -z-10" />
          </div>
          
          {/* Content */}
          <div>
            <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">
              About Me
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Passionate about creating impactful solutions
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              I'm a developer with a keen eye for design and a passion for building products that make a difference. With experience across the full stack, I bring ideas to life through clean code and thoughtful user experiences.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open source, or sharing knowledge with the community.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div>
                <p className="text-3xl font-display font-bold text-primary">5+</p>
                <p className="text-muted-foreground text-sm">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-display font-bold text-primary">50+</p>
                <p className="text-muted-foreground text-sm">Projects Completed</p>
              </div>
              <div>
                <p className="text-3xl font-display font-bold text-primary">30+</p>
                <p className="text-muted-foreground text-sm">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
