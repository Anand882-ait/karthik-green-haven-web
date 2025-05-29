
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, Users } from 'lucide-react';

const LivePlants = () => {
  const outdoorPlants = [
    {
      name: "Avenue Trees",
      description: "Large shade trees perfect for streets and landscapes",
      varieties: ["Gulmohar", "Peepal", "Banyan", "Neem", "Rain Tree"],
      benefits: ["Shade provision", "Air purification", "Urban cooling"],
      image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=400&h=300&fit=crop"
    },
    {
      name: "Fruit Plants",
      description: "Productive and beautiful fruit trees and shrubs",
      varieties: ["Mango", "Guava", "Lemon", "Pomegranate", "Papaya"],
      benefits: ["Fresh produce", "Ornamental value", "Attracted pollinators"],
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop"
    },
    {
      name: "Flowering Shrubs",
      description: "Colorful plants that add beauty to any garden",
      varieties: ["Hibiscus", "Bougainvillea", "Jasmine", "Rose", "Tecoma"],
      benefits: ["Aesthetic appeal", "Fragrance", "Attract butterflies"],
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop"
    },
    {
      name: "Hedge Plants",
      description: "Perfect for privacy screens and garden boundaries",
      varieties: ["Duranta", "Thuja", "Ficus", "Murraya", "Clerodendrum"],
      benefits: ["Privacy", "Wind protection", "Noise reduction"],
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=300&fit=crop"
    }
  ];
  
  const indoorPlants = [
    {
      name: "Snake Plant",
      description: "Resilient and air-purifying vertical plants",
      varieties: ["Laurentii", "Black Gold", "Cylindrica", "Moonshine"],
      benefits: ["Air purification", "Low maintenance", "Low light tolerance"],
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=300&fit=crop"
    },
    {
      name: "Areca Palm",
      description: "Elegant feathery palm for indoor spaces",
      varieties: ["Golden Areca", "Yellow Palm", "Butterfly Palm"],
      benefits: ["Natural humidifier", "Non-toxic to pets", "Air filtering"],
      image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=400&h=300&fit=crop"
    },
    {
      name: "Money Plant",
      description: "Classic trailing vine with heart-shaped leaves",
      varieties: ["Golden Pothos", "Marble Queen", "Neon Pothos", "Jade"],
      benefits: ["Versatile growing habits", "Air purification", "Easy propagation"],
      image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=400&h=300&fit=crop"
    },
    {
      name: "Peace Lily",
      description: "Elegant flowering plant with dark green leaves",
      varieties: ["Spathiphyllum Wallisii", "Mauna Loa", "Domino"],
      benefits: ["Air purification", "Toxic gas removal", "Humidity increase"],
      image: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?w=400&h=300&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-green-800 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-4">
              <Link to="/products" className="text-green-200 hover:text-white transition-colors duration-200">
                Products
              </Link>
              <span className="mx-2">›</span>
              <span>Live Plants</span>
            </div>
            <h1 className="text-5xl font-bold mb-6">Live Plants</h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Premium quality indoor and outdoor plants for every space and climate
            </p>
          </div>
        </div>
      </section>

      {/* Indoor Plants Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12">
            <div className="mb-8 md:mb-0">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Indoor Plants</h2>
              <p className="text-lg text-gray-600 max-w-2xl">
                Elevate your indoor spaces with our air-purifying and decorative plants that thrive in home environments
              </p>
            </div>
            <div className="bg-green-100 rounded-lg p-4">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">Expert Tip</h4>
                  <p className="text-sm text-gray-700">Indoor plants typically need less watering but more humidity</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {indoorPlants.map((plant, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="h-48 overflow-hidden">
                  <img
                    src={plant.image}
                    alt={plant.name}
                    className="w-full h-full object-cover hover:scale-110 transition-all duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{plant.name}</h3>
                  <p className="text-gray-600 mb-4">{plant.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Varieties:</h4>
                    <div className="flex flex-wrap gap-2">
                      {plant.varieties.map((variety, i) => (
                        <span key={i} className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs">
                          {variety}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Benefits:</h4>
                    <ul className="list-disc list-inside text-sm text-gray-600">
                      {plant.benefits.map((benefit, i) => (
                        <li key={i}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outdoor Plants Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12">
            <div className="mb-8 md:mb-0">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Outdoor Plants</h2>
              <p className="text-lg text-gray-600 max-w-2xl">
                Transform your garden, landscape, or farm with our premium selection of outdoor plants
              </p>
            </div>
            <div className="bg-green-100 rounded-lg p-4">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">Expert Tip</h4>
                  <p className="text-sm text-gray-700">Choose plants suitable for your local climate and soil type</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {outdoorPlants.map((plant, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200">
                <div className="h-48 overflow-hidden">
                  <img
                    src={plant.image}
                    alt={plant.name}
                    className="w-full h-full object-cover hover:scale-110 transition-all duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{plant.name}</h3>
                  <p className="text-gray-600 mb-4">{plant.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Varieties:</h4>
                    <div className="flex flex-wrap gap-2">
                      {plant.varieties.map((variety, i) => (
                        <span key={i} className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs">
                          {variety}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Benefits:</h4>
                    <ul className="list-disc list-inside text-sm text-gray-600">
                      {plant.benefits.map((benefit, i) => (
                        <li key={i}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plant Care Guide */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Plant Care Guide</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Essential tips to help your plants thrive and flourish
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mb-4">
                <span className="text-white font-bold text-xl">💧</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Watering</h3>
              <p className="text-gray-700">
                Different plants have different watering needs. Generally, most indoor plants prefer their soil to dry 
                out slightly between waterings, while outdoor plants may need more regular watering depending on climate 
                and season.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mb-4">
                <span className="text-white font-bold text-xl">☀️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Light</h3>
              <p className="text-gray-700">
                Place plants according to their light requirements. Some thrive in direct sunlight, while others prefer 
                indirect light or shade. Pay attention to changes in leaf color as indicators of light problems.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mb-4">
                <span className="text-white font-bold text-xl">🌱</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Soil & Fertilizer</h3>
              <p className="text-gray-700">
                Use appropriate soil mixes for different plant types. Most plants benefit from regular fertilization during 
                growing seasons. Our organic fertilizers provide balanced nutrition without chemical harm.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Planting?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Visit our nursery for personalized recommendations or contact our plant experts for guidance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Get Expert Advice
            </Link>
            <Link
              to="/products"
              className="border-2 border-white text-white hover:bg-white hover:text-green-800 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
            >
              Explore Other Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LivePlants;
