import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Globe, Zap, Mail } from "lucide-react";

const About = () => {
  const skillCategories = {
    Languages: ["C++", "JavaScript"],
    Backend: ["Node.js", "Express.js"],
    Frontend: ["HTML", "CSS", "React.js", "Next.js", "Tailwind CSS"],
    Tools: ["Git", "GitHub"],
  };

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - About content */}
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Tech enthusiast with a passion for{" "}
              <span className="text-gradient">development</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
             I'm a dedicated and adaptable developer who thrives on solving problems, continuously learning, and building high-quality software. I bring strong work ethic, attention to detail, and consistency to every project I take on.
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">I constantly try to improve</h3>
              <p className="text-lg text-gradient font-semibold mb-4">My tech stack</p>

              <div className="space-y-4">
                {Object.entries(skillCategories).map(([category, skills]) => (
                  <div key={category}>
                    <p className="font-medium mb-2">{category}</p>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="px-3 py-1 text-sm">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
                  <Code2 className="w-4 h-4" />
                </div>
                <span>Currently working on Full-Stack project</span>
              </div>

              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
                  <Globe className="w-4 h-4" />
                </div>
                <span>Available for freelance opportunities</span>
              </div>
            </div>
          </div>

          {/* Right side - CTA Card */}
          <div className="animate-scale-in">
            <Card className="p-8 gradient-secondary shadow-card border-border/50">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-primary" />
                </div>

                <h3 className="text-2xl font-bold mb-4">
                  Do you want to start a project together?
                </h3>

                <p className="text-muted-foreground mb-6">
                  Let's collaborate and bring your ideas to life with cutting-edge technology 
                  and innovative solutions.
                </p>

                <Button 
                  size="lg" 
                  className="gradient-primary glow-primary hover:scale-105 transition-all duration-300"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Copy my email
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
