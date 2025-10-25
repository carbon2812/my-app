'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
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

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! We will contact you soon.');
  };

  // Close dropdowns when clicking outside
  const handleClickOutside = () => {
    setIsProductsOpen(false);
    setIsSolutionsOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-modern" onClick={handleClickOutside}>
      {/* Navigation */}
      <nav className="nav-modern fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img 
                src="/Hariom Trader's.png Logo Transparent.png" 
                alt="Hariom Traders Logo" 
                className="h-12 w-auto"
              />
            </div>
            
            <div className="hidden lg:block">
              <div className="ml-10 flex items-baseline align-left">
                <Link href="/" className="text-gray-900 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                <Link href="/about" className="text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium">About Us</Link>
                
                {/* Products Dropdown */}
                <div className="relative" onClick={(e) => e.stopPropagation()}>
                  <button
                    onClick={() => setIsProductsOpen(!isProductsOpen)}
                    className="text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium flex items-center"
                  >
                    Products
                    <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {isProductsOpen && (
                    <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg border">
                      <div className="py-1">
                        <Link href="/products" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-red-600">Residential</Link>
                        <Link href="/products" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-red-600">Commercial</Link>
                        <Link href="/products" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-red-600">Housing</Link>
                        <Link href="/products" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-red-600">Industrial</Link>
                        <Link href="/products" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-red-600">Ground Mounted</Link>
                      </div>
                    </div>
                  )}
                </div>

                {/* Solutions Dropdown */}
                <div className="relative" onClick={(e) => e.stopPropagation()}>
                  <button
                    onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                    className="text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium flex items-center"
                  >
                    Solutions
                    <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {isSolutionsOpen && (
                    <div className="absolute top-full left-0 mt-1 w-40 bg-white rounded-md shadow-lg border">
                      <div className="py-1">
                        <Link href="/solutions" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-red-600">On Grid</Link>
                        <Link href="/solutions" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-red-600">Off Grid</Link>
                        <Link href="/solutions" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-red-600">Hybrid</Link>
                      </div>
                    </div>
                  )}
                </div>

                <Link href="/contact" className="text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium">Get Subsidy</Link>
                <Link href="/testimonials" className="text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium">Testimonials</Link>
                <Link href="/contact" className="text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
              </div>
            </div>

            {/* Desktop Get Free Quote Button */}
            <div className="hidden lg:block">
              <button className="btn-modern text-sm">
                Get Free Quote
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              {isClient ? (
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-gray-700 hover:text-red-600 focus:outline-none focus:text-green-600"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              ) : (
                <div className="text-gray-700">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isClient && isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
              <Link href="/" className="text-gray-900 hover:text-red-600 block px-3 py-2 rounded-md text-base font-medium">Home</Link>
              <Link href="/about" className="text-gray-700 hover:text-red-600 block px-3 py-2 rounded-md text-base font-medium">About Us</Link>
              
              <div className="px-3 py-2">
                <div className="text-gray-700 font-medium mb-2">Products</div>
                <div className="ml-4 space-y-1">
                  <Link href="/products" className="text-gray-600 hover:text-red-600 block px-3 py-1 rounded-md text-sm">Residential</Link>
                  <Link href="/products" className="text-gray-600 hover:text-red-600 block px-3 py-1 rounded-md text-sm">Commercial</Link>
                  <Link href="/products" className="text-gray-600 hover:text-red-600 block px-3 py-1 rounded-md text-sm">Housing</Link>
                  <Link href="/products" className="text-gray-600 hover:text-red-600 block px-3 py-1 rounded-md text-sm">Industrial</Link>
                  <Link href="/products" className="text-gray-600 hover:text-red-600 block px-3 py-1 rounded-md text-sm">Ground Mounted</Link>
                </div>
              </div>
              
              <div className="px-3 py-2">
                <div className="text-gray-700 font-medium mb-2">Solutions</div>
                <div className="ml-4 space-y-1">
                  <Link href="/solutions" className="text-gray-600 hover:text-red-600 block px-3 py-1 rounded-md text-sm">On Grid</Link>
                  <Link href="/solutions" className="text-gray-600 hover:text-red-600 block px-3 py-1 rounded-md text-sm">Off Grid</Link>
                  <Link href="/solutions" className="text-gray-600 hover:text-red-600 block px-3 py-1 rounded-md text-sm">Hybrid</Link>
                </div>
              </div>

              <Link href="/contact" className="text-gray-700 hover:text-red-600 block px-3 py-2 rounded-md text-base font-medium">Get Subsidy</Link>
              <Link href="/testimonials" className="text-gray-700 hover:text-red-600 block px-3 py-2 rounded-md text-base font-medium">Testimonials</Link>
              <Link href="/contact" className="text-gray-700 hover:text-red-600 block px-3 py-2 rounded-md text-base font-medium">Contact</Link>
              
              <div className="px-3 py-2">
                <button className="w-full btn-modern text-sm">
                  Get Free Quote
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

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
                COMMERCIAL SOLAR PANELS
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
          <div className="flex flex-col space-y-6">
            <a href="#" className="w-14 h-14 glass rounded-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 group">
              <span className="text-white font-bold text-lg group-hover:text-blue-400">f</span>
            </a>
            <a href="#" className="w-14 h-14 glass rounded-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 group">
              <svg className="w-7 h-7 text-white group-hover:text-pink-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="#" className="w-14 h-14 glass rounded-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 group">
              <svg className="w-7 h-7 text-white group-hover:text-green-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
            </a>
            <a href="#" className="w-14 h-14 glass rounded-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 group">
              <svg className="w-7 h-7 text-white group-hover:text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Bar Running */}
        <section className="py-6 animate-gradient marquee-container" style={{backgroundColor: '#EEFEF8'}}>
        <div className="marquee-content">
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
                <a href="#" className="w-16 h-16 card-modern rounded-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 group">
                  <span className="text-blue-600 font-bold text-xl group-hover:text-blue-700">f</span>
                </a>
                <a href="#" className="w-16 h-16 card-modern rounded-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 group">
                  <svg className="w-8 h-8 text-pink-500 group-hover:text-pink-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="w-16 h-16 card-modern rounded-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 group">
                  <svg className="w-8 h-8 text-green-500 group-hover:text-red-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                </a>
                <a href="#" className="w-16 h-16 card-modern rounded-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 group">
                  <svg className="w-8 h-8 text-teal-500 group-hover:text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="card-modern p-10 animate-fadeInRight">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Average Monthly Bill</label>
                    <input
                      type="text"
                      value={formData.monthlyBill}
                      onChange={(e) => setFormData({...formData, monthlyBill: e.target.value})}
                      className="w-full input-modern focus-modern text-black"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) => setFormData({...formData, city: e.target.value})}
                      className="w-full input-modern focus-modern text-black"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">Solar Needed For</label>
                  <select
                    value={formData.solarType}
                    onChange={(e) => setFormData({...formData, solarType: e.target.value})}
                    className=" w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-black"
                    required
                  >
                    <option value="">Select Type</option>
                    <option value="home">Home</option>
                    <option value="business">Business</option>
                    <option value="farm">Farm</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full btn-modern text-lg py-5 flex items-center justify-center"
                >
                  Submit
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
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-lg font-semibold text-gray-900">100% Satisfaction Guarantee</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-lg font-semibold text-gray-900">Certified engineers</span>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">Panels Material Quality</span>
                    <span className="text-sm font-medium text-gray-700">98%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{width: '98%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">Client-Centric Approach</span>
                    <span className="text-sm font-medium text-gray-700">99%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{width: '99%'}}></div>
                  </div>
                </div>
              </div>
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
              <button className="text-gray-900 font-semibold hover:text-red-600 flex items-center">
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
              <button className="text-gray-900 font-semibold hover:text-red-600 flex items-center">
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

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              TESTIMONIALS
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Customers Speak For Us</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                text: "We are thrilled with our decision to go solar with FORCDYNO SOLAR Their expertise and customer service were top-notch, and the entire process was seamless.",
                author: "Manoj Kumar",
                gradient: false
              },
              {
                text: "We are thrilled with our decision to go solar with FORCDYNO SOLAR Their expertise and customer service were top-notch, and the entire process was seamless.",
                author: "Suresh Bansal",
                gradient: false
              },
              {
                text: "We were initially unsure about switching to solar, but FORCDYNO SOLAR made the whole process so easy. Their team provided clear guidance every step of the way.",
                author: "Shrikant Verma",
                gradient: true
              },
              {
                text: "We're so grateful to FORCDYNO SOLAR for providing us with such a high-quality solar system. They were dedicated to ensuring that we were completely satisfied with the installation.",
                author: "Renu Kumari",
                gradient: true
              }
            ].map((testimonial, index) => (
              <div key={index} className={`p-6 rounded-xl shadow-sm ${testimonial.gradient ? 'bg-gradient-to-br from-green-100 to-yellow-100' : 'bg-white'}`}>
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
                    <span className="text-gray-600 font-bold text-lg">{testimonial.author.charAt(0)}</span>
                  </div>
                </div>
                <div className="flex justify-center mb-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4 italic text-center">"{testimonial.text}"</p>
                <div className="font-semibold text-gray-900 text-center">— {testimonial.author}</div>
              </div>
            ))}
          </div>

          {/* Carousel Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {[...Array(4)].map((_, i) => (
              <button key={i} className={`w-3 h-3 rounded-full ${i === 0 ? 'bg-green-500' : 'bg-gray-300'}`}></button>
            ))}
          </div>
        </div>
      </section>

      {/* Ready to Go Solar Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-6">Ready to Go Solar?</h2>
              <h3 className="text-3xl font-bold mb-6">Contact Us Today!</h3>
              <p className="text-xl text-blue-100 mb-8">
                Take the first step toward clean, renewable energy. Whether you have questions, need expert advice, or are ready to schedule your free solar assessment, we're here to help.
              </p>
              <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors flex items-center">
                Contact Now
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl shadow-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-1">
                <div className="flex items-center mb-4">
                  <img 
                    src="/Hariom Trader's.png Logo Transparent.png" 
                    alt="Hariom Traders Logo" 
                    className="h-8 w-auto mr-3"
                  />
                  <h3 className="text-xl font-bold">HARIOM TRADERS</h3>
                </div>
              <p className="text-gray-400 mb-6">
                We're dedicated to helping you harness the power of the sun to create a sustainable future. Whether you're looking to reduce energy costs.
              </p>
              <div className="flex space-x-4">
                <a href="https://facebook.com/hariomtraderssolarenergy" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors">
                  <span className="text-white font-bold text-sm">f</span>
                </a>
                <a href="https://instagram.com/hariomtraderssolarenergy" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Contact Us */}
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

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-6">Quick Links</h3>
              <div className="space-y-3">
                <a href="#home" className="block text-gray-400 hover:text-white transition-colors">Home</a>
                <a href="#about" className="block text-gray-400 hover:text-white transition-colors">About Us</a>
                <a href="#products" className="block text-gray-400 hover:text-white transition-colors">Products</a>
                <a href="#why-choose-us" className="block text-gray-400 hover:text-white transition-colors">Why Choose Us</a>
                <a href="#projects" className="block text-gray-400 hover:text-white transition-colors">Projects</a>
              </div>
            </div>

            {/* Products */}
            <div>
              <h3 className="text-lg font-bold mb-6">Products</h3>
              <div className="space-y-3">
                <a href="#on-grid" className="block text-gray-400 hover:text-white transition-colors">On Grid Solar</a>
                <a href="#off-grid" className="block text-gray-400 hover:text-white transition-colors">Off Grid Solar</a>
                <a href="#hybrid" className="block text-gray-400 hover:text-white transition-colors">Hybrid Solar</a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">©Copyright 2025 HARIOM TRADERS. All rights reserved</p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button className="fixed bottom-8 right-8 w-12 h-12 bg-gray-600 hover:bg-gray-700 text-white rounded-full flex items-center justify-center transition-colors z-40">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  );
}