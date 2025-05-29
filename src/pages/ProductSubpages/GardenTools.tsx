
import React from 'react';
import { Link } from 'react-router-dom';
import { Users } from 'lucide-react';

const GardenTools = () => {
  const handTools = [
    {
      name: "Premium Garden Trowel",
      description: "Ergonomic hand trowel for planting and transplanting",
      details: "Rust-resistant stainless steel with comfortable wood handle",
      uses: ["Transplanting seedlings", "Digging small holes", "Removing weeds"],
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop"
    },
    {
      name: "Pruning Shears",
      description: "Professional bypass pruners for precise cuts",
      details: "High-carbon steel blades with shock-absorbing handles",
      uses: ["Cutting stems up to 3/4 inch", "Deadheading flowers", "Harvesting herbs"],
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=400&h=300&fit=crop"
    },
    {
      name: "Garden Fork",
      description: "Heavy-duty fork for turning and aerating soil",
      details: "4-tine forged steel with hardwood handle",
      uses: ["Breaking compacted soil", "Turning compost", "Lifting root vegetables"],
      image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=400&h=300&fit=crop"
    },
    {
      name: "Hand Cultivator",
      description: "Three-prong claw for soil preparation and weeding",
      details: "Aluminum construction with soft-grip handle",
      uses: ["Loosening topsoil", "Removing shallow-rooted weeds", "Mixing in fertilizer"],
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=300&fit=crop"
    }
  ];
  
  const irrigationKits = [
    {
      name: "Drip Irrigation Starter Kit",
      description: "Complete water-saving irrigation system for gardens",
      contents: ["50m main line", "25 drippers", "10 sprinklers", "Connectors and stakes"],
      benefits: ["Reduces water usage by 70%", "Delivers water directly to roots", "Easy DIY installation"],
      image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=400&h=300&fit=crop"
    },
    {
      name: "Soaker Hose System",
      description: "Porous hose that releases water slowly at plant roots",
      contents: ["15m soaker hose", "Connectors", "Flow controller", "Installation guide"],
      benefits: ["Even water distribution", "Reduces evaporation", "Works with low water pressure"],
      image: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?w=400&h=300&fit=crop"
    },
    {
      name: "Automatic Watering Timer",
      description: "Programmable timer for scheduled watering",
      contents: ["Digital timer unit", "Hose connectors", "Batteries", "Weather-resistant housing"],
      benefits: ["Set and forget convenience", "Multiple program settings", "Water conservation"],
      image: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f?w=400&h=300&fit=crop"
    },
    {
      name: "Micro-Sprinkler Kit",
      description: "Targeted watering system for flower beds and vegetables",
      contents: ["30 micro-sprinklers", "20m supply tubing", "Connectors", "Installation stakes"],
      benefits: ["Adjustable spray patterns", "Low water consumption", "Ideal for delicate plants"],
      image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=400&h=300&fit=crop"
    }
  ];
  
  const gardenEquipment = [
    {
      name: "Ergonomic Wheelbarrow",
      description: "Balanced design for easy garden material transport",
      details: "85L capacity with puncture-resistant wheel",
      uses: ["Moving soil and compost", "Transporting plants", "Garden cleanup"],
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop"
    },
    {
      name: "Long-Handle Garden Tools Set",
      description: "Essential full-size garden tools with comfort grips",
      details: "Includes shovel, rake, hoe, and leaf rake",
      uses: ["Digging", "Soil preparation", "Leaf collection"],
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=400&h=300&fit=crop"
    },
    {
      name: "Garden Tool Storage Rack",
      description: "Wall-mounted organizer for garden tools",
      details: "Powder-coated steel with 10 tool slots and 6 hooks",
      uses: ["Tool organization", "Space saving", "Rust prevention"],
      image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=400&h=300&fit=crop"
    },
    {
      name: "Professional Potting Bench",
      description: "Wooden workstation for potting and transplanting",
      details: "Sustainable eucalyptus wood with zinc tabletop and storage shelf",
      uses: ["Potting plants", "Seed starting", "Tool organization"],
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
              <span>Garden Tools & Irrigation</span>
            </div>
            <h1 className="text-5xl font-bold mb-6">Garden Tools & Irrigation</h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Quality equipment and watering solutions for efficient gardening
            </p>
          </div>
        </div>
      </section>

      {/* Hand Tools Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12">
            <div className="mb-8 md:mb-0">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Hand Tools</h2>
              <p className="text-lg text-gray-600 max-w-2xl">
                Premium quality, ergonomic hand tools for precision gardening tasks
              </p>
            </div>
            <div className="bg-green-100 rounded-lg p-4">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">Expert Tip</h4>
                  <p className="text-sm text-gray-700">Clean and oil garden tools after each use to extend their life</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {handTools.map((tool, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="h-48 overflow-hidden">
                  <img
                    src={tool.image}
                    alt={tool.name}
                    className="w-full h-full object-cover hover:scale-110 transition-all duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{tool.name}</h3>
                  <p className="text-gray-600 mb-4">{tool.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Features:</h4>
                    <p className="text-sm text-gray-600">{tool.details}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Common Uses:</h4>
                    <ul className="list-disc list-inside text-sm text-gray-600">
                      {tool.uses.map((use, i) => (
                        <li key={i}>{use}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Irrigation Kits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12">
            <div className="mb-8 md:mb-0">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Irrigation Systems</h2>
              <p className="text-lg text-gray-600 max-w-2xl">
                Water-saving irrigation solutions for efficient garden management
              </p>
            </div>
            <div className="bg-green-100 rounded-lg p-4">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">Expert Tip</h4>
                  <p className="text-sm text-gray-700">Water early morning or evening to minimize evaporation</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {irrigationKits.map((kit, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200">
                <div className="h-48 overflow-hidden">
                  <img
                    src={kit.image}
                    alt={kit.name}
                    className="w-full h-full object-cover hover:scale-110 transition-all duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{kit.name}</h3>
                  <p className="text-gray-600 mb-4">{kit.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Kit Contents:</h4>
                    <ul className="list-disc list-inside text-sm text-gray-600">
                      {kit.contents.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Benefits:</h4>
                    <ul className="list-disc list-inside text-sm text-gray-600">
                      {kit.benefits.map((benefit, i) => (
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

      {/* Garden Equipment */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Garden Equipment</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Larger tools and equipment for efficient garden maintenance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {gardenEquipment.map((equipment, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row">
                <div className="md:w-1/3">
                  <img
                    src={equipment.image}
                    alt={equipment.name}
                    className="w-full h-full object-cover hover:scale-110 transition-all duration-300"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{equipment.name}</h3>
                  <p className="text-gray-600 mb-4">{equipment.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Features:</h4>
                    <p className="text-sm text-gray-600">{equipment.details}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Common Uses:</h4>
                    <ul className="list-disc list-inside text-sm text-gray-600">
                      {equipment.uses.map((use, i) => (
                        <li key={i}>{use}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Garden Accessories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Garden Accessories</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Essential accessories to complement your gardening tools
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <div className="bg-green-50 rounded-lg p-4 text-center">
              <div className="text-3xl mb-2">🧤</div>
              <h3 className="font-semibold text-gray-900 mb-1">Gardening Gloves</h3>
              <p className="text-sm text-gray-600">Protective and comfortable</p>
            </div>
            
            <div className="bg-green-50 rounded-lg p-4 text-center">
              <div className="text-3xl mb-2">🧺</div>
              <h3 className="font-semibold text-gray-900 mb-1">Harvest Baskets</h3>
              <p className="text-sm text-gray-600">For collecting produce</p>
            </div>
            
            <div className="bg-green-50 rounded-lg p-4 text-center">
              <div className="text-3xl mb-2">🧎</div>
              <h3 className="font-semibold text-gray-900 mb-1">Kneeling Pads</h3>
              <p className="text-sm text-gray-600">For comfortable gardening</p>
            </div>
            
            <div className="bg-green-50 rounded-lg p-4 text-center">
              <div className="text-3xl mb-2">🏷️</div>
              <h3 className="font-semibold text-gray-900 mb-1">Plant Labels</h3>
              <p className="text-sm text-gray-600">Identify your plants</p>
            </div>
            
            <div className="bg-green-50 rounded-lg p-4 text-center">
              <div className="text-3xl mb-2">📏</div>
              <h3 className="font-semibold text-gray-900 mb-1">Measuring Tools</h3>
              <p className="text-sm text-gray-600">For precise planting</p>
            </div>
            
            <div className="bg-green-50 rounded-lg p-4 text-center">
              <div className="text-3xl mb-2">🌡️</div>
              <h3 className="font-semibold text-gray-900 mb-1">Soil Testers</h3>
              <p className="text-sm text-gray-600">Monitor soil conditions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tool Care Guide */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Tool Care Guide</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Proper maintenance ensures your tools last for years
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Cleaning</h3>
              <p className="text-gray-700 mb-4">
                After each use, remove soil and debris from your tools with a stiff brush. 
                For sap or stubborn dirt, use a little soapy water and dry thoroughly.
              </p>
              <p className="text-gray-700">
                Sanitize pruning tools with a 10% bleach solution or rubbing alcohol 
                to prevent spreading plant diseases.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Sharpening</h3>
              <p className="text-gray-700 mb-4">
                Keep cutting tools like pruners, shears, and hoes sharp for efficient work. 
                Use a sharpening stone or file at the original bevel angle.
              </p>
              <p className="text-gray-700">
                Sharpen at the beginning of each season and as needed throughout the year when 
                you notice decreased performance.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Storage</h3>
              <p className="text-gray-700 mb-4">
                Store tools in a dry location to prevent rust. Hang tools when possible to keep 
                them organized and prevent damage to cutting edges.
              </p>
              <p className="text-gray-700">
                Apply a light coat of linseed oil to wooden handles yearly and a thin layer of 
                machine oil on metal parts to prevent rust.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Find the Right Tools for Your Garden</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Visit our store for personalized recommendations from our gardening experts
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

export default GardenTools;
