import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "PriceWise - Best time to buy products",
      description: "Price wise is a webscraping project that suggests the best time to buy amazon products",
      image: "/api/placeholder/400/300",
      tags: ["React", "TypeScript", "Material-UI", "Node.js"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Nike store",
      description: "A smooth sneaker store built using flutter.",
      image: "/api/placeholder/400/300", 
      tags: ["Flutter", "Dart", "Firebase", "Stripe"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "ChatPDF - Chat with your PDF",
      description: "A REAL Software-as-a-Service app with AI features that let's you talk with your PDF.",
      image: "/api/placeholder/400/300",
      tags: ["React", "TypeScript", "OpenAI", "Python"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Movie Recommendation System",
      description: "Don't know what to watch, I have your back, enter your favoriate movie and get similar recommendation.",
      image: "/api/placeholder/400/300",
      tags: ["Python", "Machine Learning", "Flask", "pandas"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            A small collection of{" "}
            <span className="text-gradient">My Recent Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in AI development,
            web development, and mobile app creation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className="group overflow-hidden shadow-card hover:shadow-2xl transition-all duration-500 border-border/50 bg-card/50 backdrop-blur-sm animate-scale-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-6xl opacity-20">💻</div>
                </div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <Button size="sm" variant="secondary" className="shadow-lg">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Site
                  </Button>
                  <Button size="sm" variant="outline" className="shadow-lg">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;