
import React from 'react';
import { Users, Calendar, Contact, Image } from 'lucide-react';

const About = () => {
  const certifications = [
    "ISO 9001:2015 Quality Management",
    "Organic Certification Authority",
    "Karnataka State Horticulture Award 2022",
    "Best Nursery Award - South India 2021"
  ];

  const teamMembers = [
    {
      name: "Karthik Reddy",
      position: "Founder & Chief Horticulturist",
      experience: "15+ years",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Sunita Devi",
      position: "Plant Pathologist",
      experience: "12+ years",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Ravi Kumar",
      position: "Organic Solutions Expert",
      experience: "10+ years",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-green-800 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">About Karthik & Co.</h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              A legacy of horticultural excellence built on trust, quality, and passion for nature
            </p>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Founded in 2010 by Karthik Reddy, a passionate horticulturist with a vision to make 
                quality plants and organic solutions accessible to everyone, Karthik & Co. began as 
                a small nursery in Bangalore with just 2 acres of land.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Today, we have grown into one of South India's most trusted horticulture businesses, 
                serving thousands of customers across Karnataka, Tamil Nadu, and Andhra Pradesh. Our 
                commitment to quality, sustainability, and customer satisfaction has remained unchanged 
                throughout our journey.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                What started as a dream to promote green living has flourished into a comprehensive 
                horticulture solution provider, offering everything from exotic plants to organic 
                farming solutions.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=600&h=400&fit=crop"
                alt="Our nursery"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-green-600 text-white p-6 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold">14+</div>
                  <div className="text-green-100">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To be the leading horticulture partner in South India, promoting sustainable 
                gardening practices and making quality plants accessible to every home and farm. 
                We envision a greener future where every space thrives with natural beauty.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-6">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To provide premium quality plants, organic solutions, and expert guidance that 
                empowers our customers to create thriving gardens. We are committed to sustainable 
                practices, innovation, and building lasting relationships with our community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nursery Details */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Facilities</h2>
            <p className="text-lg text-gray-600">State-of-the-art nursery infrastructure</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-gray-50 rounded-lg p-6">
              <div className="text-4xl font-bold text-green-600 mb-2">25+</div>
              <div className="text-gray-700 font-medium">Acres of Nursery</div>
              <div className="text-sm text-gray-500 mt-2">Spread across 3 locations</div>
            </div>
            
            <div className="text-center bg-gray-50 rounded-lg p-6">
              <div className="text-4xl font-bold text-green-600 mb-2">500K+</div>
              <div className="text-gray-700 font-medium">Plant Capacity</div>
              <div className="text-sm text-gray-500 mt-2">Diverse varieties available</div>
            </div>
            
            <div className="text-center bg-gray-50 rounded-lg p-6">
              <div className="text-4xl font-bold text-green-600 mb-2">15+</div>
              <div className="text-gray-700 font-medium">Delivery Vehicles</div>
              <div className="text-sm text-gray-500 mt-2">Pan South India coverage</div>
            </div>
            
            <div className="text-center bg-gray-50 rounded-lg p-6">
              <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-gray-700 font-medium">Expert Team</div>
              <div className="text-sm text-gray-500 mt-2">Qualified horticulturists</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
            <p className="text-lg text-gray-600">Meet the experts behind our success</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-green-600 font-medium mb-2">{member.position}</p>
                  <p className="text-gray-600">{member.experience} in horticulture</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Certifications & Recognition</h2>
            <p className="text-lg text-gray-600">Trusted quality you can count on</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center space-x-4 bg-green-50 rounded-lg p-6">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Image className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{cert}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Partner with Us?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Karthik & Co. for all their horticulture needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Contact Us Today
            </a>
            <a
              href="/products"
              className="border-2 border-white text-white hover:bg-white hover:text-green-800 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
            >
              Explore Products
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
