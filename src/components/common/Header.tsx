import React, { useState } from 'react';
import { Search, Menu, X, Heart, Bell, Globe, HelpCircle, User, Crown } from 'lucide-react';

interface HeaderProps {
  onMenuToggle: () => void;
  isMenuOpen: boolean;
}

const Header: React.FC<HeaderProps> = ({ onMenuToggle, isMenuOpen }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [language, setLanguage] = useState<'en' | 'sw'>('en');
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);

  const translations = {
    en: {
      search: "Search for cars, houses, clothes, services...",
      searchBtn: "Search",
      login: "Sign In",
      register: "Join Now",
      help: "Help & Support",
      subscription: "Vendor Subscription: KES 200/month"
    },
    sw: {
      search: "Tafuta magari, nyumba, nguo, huduma...",
      searchBtn: "Tafuta",
      login: "Ingia",
      register: "Jiunge",
      help: "Msaada na Usaidizi",
      subscription: "Michango ya Muuzaji: KES 200/mwezi"
    }
  };

  const t = translations[language];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'sw' : 'en');
    setShowLanguageMenu(false);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-40">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-maasai-red to-maasai-darkRed text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <span className="font-medium">Welcome to Kenya's Premier Digital Marketplace</span>
          <div className="hidden md:flex items-center space-x-6">
            <span className="flex items-center space-x-1">
              <Crown size={14} />
              <span>{t.subscription}</span>
            </span>
            <a 
              href="https://wa.me/254707559957" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-1 hover:text-matatu-yellow transition-colors"
            >
              <HelpCircle size={14} />
              <span>{t.help}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <button
              onClick={onMenuToggle}
              className="lg:hidden p-2 rounded-lg hover:bg-neutral-100 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-maasai-red to-maasai-darkRed rounded-xl flex items-center justify-center shadow-medium">
                <span className="text-white font-bold text-xl">N</span>
              </div>
              <div>
                <h1 className="font-heading font-bold text-2xl text-neutral-800">
                  Niaje<span className="text-maasai-red">Market</span>
                </h1>
                <p className="text-xs text-neutral-500 font-medium">Kenya's Digital Marketplace</p>
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="hidden lg:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder={t.search}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-3 pl-12 pr-24 border-2 border-neutral-200 rounded-xl focus:border-maasai-red focus:outline-none font-body text-neutral-700 placeholder-neutral-400 transition-colors"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400" size={20} />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-maasai-red text-white px-4 py-1.5 rounded-lg font-medium text-sm hover:bg-maasai-darkRed transition-colors">
                {t.searchBtn}
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-3">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setShowLanguageMenu(!showLanguageMenu)}
                className="flex items-center space-x-1 p-2 hover:bg-neutral-100 rounded-lg transition-colors"
              >
                <Globe size={20} className="text-neutral-600" />
                <span className="text-sm font-medium text-neutral-600 uppercase">{language}</span>
              </button>
              
              {showLanguageMenu && (
                <div className="absolute right-0 top-full mt-2 bg-white rounded-lg shadow-large border border-neutral-200 py-2 min-w-32">
                  <button
                    onClick={toggleLanguage}
                    className="w-full px-4 py-2 text-left hover:bg-neutral-50 transition-colors text-sm"
                  >
                    {language === 'en' ? 'Kiswahili' : 'English'}
                  </button>
                </div>
              )}
            </div>

            <button className="relative p-2 hover:bg-neutral-100 rounded-lg transition-colors">
              <Heart size={20} className="text-neutral-600" />
              <span className="absolute -top-1 -right-1 bg-maasai-red text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                3
              </span>
            </button>
            
            <button className="relative p-2 hover:bg-neutral-100 rounded-lg transition-colors">
              <Bell size={20} className="text-neutral-600" />
              <span className="absolute -top-1 -right-1 bg-matatu-green text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                5
              </span>
            </button>

            <button className="bg-neutral-100 text-neutral-700 px-4 py-2 rounded-lg font-medium hover:bg-neutral-200 transition-colors flex items-center space-x-2">
              <User size={16} />
              <span>{t.login}</span>
            </button>

            <button className="bg-maasai-red text-white px-4 py-2 rounded-lg font-medium hover:bg-maasai-darkRed transition-colors">
              {t.register}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="lg:hidden mt-4">
          <div className="relative">
            <input
              type="text"
              placeholder={t.search}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 pl-12 border-2 border-neutral-200 rounded-xl focus:border-maasai-red focus:outline-none font-body"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400" size={20} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;