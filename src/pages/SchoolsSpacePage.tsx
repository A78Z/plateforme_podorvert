import React from 'react';
import { motion } from 'framer-motion';
import PageHero from '../components/PageHero';
import { Award, BrainCircuit, Play } from 'lucide-react';
import Quiz from '../components/Quiz';

const SchoolsSpacePage: React.FC = () => {
  const topEcoles = [
    { id: 1, nom: "Lycée Guédé Chantier", score: 150 },
    { id: 2, nom: "Collège Guédé village", score: 120 },
    { id: 3, nom: "École thiobalel", score: 100 },
  ];

  const videos = [
    { id: '7CYRsv3leEA', title: 'Comment planter un arbre ? 🌱' },
    { id: 'SEVTh-GkQWo', title: 'Comment entretenir un jeune arbre ? 🌳' },
    { id: 'T3OCHN0dYOo', title: 'Comment fabriquer du compost naturel ? 🌱' }
  ];

  return (
    <div className="bg-yellow-50/50">
      <PageHero 
        title="Espace Écoles & Jeunes" 
        breadcrumb="Espace Écoles" 
        imageUrl="/images/background-banner.jpg" 
      />

      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-yellow-800 mb-12"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
             <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-green-600 via-yellow-400 to-green-700 bg-clip-text text-transparent">
               Vidéos Pédagogiques
             </h1> 
          </motion.h2>

          {/* Vidéos pédagogiques */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {videos.map((video, index) => (
              <motion.div 
                key={video.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="relative aspect-video group">
                  <img src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`} alt={video.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <a href={`https://www.youtube.com/watch?v=${video.id}`} target="_blank" rel="noopener noreferrer" className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-white transition-colors">
                      <Play className="w-8 h-8 text-yellow-700 ml-1" />
                    </a>
                  </div>
                </div>
                <p className="p-4 font-semibold text-gray-800">{video.title}</p>
              </motion.div>
            ))}
          </div>

          {/* Quiz interactif */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Quiz />
          </motion.div>

          {/* Classement des écoles */}
          <motion.div 
            className="bg-white rounded-xl shadow-lg overflow-hidden max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-yellow-800 p-6 border-b border-gray-200 flex items-center justify-center gap-3">
              <Award className="w-8 h-8" />
              Top Écoles
            </h3>
            <ul>
              {topEcoles.map((ecole, index) => (
                <li key={ecole.id} className="flex justify-between items-center p-4 border-b last:border-none hover:bg-yellow-50/50 transition-colors">
                  <div className="flex items-center">
                    <span className="font-bold text-lg text-gray-700 w-8">{index + 1}.</span>
                    <span className="font-semibold text-gray-800">{ecole.nom}</span>
                  </div>
                  <span className="font-bold text-yellow-700 bg-yellow-100 px-3 py-1 rounded-full text-sm">{ecole.score} plants</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SchoolsSpacePage;
