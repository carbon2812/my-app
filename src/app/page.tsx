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
      <section id="home" className="pt-16 relative min-h-screen flex items-center hero-modern" style={{height: '100vh', overflow: 'hidden'}}>
        {/* Video Background */}
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          preload="auto"
          poster="/solar-poster.jpg"
          className="absolute inset-0 w-full h-full object-cover"
          style={{position: 'absolute', top: 0, left: 0}}
        >
          <source src="/hero-video1.mp4" type="video/mp4" />
          <source src="/hero-video2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        <div className="absolute inset-0" style={{backgroundColor: '#4CB4F0', opacity: 0.3}}></div>
        <div className="absolute inset-0 bg-black opacity-25"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            <div className="hidden lg:block animate-fadeInRight">
              <div className="relative animate-float">
                <div className="w-full h-96 bg-cover bg-center rounded-3xl shadow-modern-lg" style={{backgroundImage: "url('/solar%20image.jpg')"}}></div>
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black opacity-20 rounded-3xl"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Social Media Icons */}
        <div className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 hidden lg:block">
          <div className="flex flex-col space-y-4">
            <a href="https://facebook.com/hariomtraderssolarenergy" className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center hover:from-blue-600 hover:to-blue-700 transform hover:scale-110 transition-all duration-300 shadow-lg">
              <img src="/logos/facebook.svg" alt="Facebook" className="w-7 h-7 filter brightness-0 invert" />
            </a>
            <a href="https://instagram.com/hariomtraderssolarenergy" className="w-12 h-12 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-full flex items-center justify-center hover:from-pink-600 hover:via-red-600 hover:to-yellow-600 transform hover:scale-110 transition-all duration-300 shadow-lg">
              <img src="/logos/instagram.svg" alt="Instagram" className="w-7 h-7 filter brightness-0 invert" />
            </a>
            <a href="https://youtube.com/@hariomtraderssolarenergy" className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center hover:from-red-600 hover:to-red-700 transform hover:scale-110 transition-all duration-300 shadow-lg">
              <img src="/logos/youtube.svg" alt="YouTube" className="w-7 h-7 filter brightness-0 invert" />
            </a>
          </div>
        </div>
      </section>

      

      {/* Bar Running */}
      <section className="py-6 animate-gradient marquee-container" style={{backgroundColor: ''}}>
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
          <div className="grid lg:grid-cols-5 gap-0 rounded-3xl overflow-hidden shadow-2xl">
            {/* Left: Info Panel */}
            <div className="lg:col-span-2 p-10 bg-gradient-to-br from-sky-500 via-sky-600 to-blue-700 text-white relative animate-fadeInLeft">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative z-10">
                <div className="inline-flex items-center px-5 py-2.5 bg-white/10 rounded-full text-sm font-semibold mb-6 backdrop-blur">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  CONTACT US
                </div>
                <h3 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">Schedule a free consultation</h3>
                <p className="text-white/90 mb-8 leading-relaxed">Speak with our experts for the best On-Grid, Off-Grid and Hybrid solar solutions tailored to your needs.</p>
                <div className="space-y-5 mb-10">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V21a1 1 0 0 1-1 1C10.07 22 2 13.93 2 3a1 1 0 0 1 1-1h4.49a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.25 1.01l-2.2 2.2Z"/></svg>
                    </div>
                    <div>
                      <div className="font-semibold">Call</div>
                      <div className="text-white/90">+91-00000 00000</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v.5L12 12 2 4.5V4Zm0 3.3V20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7.3l-9.35 6.24a2 2 0 0 1-2.3 0L2 7.3Z"/></svg>
                    </div>
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-white/90">info@hariomtraders.com</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z"/></svg>
                    </div>
                    <div>
                      <div className="font-semibold">Address</div>
                      <div className="text-white/90">Varanasi, Uttar Pradesh</div>
                    </div>
                  </div>
                </div>
                {/* Social icons */}
                <div className="flex space-x-4">
                  <a href="https://facebook.com/hariomtraderssolarenergy" className="w-11 h-11 bg-white/15 rounded-xl flex items-center justify-center hover:bg-white hover:text-gray-900 transition-all">
                    <img src="/logos/facebook.svg" alt="Facebook" className="w-6 h-6" />
                  </a>
                  <a href="https://instagram.com/hariomtraderssolarenergy" className="w-11 h-11 bg-white/15 rounded-xl flex items-center justify-center hover:bg-white hover:text-gray-900 transition-all">
                    <img src="/logos/instagram.svg" alt="Instagram" className="w-6 h-6" />
                  </a>
                  <a href="https://youtube.com/@hariomtraderssolarenergy" className="w-11 h-11 bg-white/15 rounded-xl flex items-center justify-center hover:bg-white hover:text-gray-900 transition-all">
                    <img src="/logos/youtube.svg" alt="YouTube" className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-3 bg-white p-10 animate-fadeInRight">
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
                <div className="grid md:grid-cols-2 gap-6">
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
            
              <h2 className="text-5xl font-bold text-gray-900 mb-8 leading-tight">
                Experience The Power of The Sun at its <span className="gradient-text">Finest</span>
              </h2>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                We deal in all kind of residential & commercial Solar Solutions. What sets HARIOM TRADERS apart from the other players, in the market, is its urge for growth through delivery of excellent products and service to all its customers within quick time. Thorough research & development, stringent quality control & sophisticated testing procedures & facility is the back-bone of our organization.
              </p>
              <div className="grid grid-cols-2 gap-8 mb-10">
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-600 mb-2">500+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-600 mb-2">25+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-600 mb-2">1000+</div>
                  <div className="text-gray-600">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-600 mb-2">100%</div>
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


        {/* Testimonials */}
      <section id="testimonials" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            
            <h2 className="text-5xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-lg text-gray-600">Real experiences from homeowners and businesses who chose solar with us.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 text-white flex items-center justify-center font-bold mr-4">AK</div>
                <div>
                  <div className="font-semibold text-gray-900">Ankit Kumar</div>
                  <div className="text-sm text-gray-500">Residential, 5kW On-Grid</div>
                </div>
              </div>
              <div className="flex text-yellow-400 mb-4">
                {Array.from({length: 5}).map((_, i) => (
                  <svg key={i} className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.967 0 1.371 1.24.588 1.81l-2.802 2.035a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.802-2.035a1 1 0 0 0-1.176 0l-2.802 2.035c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.379-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292Z"/></svg>
                ))}
              </div>
              <p className="text-gray-600">Professional team and smooth installation. My bills have dropped significantly and the app tracking is super helpful!</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sky-500 to-blue-600 text-white flex items-center justify-center font-bold mr-4">SP</div>
                <div>
                  <div className="font-semibold text-gray-900">Shreya Patel</div>
                  <div className="text-sm text-gray-500">Residential, 3kW Hybrid</div>
                </div>
              </div>
              <div className="flex text-yellow-400 mb-4">
                {Array.from({length: 5}).map((_, i) => (
                  <svg key={i} className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.967 0 1.371 1.24.588 1.81l-2.802 2.035a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.802-2.035a1 1 0 0 0-1.176 0l-2.802 2.035c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.379-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292Z"/></svg>
                ))}
              </div>
              <p className="text-gray-600">Great guidance on subsidy and paperwork. The hybrid setup keeps our home powered even during outages.</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-pink-600 text-white flex items-center justify-center font-bold mr-4">VK</div>
                <div>
                  <div className="font-semibold text-gray-900">Vikram Khanna</div>
                  <div className="text-sm text-gray-500">Commercial, 20kW On-Grid</div>
                </div>
              </div>
              <div className="flex text-yellow-400 mb-4">
                {Array.from({length: 5}).map((_, i) => (
                  <svg key={i} className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.967 0 1.371 1.24.588 1.81l-2.802 2.035a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.802-2.035a1 1 0 0 0-1.176 0l-2.802 2.035c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.379-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292Z"/></svg>
                ))}
              </div>
              <p className="text-gray-600">Impressive ROI within a year. The team handled design, installation, and net metering flawlessly.</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <a href="/testimonials" className="inline-flex items-center px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white font-bold text-lg rounded-xl shadow transition-all">
              Read more testimonials
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Our Solutions Section */}
      <section id="solutions" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Comprehensive Solar Solutions</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {/* On Grid */}
            <div className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl card-hover border border-gray-100">
              <div className="w-full h-56 bg-cover bg-center rounded-2xl mb-8" style={{backgroundImage: "url('https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"}}></div>
              <h3 className="text-2xl font-bold text-gray-900 mb-5">On Grid Solutions</h3>
              <p className="text-gray-600 mb-7 leading-relaxed">
                Our on-grid solar solutions let you generate clean energy while staying connected to the utility grid. With net metering, you can export excess power and save significantly on electricity bills. Ideal for homes and businesses with consistent grid supply.
              </p>
              <button className="text-green-600 font-semibold hover:text-green-700 flex items-center text-lg">
                Learn More
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>

            {/* Off Grid */}
            <div className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl card-hover border border-gray-100">
              <div className="w-full h-56 bg-cover bg-center rounded-2xl mb-8" style={{backgroundImage: "url('https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80')"}}></div>
              <h3 className="text-2xl font-bold text-gray-900 mb-5">Off Grid Solutions</h3>
              <p className="text-gray-600 mb-7 leading-relaxed">
                Off-grid solar systems give you complete energy independence by storing solar power in batteries for 24/7 use. Perfect for remote locations or areas with frequent power cuts, they ensure an uninterrupted electricity supply. Say goodbye to dependency on the main grid.
              </p>
              <button className="text-gray-900 font-semibold hover:text-green-600 flex items-center text-lg">
                Learn More
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>

            {/* Hybrid */}
            <div className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl card-hover border border-gray-100">
              <div className="w-full h-56 bg-cover bg-center rounded-2xl mb-8" style={{backgroundImage: "url('https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"}}></div>
              <h3 className="text-2xl font-bold text-gray-900 mb-5">Hybrid Solutions</h3>
              <p className="text-gray-600 mb-7 leading-relaxed">
                Hybrid solar systems combine the benefits of on-grid and off-grid technology. Store excess energy in batteries for backup while still enjoying grid connectivity when required. A reliable and cost-effective solution to ensure power even during outages.
              </p>
              <button className="text-gray-900 font-semibold hover:text-green-600 flex items-center text-lg">
                Learn More
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-r from-orange-500 via-red-500 to-pink-500">
            {/* Left Section - Text Content */}
            <div className="p-12 flex flex-col justify-center relative bg-gradient-to-br from-orange-600 via-red-600 to-pink-600">
              {/* Subtle overlay for text readability */}
              <div className="absolute inset-0 bg-black/20"></div>
              
              <div className="relative z-10">
                <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                  Ready to Go Solar? <br />
                  Contact Us Today!
                </h2>
                <p className="text-xl text-white/95 mb-8 leading-relaxed">
                  Take the first step toward clean, renewable energy. Whether you have questions, need expert advice, or are ready to schedule your free solar assessment, we're here to help.
                </p>
                <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-white hover:bg-gray-100 text-orange-600 font-bold text-lg rounded-xl shadow-xl transition-all duration-300 transform hover:scale-105">
                  Contact Now
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Right Section - Image */}
            <div className="relative bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-600 flex items-center justify-center overflow-hidden">
              <div className="w-full h-full bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"}}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/50 to-transparent"></div>
            </div>
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