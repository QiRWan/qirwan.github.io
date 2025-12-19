import { Mail, MapPin, Phone } from "lucide-react";
import rockClimbingImg from "@/assets/rock-climbing.jpeg";
import scubaDivingImg from "@/assets/scuba-diving.jpg";
import skiingImg from "@/assets/skiing.jpeg";

const hobbies = [
  {
    title: "Rock Climbing",
    description: "Conquering walls and pushing limits",
    image: rockClimbingImg,
  },
  {
    title: "Scuba Diving",
    description: "Exploring underwater worlds",
    image: scubaDivingImg,
  },
  {
    title: "Skiing",
    description: "Carving through fresh powder",
    image: skiingImg,
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
              className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 hover:shadow-card transition-all group"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={hobby.image} 
                  alt={hobby.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="font-display text-xl font-semibold mb-2">{hobby.title}</h3>
                <p className="text-muted-foreground">{hobby.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="bg-card border border-border rounded-2xl p-8">
          <h3 className="font-display text-2xl font-semibold text-center mb-8">Get In Touch</h3>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
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
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="text-foreground font-medium">Toronto, ON</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                </svg>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">University</p>
                <p className="text-foreground font-medium">University of Toronto</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalSection;
