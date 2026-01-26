import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'Artificial Grass', path: '/artificial-grass' },
    { name: 'Patio & Decking', path: '/services' },
    { name: 'Fence & Gate Installation', path: '/services' },
    { name: 'Pergola Design & Build', path: '/services' },
    { name: 'Retaining Wall Installation', path: '/services' },
    { name: 'Railings Installation', path: '/services' },
  ];

  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Our Projects', path: '/projects' },
    { name: 'Customer Reviews', path: '/reviews' },
    { name: 'Get a Free Quote', path: '/contact' },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-wide section-padding-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img
                src="/images/logo.jpg"
                alt="A.W Landscapes"
                className="h-14 w-14 rounded-full object-cover border-2 border-accent"
              />
              <div>
                <span className="font-display text-xl font-semibold">A.W Landscapes</span>
                <p className="text-sm text-primary-foreground/70">Bristol</p>
              </div>
            </Link>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-6">
              Professional landscaping & garden transformations serving Bristol & surrounding areas. 
              15+ years of experience delivering quality craftsmanship.
            </p>
            <p className="font-display text-lg italic text-accent">
              Inspire • Create • Deliver
            </p>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-6">Get In Touch</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+447772683802"
                  className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  <Phone className="h-5 w-5 text-accent" />
                  <span className="text-sm">+44 7772 683802</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:a.w.landscapes@outlook.com"
                  className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  <Mail className="h-5 w-5 text-accent" />
                  <span className="text-sm">a.w.landscapes@outlook.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://maps.app.goo.gl/J6pAQJDoyfmKagTT7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  <MapPin className="h-5 w-5 text-accent" />
                  <span className="text-sm">Bristol, BS11</span>
                </a>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://www.instagram.com/a.w.landscapes_"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary-foreground/10 hover:bg-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/AWLandscape"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary-foreground/10 hover:bg-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {currentYear} A.W Landscapes. All rights reserved.
          </p>
          <p className="text-primary-foreground/60 text-sm">
            Serving Bristol & surrounding areas
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
