import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-border/50">
      <div className="absolute inset-0 bg-[image:var(--gradient-secondary)]"></div>
      
      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="mailto:pollojukiran06@gmail.com"
              className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-all"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/pollojusaikiran"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-all"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/pollojusaikiran"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-muted-foreground">
            <p>&copy; {currentYear} Pollloju Sai Kiran. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;