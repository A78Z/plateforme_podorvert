import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Eye, Handshake, TreePine, BookOpen, Globe } from 'lucide-react';

const About: React.FC = () => {
  const cards = [
    {
      icon: Leaf,
      title: 'Notre Mission',
      description: 'Contribuer significativement à la reforestation et à la lutte contre les changements climatiques.',
    },
    {
      icon: Eye,
      title: 'Notre Vision',
      description: 'Faire de Podor un département vert, en harmonie avec son environnement.',
    },
    {
      icon: Handshake,
      title: 'Nos Valeurs',
      description: 'Innovation, adaptabilité et transparence guident toutes nos actions.',
    },
    {
      icon: TreePine,
      title: 'Reboiser',
      description: 'Mobiliser les jeunes et étudiants pour reboiser les villages et assurer le suivi des plants.',
    },
    {
      icon: BookOpen,
      title: 'Sensibiliser et Former',
      description: 'Organiser des ateliers, formations et journées thématiques pour renforcer la conscience écologique.',
    },
    {
      icon: Globe,
      title: 'Parrainage',
      description: 'Chaque bénévole parraine un élève pour suivre et entretenir plusieurs plants attribués.',
    },
  ];

  return (
    <section id="qui-sommes-nous" className="relative py-20 md:py-32 bg-gray-900">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/background-podorvert.png"
          alt="Forêt luxuriante"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20 relative"
        >
          {/* Glow effect */}
          <div className="absolute -inset-12 bg-green-500/20 blur-3xl rounded-full"></div>
          <h2 className="relative text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-yellow-300 to-green-500 drop-shadow-xl mb-6">
            🌱 PODOR VERT
          </h2>
          <p className="relative text-xl text-green-100/90 max-w-3xl mx-auto leading-relaxed">
            Une association de jeunes volontaires engagés pour la protection de l’environnement et le reboisement dans le département de Podor.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative group bg-white/10 backdrop-blur-xl border border-white/10 p-10 rounded-2xl shadow-xl hover:shadow-3xl hover:-translate-y-2 transition-all duration-500"
            >
              {/* Gradient border glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-green-400/20 via-yellow-300/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
              
              <div className="relative w-20 h-20 bg-gradient-to-br from-green-500 to-yellow-400 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500">
                <card.icon className="w-10 h-10 text-white drop-shadow-lg" />
              </div>
              <h3 className="relative text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-300 via-yellow-200 to-green-400 mb-4">
                {card.title}
              </h3>
              <p className="relative text-green-100/80 leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
