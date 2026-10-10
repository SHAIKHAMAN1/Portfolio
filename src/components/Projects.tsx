import { useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

// 3D Tilt card wrapper
const TiltCard = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(y, [0, 1], [8, -8]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [0, 1], [-8, 8]), { stiffness: 300, damping: 30 });

  const handleMouse = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width);
    y.set((e.clientY - rect.top) / rect.height);
  };

  const reset = () => { x.set(0.5); y.set(0.5); };

  return (
    <motion.div
      ref={ref}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      className="perspective-[800px]"
    >
      {children}
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Spotify Clone",
      description:
        "Music streaming web app with playback controls, playlist management, and responsive UI.",
      image: "/images/1.jpg",
      tags: ["HTML", "CSS", "JavaScript"],
      liveUrl: "#",
      githubUrl: "https://github.com/SHAIKHAMAN1/Spotify-",
    },
    {
      title: "Portfolio Website",
      description:
        "A portfolio built with Next.js featuring smooth animations, responsive design, and project showcases.",
      image: "/images/2.png",
      tags: ["Next.js", "React"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Swiggy Clone",
      description:
        "Food delivery app clone using React with live API integration for restaurant browsing and menu viewing.",
      image: "/images/3.png",
      tags: ["React", "APIs"],
      liveUrl: "#",
      githubUrl: "https://github.com/SHAIKHAMAN1/Swiggy",
    },
    {
      title: "Subscription Tracker",
      description:
        "Backend API for managing user subscriptions with JWT authentication, built on Node.js and MongoDB.",
      image: "/images/4.jpg",
      tags: ["Node.js", "Express.js", "MongoDB", "JWT"],
      liveUrl: "#",
      githubUrl: "https://github.com/SHAIKHAMAN1/Subscription-Tracker",
    },
    {
      title: "Intervue",
      description:
        "AI-powered mock interview platform with voice-based interviews, dynamic question generation, and instant feedback.",
      image: "/images/5.jpg",
      tags: ["Next.js", "Supabase", "Vapi", "OpenAI"],
      liveUrl: "https://interviewue.vercel.app/",
      githubUrl: "https://github.com/SHAIKHAMAN1/Intervue",
    },
    {
      title: "PG Finder",
      description:
        "Full-stack MERN app to find paying guest accommodations with search, filtering, and user authentication.",
      image: "/images/6.jpeg",
      tags: ["MongoDB", "Express.js", "React.js", "Node.js"],
      liveUrl: "https://pgwale.vercel.app/",
      githubUrl: "https://github.com/SHAIKHAMAN1/pg-rental-frontend",
    },
    {
      title: "Perfume E-Commerce",
      description:
        "Full-stack online store with product browsing, cart, wishlist, admin panel, and Razorpay payment integration.",
      image: "/images/7.png",
      tags: ["Next.js", "MongoDB", "Firebase", "Razorpay"],
      liveUrl: "https://luxeure.vercel.app/",
      githubUrl: "https://github.com/SHAIKHAMAN1/your-repo-name",
    },
  ];

  return (
    <section id="projects" className="py-28 relative">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-3">Projects</p>
          <h2 className="text-2xl md:text-4xl font-bold" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Things I've built
          </h2>
          <div className="section-divider mt-6" />
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: index * 0.1, type: "spring", damping: 15 }}
            >
              <TiltCard>
                <div className="bg-card rounded-md border border-border overflow-hidden group hover:border-primary/20 transition-all duration-300 gold-glow">
                  {/* Image */}
                  <div className="relative overflow-hidden h-48 sm:h-52 bg-secondary/30">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    />
                    {/* Shine effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-[hsl(0_0%_4%/0.75)] opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-3">
                      {project.liveUrl !== "#" && (
                        <motion.a
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2 bg-primary text-primary-foreground text-xs font-semibold rounded-md hover:bg-primary/90 transition-colors"
                        >
                          <ExternalLink className="w-3 h-3" />
                          Live
                        </motion.a>
                      )}
                      {project.githubUrl !== "#" && (
                        <motion.a
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2 bg-secondary border border-border text-foreground text-xs font-semibold rounded-md hover:bg-secondary/80 transition-colors"
                        >
                          <Github className="w-3 h-3" />
                          Code
                        </motion.a>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="text-sm font-semibold group-hover:text-primary transition-colors">{project.title}</h3>
                      <div className="flex gap-2 flex-shrink-0">
                        {project.githubUrl !== "#" && (
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors">
                            <Github className="w-3.5 h-3.5" />
                          </a>
                        )}
                        {project.liveUrl !== "#" && (
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors">
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                    </div>
                    <p className="text-muted-foreground text-xs mb-3 leading-relaxed line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span key={tag} className="tech-badge">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
