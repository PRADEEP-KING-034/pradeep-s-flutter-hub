import { GraduationCap, Award } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-20 md:py-28">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Education
          </h2>
          <div className="w-20 h-1 bg-gradient-accent rounded-full mx-auto" />
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="p-8 bg-card rounded-2xl border border-border hover:shadow-lg transition-all duration-300">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-8 h-8 text-accent" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-primary mb-1">
                  B.E. Biomedical Engineering
                </h3>
                <p className="text-accent font-medium mb-3">
                  Nandha Engineering College, Erode
                </p>
                <div className="flex items-center gap-2 mb-4">
                  <Award className="w-4 h-4 text-accent" />
                  <span className="text-lg font-semibold text-primary">
                    CGPA: 8.631
                  </span>
                </div>
                <p className="text-muted-foreground text-sm">
                  Strong foundation in biomedical systems, signal processing, and 
                  medical instrumentation. Developed analytical and problem-solving 
                  skills that translate well to software development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
