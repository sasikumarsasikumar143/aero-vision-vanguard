import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Zap, Clock, Shield, TrendingUp, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const services = [
    {
      icon: Shield,
      title: "QUALITY",
      subtitle: "Ensuring 100% inspection all stage",
      description: "Comprehensive quality control at every stage of manufacturing with rigorous inspection protocols.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop"
    },
    {
      icon: TrendingUp,
      title: "Industry",
      subtitle: "11 years of industry expertise",
      description: "Over a decade of specialized experience in aerospace manufacturing and precision engineering.",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop"
    },
    {
      icon: Zap,
      title: "CONFIDENCE",
      subtitle: "We are accredited AS9100",
      description: "Certified to meet the highest aerospace industry standards for quality management systems.",
      image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=400&h=300&fit=crop"
    }
  ];

  const capabilities = [
    "Wire EDM",
    "Timely Delivery", 
    "Trusted Partner",
    "High Performance"
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-aerospace-blue mb-6">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive aerospace manufacturing solutions with cutting-edge technology
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="card-aerospace overflow-hidden h-full group cursor-pointer border border-transparent hover:border-aerospace-blue/20 transition-all duration-500">
                <div className="aspect-video bg-gradient-primary relative overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-aerospace-blue/80 to-transparent group-hover:from-aerospace-blue/90 transition-colors duration-300"></div>
                  <div className="absolute bottom-4 left-4">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <service.icon className="h-8 w-8 text-white mb-2 group-hover:animate-float" />
                    </motion.div>
                    <div className="text-white font-semibold text-sm uppercase tracking-wide">
                      {service.title}
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-aerospace-blue mb-3 group-hover:text-aerospace-glow transition-colors duration-300">
                    {service.subtitle}
                  </h3>
                  <p className="text-muted-foreground mb-4 group-hover:text-foreground transition-colors duration-300">
                    {service.description}
                  </p>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button variant="outline" className="group/btn w-full">
                      View Detail
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-secondary rounded-2xl p-8 md:p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-aerospace-blue mb-6">
                Why choose us
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Wire EDM is far more precise than conventional milling but takes much longer to process. 
                With more than 32+ machines its no more a longer process. Customers do not have to concern 
                about the delivery schedule. We work from Small batch qty to huge batch qty. We are one of 
                the trusted partner since we are accredited with AS9100 for Wire EDM, Sparking / Sinker EDM 
                & Super drill / Fast Hole. We Operate 24/7 to ensure timely delivery to our customers and even 
                roughing/finishing process up-to 5 Axis Milling can be done in-house to even shorten the lead time.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {capabilities.map((capability, index) => (
                  <motion.div
                    key={capability}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-2 h-2 bg-aerospace-light rounded-full"></div>
                    <span className="font-semibold text-aerospace-blue">{capability}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-primary rounded-2xl p-8 text-white text-center flex flex-col justify-center">
                <div className="text-6xl font-bold mb-4">11</div>
                <div className="text-2xl font-semibold mb-2">Years of Experience</div>
                <div className="text-lg opacity-90">Manufacturing in:</div>
                <div className="text-lg font-medium">Precision Machined Components & CNC Wire Cutting</div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-aerospace-light rounded-full opacity-20 float-animation"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white rounded-full opacity-30 float-animation" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}