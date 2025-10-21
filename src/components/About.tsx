import { Award, Briefcase, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const experiences = [
    {
      icon: Briefcase,
      title: "Full Stack Engineer & App Developer",
      organization: "BINTIX (T-hub)",
      period: "June 2024 - Present",
      location: "Hyderabad, Telangana",
      highlights: [
        "Developed Agent App streamlining waste logistics across 7 metro cities",
        "Built Customer App with AI integration and deployed to both stores",
        "Created React web applications with complex data-driven UIs",
      ],
    },
    {
      icon: GraduationCap,
      title: "Computer Science and Engineering",
      organization: "Adikavi Nannaya University",
      period: "June 2020 - May 2024",
      location: "Rajamundry",
    },
  ];

  const awards = [
    "Qualified for Data Science Program for IITM (Indian Institute of Technology Madras)",
    "Third Prize for best Candidate for UPSKILL Program for AKNU",
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 bg-[image:var(--gradient-secondary)]"></div>
      
      <div className="container relative z-10 px-4 md:px-6">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-[image:var(--gradient-primary)]">
              About Me
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A journey of continuous growth and innovation in technology
            </p>
          </div>

          {/* Experience & Education */}
          <div className="grid md:grid-cols-2 gap-6">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="bg-card/50 backdrop-blur-sm border-primary/40 hover:border-primary transition-all duration-300 hover:shadow-[var(--shadow-glow)] animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      <exp.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <h3 className="font-semibold text-lg">{exp.title}</h3>
                      <p className="text-sm text-accent">{exp.organization}</p>
                      <p className="text-xs text-muted-foreground">
                        {exp.period} • {exp.location}
                      </p>
                    </div>
                  </div>
                  {exp.highlights && (
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Awards */}
          <Card className="bg-card/50 backdrop-blur-sm border-primary/40 hover:border-primary transition-all duration-300 hover:shadow-[var(--shadow-glow)] animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-lg bg-accent/10 text-accent">
                  <Award className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-xl">Awards & Recognition</h3>
              </div>
              <ul className="space-y-3 pl-14">
                {awards.map((award, index) => (
                  <li key={index} className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-accent mt-1">★</span>
                    <span>{award}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;