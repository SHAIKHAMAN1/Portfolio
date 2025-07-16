// components/Projects.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Spotify(Clone)",
      description:
        "Fully functional music streaming web app built using HTML, CSS, and JavaScript. Features include music playback controls, playlist management, and a responsive UI.",
      image: "/images/1.jpg",
      tags: ["HTML", "CSS", "JavaScript"],
      liveUrl: "#",
      githubUrl: "https://github.com/SHAIKHAMAN1/Spotify-",
    },
    {
      title: "Portfolio Website",
      description:
        "A modern portfolio built with Next.js, featuring smooth animations, responsive design, and project showcases.",
      image: "/images/2.png",
      tags: ["Next.js", "React"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Swiggy",
      description:
        "Developed a Swiggy clone using React, integrating APIs for browsing restaurants and viewing menu items.",
      image: "/images/3.png",
      tags: ["React", "APIs"],
      liveUrl: "#",
      githubUrl: "https://github.com/SHAIKHAMAN1/Swiggy",
    },
    {
      title: "Subscription Tracker",
      description:
        "Backend project using Node.js and MongoDB to manage and track user subscriptions via RESTful APIs.",
      image: "/images/4.jpg",
      tags: ["Node.js", "Express.js", "MongoDB", "Mongoose", "REST API", "JWT Auth"],
      liveUrl: "#",
      githubUrl: "https://github.com/SHAIKHAMAN1/Subscription-Tracker",
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            A small collection of <span className="text-gradient">My Recent Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in web development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="relative opacity-0 animate-fade-in"
              style={{
                animationDelay: `${index * 200}ms`,
                animationFillMode: "forwards",
              }}
            >
              {/* Glow rotating border dot */}
              <Card className="group overflow-hidden neon-border shadow-card hover:shadow-2xl transition-all duration-500 border-border/50 bg-card/50 backdrop-blur-sm relative z-10">
                <div className="border-glow-rotate" />

                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    {project.liveUrl !== "#" && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <Button
                          size="sm"
                          variant="secondary"
                          className="shadow-lg transition-transform duration-300 hover:scale-105"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Site
                        </Button>
                      </a>
                    )}
                    {project.githubUrl !== "#" && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Button
                          size="sm"
                          variant="outline"
                          className="shadow-lg transition-transform duration-300 hover:scale-105"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Button>
                      </a>
                    )}
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
