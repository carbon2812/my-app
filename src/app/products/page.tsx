'use client';

import Link from 'next/link';
import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function ProductsPage() {
  const [activeTab, setActiveTab] = useState('residential');

  const products = {
    residential: [
      {
        name: "Residential Solar Panels",
        description: "Perfect for homes and apartments. Reduce your electricity bills by up to 90% with our high-efficiency residential solar systems.",
        features: ["3kW to 10kW capacity", "25-year warranty", "Net metering compatible", "Easy installation"],
        price: "Starting from ₹1,50,000",
        image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      },
      {
        name: "Rooftop Solar Systems",
        description: "Maximize your rooftop space with our custom-designed solar panel installations.",
        features: ["Custom sizing", "Weather resistant", "Low maintenance", "High efficiency"],
        price: "Starting from ₹2,00,000",
        image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
      }
    ],
    commercial: [
      {
        name: "Commercial Solar Solutions",
        description: "Power your business with clean, reliable energy. Reduce operational costs and boost your sustainability goals.",
        features: ["10kW to 500kW capacity", "Business-grade warranty", "ROI optimization", "24/7 monitoring"],
        price: "Starting from ₹5,00,000",
        image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      },
      {
        name: "Office Building Systems",
        description: "Comprehensive solar solutions for office buildings and corporate facilities.",
        features: ["Scalable design", "Energy management", "Tax benefits", "Green certification"],
        price: "Starting from ₹8,00,000",
        image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      }
    ],
    housing: [
      {
        name: "Housing Society Solar",
        description: "Community solar solutions for housing societies and residential complexes.",
        features: ["Shared infrastructure", "Cost distribution", "Community benefits", "Bulk discounts"],
        price: "Starting from ₹15,00,000",
        image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
      },
      {
        name: "Apartment Complex Systems",
        description: "Centralized solar power systems for apartment buildings and complexes.",
        features: ["Centralized control", "Individual metering", "Common area power", "Maintenance included"],
        price: "Starting from ₹20,00,000",
        image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      }
    ],
    industrial: [
      {
        name: "Industrial Solar Plants",
        description: "Large-scale solar power plants for industrial facilities and manufacturing units.",
        features: ["500kW to 5MW capacity", "Industrial grade", "Custom engineering", "Performance guarantee"],
        price: "Starting from ₹50,00,000",
        image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      },
      {
        name: "Manufacturing Unit Systems",
        description: "Heavy-duty solar solutions designed for manufacturing and industrial operations.",
        features: ["High power output", "Durability", "Efficiency optimization", "Maintenance support"],
        price: "Starting from ₹75,00,000",
        image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
      }
    ],
    "ground-mounted": [
      {
        name: "Ground Mounted Solar Farms",
        description: "Large-scale ground-mounted solar installations for maximum energy production.",
        features: ["1MW to 10MW capacity", "Land optimization", "Tracking systems", "Grid integration"],
        price: "Starting from ₹1,00,00,000",
        image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      },
      {
        name: "Solar Power Plants",
        description: "Utility-scale solar power plants for commercial and industrial applications.",
        features: ["10MW+ capacity", "Professional installation", "Long-term contracts", "Performance monitoring"],
        price: "Starting from ₹10,00,00,000",
        image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white text-modern">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-20 hero-modern" style={{backgroundColor: '#4CB4F0'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-6 py-3 glass rounded-full text-sm font-medium mb-8 animate-pulse-slow">
              <span className="w-2 h-2 bg-white rounded-full mr-3 animate-pulse"></span>
              OUR PRODUCTS
            </div>
            <h1 className="text-6xl lg:text-7xl font-bold mb-8 leading-tight text-white animate-fadeInUp">
              Complete Solar <span className="gradient-text">Solutions</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed animate-fadeInUp">
              From residential rooftops to industrial power plants, we provide comprehensive solar solutions tailored to your specific needs and requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-24 section-modern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full text-sm font-medium mb-8">
              <span className="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mr-3 animate-pulse"></span>
              PRODUCT CATEGORIES
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-8 leading-tight">
              Choose Your <span className="gradient-text">Solar Solution</span>
            </h2>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.keys(products).map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`px-8 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                  activeTab === category
                    ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ')}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {products[activeTab as keyof typeof products].map((product, index) => (
              <div key={index} className="card-modern p-8 animate-fadeInUp">
                <div className="flex items-start space-x-6">
                  <div className="w-24 h-24 bg-cover bg-center rounded-xl" style={{backgroundImage: `url('${product.image}')`}}></div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{product.name}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {product.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-gray-600">
                            <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-green-600">{product.price}</div>
                      <Link href="/contact" className="btn-modern">
                        Get Quote
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Products */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full text-sm font-medium mb-8">
              <span className="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mr-3 animate-pulse"></span>
              WHY CHOOSE US
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-8 leading-tight">
              Premium Quality <span className="gradient-text">Guaranteed</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center animate-fadeInUp">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Waaree Panels</h3>
              <p className="text-gray-600">Top-tier solar panels with unmatched efficiency and durability.</p>
            </div>

            <div className="text-center animate-fadeInUp">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">25-Year Warranty</h3>
              <p className="text-gray-600">Comprehensive warranty coverage for peace of mind.</p>
            </div>

            <div className="text-center animate-fadeInUp">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Fast Installation</h3>
              <p className="text-gray-600">Quick and professional installation by certified experts.</p>
            </div>

            <div className="text-center animate-fadeInUp">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 11-9.75 9.75 9.75 9.75 0 019.75-9.75z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock customer support and maintenance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-500 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold text-white mb-8 leading-tight">
            Ready to Choose Your Solar Solution?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
            Get a personalized quote for your solar installation. Our experts will help you choose the perfect solution for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact" className="btn-modern text-lg px-10 py-5">
              Get Free Quote
            </Link>
            <Link href="/solutions" className="border-2 border-white text-white px-10 py-5 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              View Solutions
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
