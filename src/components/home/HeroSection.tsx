import React, { useState, useEffect } from 'react';
import { Search, TrendingUp, Star, Users, ShoppingBag, ArrowRight, Play } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentSlogan, setCurrentSlogan] = useState(0);

  const slogans = [
    "Kenya's Premier Digital Marketplace",
    "Connect. Trade. Grow Together.",
    "Quality Products, Trusted Vendors",
    "From Nairobi to Mombasa and Beyond"
  ];

  const stats = [
    { label: 'Active Vendors', value: '15K+', icon: Users },
    { label: 'Products Listed', value: '89K+', icon: ShoppingBag },
    { label: 'Happy Customers', value: '45K+', icon: Star },
    { label: 'Daily Transactions', value: '2.3K+', icon: TrendingUp }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlogan((prev) => (prev + 1) % slogans.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-neutral-900 via-neutral-800 to-maasai-black overflow-hidden">
      {/* Background Patterns */}
      <div className="absolute inset-0 bg-maasai-pattern opacity-10"></div>
      <div className="absolute inset-0 bg-beadwork opacity-5"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-matatu-yellow rounded-full animate-bounce-gentle"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-matatu-green rounded-full animate-pulse-soft"></div>
      <div className="absolute bottom-20 left-20 w-3 h-3 bg-maasai-gold rounded-full animate-bounce-gentle"></div>

      <div className="relative max-w-7xl mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Main Heading */}
            <h1 className="font-heading font-bold text-5xl lg:text-7xl text-white mb-6 leading-tight">
              Niaje<span className="text-maasai-red">Market</span>
            </h1>
            
            {/* Rotating Slogan */}
            <div className="h-16 mb-8">
              <p className="font-body text-xl lg:text-2xl text-neutral-300 animate-fade-in">
                {slogans[currentSlogan]}
              </p>
            </div>

            <p className="font-body text-lg text-neutral-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Discover Kenya's most trusted digital marketplace. Connect with verified vendors, 
              find quality products, and grow your business with our premium platform.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <button className="bg-maasai-red text-white px-8 py-4 rounded-xl font-heading font-semibold text-lg hover:bg-maasai-darkRed transition-all transform hover:scale-105 shadow-maasai flex items-center justify-center space-x-2">
                <ShoppingBag size={20} />
                <span>Start Shopping</span>
              </button>
              <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-heading font-semibold text-lg hover:bg-white/20 transition-all transform hover:scale-105 border border-white/20 flex items-center justify-center space-x-2">
                <Play size={20} />
                <span>Watch Demo</span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-neutral-400">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-matatu-green rounded-full"></div>
                <span>Verified Vendors</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-matatu-yellow rounded-full"></div>
                <span>Secure Payments</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-maasai-red rounded-full"></div>
                <span>24/7 Support</span>
              </div>
            </div>
          </div>

          {/* Right Content - Search & Stats */}
          <div className="space-y-8">
            {/* Enhanced Search */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h3 className="font-heading font-semibold text-xl text-white mb-6">Find What You Need</h3>
              <div className="relative mb-6">
                <input
                  type="text"
                  placeholder="Search for cars, houses, clothes, services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-4 pl-12 text-lg rounded-xl border-2 border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder-white/70 focus:outline-none focus:border-maasai-red focus:bg-white/20 transition-all"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/70" size={24} />
              </div>
              
              <button className="w-full bg-maasai-red text-white py-4 rounded-xl font-heading font-semibold text-lg hover:bg-maasai-darkRed transition-colors flex items-center justify-center space-x-2">
                <span>Search Now</span>
                <ArrowRight size={20} />
              </button>

              {/* Popular Searches */}
              <div className="mt-6">
                <p className="text-white/60 text-sm mb-3">Popular searches:</p>
                <div className="flex flex-wrap gap-2">
                  {['Toyota', 'Apartments', 'Phones', 'Plumber'].map((term, index) => (
                    <button
                      key={index}
                      className="bg-white/10 text-white/80 px-3 py-1 rounded-full text-sm hover:bg-white/20 transition-colors"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20 hover:bg-white/20 transition-colors">
                    <IconComponent className="mx-auto mb-3 text-maasai-red" size={32} />
                    <div className="font-heading font-bold text-2xl text-white mb-1">{stat.value}</div>
                    <div className="font-body text-sm text-white/80">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" fill="none" className="w-full h-12">
          <path d="M0,120L40,110C80,100,160,80,240,70C320,60,400,60,480,65C560,70,640,80,720,75C800,70,880,50,960,45C1040,40,1120,50,1160,55L1200,60V120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;