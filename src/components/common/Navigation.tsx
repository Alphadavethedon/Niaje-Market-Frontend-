import React from 'react';
import { Car, Home, Shirt, Wrench, Smartphone, Apple, TrendingUp, MapPin, X } from 'lucide-react';

interface NavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ isOpen, onClose }) => {
  const navItems = [
    { name: 'Vehicles', swahili: 'Magari', icon: Car, color: 'text-blue-600', count: '2.3K+', gradient: 'from-blue-500 to-blue-600' },
    { name: 'Real Estate', swahili: 'Nyumba', icon: Home, color: 'text-green-600', count: '890+', gradient: 'from-green-500 to-green-600' },
    { name: 'Fashion', swahili: 'Mitumba', icon: Shirt, color: 'text-purple-600', count: '5.7K+', gradient: 'from-purple-500 to-purple-600' },
    { name: 'Services', swahili: 'Fundis', icon: Wrench, color: 'text-orange-600', count: '430+', gradient: 'from-orange-500 to-orange-600' },
    { name: 'Electronics', swahili: 'Electronics', icon: Smartphone, color: 'text-indigo-600', count: '1.2K+', gradient: 'from-indigo-500 to-indigo-600' },
    { name: 'Food & Groceries', swahili: 'Chakula', icon: Apple, color: 'text-red-600', count: '670+', gradient: 'from-red-500 to-red-600' },
  ];

  const quickLinks = [
    'Trending Now',
    'Nairobi Listings',
    'Best Deals',
    'Fast Delivery',
    'M-Pesa Ready',
    'Verified Vendors'
  ];

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Navigation Menu */}
      <nav className={`
        fixed top-0 left-0 h-full w-80 bg-white shadow-large z-50 transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:relative lg:translate-x-0 lg:w-full lg:h-auto lg:shadow-none lg:bg-neutral-50
      `}>
        {/* Header */}
        <div className="p-6 border-b bg-gradient-to-r from-maasai-red to-maasai-darkRed lg:bg-none lg:from-transparent lg:to-transparent lg:border-none">
          <div className="flex items-center justify-between lg:justify-start">
            <div>
              <h2 className="font-heading font-bold text-xl text-white lg:text-neutral-800">Categories</h2>
              <p className="text-sm text-white/80 lg:text-neutral-600 font-medium">Choose your category</p>
            </div>
            <button
              onClick={onClose}
              className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              <X size={20} className="text-white" />
            </button>
          </div>
        </div>

        <div className="p-4 lg:p-6">
          {/* Main Categories */}
          <div className="space-y-2 mb-8">
            {navItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <button
                  key={index}
                  className="w-full group relative overflow-hidden rounded-xl p-4 transition-all duration-300 hover:shadow-medium bg-white hover:bg-gradient-to-r hover:from-white hover:to-neutral-50 border border-neutral-100 hover:border-neutral-200"
                >
                  <div className="flex items-center justify-between relative z-10">
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${item.gradient} shadow-soft`}>
                        <IconComponent size={20} className="text-white" />
                      </div>
                      <div className="text-left">
                        <p className="font-heading font-semibold text-neutral-800">{item.name}</p>
                        <p className="text-sm text-neutral-500">{item.swahili}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-xs bg-neutral-100 text-neutral-600 px-3 py-1 rounded-full font-medium group-hover:bg-maasai-red group-hover:text-white transition-colors">
                        {item.count}
                      </span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Quick Links */}
          <div className="border-t pt-6 lg:border-none lg:pt-0">
            <h3 className="font-heading font-semibold text-neutral-800 mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  className="text-left p-3 rounded-lg hover:bg-neutral-100 transition-colors font-body text-sm text-neutral-700 hover:text-maasai-red border border-neutral-100 hover:border-maasai-red/20"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Location Banner */}
          <div className="mt-8 p-6 bg-gradient-to-r from-matatu-green to-matatu-blue rounded-xl text-white">
            <div className="flex items-center space-x-2 mb-3">
              <MapPin size={20} />
              <span className="font-heading font-semibold">Your Location</span>
            </div>
            <p className="font-body text-sm opacity-90">
              Nairobi, Kenya<br />
              Available nationwide
            </p>
            <button className="mt-3 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
              Change Location
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;