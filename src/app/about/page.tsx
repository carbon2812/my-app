'use client';

import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-modern">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-20 hero-modern" style={{backgroundColor: '#4CB4F0'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-6 py-3 glass rounded-full text-sm font-medium mb-8 animate-pulse-slow">
              <span className="w-2 h-2 bg-white rounded-full mr-3 animate-pulse"></span>
              ABOUT HARIOM TRADERS
            </div>
            <h1 className="text-6xl lg:text-7xl font-bold mb-8 leading-tight text-white animate-fadeInUp">
              Experience The Power of The Sun at its <span className="gradient-text">Finest</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed animate-fadeInUp">
              We deal in all kind of residential & commercial Solar Solutions. What sets FORCDYNO apart from the other players, in the market, is its urge for growth through delivery of excellent products and service to all its customers within quick time.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 section-modern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fadeInLeft">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full text-sm font-medium mb-8">
                <span className="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mr-3 animate-pulse"></span>
                OUR STORY
              </div>
              <h2 className="text-5xl font-bold text-gray-900 mb-8 leading-tight">
                Pioneering Solar Excellence Since Day One
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                HARIOM TRADERS was founded with a vision to revolutionize the solar energy industry in India. Our journey began with a simple yet powerful mission: to make clean, renewable energy accessible to every home and business across the country.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Through thorough research & development, stringent quality control & sophisticated testing procedures & facility, we have established ourselves as the backbone of sustainable energy solutions. Our commitment to excellence drives us to deliver cutting-edge solar technology that transforms lives and businesses.
              </p>
              <div className="flex space-x-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">25+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                  <div className="text-gray-600">Satisfaction Rate</div>
                </div>
              </div>
            </div>
            <div className="animate-fadeInRight">
              <div className="relative">
                <div className="w-full h-96 bg-cover bg-center rounded-3xl shadow-modern-lg animate-float" style={{backgroundImage: "url('https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80')"}}></div>
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black opacity-20 rounded-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full text-sm font-medium mb-8">
              <span className="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mr-3 animate-pulse"></span>
              OUR VALUES
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-8 leading-tight">
              What Drives Us Forward
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our core values shape every decision we make and every solution we deliver. They are the foundation of our commitment to excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-modern p-8 text-center animate-fadeInUp">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quality Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                We maintain the highest standards in every solar panel and system we install. Our 98% material quality rating speaks for itself.
              </p>
            </div>

            <div className="card-modern p-8 text-center animate-fadeInUp">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Customer-Centric</h3>
              <p className="text-gray-600 leading-relaxed">
                Our 99% client-centric approach ensures that every customer receives personalized attention and solutions tailored to their needs.
              </p>
            </div>

            <div className="card-modern p-8 text-center animate-fadeInUp">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Innovation</h3>
              <p className="text-gray-600 leading-relaxed">
                We continuously invest in R&D to bring you the latest solar technologies and most efficient energy solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 section-modern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full text-sm font-medium mb-8">
              <span className="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mr-3 animate-pulse"></span>
              OUR TEAM
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-8 leading-tight">
              Meet Our <span className="gradient-text">Expert Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our certified engineers and solar experts are dedicated to delivering the best solar solutions for your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-modern p-8 text-center animate-fadeInUp">
              <div className="w-24 h-24 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">MK</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Manohar Kumar</h3>
              <p className="text-green-600 font-semibold mb-4">CEO & Founder</p>
              <p className="text-gray-600 leading-relaxed">
                With over 15 years of experience in renewable energy, Manohar leads our vision of sustainable solar solutions.
              </p>
            </div>

            <div className="card-modern p-8 text-center animate-fadeInUp">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">RS</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Rajesh Sharma</h3>
              <p className="text-green-600 font-semibold mb-4">Lead Engineer</p>
              <p className="text-gray-600 leading-relaxed">
                Certified solar engineer with expertise in system design and installation optimization.
              </p>
            </div>

            <div className="card-modern p-8 text-center animate-fadeInUp">
              <div className="w-24 h-24 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">PG</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Priya Gupta</h3>
              <p className="text-green-600 font-semibold mb-4">Customer Success Manager</p>
              <p className="text-gray-600 leading-relaxed">
                Dedicated to ensuring every customer has an exceptional experience with our solar solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-500 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold text-white mb-8 leading-tight">
            Ready to Go Solar with Us?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
            Join hundreds of satisfied customers who have made the switch to clean, renewable energy with FORCDYNO SOLAR.
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

      <Footer />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
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
