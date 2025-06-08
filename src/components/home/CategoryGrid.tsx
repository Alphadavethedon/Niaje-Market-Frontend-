import React from 'react';
import { Car, Home, Shirt, Wrench, Smartphone, Apple, ArrowRight, TrendingUp } from 'lucide-react';

const CategoryGrid: React.FC = () => {
  const categories = [
    {
      name: 'Vehicles',
      swahili: 'Magari',
      icon: Car,
      count: '2,340+',
      gradient: 'from-blue-500 to-blue-700',
      description: 'Cars, motorcycles, and automotive services',
      featured: 'Toyota Vitz from KES 850K',
      image: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg'
    },
    {
      name: 'Real Estate',
      swahili: 'Nyumba',
      icon: Home,
      count: '890+',
      gradient: 'from-green-500 to-green-700',
      description: 'Houses, plots, and commercial properties',
      featured: 'Kiambu Plot from KES 2.5M',
      image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg'
    },
    {
      name: 'Fashion & Clothing',
      swahili: 'Mitumba',
      icon: Shirt,
      count: '5,670+',
      gradient: 'from-purple-500 to-purple-700',
      description: 'Designer clothes, shoes, and accessories',
      featured: 'Leather Jacket from KES 2,500',
      image: 'https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg'
    },
    {
      name: 'Services',
      swahili: 'Fundis',
      icon: Wrench,
      count: '430+',
      gradient: 'from-orange-500 to-orange-700',
      description: 'Professional services and skilled workers',
      featured: 'Plumber from KES 3,000/day',
      image: 'https://images.pexels.com/photos/8891/pexels-photo-8891.jpeg'
    },
    {
      name: 'Electronics',
      swahili: 'Electronics',
      icon: Smartphone,
      count: '1,230+',
      gradient: 'from-indigo-500 to-indigo-700',
      description: 'Phones, laptops, TVs, and gadgets',
      featured: 'iPhone 13 from KES 95K',
      image: 'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg'
    },
    {
      name: 'Food & Groceries',
      swahili: 'Chakula',
      icon: Apple,
      count: '670+',
      gradient: 'from-red-500 to-red-700',
      description: 'Fresh produce and grocery items',
      featured: 'Fresh Vegetables from KES 20',
      image: 'https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg'
    }
  ];

  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-maasai-red/10 text-maasai-red px-4 py-2 rounded-full font-medium text-sm mb-4">
            <TrendingUp size={16} />
            <span>Popular Categories</span>
          </div>
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-neutral-800 mb-6">
            Explore Our Categories
          </h2>
          <p className="font-body text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            Discover thousands of products and services across Kenya. From vehicles to real estate, 
            we have everything you need in one place.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-soft hover:shadow-large transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-neutral-100 hover:border-maasai-red/20"
              >
                {/* Image Header */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${category.gradient} opacity-80`}></div>
                  
                  {/* Icon & Count */}
                  <div className="absolute top-4 left-4 flex items-center space-x-3">
                    <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                      <IconComponent className="text-white" size={24} />
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-white font-medium text-sm">{category.count}</span>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="absolute top-4 right-4">
                    <ArrowRight className="text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all" size={24} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="font-heading font-bold text-xl text-neutral-800 mb-1">
                      {category.name}
                    </h3>
                    <p className="text-neutral-500 font-medium text-sm">{category.swahili}</p>
                  </div>
                  
                  <p className="font-body text-neutral-600 mb-4 leading-relaxed">
                    {category.description}
                  </p>
                  
                  <div className="bg-neutral-50 rounded-lg p-4 mb-6">
                    <p className="font-body text-sm text-neutral-500 mb-1">Featured Deal:</p>
                    <p className="font-heading font-semibold text-maasai-red">
                      {category.featured}
                    </p>
                  </div>

                  <button className="w-full bg-neutral-800 text-white py-3 rounded-xl font-heading font-semibold hover:bg-maasai-red transition-colors group-hover:bg-maasai-red">
                    Browse {category.name}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-maasai-red to-maasai-darkRed text-white px-10 py-4 rounded-xl font-heading font-semibold text-lg hover:from-red-600 hover:to-red-800 transition-all transform hover:scale-105 shadow-maasai">
            View All Categories
          </button>
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;