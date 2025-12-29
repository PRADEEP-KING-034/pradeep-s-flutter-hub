import { Smartphone, Server, Brain } from "lucide-react";

const skillCategories = [
  {
    title: "Flutter & App Development",
    icon: Smartphone,
    skills: [
      { name: "Flutter", level: 85 },
      { name: "Dart", level: 80 },
      { name: "Firebase Auth", level: 75 },
      { name: "Firestore", level: 75 },
      { name: "MVVM Architecture", level: 70 },
      { name: "REST APIs", level: 65 },
      { name: "Git & GitHub", level: 80 },
    ],
  },
  {
    title: "Backend & Tools",
    icon: Server,
    skills: [
      { name: "Python", level: 70 },
      { name: "Django", level: 60 },
      { name: "Selenium", level: 65 },
      { name: "Firebase", level: 75 },
    ],
  },
  {
    title: "Data Annotation & AI",
    icon: Brain,
    skills: [
      { name: "CVAT", level: 85 },
      { name: "Labelbox", level: 85 },
      { name: "Bounding Box", level: 90 },
      { name: "Keypoint Annotation", level: 85 },
      { name: "Segmentation", level: 80 },
      { name: "NLP Evaluation", level: 75 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 bg-secondary/30">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-gradient-accent rounded-full mx-auto mb-8" />
          <p className="text-muted-foreground text-lg">
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <category.icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-semibold text-primary">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-sm font-medium text-foreground">
                        {skill.name}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-accent rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
