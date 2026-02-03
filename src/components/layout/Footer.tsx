import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, Globe, Smartphone } from 'lucide-react';
import lmvLogo from '@/assets/lmv-logo.webp';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Why Choose Us', path: '/why-choose-us' },
    { name: 'EMI Calculator', path: '/emi-calculator' },
    { name: 'Contact', path: '/contact' },
  ];

  const services = [
    { name: 'Personal Loans', path: '/services#personal-loans' },
    { name: 'Home Loans', path: '/services#home-loans' },
    { name: 'Business Loans', path: '/services#business-loans' },
    { name: 'Loan Against Property', path: '/services#lap' },
    { name: 'Car Loans', path: '/services#car-loans' },
    { name: 'Credit Cards', path: '/services#credit-cards' },
  ];

  const legal = [
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Terms of Service', path: '/terms-of-service' },
  ];

  return (
    <footer className="bg-charcoal text-primary-foreground">
      <div className="container-section py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <img 
              src={lmvLogo} 
              alt="LMV Financial Services" 
              className="h-12 w-auto brightness-0 invert"
            />
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              U Dream We Plan - Your trusted partner in achieving financial goals. 
              Providing Personal Loans, Home Loans, Business Loans, and Credit Cards since 2015.
            </p>
            <div className="flex gap-3 pt-2">
              <a 
                href="https://www.lmvfs.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-primary-foreground/60 hover:text-primary transition-colors"
              >
                <Globe className="h-3 w-3" />
                Web CRM
              </a>
              <a 
                href="https://play.google.com/store/apps/details?id=com.lakshithatech.LMVFS" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-primary-foreground/60 hover:text-primary transition-colors"
              >
                <Smartphone className="h-3 w-3" />
                Mobile App
              </a>
            </div>
            <div className="flex gap-4 pt-2">
              <a href="#" className="text-primary-foreground/60 hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-sm text-primary-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.path}>
                  <Link 
                    to={service.path} 
                    className="text-sm text-primary-foreground/70 hover:text-primary transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="tel:+919100108918" 
                  className="flex items-start gap-3 text-sm text-primary-foreground/70 hover:text-primary transition-colors"
                >
                  <Phone className="h-4 w-4 mt-0.5 shrink-0" />
                  <span>+91 91001 08918</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:leelamanoj@lmvfs.in" 
                  className="flex items-start gap-3 text-sm text-primary-foreground/70 hover:text-primary transition-colors"
                >
                  <Mail className="h-4 w-4 mt-0.5 shrink-0" />
                  <span>leelamanoj@lmvfs.in</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-primary-foreground/70">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>
                  6-3-899/1/D, Second Floor,<br />
                  R V S Kamala Castle, Raj Bhavan Road,<br />
                  Somajiguda, Hyderabad – 500082
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">
              © {currentYear} LMV Financialservices Private Limited. CIN: U65910TG2015PTC100564
            </p>
            <div className="flex gap-6">
              {legal.map((link) => (
                <Link 
                  key={link.path}
                  to={link.path} 
                  className="text-sm text-primary-foreground/60 hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-4 text-center">
            <a 
              href="https://www.lakshithatech.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs text-primary-foreground/50 hover:text-primary transition-colors"
            >
              Designed by @lakshithatech
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
