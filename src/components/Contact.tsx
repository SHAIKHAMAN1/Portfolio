import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone, Send, Check, Loader2 } from "lucide-react";

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/SHAIKHAMAN1",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/shaikh-aman-548958257/",
      label: "LinkedIn",
    },
    {
      icon: Phone,
      href: "tel:+919730830569",
      label: "Phone",
    },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("https://formspree.io/f/xanbyvrl", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setFormSubmitted(true);
        (e.target as HTMLFormElement).reset();
      } else {
        const result = await response.json();
        setError(result?.message || "Something went wrong. Please try again.");
      }
    } catch {
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-28 relative">
      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-[hsl(48_96%_53%/0.03)] blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-3">Contact</p>
          <h2 className="text-2xl md:text-4xl font-bold" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Get in touch
          </h2>
          <div className="section-divider mt-6" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="max-w-md mx-auto"
        >
          {/* Social links */}
          <div className="flex justify-center gap-4 mb-6">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-md border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </motion.a>
            ))}
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:shaikhamanwork@gmail.com"
              className="w-10 h-10 rounded-md border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </motion.a>
          </div>

          {/* Email & Phone */}
          <div className="text-center text-sm text-muted-foreground mb-8 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
            <a href="mailto:amaanahmed2022@gmail.com" className="hover:text-primary transition-colors">
              amaanahmed2022@gmaii.com
            </a>
            <span className="hidden sm:inline text-border">·</span>
            <a href="tel:+919730830569" className="hover:text-primary transition-colors">
              +91 9730830569
            </a>
          </div>

          {/* Form */}
          {!formSubmitted ? (
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-1.5">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  className="w-full px-3.5 py-2.5 rounded-md border border-border bg-card focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/20 transition-all text-sm placeholder:text-muted-foreground/40"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-1.5">Message</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Your message..."
                  className="w-full px-3.5 py-2.5 rounded-md border border-border bg-card focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/20 transition-all text-sm resize-none placeholder:text-muted-foreground/40"
                />
              </div>

              {error && (
                <p className="text-red-400 text-xs bg-red-500/10 border border-red-500/20 rounded-md px-3 py-2">
                  {error}
                </p>
              )}

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-md text-sm transition-all hover:shadow-[0_0_20px_hsl(48_96%_53%/0.15)]"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </motion.form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              <div className="w-12 h-12 bg-primary/10 border border-primary/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-base font-semibold mb-1">Message sent</h3>
              <p className="text-muted-foreground text-xs">
                Thanks for reaching out. I'll get back to you soon.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
