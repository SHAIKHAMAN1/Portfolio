import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Button } from "@/components/ui/button";

const TITLES = [
  "Software Developer",
  "Full-Stack Developer",
  "React Developer",
  "Problem Solver",
];

const MARQUEE_SKILLS = [
  "React", "Next.js", "TypeScript", "Node.js", "MongoDB",
  "Express.js", "Tailwind CSS", "REST APIs", "Git", "Docker",
  "Supabase", "Firebase", "AWS", "Vercel", "JavaScript",
];

// Letter-by-letter stagger animation
const nameVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.04, delayChildren: 0.3 },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 40, rotateX: -90 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { type: "spring", damping: 12, stiffness: 100 },
  },
};

// Floating shape component
const FloatingShape = ({ delay, x, y, size, duration }: { delay: number; x: string; y: string; size: number; duration: number }) => (
  <motion.div
    className="absolute rounded-full border border-primary/10"
    style={{ left: x, top: y, width: size, height: size }}
    animate={{
      y: [0, -20, 0],
      rotate: [0, 180, 360],
      opacity: [0.15, 0.3, 0.15],
    }}
    transition={{ duration, repeat: Infinity, delay, ease: "easeInOut" }}
  />
);

// Magnetic button wrapper
const MagneticButton = ({ children, onClick, className }: { children: React.ReactNode; onClick: () => void; className: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  const handleMouse = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left - rect.width / 2) * 0.15);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.15);
  };

  const reset = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
    >
      <Button size="lg" className={className} onClick={onClick}>
        {children}
      </Button>
    </motion.div>
  );
};

const Hero = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = TITLES[titleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
    } else {
      setIsDeleting(false);
      setTitleIndex((i) => (i + 1) % TITLES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, titleIndex]);

  const firstName = "Shaikh";
  const lastName = "Aman";

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[hsl(48_96%_53%/0.04)] blur-[150px] pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-[hsl(45_93%_47%/0.03)] blur-[100px] pointer-events-none" />

      {/* Floating geometric shapes */}
      <FloatingShape delay={0} x="10%" y="20%" size={60} duration={8} />
      <FloatingShape delay={2} x="85%" y="15%" size={40} duration={10} />
      <FloatingShape delay={1} x="75%" y="70%" size={50} duration={9} />
      <FloatingShape delay={3} x="15%" y="75%" size={35} duration={11} />
      <FloatingShape delay={1.5} x="50%" y="85%" size={25} duration={7} />

      <div className="container mx-auto px-6 text-center py-20 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-secondary/50 text-xs text-muted-foreground mb-10"
          >
            <motion.span
              className="w-1.5 h-1.5 rounded-full bg-[hsl(48_96%_53%)]"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
            Open to opportunities
          </motion.div>

          {/* Name — letter by letter stagger */}
          <motion.h1
            variants={nameVariants}
            initial="hidden"
            animate="visible"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-5 leading-[1.1] tracking-tight"
            style={{ fontFamily: "'Outfit', sans-serif", perspective: "600px" }}
          >
            {firstName.split("").map((letter, i) => (
              <motion.span key={`f-${i}`} variants={letterVariants} className="inline-block">
                {letter}
              </motion.span>
            ))}
            <span className="inline-block w-3 md:w-4" />
            {lastName.split("").map((letter, i) => (
              <motion.span key={`l-${i}`} variants={letterVariants} className="inline-block text-gradient-gold">
                {letter}
              </motion.span>
            ))}
          </motion.h1>

          {/* Typewriter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-xl md:text-2xl font-medium text-muted-foreground mb-6 h-9"
          >
            <span className="text-primary">{displayed}</span>
            <span className="animate-blink text-primary ml-0.5">|</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="text-sm md:text-base text-muted-foreground mb-12 max-w-lg mx-auto leading-relaxed"
          >
            I build web applications with React, Node.js, and modern tools.
            Focused on clean code and good user experiences.
          </motion.p>

          {/* CTA — Magnetic buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <MagneticButton
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-semibold px-8 py-5 rounded-md transition-all hover:shadow-[0_0_25px_hsl(48_96%_53%/0.25)]"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              View My Work
            </MagneticButton>
            <MagneticButton
              className="border border-border bg-transparent hover:border-primary/40 hover:text-primary text-foreground text-sm font-medium px-8 py-5 rounded-md transition-all"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get In Touch
            </MagneticButton>
          </motion.div>
        </div>
      </div>

      {/* Infinite scrolling tech marquee at bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-0 right-0 overflow-hidden"
      >
        <div className="relative flex">
          <motion.div
            className="flex gap-8 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          >
            {[...MARQUEE_SKILLS, ...MARQUEE_SKILLS].map((skill, i) => (
              <span
                key={`${skill}-${i}`}
                className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground/30 font-medium"
              >
                {skill}
              </span>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;