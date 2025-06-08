import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialSection: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Grace Wanjiku',
      role: 'Mama Mboga - Gikomba',
      rating: 5,
      comment: 'NiajeMarket imebadilisha biashara yangu! Sasa ninapata customers kutoka kila mahali Nairobi. M-Pesa payment ni rahisi sana!',
      avatar: 'GW',
      location: 'Nairobi'
    },
    {
      id: 2,
      name: 'John Mutiso',
      role: 'Fundi Mechanic',
      rating: 5,
      comment: 'Hii app ni poa! Nimepata customers wengi wa magari. Ratings na reviews zinanisaidia kupata kazi zaidi. Asante NiajeMarket!',
      avatar: 'JM',
      location: 'Mombasa'
    },
    {
      id: 3,
      name: 'Sarah Akinyi',
      role: 'Mitumba Dealer',
      rating: 5,
      comment: 'Best platform ya mitumba business! Ni simple kupost items na customers wanakuja haraka. WhatsApp notifications ni fire! 🔥',
      avatar: 'SA',
      location: 'Kisumu'
    }
  ];

  const stats = [
    { label: 'Happy Vendors', value: '15K+' },
    { label: 'Satisfied Buyers', value: '45K+' },
    { label: 'Success Stories', value: '890+' },
    { label: 'Cities Covered', value: '47' }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-beadwork opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-graffiti text-4xl text-maasai-red mb-4">
            CUSTOMER STORIES! 💬
          </h2>
          <p className="font-kenya text-lg text-gray-600 max-w-2xl mx-auto">
            Listen to what wakenya are saying about NiajeMarket. Real stories from real people!
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-white rounded-xl p-4 shadow-md">
                <div className="font-graffiti text-2xl text-maasai-red mb-1">
                  {stat.value}
                </div>
                <div className="font-kenya text-sm text-gray-600">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl shadow-lg p-6 relative hover:shadow-xl transition-shadow duration-300"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-4 right-4 text-maasai-red opacity-20" size={32} />
              
              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={`${
                      i < testimonial.rating
                        ? 'text-matatu-yellow fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>

              {/* Comment */}
              <p className="font-kenya text-gray-700 mb-6 text-sm leading-relaxed">
                "{testimonial.comment}"
              </p>

              {/* User Info */}
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-maasai-red to-maasai-darkRed rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <h4 className="font-kenya font-semibold text-gray-800">
                    {testimonial.name}
                  </h4>
                  <p className="font-kenya text-sm text-gray-600">
                    {testimonial.role}
                  </p>
                  <p className="font-kenya text-xs text-matatu-green">
                    📍 {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-maasai-red to-maasai-darkRed rounded-xl p-8 text-white">
          <h3 className="font-graffiti text-2xl mb-4">
            JOIN THE SUCCESS STORIES! 🚀
          </h3>
          <p className="font-kenya text-lg mb-6 opacity-90">
            Be part of Kenya's fastest growing digital marketplace. 
            Thousands of vendors are already making money!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-matatu-green text-white px-6 py-3 rounded-lg font-graffiti hover:bg-green-600 transition-colors">
              START SELLING TODAY
            </button>
            <button className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-graffiti hover:bg-white/30 transition-colors border border-white/30">
              LEARN MORE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;