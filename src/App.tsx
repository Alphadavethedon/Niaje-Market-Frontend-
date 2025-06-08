import React, { useState } from 'react';
import Header from './components/common/Header';
import Navigation from './components/common/Navigation';
import HeroSection from './components/home/HeroSection';
import CategoryGrid from './components/home/CategoryGrid';
import FeaturedProducts from './components/home/FeaturedProducts';
import TestimonialSection from './components/home/TestimonialSection';
import Footer from './components/common/Footer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header onMenuToggle={toggleMenu} isMenuOpen={isMenuOpen} />
      
      {/* Navigation */}
      <Navigation isOpen={isMenuOpen} onClose={closeMenu} />
      
      {/* Main Content */}
      <main>
        <HeroSection />
        <CategoryGrid />
        <FeaturedProducts />
        <TestimonialSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;