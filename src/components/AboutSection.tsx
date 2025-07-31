import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Users, Cog, Award } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const features = [
    {
      icon: Target,
      title: "Precision Engineering",
      description: "EDM machining for finest level precision with lowest possible HAZ in aviation industry"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Skilled professionals with 11+ years of industry expertise in aerospace manufacturing"
    },
    {
      icon: Cog,
      title: "Advanced Technology",
      description: "32+ machines operating 24/7 for timely delivery and superior quality"
    },
    {
      icon: Award,
      title: "AS9100 Certified",
      description: "Accredited quality management system for aerospace industry standards"
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-aerospace-blue mb-6">
            Amazing things happen to your business
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Trusted Factory Solutions since 2014
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-6">
              <div className="text-sm font-semibold text-aerospace-light uppercase tracking-wide">
                OUR STORY
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-aerospace-blue">
                Trusted Factory Solutions since 2014
              </h3>
              
              <div className="bg-aerospace-blue/10 border-l-4 border-aerospace-blue p-6 rounded-r-lg">
                <h4 className="text-lg font-semibold text-aerospace-blue mb-3">Message From MD</h4>
                <blockquote className="text-foreground italic text-lg leading-relaxed">
                  "EDM machining is one of the key solutions in aviation industry to achieve the finest level of precision with lowest possible HAZ"
                </blockquote>
              </div>
              
              <p className="text-muted-foreground text-lg leading-relaxed">
                We fulfil the most stringent EDM criteria for materials such as aluminium, steel, copper, 
                tungsten-carbide and exotic metals like titanium and Inconel.
              </p>
              
              <Button className="btn-aerospace-outline">
                Read More About Us
              </Button>
            </div>
          </motion.div>

          {/* Stats & Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="grid grid-cols-2 gap-6">
              {[
                { number: "11", label: "Years of Experience", delay: 0.1 },
                { number: "32+", label: "Machines", delay: 0.2 }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-glow hover:scale-105 transition-all duration-300 group cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: stat.delay }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <motion.div 
                    className="text-4xl font-bold text-aerospace-blue mb-2 group-hover:text-aerospace-glow transition-colors duration-300"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-glow transition-all duration-300 group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <h4 className="text-xl font-semibold text-aerospace-blue mb-4 group-hover:text-aerospace-glow transition-colors duration-300">Manufacturing in:</h4>
              <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                Precision Machined Components & CNC Wire Cutting
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
            >
              <Card className="card-aerospace text-center h-full group cursor-pointer border border-transparent hover:border-aerospace-blue/20">
                <div className="mb-4">
                  <motion.div 
                    className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <feature.icon className="h-8 w-8 text-white group-hover:animate-float" />
                  </motion.div>
                </div>
                <h3 className="text-xl font-semibold text-aerospace-blue mb-3 group-hover:text-aerospace-glow transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}