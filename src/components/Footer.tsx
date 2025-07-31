import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';
import apAerospaceLogo from '@/assets/ap-aerospace-logo.png';

export default function Footer() {
  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Quality', href: '#quality' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'Wire EDM Manufacturing',
    'Precision Machining',
    'CNC Wire Cutting',
    'Aerospace Components',
    'Defense Manufacturing',
    'Industrial Equipment'
  ];

  return (
    <footer className="bg-aerospace-dark text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3">
              <img 
                src={apAerospaceLogo} 
                alt="AP Aerospace" 
                className="h-12 w-12 bg-white rounded-lg p-2"
              />
              <div>
                <h3 className="text-xl font-bold">AP AEROSPACE</h3>
                <p className="text-sm text-gray-300">Next Generation Solutions</p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed">
              Leading provider of precision aerospace manufacturing with EDM technology, 
              serving aerospace, defense, and industrial sectors since 2014.
            </p>
            
            <div className="flex space-x-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 bg-aerospace-light rounded-full flex items-center justify-center hover:bg-white hover:text-aerospace-blue transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 bg-aerospace-light rounded-full flex items-center justify-center hover:bg-white hover:text-aerospace-blue transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 bg-aerospace-light rounded-full flex items-center justify-center hover:bg-white hover:text-aerospace-blue transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-aerospace-light transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-bold">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-gray-300 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-bold">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-aerospace-light mt-0.5" />
                <div className="text-gray-300 text-sm">
                  <p>Manufacturing Facility</p>
                  <p>India</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-aerospace-light" />
                <span className="text-gray-300 text-sm">+91 XXX XXX XXXX</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-aerospace-light" />
                <span className="text-gray-300 text-sm">info@apaerospacetech.com</span>
              </div>
            </div>
            
            <div className="bg-aerospace-blue/20 rounded-lg p-4">
              <h4 className="font-semibold mb-2">AS9100 Certified</h4>
              <p className="text-gray-300 text-sm">
                Quality management system for aerospace industry standards
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gray-700 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-300 text-sm">
              © 2024 AP Aerospace Technologies. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-300 hover:text-aerospace-light transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-300 hover:text-aerospace-light transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-300 hover:text-aerospace-light transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}