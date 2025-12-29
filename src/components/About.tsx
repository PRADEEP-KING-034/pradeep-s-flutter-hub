import { GraduationCap, Target, Lightbulb, Rocket } from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "Biomedical Background",
    description: "B.E. in Biomedical Engineering with strong analytical skills",
  },
  {
    icon: Target,
    title: "Flutter Focused",
    description: "Passionate about building beautiful cross-platform apps",
  },
  {
    icon: Lightbulb,
    title: "AI Experience",
    description: "Data annotation for computer vision and NLP projects",
  },
  {
    icon: Rocket,
    title: "Quick Learner",
    description: "Self-motivated problem solver with growth mindset",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-secondary/30">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-accent rounded-full mx-auto mb-8" />
          <p className="text-muted-foreground leading-relaxed text-lg">
            I'm a passionate developer with a background in Biomedical Engineering, 
            now focused on mobile app development using Flutter. My journey has taken 
            me through diverse experiences in data annotation and AI training, giving 
            me a unique perspective on building intelligent, user-centric applications.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className="group p-6 bg-card rounded-xl border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <item.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-primary mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto">
          <div className="p-8 bg-card rounded-2xl border border-border">
            <h3 className="text-xl font-semibold text-primary mb-4">
              Career Goal
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              My goal is to grow as a Flutter Developer while contributing to 
              AI/ML projects. I believe in building scalable, maintainable applications 
              with clean architecture that solve real-world problems. I'm actively 
              seeking opportunities where I can combine my mobile development skills 
              with my experience in AI data annotation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
