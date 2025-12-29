import { Github, Linkedin, Mail, Download, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  { icon: Github, href: "https://github.com/pradeep-s", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/pradeep-s", label: "LinkedIn" },
  { icon: Mail, href: "mailto:pradeep.sabarinathan@email.com", label: "Email" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a
              href="#"
              className="text-2xl font-bold text-primary hover:text-accent transition-colors"
            >
              PS<span className="text-accent">.</span>
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              © {currentYear} Pradeep Sabarinathan. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-accent/10 hover:text-accent transition-colors"
                aria-label={link.label}
              >
                <link.icon size={18} />
              </a>
            ))}
          </div>

          {/* Resume Download */}
          <Button variant="outline" size="sm" asChild>
            <a href="#" download>
              <Download size={16} />
              Download Resume
            </a>
          </Button>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
            Built with <Heart size={14} className="text-accent" /> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
