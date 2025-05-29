
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, Users, Calendar, Contact } from 'lucide-react';

const Home = () => {
  const productCategories = [
    {
      title: "Live Plants",
      description: "Indoor & outdoor plants for every space",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400&h=300&fit=crop",
      link: "/products/live-plants"
    },
    {
      title: "Organic Manure",
      description: "Natural fertilizers for healthy growth",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop",
      link: "/products/organic-manure"
    },
    {
      title: "Pesticides & Solutions",
      description: "Safe and effective plant protection",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=400&h=300&fit=crop",
      link: "/products/pesticides"
    },
    {
      title: "Garden Tools & Irrigation",
      description: "Complete gardening solutions",
      image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=400&h=300&fit=crop",
      link: "/products/garden-tools"
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Bangalore",
      text: "Karthik & Co. transformed my terrace into a beautiful garden. Their plant quality is exceptional and the team's expertise is unmatched.",
      rating: 5
    },
    {
      name: "Rajesh Kumar",
      location: "Mysore",
      text: "Been purchasing from them for 3 years. Their organic manure has significantly improved my crop yield. Highly recommended!",
      rating: 5
    },
    {
      name: "Anita Desai",
      location: "Chennai",
      text: "Professional service and genuine products. They helped me choose the perfect indoor plants for my apartment.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-green-800 to-green-600">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-blend-overlay"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=1920&h=1080&fit=crop')",
            opacity: 0.3
          }}
        />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Welcome to <span className="text-green-200">Karthik & Co.</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-green-100">
            Your Trusted Partner in Horticulture Excellence Since 2010
          </p>
          <p className="text-lg mb-10 max-w-2xl mx-auto text-green-100">
            From premium live plants to organic solutions, we nurture your gardening dreams with 
            quality products and expert guidance that has earned trust across South India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/products"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Explore Our Products
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-green-800 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
            >
              Get Expert Advice
            </Link>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-8 w-8 text-white" />
        </div>
      </section>

      {/* Welcome Message */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Growing Trust, One Plant at a Time
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              For over a decade, Karthik & Co. has been Karnataka's premier destination for 
              horticulture excellence. Our commitment to quality, sustainability, and customer 
              satisfaction has made us the trusted choice for thousands of gardening enthusiasts, 
              farmers, and landscape professionals across South India.
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Product Range</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our comprehensive collection of premium horticulture products
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productCategories.map((category, index) => (
              <Link
                key={index}
                to={category.link}
                className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-200">
                    {category.title}
                  </h3>
                  <p className="text-gray-600">{category.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-lg text-gray-600">Trusted by thousands across South India</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-green-600">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links CTA */}
      <section className="py-16 bg-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Ready to Start Your Garden Journey?</h2>
            <p className="text-xl text-green-100">Explore our services and get expert guidance</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Link
              to="/products"
              className="bg-green-700 hover:bg-green-600 rounded-lg p-6 text-center transition-all duration-300 transform hover:scale-105"
            >
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Browse Products</h3>
              <p className="text-green-100">Explore our complete range</p>
            </Link>
            
            <Link
              to="/about"
              className="bg-green-700 hover:bg-green-600 rounded-lg p-6 text-center transition-all duration-300 transform hover:scale-105"
            >
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">About Us</h3>
              <p className="text-green-100">Learn our story</p>
            </Link>
            
            <a
              href="#"
              className="bg-green-700 hover:bg-green-600 rounded-lg p-6 text-center transition-all duration-300 transform hover:scale-105"
            >
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">View Catalogue</h3>
              <p className="text-green-100">Download our full catalogue</p>
            </a>
            
            <Link
              to="/contact"
              className="bg-green-700 hover:bg-green-600 rounded-lg p-6 text-center transition-all duration-300 transform hover:scale-105"
            >
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Contact className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
              <p className="text-green-100">Get in touch today</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
