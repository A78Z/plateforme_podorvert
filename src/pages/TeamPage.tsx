// ✅ React doit être importé correctement
import React, { useState } from "react";
import { motion } from "framer-motion";
import PageHero from '../components/PageHero';
import { JSX } from "react/jsx-runtime";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  description?: string;
}

// Bureau exécutif
const executive: TeamMember[] = [
  { name: "BASSIROU HAMEDINE SY", role: "Président", image: "/images/president.jpg", description: "Membre Fondateur Podor Vert Président" },
  { name: "BAABA MAAL", role: "PARRAIN SPIRITUEL", image: "/images/Baba-Maal.jpg", description: "Ambassadeur du Système des nations unies dans le cadre de la lutte contre la désertification, PARRAIN SPIRITUEL du projet podorvert" },
  { name: "IBRAHIMA DJIGO", role: "Trésorier", image: "/images/Ibrahima-Djigo.jpeg", description: "Ambassadeur Podorvert Trésorier général." },
  { name: "AMADOU HANNE", role: "Secrétaire Général", image: "/images/photo-avatar-profil.png", description: "Ambassadeur Podorvert Membre Fondateur Secrétaire Général" },
  { name: "MAMADOU SARR DIT MARA", role: "Responsable Communication", image: "/images/mara-niasse.jpeg", description: "Ambassadeur Podorvert Responsable Communication" },
  { name: "MAMADOU AMADOU BA", role: "President Commission Reboisement et Suivi", image: "/images/Mamadou-Amadou-BA.jpeg", description: "Ambassadeur Podorvert President Commission Reboisement et Suivi" },
  { name: "AMADOU DIALLO", role: "Responsable pépinière Belel Gawdi", image: "/images/Amadou-Diallo.jpeg", description: "Ambassadeur Podorvert Responsable pépinière Belel Gawdi" },
  { name: "Dr RAMATA TALLA", role: "Présidente Commission Scientifique", image: "/images/photo-avatar-profil.png", description: "Présidente Commission Scientifique" },
  { name: "Nom Prénom", role: "Chargé des Partenariats", image: "/images/photo-avatar-profil.png", description: "Développe les alliances et financements." },
];

// Ambassadeurs
const ambassadors: TeamMember[] = [
  { name: "MAMADOU BA", role: "Ambassadeur Podorvert", image: "/images/photo-avatar-profil.png", description: "Ambassadeur Podorvert" },
  { name: "Aminata Sow", role: "Ambassadrice Podor", image: "/images/photo-avatar-profil.png", description: "Mobilise les jeunes et anime la communauté de Podor pour les actions écologiques." },
  { name: "Ibrahima Ba", role: "Ambassadeur Golléré", image: "/images/photo-avatar-profil.png", description: "Encadre les activités locales de plantation et de sensibilisation à Golléré." },
  { name: "Fatou Gueye", role: "Ambassadrice Guédé", image: "/images/photo-avatar-profil.png", description: "Promotrice de l’écologie et coordinatrice des activités à Guédé." },
  { name: "Ousmane Kane", role: "Ambassadeur Dodel", image: "/images/photo-avatar-profil.png", description: "Anime la communauté de Dodel et favorise la mobilisation pour les actions écologiques." },
  { name: "Awa Thiam", role: "Ambassadrice Mboumba", image: "/images/photo-avatar-profil.png", description: "Contribue au développement durable de Mboumba à travers les programmes verts." },
  { name: "Cheikh Fall", role: "Ambassadeur", image: "/images/photo-avatar-profil.png", description: "Engagé dans la sensibilisation des plus jeunes à l'importance de la biodiversité." },
  { name: "Mariama Sarr", role: "Ambassadrice", image: "/images/photo-avatar-profil.png", description: "Spécialiste du suivi des plants et de la collecte de données sur le terrain." },
  { name: "Abdoulaye Diop", role: "Ambassadeur", image: "/images/photo-avatar-profil.png", description: "Organise les ateliers de formation sur les techniques de compostage." },
  { name: "Khadija N'diaye", role: "Ambassadrice", image: "/images/photo-avatar-profil.png", description: "Mobilise les groupements de femmes pour les projets de pépinières." },
  { name: "Pape Diouf", role: "Ambassadeur", image: "/images/photo-avatar-profil.png", description: "Expert en agroécologie, il conseille les agriculteurs locaux." },
  { name: "Samba Cissé", role: "Ambassadeur", image: "/images/photo-avatar-profil.png", description: "Photographe et vidéaste, il documente toutes les actions de l'association." }
];

function ProfileCard({ member }: { member: TeamMember }) {
  return (
    <motion.div
      className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-6 flex flex-col items-center text-center hover:shadow-2xl hover:scale-105 transition-transform duration-300 border border-green-400/30"
      whileHover={{ y: -5 }}
    >
      {/* Photo avec effets */}
      <motion.div
        className="w-32 h-32 overflow-hidden rounded-full border-4 border-green-500 shadow-lg mb-4 relative ring-4 ring-green-400/30 hover:ring-yellow-400/40 transition-all duration-500"
        whileHover={{ scale: 1.15, rotate: 3 }}
        animate={{ boxShadow: ["0 0 15px #22c55e", "0 0 25px #16a34a", "0 0 15px #22c55e"] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover"
        />
      </motion.div>

      <h3 className="text-lg font-bold bg-gradient-to-r from-green-400 via-yellow-400 to-green-500 bg-clip-text text-transparent drop-shadow-md">
        {member.name}
      </h3>
      <p className="text-green-300 font-semibold tracking-wide">{member.role}</p>

      {/* Description avec animation */}
      {member.description && (
        <motion.p
          className="text-sm text-gray-200 mt-3 max-w-[240px] leading-relaxed italic"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {member.description}
        </motion.p>
      )}
    </motion.div>
  );
}

export default function TeamPage(): JSX.Element {
  const [page, setPage] = useState<number>(0);
  const itemsPerPage = 8;
  const start = page * itemsPerPage;
  const paginatedAmbassadors = ambassadors.slice(start, start + itemsPerPage);
  const totalPages = Math.ceil(ambassadors.length / itemsPerPage);

  return (
    <div
      style={{ backgroundImage: "url('/images/backgrund-ground.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
      className="min-h-screen bg-gray-900/70"
    >
      <PageHero
        title="Notre Équipe"
        breadcrumb="Notre équipe"
        imageUrl="/images/background-banner.jpg"
      />

      <div className="max-w-7xl mx-auto py-20 px-6">
        {/* Bureau exécutif */}
        <div className="mb-20">
          <h3 className="text-4xl font-extrabold mb-12 text-center bg-gradient-to-r from-green-500 via-yellow-400 to-green-600 bg-clip-text text-transparent drop-shadow-lg">
            Bureau Exécutif
          </h3>
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
            {executive.map((m, i) => (
              <ProfileCard key={i} member={m} />
            ))}
          </div>
        </div>

        {/* Ambassadeurs */}
        <div>
          <h3 className="text-4xl font-extrabold mb-12 text-center bg-gradient-to-r from-green-500 via-yellow-400 to-green-600 bg-clip-text text-transparent drop-shadow-lg">
            Nos Ambassadeurs
          </h3>
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-8">
            {paginatedAmbassadors.map((m, i) => (
              <ProfileCard key={i} member={m} />
            ))}
          </div>

          <div className="flex flex-col items-center gap-4 mt-8">
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setPage((p) => Math.max(p - 1, 0))}
                disabled={page === 0}
                className="px-4 py-2 bg-gradient-to-r from-green-500 to-green-700 text-white rounded-lg disabled:opacity-50 hover:from-green-600 hover:to-green-800 transition-colors"
              >
                Précédent
              </button>
              <button
                onClick={() =>
                  setPage((p) =>
                    start + itemsPerPage < ambassadors.length ? p + 1 : p
                  )
                }
                disabled={start + itemsPerPage >= ambassadors.length}
                className="px-4 py-2 bg-gradient-to-r from-green-500 to-green-700 text-white rounded-lg disabled:opacity-50 hover:from-green-600 hover:to-green-800 transition-colors"
              >
                Suivant
              </button>
            </div>

            <span className="text-gray-300 font-medium">
              Page {page + 1} / {totalPages}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
