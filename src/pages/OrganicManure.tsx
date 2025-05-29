
import React from 'react';
import { Link } from 'react-router-dom';
import { Users } from 'lucide-react';

const OrganicManure = () => {
  const products = [
    {
      name: "Vermicompost",
      description: "Premium quality earthworm castings rich in plant nutrients",
      sizes: ["5 kg", "10 kg", "25 kg", "50 kg"],
      benefits: ["Improves soil structure", "Enhances plant growth", "Increases water retention", "Adds beneficial microbes"],
      composition: "Organic matter: 40-50%, NPK ratio: 2:2:1, pH: 6.8-7.2",
      application: "Mix 1-2 kg per square meter or use as top dressing",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop"
    },
    {
      name: "Panchagavya",
      description: "Traditional organic liquid fertilizer made from five cow products",
      sizes: ["500 ml", "1 liter", "5 liters", "10 liters"],
      benefits: ["Natural growth promoter", "Disease resistance", "Improves yield", "Enhances soil health"],
      composition: "Cow dung, cow urine, milk, curd, ghee with organic additives",
      application: "Dilute 3% solution with water and apply as foliar spray or soil drench",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=400&h=300&fit=crop"
    },
    {
      name: "Organic Compost",
      description: "Well-decomposed plant material and organic matter",
      sizes: ["10 kg", "25 kg", "50 kg", "100 kg"],
      benefits: ["Improves soil texture", "Provides slow-release nutrients", "Enhances microbial activity", "Eco-friendly"],
      composition: "Carbon: 30-35%, Nitrogen: 2-3%, Organic matter: 60-70%, pH: 6.5-7.5",
      application: "Apply 5-10 kg per square meter during soil preparation",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=300&fit=crop"
    },
    {
      name: "Bio-Fertilizer",
      description: "Microbe-enriched natural plant nutrition enhancer",
      sizes: ["250 g", "500 g", "1 kg", "5 kg"],
      benefits: ["Nitrogen fixation", "Phosphate solubilization", "Enhanced nutrient uptake", "Reduced chemical dependency"],
      composition: "Azotobacter, Rhizobium, Phosphate solubilizing bacteria, Mycorrhizae",
      application: "Mix 5g per kg of seeds or apply 1 kg per acre",
      image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=400&h=300&fit=crop"
    },
    {
      name: "Bone Meal",
      description: "Slow-release phosphorus rich natural fertilizer",
      sizes: ["1 kg", "5 kg", "10 kg", "25 kg"],
      benefits: ["High phosphorus content", "Strengthens root growth", "Promotes flowering", "Long-lasting effect"],
      composition: "Phosphorus: 15-20%, Calcium: 20-25%, Nitrogen: 3-4%",
      application: "Mix 100-200g per square meter during planting",
      image: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?w=400&h=300&fit=crop"
    },
    {
      name: "Neem Cake",
      description: "Natural pest repellent and soil enricher",
      sizes: ["1 kg", "5 kg", "10 kg", "25 kg"],
      benefits: ["Natural pest control", "Slow nitrogen release", "Improves soil health", "Acts as soil conditioner"],
      composition: "Nitrogen: 2-3%, Phosphorus: 0.5-1%, Potassium: 1-2%, Organic matter: 80-90%",
      application: "Apply 250-500g per plant or mix 1 kg per 50 sq feet",
      image: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f?w=400&h=300&fit=crop"
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
              <span>Organic Manure</span>
            </div>
            <h1 className="text-5xl font-bold mb-6">Organic Manure</h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Natural fertilizers and soil enhancers for healthy and sustainable plant growth
            </p>
          </div>
        </div>
      </section>

      {/* Products Display */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12">
            <div className="mb-8 md:mb-0">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Organic Solutions</h2>
              <p className="text-lg text-gray-600 max-w-2xl">
                Chemical-free, sustainable products that enrich your soil and promote healthy plant growth
              </p>
            </div>
            <div className="bg-green-100 rounded-lg p-4">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">Expert Tip</h4>
                  <p className="text-sm text-gray-700">Use organic manure before the growing season for best results</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-110 transition-all duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Available Sizes:</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.sizes.map((size, i) => (
                        <span key={i} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs font-medium">
                          {size}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Benefits:</h4>
                    <ul className="list-disc list-inside text-sm text-gray-600">
                      {product.benefits.map((benefit, i) => (
                        <li key={i}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Composition:</h4>
                    <p className="text-sm text-gray-600">{product.composition}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Application:</h4>
                    <p className="text-sm text-gray-600">{product.application}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits of Organic Manure */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Organic Manure?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the numerous advantages of switching to organic fertilizers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-green-50 rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Sustainable Farming</h3>
              <p className="text-gray-700">
                Supports environmentally friendly agriculture practices and reduces chemical dependency
              </p>
            </div>
            
            <div className="bg-green-50 rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Soil Structure</h3>
              <p className="text-gray-700">
                Improves soil texture, water retention, and drainage for healthier plant root systems
              </p>
            </div>
            
            <div className="bg-green-50 rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">🌿</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Long-Term Benefits</h3>
              <p className="text-gray-700">
                Provides slow-release nutrition that continues to feed plants over extended periods
              </p>
            </div>
            
            <div className="bg-green-50 rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">🦠</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Microbial Activity</h3>
              <p className="text-gray-700">
                Enhances beneficial soil microorganism populations that support plant health
              </p>
            </div>
            
            <div className="bg-green-50 rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">🥕</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Chemical-Free Produce</h3>
              <p className="text-gray-700">
                Helps grow healthier, more nutritious crops without harmful chemical residues
              </p>
            </div>
            
            <div className="bg-green-50 rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">♻️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Waste Recycling</h3>
              <p className="text-gray-700">
                Turns organic waste into valuable resources, supporting circular economy principles
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Guide */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Application Guide</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              How to effectively use organic manure for optimal results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">For Gardens & Potted Plants</h3>
              
              <ol className="space-y-4">
                <li className="flex">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Soil Preparation</h4>
                    <p className="text-gray-700">
                      Mix 2-3 kg of organic manure per square meter of garden soil before planting. For potted plants,
                      use a 3:1 ratio of potting soil to organic manure.
                    </p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Top Dressing</h4>
                    <p className="text-gray-700">
                      Apply a 1-2 cm layer of compost or vermicompost around established plants every 2-3 months,
                      keeping it away from direct contact with stems.
                    </p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Liquid Application</h4>
                    <p className="text-gray-700">
                      For liquid fertilizers like Panchagavya, dilute as directed and apply as a foliar spray
                      or soil drench every 15-20 days during growing season.
                    </p>
                  </div>
                </li>
              </ol>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">For Agricultural Fields</h3>
              
              <ol className="space-y-4">
                <li className="flex">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Base Application</h4>
                    <p className="text-gray-700">
                      Apply 2-4 tons of organic compost or vermicompost per acre during field preparation,
                      2-3 weeks before sowing or planting.
                    </p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Specialized Products</h4>
                    <p className="text-gray-700">
                      For bio-fertilizers, apply as seed treatment (5g/kg of seeds) or soil application
                      (1-2 kg per acre) based on crop requirements.
                    </p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Maintenance</h4>
                    <p className="text-gray-700">
                      Throughout the growing season, supplement with foliar sprays and side dressings as needed,
                      especially during key growth stages like flowering and fruit formation.
                    </p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Switch to Organic?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Contact our experts for personalized recommendations and bulk order discounts
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

export default OrganicManure;
