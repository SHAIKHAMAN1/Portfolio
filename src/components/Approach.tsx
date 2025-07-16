import { Card, CardContent } from "@/components/ui/card";

const Approach = () => {
  const phases = [
    {
      phase: "Phase 1",
      title: "Planning & Strategy",
      description:
        "We'll collaborate to map out your website's goals, target audience, and key functionalities. We'll discuss things like site structure, navigation, and content requirements.",
    },
    {
      phase: "Phase 2",
      title: "Development & Progress Update",
      description:
        "Once we agree on the plan, I cue my lofi playlist and dive into coding. From initial sketches to polished code, I keep you updated every step of the way.",
    },
    {
      phase: "Phase 3",
      title: "Development & Launch",
      description:
        "This is where the magic happens! Based on the approved design, I'll translate everything into functional code, building your website from the ground up.",
      highlighted: true,
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-gradient">Approach</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A systematic approach to bringing your digital vision to life through
            careful planning, development, and deployment.
          </p>
        </div>

        {/* Connector line for lg+ screens */}
        <div className="relative">
          {/* The horizontal connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative">
            {phases.map((phase, index) => (
              <div
                key={phase.phase}
                className="relative animate-scale-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Dot on top center */}
                <div className="hidden lg:flex absolute top-0 left-1/2 w-5 h-5 rounded-full bg-primary border-4 border-card shadow-lg -translate-x-1/2 -translate-y-1/2 z-10" />

                {/* Expanding circle inside the card */}
                <Card
                  className={`h-full border-border/50 backdrop-blur-sm group flex flex-col transition-all duration-500 relative overflow-visible ${
                    phase.highlighted
                      ? "bg-gradient-to-br from-primary/10 to-accent/10 shadow-card glow-primary"
                      : "bg-card/50 shadow-card hover:shadow-xl"
                  } hover:scale-105`}
                >
                  {/* Circle expanding from dot center */}
                  <span
                    className="hidden lg:block absolute top-0 left-1/2 w-36 h-36 rounded-full bg-primary/10 -translate-x-1/2 -translate-y-1/2 pointer-events-none
                      animate-expand-circle"
                    style={{ animationDelay: `${index * 200}ms` }}
                  />

                  <CardContent className="p-8 text-center flex flex-col flex-grow relative z-20">
                    <div
                      className={`inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-medium mb-6 ${
                        phase.highlighted
                          ? "gradient-primary text-primary-foreground"
                          : "bg-secondary text-secondary-foreground"
                      }`}
                    >
                      {phase.phase}
                    </div>

                    <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                      {phase.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed flex-grow">
                      {phase.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS for expanding circle animation */}
      <style >{`
        @keyframes expandCircle {
          0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 0.4;
          }
          100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0;
          }
        }
        .animate-expand-circle {
          animation-name: expandCircle;
          animation-duration: 1.5s;
          animation-timing-function: ease-out;
          animation-fill-mode: forwards;
        }
      `}</style>
    </section>
  );
};

export default Approach;
