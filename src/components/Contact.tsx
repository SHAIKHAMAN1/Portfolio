import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Mail, Send } from "lucide-react";

const Contact = () => {
  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" }, 
    { icon: Linkedin, href: "#", label: "LinkedIn" }
  ];

  const copyEmail = () => {
    navigator.clipboard.writeText("aryan.tele@example.com");
    // You could add a toast notification here
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Ready to take <span className="text-gradient">your digital presence</span>{" "}
            to the next level?
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Reach out to me today and let's discuss how I can help you achieve your goals.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="gradient-primary glow-primary hover:scale-105 transition-all duration-300"
              onClick={copyEmail}
            >
              <Mail className="mr-2 h-5 w-5" />
              Let's get in touch
              <Send className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="w-12 h-12 bg-secondary hover:bg-primary group rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;