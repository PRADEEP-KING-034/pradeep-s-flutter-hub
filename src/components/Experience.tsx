import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Flutter Developer Intern",
    company: "NPT Solutions",
    period: "Ongoing • 1 month",
    description: [
      "Developing Flutter applications with modern architecture",
      "Working with MVVM architecture patterns",
      "Firebase integration (Authentication & Firestore)",
      "UI implementation and bug fixing",
      "Version control using Git/GitHub",
    ],
    current: true,
  },
  {
    title: "Data Annotation Analyst Intern",
    company: "Techjays",
    period: "Previous",
    description: [
      "Image and video annotation using CVAT and Labelbox",
      "Bounding boxes, keypoints, and segmentation tasks",
      "Quality-checked datasets for computer vision models",
      "Maintained high accuracy standards for AI training data",
    ],
    current: false,
  },
  {
    title: "Process Executive (NLP)",
    company: "Mahindra Next Wealth IT",
    period: "Previous",
    description: [
      "Evaluated AI-generated responses for quality",
      "Assigned annotation labels for NLP models",
      "Improved AI response quality using customer-centric analysis",
      "Contributed to model fine-tuning processes",
    ],
    current: false,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-accent rounded-full mx-auto mb-8" />
          <p className="text-muted-foreground text-lg">
            My professional journey in software development and AI
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden sm:block" />

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative flex gap-6">
                  {/* Timeline dot */}
                  <div className="hidden sm:flex flex-shrink-0 w-16 h-16 rounded-full bg-card border-2 border-border items-center justify-center z-10">
                    <Briefcase
                      className={`w-6 h-6 ${
                        exp.current ? "text-accent" : "text-muted-foreground"
                      }`}
                    />
                  </div>

                  {/* Content */}
                  <div
                    className={`flex-1 p-6 rounded-xl border transition-all duration-300 ${
                      exp.current
                        ? "bg-accent/5 border-accent/30 shadow-lg"
                        : "bg-card border-border hover:border-accent/30 hover:shadow-md"
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-primary">
                          {exp.title}
                        </h3>
                        <p className="text-accent font-medium">{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar size={14} />
                        <span>{exp.period}</span>
                        {exp.current && (
                          <span className="px-2 py-0.5 text-xs font-medium bg-accent/20 text-accent rounded-full">
                            Current
                          </span>
                        )}
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-sm text-muted-foreground"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
