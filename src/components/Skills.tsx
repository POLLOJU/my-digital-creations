import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      category: "Mobile Development",
      skills: ["React Native", "Android Development", "iOS Development", "Kotlin"],
    },
    {
      category: "Web Development",
      skills: ["React", "TypeScript", "Node.js", "Material UI"],
    },
    {
      category: "AI & Data Science",
      skills: ["Computer Vision", "PyTorch", "Prompt Engineering", "Python"],
    },
    {
      category: "Database & Tools",
      skills: ["SQLite", "REST APIs", "Git", "Cloud Services"],
    },
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="absolute inset-0 bg-card/30"></div>
      
      <div className="container relative z-10 px-4 md:px-6">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-[image:var(--gradient-primary)]">
              Skills & Technologies
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for building modern applications
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="bg-card/50 backdrop-blur-sm border-primary/40 hover:border-primary transition-all duration-300 hover:shadow-[var(--shadow-glow)] animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 space-y-4">
                  <h3 className="font-semibold text-lg text-accent">
                    {category.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="outline"
                        className="px-3 py-1 bg-primary/5 border-primary/30 hover:bg-primary/10 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;