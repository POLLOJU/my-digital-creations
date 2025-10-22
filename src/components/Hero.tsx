import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpeg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-[image:var(--gradient-primary)] opacity-10"></div>
      <div className="absolute inset-0 bg-[image:var(--gradient-secondary)]"></div>
      
      {/* Glow effect */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-glow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-glow" style={{ animationDelay: "1s" }}></div>

      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8 animate-fade-in">
          {/* Profile Photo */}
          <div className="relative">
            <div className="absolute inset-0 bg-[image:var(--gradient-primary)] rounded-full blur-xl opacity-50"></div>
            <img
              src={profilePhoto}
              alt="Polloju Sai Kiran"
              className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-primary shadow-[var(--shadow-glow)] animate-float"
            />
          </div>

          {/* Name and Title */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-[image:var(--gradient-primary)]">
              Polloju Sai Kiran
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Full Stack Engineer & App Developer
            </p>
          </div>

          {/* Bio */}
          <p className="max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">
            Passionate about technology and continuous learning, with a strong focus on 
            innovative problem-solving. Driven to deliver impactful solutions that create 
            meaningful real-world value.
          </p>

          {/* Social Links */}
          <div className="flex gap-4">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-primary/50 hover:bg-primary/10 hover:border-primary transition-all"
              asChild
            >
              <a href="mailto:pollojukiran06@gmail.com" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-primary/50 hover:bg-primary/10 hover:border-primary transition-all"
              asChild
            >
              <a href="https://github.com/pollojusaikiran" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-primary/50 hover:bg-primary/10 hover:border-primary transition-all"
              asChild
            >
              <a href="https://linkedin.com/in/pollojusaikiran" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary-glow shadow-[var(--shadow-glow)] transition-all"
              onClick={() => scrollToSection("projects")}
            >
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/50 hover:bg-primary/10 hover:border-primary transition-all"
              onClick={() => scrollToSection("contact")}
            >
              Get In Touch
            </Button>
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={() => scrollToSection("about")}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
            aria-label="Scroll down"
          >
            <ArrowDown className="h-6 w-6 text-muted-foreground" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;