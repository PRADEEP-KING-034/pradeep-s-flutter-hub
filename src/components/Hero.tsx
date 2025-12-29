import { ArrowDown, Download, Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-accent/20 rounded-full blur-[100px] animate-pulse-soft" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse-soft" />

      <div className="container relative z-10 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-8 animate-fade-up opacity-0 stagger-1">
            <Sparkles size={16} />
            <span>Open to opportunities</span>
          </div>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-primary mb-4 animate-fade-up opacity-0 stagger-2">
            Pradeep Sabarinathan
          </h1>

          {/* Title */}
          <p className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 animate-fade-up opacity-0 stagger-3">
            <span className="text-gradient">Flutter App Developer</span>
            <span className="text-muted-foreground"> | </span>
            <span className="text-muted-foreground">Data Annotation Analyst</span>
          </p>

          {/* Description */}
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up opacity-0 stagger-4">
            Flutter developer with hands-on internship experience building cross-platform mobile apps.
            Also experienced in data annotation and AI training using CVAT and Labelbox.
            Passionate about clean architecture, scalable apps, and AI-driven systems.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up opacity-0 stagger-5">
            <Button variant="hero" size="lg" asChild>
              <a href="#projects">
                View Projects
                <ArrowDown size={18} />
              </a>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <a href="#contact">
                <Mail size={18} />
                Contact Me
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#" download>
                <Download size={18} />
                Download Resume
              </a>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 animate-float">
          <span className="text-xs text-muted-foreground">Scroll</span>
          <div className="w-5 h-8 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-1">
            <div className="w-1 h-2 bg-accent rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
