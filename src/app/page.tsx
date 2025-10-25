'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  const [formData, setFormData] = useState({
    solarType: '',
    name: '',
    email: '',
    phone: '',
    message: '',
    monthlyBill: '',
    city: '',
    state: '',
    pinCode: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen bg-white text-modern">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="pt-16 relative min-h-screen flex items-center hero-modern">
        <div className="absolute inset-0" style={{backgroundColor: '#4CB4F0', opacity: 0.9}}></div>
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"}}></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white animate-fadeInLeft">
              <div className="inline-flex items-center px-6 py-3 glass rounded-full text-sm font-medium mb-8 animate-pulse-slow">
                <span className="w-2 h-2 bg-white rounded-full mr-3 animate-pulse"></span>
                SOLAR ENERGY SOLUTIONS
              </div>
              <h1 className="text-6xl lg:text-7xl font-bold mb-8 leading-tight animate-fadeInUp">
                Power Your Life with <span className="gradient-text">Solar Energy</span>
          </h1>
              <p className="text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed animate-fadeInUp">
                Get free consultation and avail subsidy benefits upto ₹108000. Residential & Commercial Solar Solutions. On Grid, Off Grid & Hybrid Solar Systems.
              </p>
              <button className="btn-modern text-lg px-10 py-5 flex items-center animate-fadeInUp">
                Get Started
                <svg className="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
            <div className="hidden lg:block animate-fadeInRight">
              <div className="relative animate-float">
                <div className="w-full h-96 bg-cover bg-center rounded-3xl shadow-modern-lg" style={{backgroundImage: "url('https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"}}></div>
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black opacity-20 rounded-3xl"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Social Media Icons */}
        <div className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 hidden lg:block">
          <div className="flex flex-col space-y-4">
            <a href="https://facebook.com/hariomtraderssolarenergy" className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-white hover:text-gray-900 transition-all duration-300">
              <span className="text-white font-bold">f</span>
            </a>
            <a href="https://instagram.com/hariomtraderssolarenergy" className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-white hover:text-gray-900 transition-all duration-300">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.781c-.49 0-.98-.49-.98-.98s.49-.98.98-.98.98.49.98.98-.49.98-.98.98zm-1.96 9.781c-1.297 0-2.448-.49-3.323-1.297-.807-.875-1.297-2.026-1.297-3.323s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Bar Running */}
      <section className="py-8 animate-gradient marquee-container" style={{backgroundColor: ''}}>
        <div className="marquee-content">
          {/* First set of logos */}
          <div className="marquee-item flex items-center justify-center">
            <img src="/logos/Waaree-logo.png" alt="Waaree Solar" className="h-8 w-auto mx-4" />
          </div>
          <div className="marquee-item flex items-center justify-center">
            <img src="/logos/tata-power-solar-logo.jpg" alt="Tata Power Solar" className="h-8 w-auto mx-4" />
          </div>
          <div className="marquee-item flex items-center justify-center">
            <img src="/logos/LuminousLogoBlue.webp" alt="Luminous Solar" className="h-8 w-auto mx-4" />
          </div>
          <div className="marquee-item flex items-center justify-center">
            <img src="/logos/sunora-logo-1.png" alt="Sunora Solar" className="h-8 w-auto mx-4" />
          </div>
          <div className="marquee-item flex items-center justify-center">
            <img src="/logos/logoSolar.png" alt="Solar Logo" className="h-8 w-auto mx-4" />
          </div>
          <div className="marquee-item flex items-center justify-center">
            <img src="/logos/images.png" alt="Solar Partner" className="h-8 w-auto mx-4" />
          </div>
          <div className="marquee-item flex items-center justify-center">
            <img src="/logos/Untitled-design.png" alt="Solar Partner" className="h-8 w-auto mx-4" />
          </div>
          
          {/* Duplicate set for seamless loop */}
          <div className="marquee-item flex items-center justify-center">
            <img src="/logos/Waaree-logo.png" alt="Waaree Solar" className="h-8 w-auto mx-4" />
          </div>
          <div className="marquee-item flex items-center justify-center">
            <img src="/logos/tata-power-solar-logo.jpg" alt="Tata Power Solar" className="h-8 w-auto mx-4" />
          </div>
          <div className="marquee-item flex items-center justify-center">
            <img src="/logos/LuminousLogoBlue.webp" alt="Luminous Solar" className="h-8 w-auto mx-4" />
          </div>
          <div className="marquee-item flex items-center justify-center">
            <img src="/logos/sunora-logo-1.png" alt="Sunora Solar" className="h-8 w-auto mx-4" />
          </div>
          <div className="marquee-item flex items-center justify-center">
            <img src="/logos/logoSolar.png" alt="Solar Logo" className="h-8 w-auto mx-4" />
          </div>
          <div className="marquee-item flex items-center justify-center">
            <img src="/logos/images.png" alt="Solar Partner" className="h-8 w-auto mx-4" />
          </div>
          <div className="marquee-item flex items-center justify-center">
            <img src="/logos/Untitled-design.png" alt="Solar Partner" className="h-8 w-auto mx-4" />
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="py-24" style={{backgroundColor: '#4CB4F0'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="animate-fadeInLeft">
              <div className="flex items-center mb-8">
                <div className="w-4 h-4 bg-gradient-to-r from-green-500 to-emerald-500 transform rotate-45 mr-4 animate-pulse"></div>
                <h2 className="text-3xl font-bold text-white">CONTACT US</h2>
              </div>
              <h3 className="text-5xl font-bold text-white mb-10 leading-tight">
                Schedule a free consultation with us today
              </h3>
              
              {/* Social Media Icons */}
              <div className="flex space-x-6 mb-10">
                <a href="https://facebook.com/hariomtraderssolarenergy" className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-white hover:text-gray-900 transition-all duration-300">
                  <span className="text-white font-bold">f</span>
                </a>
                <a href="https://instagram.com/hariomtraderssolarenergy" className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-white hover:text-gray-900 transition-all duration-300">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.781c-.49 0-.98-.49-.98-.98s.49-.98.98-.98.98.49.98.98-.49.98-.98.98zm-1.96 9.781c-1.297 0-2.448-.49-3.323-1.297-.807-.875-1.297-2.026-1.297-3.323s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="animate-fadeInRight">
              <div className="card-modern p-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Solar System Type</label>
                    <select
                      value={formData.solarType}
                      onChange={(e) => setFormData({...formData, solarType: e.target.value})}
                      className=" w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-black"
                      required
                    >
                      <option value="">Select Solar System Type</option>
                      <option value="on-grid">On Grid Solar System</option>
                      <option value="off-grid">Off Grid Solar System</option>
                      <option value="hybrid">Hybrid Solar System</option>
                    </select>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full input-modern focus-modern text-black"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full input-modern focus-modern text-black"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full input-modern focus-modern text-black"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Monthly Electricity Bill (₹)</label>
                    <input
                      type="number"
                      value={formData.monthlyBill}
                      onChange={(e) => setFormData({...formData, monthlyBill: e.target.value})}
                      className="w-full input-modern focus-modern text-black"
                    />
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                      <input
                        type="text"
                        value={formData.city}
                        onChange={(e) => setFormData({...formData, city: e.target.value})}
                        className="w-full input-modern focus-modern text-black"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
                      <input
                        type="text"
                        value={formData.state}
                        onChange={(e) => setFormData({...formData, state: e.target.value})}
                        className="w-full input-modern focus-modern text-black"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Pin Code</label>
                      <input
                        type="text"
                        value={formData.pinCode}
                        onChange={(e) => setFormData({...formData, pinCode: e.target.value})}
                        className="w-full input-modern focus-modern text-black"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message (Optional)</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      rows={4}
                      className="w-full input-modern focus-modern text-black"
                      placeholder="Tell us about your solar requirements..."
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="w-full btn-modern text-lg py-5 flex items-center justify-center">
                    Get Free Quote
                    <svg className="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative animate-fadeInLeft">
              <div className="w-full h-96 bg-cover bg-center rounded-3xl shadow-modern-lg animate-float" style={{backgroundImage: "url('https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80')"}}></div>
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black opacity-20 rounded-3xl"></div>
            </div>
            <div className="animate-fadeInRight">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full text-sm font-medium mb-8">
                <span className="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mr-3 animate-pulse"></span>
                ABOUT US
              </div>
              <h2 className="text-5xl font-bold text-gray-900 mb-8 leading-tight">
                Experience The Power of The Sun at its <span className="gradient-text">Finest</span>
              </h2>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                We deal in all kind of residential & commercial Solar Solutions. What sets HARIOM TRADERS apart from the other players, in the market, is its urge for growth through delivery of excellent products and service to all its customers within quick time. Thorough research & development, stringent quality control & sophisticated testing procedures & facility is the back-bone of our organization.
              </p>
              <div className="grid grid-cols-2 gap-8 mb-10">
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">500+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">25+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">1000+</div>
                  <div className="text-gray-600">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">100%</div>
                  <div className="text-gray-600">Satisfaction Rate</div>
                </div>
              </div>
              <button className="btn-modern text-lg px-8 py-4 flex items-center">
                Learn More About Us
                <svg className="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solutions Section */}
      <section id="solutions" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6" style={{backgroundColor: '#E33120', color: 'white'}}>
              <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
              OUR SOLUTIONS
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Comprehensive Solar Solutions</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* On Grid */}
            <div className="bg-white p-8 rounded-2xl shadow-sm card-hover">
              <div className="w-full h-48 bg-cover bg-center rounded-xl mb-6" style={{backgroundImage: "url('https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"}}></div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">On Grid Solutions</h3>
              <p className="text-gray-600 mb-6">
                Our on-grid solar solutions let you generate clean energy while staying connected to the utility grid. With net metering, you can export excess power and save significantly on electricity bills. Ideal for homes and businesses with consistent grid supply.
              </p>
              <button className="text-green-600 font-semibold hover:text-green-700 flex items-center">
                Learn More
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>

            {/* Off Grid */}
            <div className="bg-white p-8 rounded-2xl shadow-sm card-hover">
              <div className="w-full h-48 bg-cover bg-center rounded-xl mb-6" style={{backgroundImage: "url('https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80')"}}></div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Off Grid Solutions</h3>
              <p className="text-gray-600 mb-6">
                Off-grid solar systems give you complete energy independence by storing solar power in batteries for 24/7 use. Perfect for remote locations or areas with frequent power cuts, they ensure an uninterrupted electricity supply. Say goodbye to dependency on the main grid.
              </p>
              <button className="text-gray-900 font-semibold hover:text-green-600 flex items-center">
                Learn More
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>

            {/* Hybrid */}
            <div className="bg-white p-8 rounded-2xl shadow-sm card-hover">
              <div className="w-full h-48 bg-cover bg-center rounded-xl mb-6" style={{backgroundImage: "url('https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"}}></div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Hybrid Solutions</h3>
              <p className="text-gray-600 mb-6">
                Hybrid solar systems combine the benefits of on-grid and off-grid technology. Store excess energy in batteries for backup while still enjoying grid connectivity when required. A reliable and cost-effective solution to ensure power even during outages.
              </p>
              <button className="text-gray-900 font-semibold hover:text-green-600 flex items-center">
                Learn More
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20" style={{backgroundColor: '#4CB4F0'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">WHY CHOOSE US</h2>
            <h3 className="text-2xl font-semibold text-white mb-8">Trusted By Thousands For Solar Solutions</h3>
            <p className="text-lg text-white max-w-3xl mx-auto">
              We are dedicated to delivering reliable, affordable, and innovative solar energy solutions. Our team of experts brings years of experience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-green-50 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Waaree Solar Panels</h3>
              <p className="text-gray-600">
                We power your home/official space with top-tier waaree solar panels — engineered for unmatched efficiency and built to last, so you enjoy maximum performance and savings that shine for years.
              </p>
            </div>

            <div className="text-center p-8 bg-blue-50 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Innovating For A Greener Tomorrow</h3>
              <p className="text-gray-600">
                Leading the way with sustainable & smart energy solutions.
              </p>
            </div>

            <div className="text-center p-8 bg-yellow-50 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Building a Brighter Future Together</h3>
              <p className="text-gray-600">
                Join us in creating a sustainable, solar-powered world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Go Solar? */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-8">Ready to Go Solar?</h2>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            Join thousands of satisfied customers who have made the switch to clean, renewable energy. Get your free quote today and start saving on your electricity bills.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="btn-modern text-lg px-10 py-5 flex items-center justify-center">
              Get Free Quote
              <svg className="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            <Link href="/contact" className="btn-modern text-lg px-10 py-5 flex items-center justify-center bg-transparent border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white">
              Contact Us Today
              <svg className="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      {/* Scroll to Top Button */}
      <button className="fixed bottom-8 right-8 w-12 h-12 bg-gray-600 hover:bg-gray-700 text-white rounded-full flex items-center justify-center transition-colors z-40">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  );
}