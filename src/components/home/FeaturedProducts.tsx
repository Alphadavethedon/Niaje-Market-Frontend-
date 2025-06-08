import React, { useState } from 'react';
import { Heart, Eye, MapPin, Star, Phone, MessageCircle, Lock, Crown } from 'lucide-react';
import { mockProducts } from '../../data/mockData';

const FeaturedProducts: React.FC = () => {
  const [showSubscriptionModal, setShowSubscriptionModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  const formatPrice = (price: number, currency: string) => {
    return `${currency} ${price.toLocaleString()}`;
  };

  const formatViews = (views: number) => {
    return views > 1000 ? `${(views / 1000).toFixed(1)}K` : views.toString();
  };

  const handleContactVendor = (productId: string, vendorHasSubscription: boolean) => {
    if (!vendorHasSubscription) {
      setSelectedProduct(productId);
      setShowSubscriptionModal(true);
    } else {
      // Allow contact - vendor has active subscription
      console.log('Contacting vendor...');
    }
  };

  const SubscriptionModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-md w-full p-6">
        <div className="text-center mb-6">
          <Lock className="mx-auto mb-4 text-maasai-red" size={48} />
          <h3 className="font-graffiti text-xl text-maasai-red mb-2">
            VENDOR SUBSCRIPTION REQUIRED! 💰
          </h3>
          <p className="font-kenya text-gray-600">
            This vendor needs to subscribe to receive customer contacts. 
            Subscription is only KES 200/month!
          </p>
        </div>

        <div className="bg-gradient-to-r from-maasai-red to-maasai-darkRed rounded-lg p-4 text-white mb-6">
          <div className="flex items-center space-x-2 mb-2">
            <Crown size={20} />
            <span className="font-graffiti">PREMIUM VENDOR ACCESS</span>
          </div>
          <ul className="font-kenya text-sm space-y-1">
            <li>✅ Receive customer contacts</li>
            <li>✅ WhatsApp notifications</li>
            <li>✅ Priority listing</li>
            <li>✅ Analytics dashboard</li>
          </ul>
        </div>

        <div className="flex space-x-3">
          <button
            onClick={() => setShowSubscriptionModal(false)}
            className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-lg font-graffiti hover:bg-gray-300 transition-colors"
          >
            CLOSE
          </button>
          <button className="flex-1 bg-matatu-green text-white py-3 rounded-lg font-graffiti hover:bg-green-600 transition-colors">
            NOTIFY VENDOR
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-graffiti text-4xl text-maasai-red mb-4">
            TRENDING DEALS! 🔥
          </h2>
          <p className="font-kenya text-lg text-gray-600 max-w-2xl mx-auto">
            Hizi ndio deals za moto sasa hivi! Haraka kabla hazijaisha, sababu wakenya hawangoji!
          </p>
          <div className="mt-4 bg-matatu-yellow text-maasai-black px-4 py-2 rounded-lg inline-block">
            <span className="font-graffiti text-sm">
              💡 Vendors: Subscribe for KES 200/month to receive customer contacts!
            </span>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {mockProducts.map((product, index) => {
            const hasActiveSubscription = product.vendor.subscription?.status === 'active';
            
            return (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border-2 border-transparent hover:border-maasai-red group"
              >
                {/* Image Container */}
                <div className="relative overflow-hidden">
                  <img
                    src={product.images[0]}
                    alt={product.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  
                  {/* Overlay Badges */}
                  <div className="absolute top-3 left-3 flex space-x-2">
                    {product.featured && (
                      <span className="bg-matatu-green text-white px-2 py-1 rounded-full text-xs font-graffiti">
                        FEATURED
                      </span>
                    )}
                    {product.negotiable && (
                      <span className="bg-matatu-yellow text-maasai-black px-2 py-1 rounded-full text-xs font-graffiti">
                        NEGOTIABLE
                      </span>
                    )}
                    {hasActiveSubscription && (
                      <span className="bg-maasai-red text-white px-2 py-1 rounded-full text-xs font-graffiti flex items-center space-x-1">
                        <Crown size={10} />
                        <span>PREMIUM</span>
                      </span>
                    )}
                  </div>

                  {/* Heart Button */}
                  <button className="absolute top-3 right-3 bg-white/80 hover:bg-white p-2 rounded-full transition-colors">
                    <Heart size={16} className="text-gray-600 hover:text-maasai-red" />
                  </button>

                  {/* Stats Overlay */}
                  <div className="absolute bottom-3 left-3 flex items-center space-x-3 text-white text-xs">
                    <div className="flex items-center space-x-1 bg-black/50 px-2 py-1 rounded">
                      <Eye size={12} />
                      <span>{formatViews(product.views)}</span>
                    </div>
                    <div className="flex items-center space-x-1 bg-black/50 px-2 py-1 rounded">
                      <Heart size={12} />
                      <span>{product.likes}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  {/* Title & Price */}
                  <div className="mb-3">
                    <h3 className="font-kenya font-semibold text-lg text-gray-800 mb-1 line-clamp-2">
                      {product.title}
                    </h3>
                    <p className="font-graffiti text-2xl text-maasai-red">
                      {formatPrice(product.price, product.currency)}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="font-kenya text-gray-600 text-sm mb-3 line-clamp-2">
                    {product.description}
                  </p>

                  {/* Vendor Info */}
                  <div className="flex items-center space-x-2 mb-3 p-2 bg-gray-50 rounded-lg">
                    <div className="w-8 h-8 bg-maasai-red rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">
                        {product.vendor.name.charAt(0)}
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <p className="font-kenya text-sm font-medium">{product.vendor.name}</p>
                        {hasActiveSubscription && (
                          <Crown size={12} className="text-maasai-red" />
                        )}
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star size={12} className="text-matatu-yellow fill-current" />
                        <span className="text-xs text-gray-600">{product.vendor.rating}</span>
                        {product.vendor.verified && (
                          <span className="text-xs text-matatu-green">✓ Verified</span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-center space-x-1 mb-4 text-gray-600">
                    <MapPin size={14} />
                    <span className="font-kenya text-sm">{product.location}</span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleContactVendor(product.id, hasActiveSubscription)}
                      className={`flex-1 py-2 px-3 rounded-lg font-graffiti text-sm transition-colors flex items-center justify-center space-x-1 ${
                        hasActiveSubscription
                          ? 'bg-maasai-red text-white hover:bg-maasai-darkRed'
                          : 'bg-gray-300 text-gray-600 cursor-not-allowed'
                      }`}
                    >
                      {hasActiveSubscription ? <Phone size={14} /> : <Lock size={14} />}
                      <span>{hasActiveSubscription ? 'CALL' : 'LOCKED'}</span>
                    </button>
                    <button
                      onClick={() => handleContactVendor(product.id, hasActiveSubscription)}
                      className={`flex-1 py-2 px-3 rounded-lg font-graffiti text-sm transition-colors flex items-center justify-center space-x-1 ${
                        hasActiveSubscription
                          ? 'bg-matatu-green text-white hover:bg-green-600'
                          : 'bg-gray-300 text-gray-600 cursor-not-allowed'
                      }`}
                    >
                      {hasActiveSubscription ? <MessageCircle size={14} /> : <Lock size={14} />}
                      <span>{hasActiveSubscription ? 'CHAT' : 'LOCKED'}</span>
                    </button>
                  </div>

                  {/* Subscription Status */}
                  {!hasActiveSubscription && (
                    <div className="mt-3 text-center">
                      <p className="font-kenya text-xs text-gray-500">
                        Vendor needs subscription to receive contacts
                      </p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Load More Button */}
        <div className="text-center">
          <button className="bg-gradient-to-r from-maasai-red to-maasai-darkRed text-white px-8 py-4 rounded-xl font-graffiti text-lg hover:from-red-600 hover:to-red-800 transition-all transform hover:scale-105 shadow-lg">
            LOAD MORE DEALS 🛍️
          </button>
        </div>
      </div>

      {/* Subscription Modal */}
      {showSubscriptionModal && <SubscriptionModal />}
    </section>
  );
};

export default FeaturedProducts;