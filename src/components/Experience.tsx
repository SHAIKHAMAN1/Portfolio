import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const experiences = [
    {
      title: "Project Trainee @BARC",
      description: "Developed a probabilistic model to measure the void fraction(%) of reactors for accurate measures.",
      icon: "👨‍💻",
      color: "from-orange-500 to-pink-500"
    },
    {
      title: "Insys Technologies", 
      description: "Carried out scanning for small websites and reported and documented encountered bugs.",
      icon: "📊",
      color: "from-purple-500 to-blue-500"
    },
    {
      title: "Freelance Web Project",
      description: "Developed a Fullstack website for a Trekking business establishing their online presence and boosting sales.",
      icon: "🌐",
      color: "from-pink-500 to-yellow-500"
    },
    {
      title: "Oytie Web Dev Intern",
      description: "Developed a student record system for an academic institution.",
      icon: "👨‍💼", 
      color: "from-blue-500 to-purple-500"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A journey through my professional experience in AI development, 
            web development, and technology consulting.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((experience, index) => (
            <Card 
              key={experience.title}
              className="group p-6 shadow-card hover:shadow-2xl transition-all duration-500 border-border/50 bg-card/50 backdrop-blur-sm animate-scale-in hover:scale-105"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-0">
                <div className="flex items-start gap-4">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${experience.color} flex items-center justify-center text-2xl shadow-lg flex-shrink-0`}>
                    {experience.icon}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {experience.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {experience.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;