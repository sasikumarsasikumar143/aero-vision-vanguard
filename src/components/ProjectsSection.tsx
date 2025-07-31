import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink } from 'lucide-react';
import { Card } from '@/components/ui/card';

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const projects = [
    {
      title: "AEROSPACE",
      description: "Advanced aerospace components manufacturing with precision EDM technology",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=500&h=350&fit=crop"
    },
    {
      title: "DEFENSE",
      description: "High-precision defense equipment manufacturing with AS9100 certification",
      image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=500&h=350&fit=crop"
    },
    {
      title: "AUTO/EV",
      description: "Automotive and electric vehicle component manufacturing solutions",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=350&fit=crop"
    },
    {
      title: "RAILWAY",
      description: "Railway industry precision components and manufacturing solutions",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=500&h=350&fit=crop"
    },
    {
      title: "MEDICAL",
      description: "Medical device manufacturing with highest precision standards",
      image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=500&h=350&fit=crop"
    },
    {
      title: "POWER TRANSMISSION & DISTRIBUTION",
      description: "Power industry equipment manufacturing and precision engineering",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=350&fit=crop"
    },
    {
      title: "INDUSTRIAL EQUIPMENTS",
      description: "Industrial equipment manufacturing with advanced EDM technology",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=500&h=350&fit=crop"
    },
    {
      title: "CONSTRUCTION EQUIPMENTS",
      description: "Construction industry equipment and component manufacturing",
      image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=500&h=350&fit=crop"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-aerospace-blue mb-6">
            Our Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Diverse industry solutions across aerospace, defense, automotive, and industrial sectors
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="card-aerospace overflow-hidden h-full group cursor-pointer">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-aerospace-blue/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                      <ExternalLink className="h-5 w-5 text-aerospace-blue" />
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold text-aerospace-blue mb-3 group-hover:text-aerospace-light transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-elegant">
            <h3 className="text-2xl md:text-3xl font-bold text-aerospace-blue mb-4">
              We work with our partners to provide project perfection
            </h3>
            <p className="text-muted-foreground mb-8">
              Join with our partnership for precision manufacturing solutions
            </p>
            <div className="flex justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-aerospace"
              >
                Start Partnership
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}