import { Card, CardContent } from "@/components/ui/card";

const Approach = () => {
  const phases = [
    {
      phase: "Phase 1",
      title: "Planning & Strategy",
      description: "We'll collaborate to map out your website's goals, target audience, and key functionalities. We'll discuss things like site structure, navigation, and content requirements."
    },
    {
      phase: "Phase 2", 
      title: "Development & Progress Update",
      description: "Once we agree on the plan, I cue my lofi playlist and dive into coding. From initial sketches to polished code, I keep you updated every step of the way."
    },
    {
      phase: "Phase 3",
      title: "Development & Launch",
      description: "This is where the magic happens! Based on the approved design, I'll translate everything into functional code, building your website from the ground up.",
      highlighted: true
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-gradient">Approach</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A systematic approach to bringing your digital vision to life through 
            careful planning, development, and deployment.
          </p>
        </div>

        <div className="relative">
          {/* Connection lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent transform -translate-y-1/2" />
          
          <div className="grid lg:grid-cols-3 gap-8 relative">
            {phases.map((phase, index) => (
              <div key={phase.phase} className="relative animate-scale-in" style={{ animationDelay: `${index * 200}ms` }}>
                {/* Phase connector dot */}
                <div className="hidden lg:flex absolute top-1/2 left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10 shadow-lg" />
                
                <Card 
                  className={`h-full transition-all duration-500 border-border/50 ${
                    phase.highlighted 
                      ? 'bg-gradient-to-br from-primary/10 to-accent/10 shadow-card glow-primary' 
                      : 'bg-card/50 shadow-card hover:shadow-xl'
                  } backdrop-blur-sm group hover:scale-105`}
                >
                  <CardContent className="p-8 text-center h-full flex flex-col">
                    <div className={`inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-medium mb-6 ${
                      phase.highlighted 
                        ? 'gradient-primary text-primary-foreground' 
                        : 'bg-secondary text-secondary-foreground'
                    }`}>
                      {phase.phase}
                    </div>
                    
                    <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                      {phase.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed flex-1">
                      {phase.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;