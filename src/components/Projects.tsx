import { ExternalLink, Github, Smartphone, Globe, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  description: string;
  tech: string[];
  features: string[];
  icon: typeof Smartphone;
  color: string;
  isCurrent?: boolean;
}

const projects: Project[] = [
  {
    title: "Expense Tracker",
    description:
      "Feature-rich expense tracking app with analytics and budget management",
    tech: ["Flutter", "Dart", "Firebase", "Charts"],
    features: [
      "Track income & expenses",
      "Visual analytics & charts",
      "Budget management",
      "Category-wise tracking",
    ],
    icon: Smartphone,
    color: "from-amber-500 to-orange-500",
    isCurrent: true,
  },
  {
    title: "Personal Portfolio",
    description:
      "Modern portfolio app showcasing projects and skills with smooth animations",
    tech: ["Flutter", "Dart", "Animations"],
    features: [
      "Smooth UI animations",
      "Project showcase",
      "Contact integration",
      "Responsive design",
    ],
    icon: Smartphone,
    color: "from-violet-500 to-purple-500",
  },
  {
    title: "Messaging App",
    description:
      "WhatsApp-like messaging application with real-time chat features",
    tech: ["Flutter", "Dart", "Firebase"],
    features: [
      "User authentication",
      "Real-time messaging",
      "Data handling",
      "Clean UI design",
    ],
    icon: Smartphone,
    color: "from-emerald-500 to-teal-500",
  },
  {
    title: "ToDo Application",
    description:
      "Productivity-focused task management app with clean architecture",
    tech: ["Flutter", "MVVM", "Local Storage"],
    features: [
      "Add/edit/delete tasks",
      "MVVM architecture",
      "Clean UI",
      "Local persistence",
    ],
    icon: Smartphone,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "BMI Calculator",
    description: "Simple and intuitive BMI calculation tool with health insights",
    tech: ["Flutter", "Dart"],
    features: [
      "Height & weight input",
      "BMI calculation",
      "Health category display",
      "Simple UI",
    ],
    icon: Smartphone,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "BARD AI Web App",
    description:
      "AI-powered web application integrated with Google's Gemini API",
    tech: ["Django", "Python", "Gemini API", "HTML/CSS/JS"],
    features: [
      "AI chat interface",
      "Gemini API integration",
      "Django backend",
      "Responsive design",
    ],
    icon: Globe,
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Urinary Pouch Monitor",
    description:
      "Embedded systems project for medical monitoring with alerts",
    tech: ["Embedded Systems", "Sensors", "IoT"],
    features: [
      "Sensor integration",
      "Real-time monitoring",
      "Alert system",
      "Medical application",
    ],
    icon: Cpu,
    color: "from-indigo-500 to-violet-500",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-accent rounded-full mx-auto mb-8" />
          <p className="text-muted-foreground text-lg">
            A selection of projects I've worked on
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group p-6 bg-card rounded-xl border transition-all duration-300 ${
                project.isCurrent
                  ? "border-accent ring-2 ring-accent/20 shadow-lg"
                  : "border-border hover:border-accent/50 hover:shadow-xl"
              }`}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center`}
                >
                  <project.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex items-center gap-2">
                  {project.isCurrent && (
                    <span className="px-2 py-1 text-xs font-semibold bg-accent text-accent-foreground rounded-full animate-pulse">
                      In Progress
                    </span>
                  )}
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-2 rounded-lg bg-secondary hover:bg-accent/10 transition-colors">
                      <Github size={16} className="text-muted-foreground" />
                    </button>
                    <button className="p-2 rounded-lg bg-secondary hover:bg-accent/10 transition-colors">
                      <ExternalLink size={16} className="text-muted-foreground" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-primary mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {project.description}
              </p>

              {/* Features */}
              <ul className="space-y-1 mb-4">
                {project.features.slice(0, 3).map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-xs text-muted-foreground"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs font-medium bg-accent/10 text-accent rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
