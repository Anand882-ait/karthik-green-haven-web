
import React from 'react';
import { Link } from 'react-router-dom';
import { Users } from 'lucide-react';

const Pesticides = () => {
  const products = [
    {
      name: "Neem Oil Extract",
      description: "Multipurpose organic pesticide and fungicide",
      sizes: ["100 ml", "250 ml", "500 ml", "1 liter"],
      benefits: ["Controls wide range of pests", "Safe for beneficial insects", "Eco-friendly", "No harmful residue"],
      application: "Dilute 2-3 ml per liter of water and spray on affected plants",
      safety: "Completely safe for humans and pets. Wait 24 hours before harvesting",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop"
    },
    {
      name: "Organic Fungicide",
      description: "Copper-based natural disease controller",
      sizes: ["250 g", "500 g", "1 kg"],
      benefits: ["Prevents fungal diseases", "Long-lasting protection", "Rainproof formulation", "Root and leaf application"],
      application: "Mix 5g per liter of water and spray on plants every 7-14 days",
      safety: "Non-toxic to humans, pets and beneficial insects",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=400&h=300&fit=crop"
    },
    {
      name: "Bio-Insecticide",
      description: "Bacillus thuringiensis based caterpillar control",
      sizes: ["100 g", "250 g", "500 g"],
      benefits: ["Targets caterpillars only", "No harm to beneficial insects", "Fast action", "Breaks down naturally"],
      application: "Mix 1-2 g per liter of water and spray thoroughly on leaves",
      safety: "Safe for humans, pets, and beneficial insects. Can be used until day of harvest",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=300&fit=crop"
    },
    {
      name: "Herbal Ant Repellent",
      description: "Natural ant control for gardens and homes",
      sizes: ["250 g", "500 g", "1 kg"],
      benefits: ["Child and pet safe", "Long-lasting effect", "Pleasant fragrance", "Indoor and outdoor use"],
      application: "Sprinkle along ant trails or mix with water (10g/L) and spray affected areas",
      safety: "100% natural ingredients safe for indoor use around children and pets",
      image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=400&h=300&fit=crop"
    },
    {
      name: "Diatomaceous Earth",
      description: "Physical pest control powder from fossilized algae",
      sizes: ["250 g", "500 g", "1 kg", "5 kg"],
      benefits: ["Controls crawling insects", "Long-lasting protection", "Works in all temperatures", "No resistance build-up"],
      application: "Apply as dry dust around plants or mix with water for spray application",
      safety: "Food-grade quality safe for humans and pets. May cause minor respiratory irritation if inhaled",
      image: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?w=400&h=300&fit=crop"
    },
    {
      name: "Eco-Friendly Slug Control",
      description: "Iron phosphate based slug and snail repellent",
      sizes: ["250 g", "500 g", "1 kg"],
      benefits: ["Wildlife and pet safe", "Rain resistant", "Effective for weeks", "No slime trails"],
      application: "Scatter pellets at 5g per square meter around vulnerable plants",
      safety: "Safe for use around edible plants. No harm to wildlife, pets or children",
      image: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f?w=400&h=300&fit=crop"
    }
  ];

  const householdSolutions = [
    {
      name: "Natural Fruit Fly Trap",
      description: "Non-toxic solution for indoor fruit fly problems",
      usage: "Place near fruit bowls or kitchen areas troubled by fruit flies",
      ingredients: "Organic apple cider vinegar, natural attractants",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop"
    },
    {
      name: "Citrus Home Spray",
      description: "Multi-purpose cleaning spray with pest-repellent properties",
      usage: "Spray on surfaces for cleaning and to deter household pests",
      ingredients: "Natural citrus extracts, plant-based cleansers",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=400&h=300&fit=crop"
    },
    {
      name: "Herbal Moth Sachets",
      description: "Cedar and lavender sachets for clothing protection",
      usage: "Place in closets, drawers, and storage boxes to prevent moths",
      ingredients: "Cedar chips, lavender, rosemary, and essential oils",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=300&fit=crop"
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
              <span>Pesticides & Solutions</span>
            </div>
            <h1 className="text-5xl font-bold mb-6">Organic Pesticides & Solutions</h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Safe and effective plant protection solutions for gardens and households
            </p>
          </div>
        </div>
      </section>

      {/* Garden Products Display */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12">
            <div className="mb-8 md:mb-0">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Garden Protection Solutions</h2>
              <p className="text-lg text-gray-600 max-w-2xl">
                Eco-friendly, organic products to protect your plants from pests and diseases
              </p>
            </div>
            <div className="bg-green-100 rounded-lg p-4">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">Expert Tip</h4>
                  <p className="text-sm text-gray-700">Apply organic pesticides in early morning or evening for best results</p>
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
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Application:</h4>
                    <p className="text-sm text-gray-600">{product.application}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Safety:</h4>
                    <p className="text-sm text-gray-600">{product.safety}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Household Solutions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Household Solutions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Natural and safe products for indoor pest management
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {householdSolutions.map((solution, index) => (
              <div key={index} className="bg-green-50 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
                <div className="h-48 overflow-hidden">
                  <img
                    src={solution.image}
                    alt={solution.name}
                    className="w-full h-full object-cover hover:scale-110 transition-all duration-300"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{solution.name}</h3>
                  <p className="text-gray-600 mb-4">{solution.description}</p>
                  
                  <div className="mb-4 mt-auto">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Usage:</h4>
                    <p className="text-sm text-gray-600">{solution.usage}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Ingredients:</h4>
                    <p className="text-sm text-gray-600">{solution.ingredients}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrated Pest Management */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Integrated Pest Management</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A holistic approach to pest control that minimizes chemical use
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Prevention</h3>
              <p className="text-gray-700">
                Choose resistant plant varieties and maintain optimal growing conditions to prevent pest problems before they start
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Monitoring</h3>
              <p className="text-gray-700">
                Regularly inspect plants to catch pest issues early when they're easier to manage with gentle methods
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Natural Solutions</h3>
              <p className="text-gray-700">
                Start with the least invasive solutions like beneficial insects and organic treatments
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Targeted Treatment</h3>
              <p className="text-gray-700">
                Apply specific solutions only when necessary and focus on affected areas instead of broad application
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-green-50 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Safety First</h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                While our products are organic and natural, following proper safety guidelines ensures the best results
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Using Garden Products Safely</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">•</span>
                    <span>Always read and follow label instructions carefully</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">•</span>
                    <span>Wear gloves when handling any garden product</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">•</span>
                    <span>Apply in early morning or evening to protect beneficial insects</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">•</span>
                    <span>Store products in original containers away from children and pets</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">•</span>
                    <span>Respect the recommended waiting period before harvesting edible crops</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Household Safety</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">•</span>
                    <span>Keep all products out of reach of children and pets</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">•</span>
                    <span>Indoor sprays should be used in well-ventilated areas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">•</span>
                    <span>Wash hands thoroughly after handling any product</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">•</span>
                    <span>Test products on a small area first to check for sensitivity</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">•</span>
                    <span>Keep product information for reference in case of accidental exposure</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Need Expert Pest Management Advice?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Our experts can help you develop a sustainable pest management plan for your garden or home
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

export default Pesticides;
