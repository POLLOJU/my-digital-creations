import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Smartphone, Globe } from "lucide-react";

type ProjectType = "mobile" | "web" | "personal";

interface Project {
  title: string;
  description: string;
  type: ProjectType;
  company?: string;
  technologies: string[];
  imageUrl?: string;
}

const Projects = () => {
  const [filter, setFilter] = useState<ProjectType | "all">("all");

  const projects: Project[] = [
    // Bintix Mobile Apps
    {
      title: "Agent App",
      description: "Streamlined waste logistics across 7 metro cities with Bluetooth-enabled weighing, AI-based blur detection, and high-speed QR scanning.",
      type: "mobile",
      company: "Bintix",
      technologies: ["React Native", "AI/ML", "Bluetooth", "QR Scanning"],
    },
    {
      title: "Customer App",
      description: "Dynamic survey modules, chatbot integration, location-based security. Deployed to Play Store and App Store.",
      type: "mobile",
      company: "Bintix",
      technologies: ["React Native", "Chatbot", "Location Services"],
    },
    {
      title: "Scanning App",
      description: "Lightweight scanning app with real-time barcode validation and clean UI for efficient operations.",
      type: "mobile",
      company: "Bintix",
      technologies: ["React Native", "Barcode Scanning", "Real-time Validation"],
    },
    {
      title: "CFM Agent App",
      description: "Client-side waste operations management app with comprehensive tracking and reporting features.",
      type: "mobile",
      company: "Bintix",
      technologies: ["React Native", "Operations Management", "Reporting"],
    },
    // Bintix Web Apps
    {
      title: "Binsights",
      description: "Comprehensive data analytics platform with interactive visualizations and real-time insights for waste management operations.",
      type: "web",
      company: "Bintix",
      technologies: ["React", "Material UI", "Highcharts", "TypeScript"],
    },
    {
      title: "Bintellegence",
      description: "Intelligence dashboard featuring advanced analytics, predictive models, and business intelligence tools.",
      type: "web",
      company: "Bintix",
      technologies: ["React", "Material UI", "Data Visualization", "TypeScript"],
    },
    {
      title: "Profiling Portal",
      description: "Internal portal for user and data profiling with modern UI/UX and comprehensive management features.",
      type: "web",
      company: "Bintix",
      technologies: ["React", "Material UI", "TypeScript"],
    },
    {
      title: "Master Admin",
      description: "Centralized administration platform for managing all system operations, users, and configurations.",
      type: "web",
      company: "Bintix",
      technologies: ["React", "Material UI", "Admin Tools", "TypeScript"],
    },
    // Personal Projects
    {
      title: "Twitter Clone",
      description: "Full-featured backend project implementing Twitter-like functionality with RESTful APIs and Node.js.",
      type: "personal",
      technologies: ["Node.js", "REST APIs", "Express", "MongoDB"],
    },
    {
      title: "Food Munch Restaurant",
      description: "Responsive web page for a restaurant with modern design, menu showcase, and online ordering interface.",
      type: "personal",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    },
    {
      title: "Toy Store Search App",
      description: "Serverless toy store built with Google Cloud services, featuring Vertex AI Search for intelligent product recommendations.",
      type: "personal",
      technologies: ["Cloud Run", "Firebase", "Vertex AI", "Google Cloud"],
    },
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.type === filter);

  const filters = [
    { value: "all", label: "All Projects" },
    { value: "mobile", label: "Mobile Apps" },
    { value: "web", label: "Web Apps" },
    { value: "personal", label: "Personal" },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 bg-[image:var(--gradient-secondary)]"></div>
      
      <div className="container relative z-10 px-4 md:px-6">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-[image:var(--gradient-primary)]">
              Projects
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Building impactful solutions across mobile and web platforms
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((f) => (
              <Button
                key={f.value}
                variant={filter === f.value ? "default" : "outline"}
                onClick={() => setFilter(f.value as typeof filter)}
                className={
                  filter === f.value
                    ? "bg-primary hover:bg-primary-glow shadow-[var(--shadow-glow)]"
                    : "border-primary/50 hover:bg-primary/10 hover:border-primary"
                }
              >
                {f.label}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <Card
                key={index}
                className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--shadow-glow)] group animate-fade-in-up overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 space-y-4">
                  {/* Project Icon & Type */}
                  <div className="flex items-start justify-between">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                      {project.type === "mobile" ? (
                        <Smartphone className="h-6 w-6" />
                      ) : (
                        <Globe className="h-6 w-6" />
                      )}
                    </div>
                    {project.company && (
                      <Badge variant="outline" className="bg-accent/10 text-accent border-accent/30">
                        {project.company}
                      </Badge>
                    )}
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="font-semibold text-xl group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <Badge
                        key={i}
                        variant="outline"
                        className="text-xs px-2 py-1 bg-primary/5 border-primary/30"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* View Project Button */}
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full group-hover:bg-primary/10 group-hover:text-primary transition-all"
                  >
                    View Details
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;