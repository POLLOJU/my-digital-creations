import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Smartphone, Globe } from "lucide-react";

// Import project images
import agentAppImg from "@/assets/projects/agent-app.png";
import customerAppImg from "@/assets/projects/customer-app.png";
import scanningAppImg from "@/assets/projects/scanning-app.png";
import cfmAgentAppImg from "@/assets/projects/cfm-agent-app.png";
import binsightsImg from "@/assets/projects/binsights.png";
import bintellegenceImg from "@/assets/projects/bintellegence.png";
import profilingPortalImg from "@/assets/projects/profiling-portal.png";
import masterAdminImg from "@/assets/projects/master-admin.png";
import twitterCloneImg from "@/assets/projects/twitter-clone.png";
import foodMunchImg from "@/assets/projects/food-munch.png";
import toyStoreImg from "@/assets/projects/toy-store.png";

type ProjectType = "mobile" | "web";

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
      imageUrl: agentAppImg,
    },
    {
      title: "Customer App",
      description: "Dynamic survey modules, chatbot integration, location-based security. Deployed to Play Store and App Store.",
      type: "mobile",
      company: "Bintix",
      technologies: ["React Native", "Chatbot", "Location Services"],
      imageUrl: customerAppImg,
    },
    {
      title: "Scanning App",
      description: "Lightweight scanning app with real-time barcode validation and clean UI for efficient operations.",
      type: "mobile",
      company: "Bintix",
      technologies: ["React Native", "Barcode Scanning", "Real-time Validation"],
      imageUrl: scanningAppImg,
    },
    {
      title: "CFM Agent App",
      description: "Client-side waste operations management app with comprehensive tracking and reporting features.",
      type: "mobile",
      company: "Bintix",
      technologies: ["React Native", "Operations Management", "Reporting"],
      imageUrl: cfmAgentAppImg,
    },
    // Bintix Web Apps
    {
      title: "Binsights",
      description: "Comprehensive data analytics platform with interactive visualizations and real-time insights for waste management operations.",
      type: "web",
      company: "Bintix",
      technologies: ["React", "Material UI", "Highcharts", "TypeScript"],
      imageUrl: binsightsImg,
    },
    {
      title: "Bintellegence",
      description: "Intelligence dashboard featuring advanced analytics, predictive models, and business intelligence tools.",
      type: "web",
      company: "Bintix",
      technologies: ["React", "Material UI", "Data Visualization", "TypeScript"],
      imageUrl: bintellegenceImg,
    },
    {
      title: "Profiling Portal",
      description: "Internal portal for user and data profiling with modern UI/UX and comprehensive management features.",
      type: "web",
      company: "Bintix",
      technologies: ["React", "Material UI", "TypeScript"],
      imageUrl: profilingPortalImg,
    },
    {
      title: "Master Admin",
      description: "Centralized administration platform for managing all system operations, users, and configurations.",
      type: "web",
      company: "Bintix",
      technologies: ["React", "Material UI", "Admin Tools", "TypeScript"],
      imageUrl: masterAdminImg,
    },
    // Personal Projects
    {
      title: "Twitter Clone",
      description: "Full-featured backend project implementing Twitter-like functionality with RESTful APIs and Node.js.",
      type: "web",
      technologies: ["Node.js", "REST APIs", "Express", "MongoDB"],
      imageUrl: twitterCloneImg,
    },
    {
      title: "Food Munch Restaurant",
      description: "Responsive web page for a restaurant with modern design, menu showcase, and online ordering interface.",
      type: "web",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      imageUrl: foodMunchImg,
    },
    {
      title: "Toy Store Search App",
      description: "Serverless toy store built with Google Cloud services, featuring Vertex AI Search for intelligent product recommendations.",
      type: "web",
      technologies: ["Cloud Run", "Firebase", "Vertex AI", "Google Cloud"],
      imageUrl: toyStoreImg,
    },
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.type === filter);

  const filters = [
    { value: "all", label: "All Projects" },
    { value: "mobile", label: "Mobile Apps" },
    { value: "web", label: "Web Apps" },
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
            {filteredProjects.map((project, index) => {
              const isMobile = project.type === "mobile";
              
              return (
                <Card
                  key={index}
                  className={`bg-card/50 backdrop-blur-sm border-primary/40 hover:border-primary transition-all duration-300 hover:shadow-[var(--shadow-glow)] group animate-fade-in-up overflow-hidden ${
                    isMobile ? "md:col-span-1" : ""
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-0">
                    {/* Project Image */}
                    {project.imageUrl && (
                      <div className={`relative overflow-hidden ${isMobile ? 'bg-gradient-to-br from-primary/20 to-accent/20 p-8 flex items-center justify-center' : 'bg-muted/30'}`}>
                        <img
                          src={project.imageUrl}
                          alt={project.title}
                          className={`w-full object-cover transition-transform duration-300 group-hover:scale-105 ${
                            isMobile 
                              ? 'h-[320px] w-auto max-w-[180px] mx-auto rounded-2xl shadow-2xl' 
                              : 'h-[200px] object-top'
                          }`}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/20 to-transparent"></div>
                      </div>
                    )}

                    {/* Content Section */}
                    <div className="p-6 space-y-4">
                      {/* Project Icon & Type */}
                      <div className="flex items-start justify-between">
                        <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                          {isMobile ? (
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
                        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
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
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;