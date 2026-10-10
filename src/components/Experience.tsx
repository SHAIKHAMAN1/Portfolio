import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "MERN Stack Intern",
      company: "Brainsync Solutions",
      period: "Oct 2025 – Feb 2026",
      description: "Worked on full-stack web applications using React, Node.js, Express, and MongoDB.",
      bullets: [
        "Built and maintained RESTful APIs with Express and MongoDB for client projects",
        "Implemented user authentication and role-based authorization flows",
        "Integrated third-party APIs and handled async data fetching on the frontend",
        "Debugged production issues, wrote clean code, and followed Git-based workflows",
        "Deployed applications to Vercel and assisted with staging/production releases",
      ],
      type: "Internship",
    },

  ];

  return (
    <section id="experience" className="py-28 relative">
      {/* Ambient glow */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-[hsl(48_96%_53%/0.02)] blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-3">Experience</p>
          <h2 className="text-2xl md:text-4xl font-bold" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Where I've worked
          </h2>
          <div className="section-divider mt-6" />
        </motion.div>

        {/* Timeline */}
        <div className="max-w-2xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-[18px] top-3 bottom-3 w-px bg-gradient-to-b from-primary/30 via-border to-transparent hidden md:block" />

          <div className="space-y-5">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex gap-5"
              >
                {/* Timeline dot */}
                <div className="hidden md:flex flex-shrink-0 w-9 justify-center pt-5">
                  <div className="w-2.5 h-2.5 rounded-full bg-primary/60 border-2 border-background z-10" />
                </div>

                {/* Card */}
                <div className="flex-1 bg-card rounded-md border border-border p-5 hover:border-primary/20 transition-all duration-300 gold-glow">
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <h3 className="text-sm font-semibold">{exp.title}</h3>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20 font-medium uppercase tracking-wider">
                      {exp.type}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground mb-2.5">
                    <span className="flex items-center gap-1.5">
                      <Briefcase className="w-3 h-3" />
                      {exp.company}
                    </span>
                    {exp.period && (
                      <span className="text-muted-foreground/70">{exp.period}</span>
                    )}
                  </div>
                  <p className="text-muted-foreground text-xs leading-relaxed">{exp.description}</p>
                  {"bullets" in exp && exp.bullets && (
                    <ul className="mt-2.5 space-y-1.5">
                      {(exp.bullets as string[]).map((bullet, i) => (
                        <li key={i} className="text-muted-foreground text-xs leading-relaxed flex gap-2">
                          <span className="text-primary/60 mt-1 flex-shrink-0">›</span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;