import { Mail, MapPin, Phone } from "lucide-react";
import rockClimbingImg from "@/assets/rock-climbing.jpeg";
import scubaDivingImg from "@/assets/scuba-diving.jpg";
import skiingImg from "@/assets/skiing.jpeg";

const ChessQueenIcon = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full" fill="currentColor">
    <circle cx="50" cy="12" r="8" />
    <circle cx="20" cy="20" r="6" />
    <circle cx="80" cy="20" r="6" />
    <circle cx="8" cy="35" r="5" />
    <circle cx="92" cy="35" r="5" />
    <path d="M8 40 L20 70 L50 55 L80 70 L92 40 L70 50 L50 20 L30 50 Z" />
    <path d="M15 72 L85 72 L80 85 L20 85 Z" />
    <rect x="15" y="87" width="70" height="8" rx="2" />
  </svg>
);

type HobbyItem = {
  title: string;
  image?: string;
  isIcon?: boolean;
};

const hobbies: HobbyItem[] = [
  {
    title: "Rock Climbing",
    image: rockClimbingImg,
  },
  {
    title: "Scuba Diving",
    image: scubaDivingImg,
  },
  {
    title: "Skiing",
    image: skiingImg,
  },
  {
    title: "Chess",
    isIcon: true,
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {hobbies.map((hobby) => (
            <div
              key={hobby.title}
              className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 hover:shadow-card transition-all group"
            >
              <div className="aspect-square overflow-hidden flex items-center justify-center bg-secondary/30">
                {hobby.isIcon ? (
                  <div className="w-2/3 h-2/3 text-primary">
                    <ChessQueenIcon />
                  </div>
                ) : (
                  <img 
                    src={hobby.image} 
                    alt={hobby.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                )}
              </div>
              <div className="p-4 text-center">
                <h3 className="font-display text-lg font-semibold">{hobby.title}</h3>
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
