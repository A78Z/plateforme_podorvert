import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Facebook, Youtube, Instagram, Linkedin, FileText, Download, Mail } from 'lucide-react';
import DonationModal from './DonationModal';
import MemberCardModal from './MemberCardModal';

const Footer: React.FC = () => {
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState<'wave' | 'orange' | null>(null);

  const handleOpenDonationModal = (method: 'wave' | 'orange') => {
    setSelectedMethod(method);
    setIsDonationModalOpen(true);
  };

  const resourcesLinks = [
   { to: '/mot-president', label: 'Le mot du Président' }, // ✅ ajouté ici
{ to: '/qui-sommes-nous', label: 'Qui sommes-nous' },
{ to: '/notre-equipe', label: 'Notre équipe' },
{ to: '/actualites', label: 'Nos Actualités' },
{ to: '/grands-parrains', label: 'Grands parrains' },
{ to: '/medias-sociaux', label: 'Médias sociaux' },
{ to: '/galerie', label: 'Notre Médiathèque' },
{ to: '/contexte-et-justification', label: 'Contexte et justification' },
{ to: '/engagement', label: 'Engagement & Gamification' },
{ to: '/espace-ecoles', label: 'Espace Écoles & Jeunes' },


  ];

  const reportsLinks = [
    { href: '/images/pdf/PODOR-VERT-EN-CHIFFRE.pdf', label: 'Podor Vert en chiffre' },
    { href: '/images/pdf/RAPPORT _Version 06012022.pdf', label: 'Rapport d’activités 2021' },
    { href: '/images/pdf/RAPPORT-MISSION-AOUT-2022.pdf', label: 'Rapport de mission' },
    { href: '/images/pdf/RAPPORT-Aout.pdf', label: 'Rapport mission août 2022' },
    { href: '/images/pdf/RAPPORT_ACTIVITE_PODOR_VERT.pdf', label: 'Rapport activité Podor Vert' },
  ];

  const socialIcons = [
    { icon: Twitter, href: '#' },
    { icon: Facebook, href: 'https://web.facebook.com/profile.php?id=61577577172091' },
    { icon: Youtube, href: '#' },
    { icon: Instagram, href: '#' },
    { icon: Linkedin, href: '#' },
  ];

  return (
    <>
      <footer className="bg-gradient-to-br from-green-800 via-green-700 to-emerald-700 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
          
          {/* Colonne 1 : Logo + Présentation */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <img
              src="/images/logo-podorvert.png"
              alt="Podor Vert"
              className="h-20 w-20 rounded-full bg-white object-contain shadow-md p-1 ring-4 ring-white/40"
            />
            <p className="text-sm mt-4 italic leading-relaxed max-w-xs text-green-100">
              🌱 Podor Vert agit pour la protection de l'environnement et le développement durable dans notre communauté.
            </p>

            <Link to="/devenir-donateur" className="mt-6 bg-yellow-400 text-green-900 font-semibold px-6 py-2 rounded-full shadow-md hover:scale-105 hover:shadow-xl transition">
              Faire un don à Podor Vert
            </Link>

            <div className="flex gap-4 mt-6">
              <button onClick={() => handleOpenDonationModal('wave')} className="h-12 w-12 rounded-full bg-white p-2 shadow-md hover:scale-110 transition">
                <img
                  src="/images/logos/wave-logo.png"
                  alt="Wave"
                  className="object-contain"
                />
              </button>
              <button onClick={() => handleOpenDonationModal('orange')} className="h-12 w-12 rounded-full bg-white p-2 shadow-md hover:scale-110 transition">
                <img
                  src="/images/logos/orange-money-logo.png"
                  alt="Orange Money"
                  className="object-contain"
                />
              </button>
            </div>
          </div>

          {/* Colonne 2 : Ressources */}
          <div>
            <h3 className="font-bold text-lg mb-4 uppercase tracking-wider text-yellow-300">Ressources</h3>
            <ul className="space-y-2 text-sm">
              {resourcesLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.to} className="hover:text-yellow-300 transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3 : Rapports */}
          <div>
            <h3 className="font-bold text-lg mb-4 uppercase tracking-wider text-yellow-300">Rapports</h3>
            <ul className="space-y-2 text-sm">
              {reportsLinks.map(link => (
                <li key={link.label}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-yellow-300 transition-colors">
                    <FileText size={14} className="mr-2 flex-shrink-0 text-yellow-200" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <a href="/images/pdf/rapports-podor-vert.pdf" download className="inline-flex items-center mt-6 bg-blue-600 text-white px-6 py-2 rounded-full shadow-md hover:bg-blue-700 hover:shadow-xl transition">
              <Download size={16} className="mr-2" />
              Télécharger rapports ✅
            </a>
          </div>

          {/* Colonne 4 : Contact */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-bold text-lg mb-4 uppercase tracking-wider text-yellow-300">Contactez-nous</h3>
            <div className="flex gap-5 mb-6">
              {socialIcons.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a key={index} href={social.href} className="text-2xl hover:text-yellow-300 cursor-pointer transition transform hover:scale-110">
                    <Icon />
                  </a>
                )
              })}
            </div>
            <Link to="/contact" className="inline-flex items-center bg-white text-green-800 font-semibold px-6 py-2 rounded-full shadow-md hover:bg-gray-100 hover:shadow-lg transition">
              <Mail size={16} className="mr-2" />
              Contact
            </Link>
            <div className="mt-6">
              <MemberCardModal />
            </div>
          </div>
        </div>

        {/* Bas du footer */}
        <div className="border-t border-green-600/50">
          <div className="text-center text-green-100 text-sm py-6">
            © 2025 Association Podor Vert – Tous droits réservés.
            <br />
            <Link to="/politique-de-confidentialite" className="underline hover:text-yellow-300 transition">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </footer>
      <DonationModal isOpen={isDonationModalOpen} onClose={() => setIsDonationModalOpen(false)} method={selectedMethod} />
    </>
  );
};

export default Footer;
