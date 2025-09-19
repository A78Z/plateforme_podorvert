import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Handshake, Building, User, Mail, Phone, MessageSquare, CheckCircle, ArrowLeft } from 'lucide-react';

const BecomePartnerPage: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Here you would typically handle form submission, e.g., send to an API
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8 md:p-12"
      >
        {isSubmitted ? (
          <div className="text-center">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Demande envoyée !</h2>
            <p className="text-gray-600 mb-6">Merci pour votre intérêt. Nous avons bien reçu votre demande et nous vous contacterons très prochainement.</p>
            <Link
              to="/"
              className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Retour à l'accueil
            </Link>
          </div>
        ) : (
          <>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800">
                🤝 Devenir partenaire
              </h2>
              <p className="text-gray-600 mt-2">
                Remplissez ce formulaire pour rejoindre notre réseau et contribuer à un avenir plus vert.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-left text-gray-700 font-medium mb-1">Nom de l’organisation</label>
                <div className="relative">
                  <Building className="w-5 h-5 text-gray-400 absolute top-1/2 left-4 -translate-y-1/2" />
                  <input type="text" className="w-full pl-12 p-3 border rounded-lg focus:ring-2 focus:ring-green-500" placeholder="Votre entreprise / institution" required />
                </div>
              </div>
              <div>
                <label className="block text-left text-gray-700 font-medium mb-1">Type de partenaire</label>
                <select className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 bg-white" required>
                  <option>Entreprise</option>
                  <option>Institution</option>
                  <option>ONG / Association</option>
                  <option>Autre</option>
                </select>
              </div>
              <div>
                <label className="block text-left text-gray-700 font-medium mb-1">Nom et Prénom</label>
                <div className="relative">
                  <User className="w-5 h-5 text-gray-400 absolute top-1/2 left-4 -translate-y-1/2" />
                  <input type="text" className="w-full pl-12 p-3 border rounded-lg focus:ring-2 focus:ring-green-500" placeholder="Nom complet" required />
                </div>
              </div>
              <div>
                <label className="block text-left text-gray-700 font-medium mb-1">Email</label>
                <div className="relative">
                  <Mail className="w-5 h-5 text-gray-400 absolute top-1/2 left-4 -translate-y-1/2" />
                  <input type="email" className="w-full pl-12 p-3 border rounded-lg focus:ring-2 focus:ring-green-500" placeholder="exemple@mail.com" required />
                </div>
              </div>
              <div>
                <label className="block text-left text-gray-700 font-medium mb-1">Téléphone</label>
                <div className="relative">
                  <Phone className="w-5 h-5 text-gray-400 absolute top-1/2 left-4 -translate-y-1/2" />
                  <input type="tel" className="w-full pl-12 p-3 border rounded-lg focus:ring-2 focus:ring-green-500" placeholder="+221..." />
                </div>
              </div>
              <div>
                <label className="block text-left text-gray-700 font-medium mb-1">Message</label>
                 <div className="relative">
                  <MessageSquare className="w-5 h-5 text-gray-400 absolute top-5 left-4" />
                  <textarea rows={4} className="w-full pl-12 p-3 border rounded-lg focus:ring-2 focus:ring-green-500" placeholder="Expliquez brièvement pourquoi vous souhaitez devenir partenaire..."></textarea>
                </div>
              </div>
              <button type="submit" className="w-full py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition">
                Envoyer la demande
              </button>
            </form>
          </>
        )}
      </motion.div>
    </div>
  );
};

export default BecomePartnerPage;
