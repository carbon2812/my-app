'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function SolutionsPage() {
  const [activeSolution, setActiveSolution] = useState('on-grid');

  const solutions = {
    'on-grid': {
      title: "On Grid Solar Solutions",
      subtitle: "Stay Connected, Save More",
      description: "Our on-grid solar solutions let you generate clean energy while staying connected to the utility grid. With net metering, you can export excess power and save significantly on electricity bills.",
      benefits: [
        "Reduced electricity bills by up to 90%",
        "Net metering for excess energy",
        "No battery storage required",
        "Grid backup during low production",
        "Quick payback period",
        "Government subsidies available"
      ],
      features: [
        "Grid-tie inverters",
        "Net metering setup",
        "Monitoring systems",
        "25-year warranty",
        "Professional installation",
        "Maintenance support"
      ],
      idealFor: "Homes and businesses with consistent grid supply",
      capacity: "1kW to 500kW",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    'off-grid': {
      title: "Off Grid Solar Solutions",
      subtitle: "Complete Energy Independence",
      description: "Off-grid solar systems give you complete energy independence by storing solar power in batteries for 24/7 use. Perfect for remote locations or areas with frequent power cuts.",
      benefits: [
        "Complete energy independence",
        "24/7 power availability",
        "No dependency on grid",
        "Ideal for remote locations",
        "Backup during outages",
        "Long-term energy security"
      ],
      features: [
        "Battery storage systems",
        "Charge controllers",
        "Off-grid inverters",
        "Backup generators",
        "Energy management",
        "Remote monitoring"
      ],
      idealFor: "Remote locations or areas with frequent power cuts",
      capacity: "1kW to 100kW",
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
    },
    'hybrid': {
      title: "Hybrid Solar Solutions",
      subtitle: "Best of Both Worlds",
      description: "Hybrid solar systems combine the benefits of on-grid and off-grid technology. Store excess energy in batteries for backup while still enjoying grid connectivity when required.",
      benefits: [
        "Grid connectivity + battery backup",
        "Maximum energy utilization",
        "Smart energy management",
        "Reduced grid dependency",
        "Emergency power supply",
        "Optimal cost savings"
      ],
      features: [
        "Hybrid inverters",
        "Battery storage",
        "Grid connectivity",
        "Smart switching",
        "Energy optimization",
        "Load management"
      ],
      idealFor: "Areas with unreliable grid supply",
      capacity: "3kW to 200kW",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    }
  };

  return (
    <div className="min-h-screen bg-white text-modern">
      {/* Navigation */}
      <nav className="nav-modern fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold gradient-text">HARIOM TRADERS</Link>
            </div>
            
            <div className="hidden lg:block">
              <div className="ml-10 flex items-baseline space-x-6">
                <Link href="/" className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                <Link href="/about" className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium">About Us</Link>
                <Link href="/products" className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium">Products</Link>
                <Link href="/solutions" className="text-gray-900 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium">Solutions</Link>
                <Link href="/testimonials" className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium">Testimonials</Link>
                <Link href="/contact" className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
              </div>
            </div>

            <div className="hidden lg:block">
              <Link href="/contact" className="btn-modern text-sm">
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20 hero-modern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-6 py-3 glass rounded-full text-sm font-medium mb-8 animate-pulse-slow">
              <span className="w-2 h-2 bg-white rounded-full mr-3 animate-pulse"></span>
              SOLAR SOLUTIONS
            </div>
            <h1 className="text-6xl lg:text-7xl font-bold mb-8 leading-tight text-white animate-fadeInUp">
              Comprehensive Solar <span className="gradient-text">Solutions</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed animate-fadeInUp">
              Choose from our range of solar solutions designed to meet your specific energy needs. From grid-connected systems to complete off-grid independence.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Types */}
      <section className="py-24 section-modern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full text-sm font-medium mb-8">
              <span className="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mr-3 animate-pulse"></span>
              SOLUTION TYPES
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-8 leading-tight">
              Choose Your <span className="gradient-text">Solar Solution</span>
            </h2>
          </div>

          {/* Solution Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.keys(solutions).map((solution) => (
              <button
                key={solution}
                onClick={() => setActiveSolution(solution)}
                className={`px-8 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                  activeSolution === solution
                    ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200'
                }`}
              >
                {solutions[solution as keyof typeof solutions].title}
              </button>
            ))}
          </div>

          {/* Active Solution Details */}
          <div className="card-modern p-12 animate-fadeInUp">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-full h-64 bg-cover bg-center rounded-xl mb-6" style={{backgroundImage: `url('${solutions[activeSolution as keyof typeof solutions].image}')`}}></div>
                <h3 className="text-4xl font-bold text-gray-900 mb-4">
                  {solutions[activeSolution as keyof typeof solutions].title}
                </h3>
                <p className="text-xl text-green-600 font-semibold mb-6">
                  {solutions[activeSolution as keyof typeof solutions].subtitle}
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {solutions[activeSolution as keyof typeof solutions].description}
                </p>
                
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Key Benefits:</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {solutions[activeSolution as keyof typeof solutions].benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Features Included:</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {solutions[activeSolution as keyof typeof solutions].features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                        </svg>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-bold text-gray-900 mb-2">Ideal For:</h5>
                      <p className="text-gray-600">{solutions[activeSolution as keyof typeof solutions].idealFor}</p>
                    </div>
                    <div>
                      <h5 className="font-bold text-gray-900 mb-2">Capacity Range:</h5>
                      <p className="text-gray-600">{solutions[activeSolution as keyof typeof solutions].capacity}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl p-12 shadow-modern-lg">
                  <h4 className="text-2xl font-bold text-white mb-6">Get Your Custom Quote</h4>
                  <p className="text-blue-100 mb-8">Ready to switch to solar? Get a personalized quote for your {solutions[activeSolution as keyof typeof solutions].title.toLowerCase()}.</p>
                  <Link href="/contact" className="btn-modern text-lg px-8 py-4">
                    Get Free Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full text-sm font-medium mb-8">
              <span className="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mr-3 animate-pulse"></span>
              SOLUTION COMPARISON
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-8 leading-tight">
              Compare Our <span className="gradient-text">Solutions</span>
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full card-modern">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-6 px-6 font-bold text-gray-900">Features</th>
                  <th className="text-center py-6 px-6 font-bold text-gray-900">On Grid</th>
                  <th className="text-center py-6 px-6 font-bold text-gray-900">Off Grid</th>
                  <th className="text-center py-6 px-6 font-bold text-gray-900">Hybrid</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 font-semibold text-gray-900">Grid Connection</td>
                  <td className="py-4 px-6 text-center">
                    <svg className="w-6 h-6 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <svg className="w-6 h-6 text-red-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <svg className="w-6 h-6 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 font-semibold text-gray-900">Battery Storage</td>
                  <td className="py-4 px-6 text-center">
                    <svg className="w-6 h-6 text-red-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <svg className="w-6 h-6 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <svg className="w-6 h-6 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 font-semibold text-gray-900">Net Metering</td>
                  <td className="py-4 px-6 text-center">
                    <svg className="w-6 h-6 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <svg className="w-6 h-6 text-red-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <svg className="w-6 h-6 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 font-semibold text-gray-900">Backup Power</td>
                  <td className="py-4 px-6 text-center">
                    <svg className="w-6 h-6 text-red-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <svg className="w-6 h-6 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <svg className="w-6 h-6 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-gray-900">Best For</td>
                  <td className="py-4 px-6 text-center text-gray-600">Urban areas with reliable grid</td>
                  <td className="py-4 px-6 text-center text-gray-600">Remote locations</td>
                  <td className="py-4 px-6 text-center text-gray-600">Areas with unreliable grid</td>
                </tr>
              </tbody>
            </table>
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
            Our experts will help you choose the perfect solar solution based on your location, energy needs, and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact" className="btn-modern text-lg px-10 py-5">
              Get Free Consultation
            </Link>
            <Link href="/products" className="border-2 border-white text-white px-10 py-5 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              View Products
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">H</span>
                </div>
                <h3 className="text-xl font-bold">HARIOM TRADERS</h3>
              </div>
              <p className="text-gray-400 mb-6">
                We're dedicated to helping you harness the power of the sun to create a sustainable future.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6">Contact Us</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-gray-400 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-400">Pahariya, Varanasi, Ashok Vihar Colony, Near PF Office, Phase 1 (221007), Varanasi, Uttar Pradesh, India</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-gray-400">+91 87269 09990</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div className="text-gray-400">
                    <div>hariomtraders407@gmail.com</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6">Quick Links</h3>
              <div className="space-y-3">
                <Link href="/" className="block text-gray-400 hover:text-white transition-colors">Home</Link>
                <Link href="/about" className="block text-gray-400 hover:text-white transition-colors">About Us</Link>
                <Link href="/products" className="block text-gray-400 hover:text-white transition-colors">Products</Link>
                <Link href="/solutions" className="block text-gray-400 hover:text-white transition-colors">Solutions</Link>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6">Products</h3>
              <div className="space-y-3">
                <Link href="/solutions" className="block text-gray-400 hover:text-white transition-colors">On Grid Solar</Link>
                <Link href="/solutions" className="block text-gray-400 hover:text-white transition-colors">Off Grid Solar</Link>
                <Link href="/solutions" className="block text-gray-400 hover:text-white transition-colors">Hybrid Solar</Link>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">©Copyright 2025 HARIOM TRADERS. All rights reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
