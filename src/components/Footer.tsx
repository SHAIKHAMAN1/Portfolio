import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  const socials = [
    { icon: Github, href: "https://github.com/SHAIKHAMAN1", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/shaikh-aman-548958257/", label: "LinkedIn" },
  ];

  return (
    <footer className="border-t border-border/50">
      <div className="container mx-auto px-6 py-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()}{" "}
            <span className="text-foreground">Shaikh Aman</span>
          </p>

          <div className="flex items-center gap-4">
            {socials.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                whileHover={{ y: -2 }}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;