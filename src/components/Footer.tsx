import { Github, Linkedin, Mail, ExternalLink, Heart } from 'lucide-react';

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

const socialLinks = [
  { icon: Linkedin, href: 'https://www.linkedin.com/in/prabhat-kale-371788367/', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/kaleprabhat24', label: 'GitHub' },
  { icon: ExternalLink, href: 'https://leetcode.com/u/prabhat_2004/', label: 'LeetCode' },
  { icon: Mail, href: 'mailto:kaleprabhat24@gmail.com', label: 'Email' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-display font-bold text-xl mb-4">
              <span className="text-gradient">Prabhat Kale</span>
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Pre-final year BTech student specializing in AI/ML. Building innovative 
              solutions and pushing the boundaries of technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-muted hover:bg-primary/10 hover:text-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 text-center">
          <p className="text-muted-foreground text-sm flex items-center justify-center gap-1">
            © {currentYear} Prabhat Sudhakar Kale. Made with
            <Heart className="w-4 h-4 text-primary fill-primary" />
            in India
          </p>
        </div>
      </div>
    </footer>
  );
}
