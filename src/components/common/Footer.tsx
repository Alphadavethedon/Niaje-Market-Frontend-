import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, MessageCircle, Crown, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  const footerLinks = {
    marketplace: [
      'Browse Categories',
      'Featured Products',
      'Trending Deals',
      'New Arrivals',
      'Best Sellers'
    ],
    vendors: [
      'Become a Vendor',
      'Vendor Dashboard',
      'Seller Guide',
      'Pricing Plans',
      'Success Stories'
    ],
    support: [
      'Help Center',
      'Contact Support',
      'FAQs',
      'Shipping Info',
      'Returns Policy'
    ],
    company: [
      'About Us',
      'Our Story',
      'Careers',
      'Press Kit',
      'Blog'
    ]
  };

  const paymentMethods = [
    { name: 'M-Pesa', icon: '📱' },
    { name: 'PayPal', icon: '💳' },
    { name: 'Visa', icon: '💳' },
    { name: 'Mastercard', icon: '💳' }
  ];

  return (
    <footer className="bg-neutral-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-maasai-red to-maasai-darkRed py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="font-heading font-bold text-3xl lg:text-4xl mb-4">
            Stay Updated with NiajeMarket
          </h3>
          <p className="font-body text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Get the latest deals, new arrivals, and exclusive offers delivered to your inbox. 
            Join thousands of satisfied customers!
          </p>
          <div className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Enter your email address..."
              className="flex-1 px-6 py-4 rounded-l-xl text-neutral-800 focus:outline-none font-body"
            />
            <button className="bg-neutral-800 text-white px-8 py-4 rounded-r-xl font-heading font-semibold hover:bg-neutral-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-maasai-red to-maasai-darkRed rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">N</span>
                </div>
                <div>
                  <h2 className="font-heading font-bold text-2xl">
                    Niaje<span className="text-maasai-red">Market</span>
                  </h2>
                  <p className="text-sm text-neutral-400">Kenya's Digital Marketplace</p>
                </div>
              </div>
              <p className="font-body text-neutral-300 mb-8 leading-relaxed">
                Kenya's premier digital marketplace connecting vendors and buyers across the country. 
                Trusted by thousands of users nationwide.
              </p>
              
              {/* Subscription Info */}
              <div className="bg-neutral-800 rounded-xl p-4 mb-6">
                <div className="flex items-center space-x-2 mb-2">
                  <Crown size={16} className="text-maasai-red" />
                  <span className="font-heading font-semibold text-sm">Vendor Subscription</span>
                </div>
                <p className="text-neutral-400 text-sm">KES 200/month for premium features</p>
              </div>

              {/* Support Contact */}
              <div className="space-y-3 text-sm">
                <h4 className="font-heading font-semibold text-maasai-red mb-3">Support & Help</h4>
                <a 
                  href="https://wa.me/254707559957" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 hover:text-matatu-green transition-colors"
                >
                  <MessageCircle size={16} />
                  <span>WhatsApp Support</span>
                </a>
                <a 
                  href="mailto:alphardmedia.entertainment@gmail.com"
                  className="flex items-center space-x-2 hover:text-matatu-green transition-colors"
                >
                  <Mail size={16} />
                  <span>alphardmedia.entertainment@gmail.com</span>
                </a>
                <div className="flex items-center space-x-2">
                  <MapPin size={16} className="text-maasai-red" />
                  <span>Nairobi, Kenya</span>
                </div>
              </div>
            </div>

            {/* Links Sections */}
            <div>
              <h3 className="font-heading font-semibold text-lg text-white mb-4">Marketplace</h3>
              <ul className="space-y-3 font-body text-sm">
                {footerLinks.marketplace.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-heading font-semibold text-lg text-white mb-4">For Vendors</h3>
              <ul className="space-y-3 font-body text-sm">
                {footerLinks.vendors.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-heading font-semibold text-lg text-white mb-4">Support</h3>
              <ul className="space-y-3 font-body text-sm">
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-heading font-semibold text-lg text-white mb-4">Company</h3>
              <ul className="space-y-3 font-body text-sm">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Payment Methods & Social */}
          <div className="border-t border-neutral-800 mt-12 pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
              <div>
                <h4 className="font-heading font-semibold text-white mb-4">Payment Methods</h4>
                <div className="flex space-x-4">
                  {paymentMethods.map((method, index) => (
                    <div key={index} className="flex items-center space-x-2 bg-neutral-800 px-4 py-2 rounded-lg">
                      <span>{method.icon}</span>
                      <span className="font-body text-sm">{method.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-heading font-semibold text-white mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="bg-neutral-800 p-3 rounded-lg hover:bg-maasai-red transition-colors">
                    <Facebook size={20} />
                  </a>
                  <a href="#" className="bg-neutral-800 p-3 rounded-lg hover:bg-maasai-red transition-colors">
                    <Twitter size={20} />
                  </a>
                  <a href="#" className="bg-neutral-800 p-3 rounded-lg hover:bg-maasai-red transition-colors">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="bg-neutral-800 p-3 rounded-lg hover:bg-maasai-red transition-colors">
                    <MessageCircle size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-neutral-800 py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-center text-sm space-y-4 lg:space-y-0">
            <div className="font-body text-neutral-400">
              © 2024 NiajeMarket. All rights reserved.
            </div>
            <div className="flex space-x-6 font-body text-neutral-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;