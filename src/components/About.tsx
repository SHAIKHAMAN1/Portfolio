import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, GraduationCap } from "lucide-react";

// Animated counter hook
const useCounter = (target: number, duration: number = 2) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const increment = target / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return { count, ref };
};

// Infinite marquee for skills
const SkillMarquee = ({ skills, direction = 1 }: { skills: string[]; direction?: number }) => (
  <div className="overflow-hidden">
    <motion.div
      className="flex gap-3 whitespace-nowrap"
      animate={{ x: direction > 0 ? ["0%", "-50%"] : ["-50%", "0%"] }}
      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
    >
      {[...skills, ...skills].map((skill, i) => (
        <span
          key={`${skill}-${i}`}
          className="tech-badge flex-shrink-0"
        >
          {skill}
        </span>
      ))}
    </motion.div>
  </div>
);

const About = () => {
  const allSkills1 = ["C++", "JavaScript", "TypeScript", "React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "Node.js", "Express.js", "REST APIs", "MongoDB", "MySQL", "Supabase"];
  const allSkills2 = ["Git", "GitHub", "Postman", "Docker", "Vercel", "AWS", "Authentication", "API Integration", "DSA", "OOP", "Computer Networks", "DBMS", "HTTP"];

  const stats = [
    { value: 7, label: "Projects", suffix: "+" },
    { value: 1, label: "Internships", suffix: "" },
    { value: 2, label: "Years Learning", suffix: "+" },
  ];

  return (
    <section id="about" className="py-28 relative">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-3">About</p>
          <h2 className="text-2xl md:text-4xl font-bold" style={{ fontFamily: "'Outfit', sans-serif" }}>
            A bit about me
          </h2>
          <div className="section-divider mt-6" />
        </motion.div>

        {/* Bio */}
        <div className="max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-muted-foreground text-sm leading-[1.9] mb-5"
          >
            I'm a full-stack developer based in India. I enjoy building things for the web,
            whether that's a complete application, an API, or a pixel-perfect interface.
            I'm currently focused on expanding my skills with React, Next.js, and backend technologies.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground text-sm leading-[1.9] mb-6"
          >
            I bring strong work ethic and attention to detail to every project.
            When I'm not coding, I'm usually exploring new technologies or working on personal projects
            to sharpen my skills.
          </motion.p>

          {/* Quick facts */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-x-6 gap-y-3"
          >
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="w-3.5 h-3.5 text-primary" />
              <span>India</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <GraduationCap className="w-3.5 h-3.5 text-primary" />
              <span>Self-taught & continuously learning</span>
            </div>
          </motion.div>
        </div>

        {/* Animated stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-3 max-w-md mx-auto gap-6 mb-16"
        >
          {stats.map(({ value, label, suffix }) => {
            const { count, ref } = useCounter(value);
            return (
              <div key={label} ref={ref} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-gradient-gold" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  {count}{suffix}
                </p>
                <p className="text-xs text-muted-foreground mt-1">{label}</p>
              </div>
            );
          })}
        </motion.div>

        {/* Infinite scrolling skill marquees */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-3"
        >
          <SkillMarquee skills={allSkills1} direction={1} />
          <SkillMarquee skills={allSkills2} direction={-1} />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
