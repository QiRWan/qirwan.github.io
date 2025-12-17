import { Mountain, Waves, Snowflake, Mail, MapPin, Phone } from "lucide-react";

const hobbies = [
  {
    icon: Mountain,
    title: "Rock Climbing",
    description: "Conquering walls and pushing limits",
    color: "bg-amber-100 text-amber-700",
  },
  {
    icon: Waves,
    title: "Scuba Diving",
    description: "Exploring underwater worlds",
    color: "bg-blue-100 text-blue-700",
  },
  {
    icon: Snowflake,
    title: "Skiing",
    description: "Carving through fresh powder",
    color: "bg-cyan-100 text-cyan-700",
  },
];

const PersonalSection = () => {
  return (
    <section id="personal" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">
            Beyond the Code
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            About Me
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            When I'm not engineering solutions, you'll find me chasing adventures outdoors.
          </p>
        </div>

        {/* Hobbies */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {hobbies.map((hobby) => (
            <div
              key={hobby.title}
              className="bg-card border border-border rounded-2xl p-8 text-center hover:border-primary/50 hover:shadow-card transition-all group"
            >
              <div className={`w-16 h-16 rounded-full ${hobby.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                <hobby.icon className="w-8 h-8" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">{hobby.title}</h3>
              <p className="text-muted-foreground">{hobby.description}</p>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="bg-card border border-border rounded-2xl p-8">
          <h3 className="font-display text-2xl font-semibold text-center mb-8">Get In Touch</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <a 
              href="mailto:Robinisqirong.wang@mail.utoronto.ca"
              className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="text-foreground font-medium text-sm">Robinisqirong.wang@mail.utoronto.ca</p>
              </div>
            </a>
            
            <a 
              href="tel:+18259869131"
              className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="text-foreground font-medium">(825) 986-9131</p>
              </div>
            </a>
            
            <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="text-foreground font-medium">Toronto, ON</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalSection;
