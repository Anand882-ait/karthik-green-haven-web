
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown } from 'lucide-react';

const Products = () => {
  const productCategories = [
    {
      title: "Live Plants",
      description: "Premium indoor and outdoor plants for every space and climate",
      details: "Decorative, air-purifying, and landscape plants",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=500&h=400&fit=crop",
      link: "/products/live-plants",
      subcategories: ["Indoor Plants", "Outdoor Plants", "Fruit Plants", "Flowering Plants"]
    },
    {
      title: "Organic Manure",
      description: "Natural fertilizers and soil enhancers for healthy plant growth",
      details: "Vermicompost, organic compost, and bio-fertilizers",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=500&h=400&fit=crop",
      link: "/products/organic-manure",
      subcategories: ["Vermicompost", "Panchagavya", "Organic Compost", "Bio-fertilizers"]
    },
    {
      title: "Pesticides & Fungicides",
      description: "Safe and effective plant protection solutions",
      details: "Organic and household-safe pest control products",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=500&h=400&fit=crop",
      link: "/products/pesticides",
      subcategories: ["Organic Pesticides", "Fungicides", "Household Solutions", "Neem Products"]
    },
    {
      title: "Garden Tools & Irrigation",
      description: "Complete gardening equipment and watering solutions",
      details: "Hand tools, power tools, and irrigation systems",
      image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=500&h=400&fit=crop",
      link: "/products/garden-tools",
      subcategories: ["Hand Tools", "Irrigation Kits", "Pots & Containers", "Garden Accessories"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-green-800 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Our Products</h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Comprehensive horticulture solutions for every gardening need
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Product Categories</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our comprehensive range of premium horticulture products
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {productCategories.map((category, index) => (
              <Link
                key={index}
                to={category.link}
                className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-64 md:h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="md:w-1/2 p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-200">
                      {category.title}
                    </h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {category.description}
                    </p>
                    <p className="text-sm text-gray-500 mb-6">
                      {category.details}
                    </p>
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Includes:</h4>
                      <div className="flex flex-wrap gap-2">
                        {category.subcategories.map((sub, subIndex) => (
                          <span
                            key={subIndex}
                            className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium"
                          >
                            {sub}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center text-green-600 font-semibold group-hover:text-green-700">
                      <span>View Products</span>
                      <ArrowDown className="ml-2 h-4 w-4 transform rotate-[-90deg] group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Catalogue Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-8 md:p-12">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Browse Our Full Catalogue</h2>
              <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                Download our comprehensive product catalogue featuring detailed specifications, 
                pricing, and care instructions for all our products.
              </p>
              
              {/* Catalogue Preview */}
              <div className="bg-white rounded-lg shadow-xl p-6 mb-8 max-w-4xl mx-auto">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ArrowDown className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Catalogue Preview
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Interactive PDF viewer would be embedded here
                  </p>
                  <div className="text-sm text-gray-500">
                    Latest Edition: 2024 | 150+ Pages | 500+ Products
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105">
                  Download Catalogue (PDF)
                </button>
                <button className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
                  Request Physical Copy
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Products?</h2>
            <p className="text-lg text-gray-600">Quality assurance that sets us apart</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-white rounded-lg shadow-lg p-8">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">✓</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Quality Assured</h3>
              <p className="text-gray-700">
                Every product undergoes rigorous quality checks to ensure you receive only the best.
              </p>
            </div>
            
            <div className="text-center bg-white rounded-lg shadow-lg p-8">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">🚚</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Safe Delivery</h3>
              <p className="text-gray-700">
                Specialized packaging and handling ensures your plants reach you in perfect condition.
              </p>
            </div>
            
            <div className="text-center bg-white rounded-lg shadow-lg p-8">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">💬</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Expert Support</h3>
              <p className="text-gray-700">
                Get ongoing care advice and support from our team of qualified horticulturists.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Space?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Contact our experts for personalized product recommendations and bulk order discounts
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Get Expert Consultation
            </Link>
            <a
              href="tel:+919876543210"
              className="border-2 border-white text-white hover:bg-white hover:text-green-800 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
            >
              Call Now: +91 98765 43210
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
