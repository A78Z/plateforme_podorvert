import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, User, Target, Compass, CheckCircle, DollarSign, Users, Mail, Trophy, School, LayoutDashboard } from 'lucide-react';

import AutoHidingNavbar from './components/AutoHidingNavbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ObjectivesPage from './pages/ObjectivesPage';
import StrategyPage from './pages/StrategyPage';
import ExpectedResultsPage from './pages/ExpectedResultsPage';
import FundingPage from './pages/FundingPage';
import TeamPage from './pages/TeamPage';
import ContactPage from './pages/ContactPage';
import ScrollToTop from './components/ScrollToTop';
import SocialMediaPage from './pages/SocialMediaPage';
import ContextPage from './pages/ContextPage';
import SponsorsPage from './pages/SponsorsPage';
import GalleryPage from './pages/GalleryPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import BecomeDonorPage from './pages/BecomeDonorPage';
import BecomePartnerPage from './pages/BecomePartnerPage';
import NewsPage from './pages/NewsPage';
import ArticlePage from './pages/ArticlePage';
import EngagementPage from './pages/EngagementPage';
import SchoolsSpacePage from './pages/SchoolsSpacePage';
import MotPresidentPage from './components/mot-president';

function App() {
  const navItems = [
    { name: 'ACCUEIL', to: '/', icon: Home },
    { name: 'QUI SOMMES-NOUS', to: '/qui-sommes-nous', icon: User },
    { name: 'OBJECTIFS', to: '/nos-objectifs', icon: Target },
    { name: 'STRATÉGIE', to: '/notre-strategie', icon: Compass },
    { name: 'RÉSULTATS', to: '/resultats-attendus', icon: CheckCircle },
    { name: 'FINANCEMENT', to: '/source-de-financement', icon: DollarSign },
    { name: 'ENGAGEMENT', to: '/engagement', icon: Trophy },
    { name: 'ESPACE ÉCOLES', to: '/espace-ecoles', icon: School }
    
  ];

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <AutoHidingNavbar items={navItems} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/qui-sommes-nous" element={<AboutPage />} />
            <Route path="/nos-objectifs" element={<ObjectivesPage />} />
            <Route path="/notre-strategie" element={<StrategyPage />} />
            <Route path="/resultats-attendus" element={<ExpectedResultsPage />} />
            <Route path="/source-de-financement" element={<FundingPage />} />
            <Route path="/notre-equipe" element={<TeamPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/medias-sociaux" element={<SocialMediaPage />} />
            <Route path="/contexte-et-justification" element={<ContextPage />} />
            <Route path="/grands-parrains" element={<SponsorsPage />} />
            <Route path="/galerie" element={<GalleryPage />} />
            <Route path="/politique-de-confidentialite" element={<PrivacyPolicyPage />} />
            <Route path="/devenir-donateur" element={<BecomeDonorPage />} />
            <Route path="/devenir-partenaire" element={<BecomePartnerPage />} />
            <Route path="/actualites" element={<NewsPage />} />
            <Route path="/actualites/:id" element={<ArticlePage />} />
            <Route path="/engagement" element={<EngagementPage />} />
            <Route path="/espace-ecoles" element={<SchoolsSpacePage />} />
            <Route path="/mot-president" element={<MotPresidentPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
