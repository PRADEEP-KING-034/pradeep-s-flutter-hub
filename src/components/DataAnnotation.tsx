import { Database, Eye, Tag, CheckCircle } from "lucide-react";

const capabilities = [
  "Image & video dataset annotation",
  "Bounding box annotation for object detection",
  "Keypoint annotation for pose estimation",
  "Semantic & instance segmentation",
  "NLP text annotation & evaluation",
  "Quality assurance for training data",
];

const tools = [
  { name: "CVAT", description: "Computer Vision Annotation Tool" },
  { name: "Labelbox", description: "Data Labeling Platform" },
];

export default function DataAnnotation() {
  return (
    <section className="py-20 md:py-28 bg-primary text-primary-foreground">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-medium mb-6">
            <Database size={16} />
            <span>Specialized Expertise</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            AI Data Annotation Experience
          </h2>
          <p className="text-primary-foreground/70 text-lg">
            Expertise in preparing high-quality datasets for machine learning models
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Capabilities */}
          <div className="p-8 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                <Eye className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">What I Do</h3>
            </div>
            <ul className="space-y-3">
              {capabilities.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-primary-foreground/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools & Value */}
          <div className="space-y-6">
            <div className="p-8 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                  <Tag className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-xl font-semibold">Tools I Use</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="p-4 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10"
                  >
                    <p className="font-semibold text-accent">{tool.name}</p>
                    <p className="text-sm text-primary-foreground/60">
                      {tool.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-xl bg-accent/20 border border-accent/30">
              <p className="text-sm font-medium text-accent mb-2">
                Ideal for AI startups & ML teams
              </p>
              <p className="text-primary-foreground/70 text-sm">
                Looking to contribute to computer vision or NLP projects that require
                high-quality training data for model development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
