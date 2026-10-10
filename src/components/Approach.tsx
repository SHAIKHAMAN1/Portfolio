import { motion } from "framer-motion";

const Approach = () => {
  const phases = [
    {
      number: "01",
      title: "Understand & Plan",
      description:
        "I start by understanding the problem, defining requirements, and mapping out the technical approach before writing any code.",
      icon: "◇",
    },
    {
      number: "02",
      title: "Build & Iterate",
      description:
        "I write modular, clean code with regular check-ins. I prefer working in small iterations so nothing goes off track.",
      icon: "△",
    },
    {
      number: "03",
      title: "Test & Ship",
      description:
        "I test thoroughly, optimize for performance, and deploy with care. The goal is always a stable, reliable release.",
      icon: "○",
    },
  ];

  return (
    <section className="py-28 relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-3">Process</p>
          <h2 className="text-2xl md:text-4xl font-bold" style={{ fontFamily: "'Outfit', sans-serif" }}>
            How I work
          </h2>
          <div className="section-divider mt-6" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -8 }}
                className="relative group cursor-default"
              >
                <div className="bg-card rounded-md border border-border p-7 h-full hover:border-primary/30 transition-all duration-300 gold-glow">
                  {/* Geometric icon */}
                  <motion.div
                    className="text-2xl text-primary/40 mb-4 group-hover:text-primary transition-colors"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20 + index * 5, repeat: Infinity, ease: "linear" }}
                  >
                    {phase.icon}
                  </motion.div>

                  {/* Number */}
                  <div className="text-4xl font-bold text-gradient-gold opacity-20 mb-3 font-mono leading-none">
                    {phase.number}
                  </div>

                  {/* Content */}
                  <h3 className="text-base font-semibold mb-2 group-hover:text-primary transition-colors">
                    {phase.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{phase.description}</p>

                  {/* Bottom accent line — grows on hover */}
                  <div className="mt-5 h-px bg-border relative overflow-hidden">
                    <motion.div
                      className="absolute inset-y-0 left-0 bg-primary"
                      initial={{ width: "0%" }}
                      whileInView={{ width: "0%" }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
