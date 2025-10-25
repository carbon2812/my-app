'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function TestimonialsPage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Manoj Kumar",
      location: "Delhi",
      rating: 5,
      text: "We are thrilled with our decision to go solar with FORCDYNO SOLAR. Their expertise and customer service were top-notch, and the entire process was seamless. Our electricity bills have reduced by 85% and we couldn't be happier!",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      system: "5kW Residential System"
    },
    {
      name: "Shrikant Verma",
      location: "Mumbai",
      rating: 5,
      text: "We were initially unsure about switching to solar, but FORCDYNO SOLAR made the whole process so easy. Their team provided clear guidance every step of the way. The installation was completed on time and the system is working perfectly.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      system: "8kW Commercial System"
    },
    {
      name: "Renu Kumari",
      location: "Bangalore",
      rating: 5,
      text: "We're so grateful to FORCDYNO SOLAR for providing us with such a high-quality solar system. They were dedicated to ensuring that we were completely satisfied with the installation. The after-sales service is excellent too.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      system: "6kW Residential System"
    },
    {
      name: "Suresh Bansal",
      location: "Pune",
      rating: 5,
      text: "The team at FORCDYNO SOLAR is simply outstanding. From consultation to installation, everything was handled professionally. Our solar system has exceeded our expectations and we're saving significantly on our energy bills.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      system: "10kW Industrial System"
    },
    {
      name: "Priya Sharma",
      location: "Chennai",
      rating: 5,
      text: "I was impressed by the quality of service and the efficiency of the solar panels. FORCDYNO SOLAR delivered exactly what they promised. The system has been running flawlessly for over a year now.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      system: "4kW Residential System"
    },
    {
      name: "Rajesh Gupta",
      location: "Hyderabad",
      rating: 5,
      text: "Excellent work by FORCDYNO SOLAR! They understood our requirements perfectly and delivered a customized solution. The installation team was professional and the system is performing beyond our expectations.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      system: "12kW Commercial System"
    }
  ];

  const stats = [
    { number: "500+", label: "Happy Customers" },
    { number: "25MW+", label: "Solar Capacity Installed" },
    { number: "98%", label: "Customer Satisfaction" },
    { number: "15+", label: "Years Experience" }
  ];

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
                <Link href="/solutions" className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium">Solutions</Link>
                <Link href="/testimonials" className="text-gray-900 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium">Testimonials</Link>
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
              TESTIMONIALS
            </div>
            <h1 className="text-6xl lg:text-7xl font-bold mb-8 leading-tight text-white animate-fadeInUp">
              Our Customers <span className="gradient-text">Speak For Us</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed animate-fadeInUp">
              Don't just take our word for it. Hear from our satisfied customers who have made the switch to solar energy and are experiencing the benefits firsthand.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-white animate-fadeInUp">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="py-24 section-modern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full text-sm font-medium mb-8">
              <span className="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mr-3 animate-pulse"></span>
              CUSTOMER REVIEWS
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-8 leading-tight">
              What Our <span className="gradient-text">Customers Say</span>
            </h2>
          </div>

          {/* Main Testimonial */}
          <div className="card-modern p-12 mb-12 animate-fadeInUp">
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              <div className="text-center lg:text-left">
                <div className="w-24 h-24 bg-cover bg-center rounded-full mx-auto mb-6" style={{backgroundImage: `url('${testimonials[activeTestimonial].image}')`}}></div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{testimonials[activeTestimonial].name}</h3>
                <p className="text-gray-600 mb-2">{testimonials[activeTestimonial].location}</p>
                <p className="text-green-600 font-semibold">{testimonials[activeTestimonial].system}</p>
                <div className="flex justify-center lg:justify-start mt-4">
                  {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-2">
                <blockquote className="text-xl text-gray-700 leading-relaxed italic">
                  "{testimonials[activeTestimonial].text}"
                </blockquote>
              </div>
            </div>
          </div>

          {/* Testimonial Navigation */}
          <div className="flex justify-center space-x-4 mb-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === activeTestimonial ? 'bg-green-500 scale-125' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          {/* All Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className={`card-modern p-8 animate-fadeInUp ${
                index === 1 || index === 2 ? 'bg-gradient-to-br from-green-50 to-emerald-50' : ''
              }`}>
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-cover bg-center rounded-full mx-auto mb-3" style={{backgroundImage: `url('${testimonial.image}')`}}></div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm mb-2">{testimonial.location}</p>
                  <p className="text-green-600 font-semibold text-sm mb-3">{testimonial.system}</p>
                  <div className="flex justify-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <blockquote className="text-gray-600 italic text-center">
                  "{testimonial.text}"
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full text-sm font-medium mb-8">
              <span className="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mr-3 animate-pulse"></span>
              VIDEO TESTIMONIALS
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-8 leading-tight">
              See Our <span className="gradient-text">Customers</span> in Action
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Watch real customers share their solar journey and the positive impact it has had on their lives and businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-modern p-8 animate-fadeInUp">
              <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl h-64 flex items-center justify-center mb-6">
                <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Manoj Kumar - Delhi</h3>
              <p className="text-gray-600">"Our solar system has reduced our electricity bills by 85%. The installation was smooth and the team was very professional."</p>
            </div>

            <div className="card-modern p-8 animate-fadeInUp">
              <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-2xl h-64 flex items-center justify-center mb-6">
                <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Shrikant Verma - Mumbai</h3>
              <p className="text-gray-600">"The commercial solar system has been a game-changer for our business. We're saving thousands every month on energy costs."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-24 section-modern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full text-sm font-medium mb-8">
              <span className="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mr-3 animate-pulse"></span>
              WHY CUSTOMERS TRUST US
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-8 leading-tight">
              Building <span className="gradient-text">Trust</span> Through Excellence
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center animate-fadeInUp">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quality Assurance</h3>
              <p className="text-gray-600">We use only premium Waaree solar panels with 25-year warranties and 98% material quality.</p>
            </div>

            <div className="text-center animate-fadeInUp">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Expert Team</h3>
              <p className="text-gray-600">Our certified engineers and installation team ensure professional service and optimal system performance.</p>
            </div>

            <div className="text-center animate-fadeInUp">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock customer support and maintenance services to keep your system running smoothly.</p>
            </div>

            <div className="text-center animate-fadeInUp">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Fast Installation</h3>
              <p className="text-gray-600">Quick and efficient installation process with minimal disruption to your daily routine.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-500 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold text-white mb-8 leading-tight">
            Join Our Happy Customers
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
            Experience the same satisfaction and savings that our customers enjoy. Get your free solar consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact" className="btn-modern text-lg px-10 py-5">
              Get Free Consultation
            </Link>
            <Link href="/products" className="border-2 border-white text-white px-10 py-5 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              View Our Products
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
