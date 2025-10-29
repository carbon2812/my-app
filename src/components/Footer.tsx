import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-900 via-gray-900 to-black text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="relative z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Company Section */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <img 
                  src="/Hariom Trader's.png Logo Transparent.png" 
                  alt="Hariom Traders Logo" 
                  className="h-16 w-auto mb-4"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                HARIOM <span className="text-orange-500">TRADERS</span>
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed text-sm">
                Leading provider of solar energy solutions. Empowering homes and businesses with clean, renewable energy for a sustainable future.
              </p>
              <div className="flex gap-3">
                <a 
                  href="https://facebook.com/hariomtraderssolarenergy" 
                  className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 border border-gray-700 hover:border-blue-500"
                >
                  <span className="text-white font-bold">f</span>
                </a>
                <a 
                  href="https://instagram.com/hariomtraderssolarenergy" 
                  className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-br hover:from-pink-500 hover:to-orange-500 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 border border-gray-700"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.781c-.49 0-.98-.49-.98-.98s.49-.98.98-.98.98.49.98.98-.49.98-.98.98zm-1.96 9.781c-1.297 0-2.448-.49-3.323-1.297-.807-.875-1.297-2.026-1.297-3.323s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Navigation Links */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-orange-500 mb-6">Navigation</h4>
              <nav className="flex flex-col space-y-3">
                <Link href="/" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                  Home
                </Link>
                <Link href="/about" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                  About Us
                </Link>
                <Link href="/products" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                  Products
                </Link>
                <Link href="/solutions" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                  Solutions
                </Link>
                <Link href="/contact" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                  Contact
                </Link>
              </nav>
            </div>

            {/* Products Section */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-orange-500 mb-6">Our Products</h4>
              <nav className="flex flex-col space-y-3">
                <Link href="/products" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                  On Grid Solar Systems
                </Link>
                <Link href="/products" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                  Off Grid Solar Systems
                </Link>
                <Link href="/products" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                  Hybrid Solar Systems
                </Link>
                <Link href="/products" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                  Solar Inverters
                </Link>
                <Link href="/products" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                  Solar Batteries
                </Link>
              </nav>
            </div>

            {/* Contact Section */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-orange-500 mb-6">Get In Touch</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Pahariya, Varanasi, Ashok Vihar Colony, Near PF Office, Phase 1, Varanasi, UP - 221007
                  </p>
                </div>
                
                <a href="tel:+918726909990" className="flex items-center gap-3 group">
                  <svg className="w-5 h-5 text-orange-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-gray-400 group-hover:text-orange-500 transition-colors text-sm">+91 87269 09990</span>
                </a>
                
                <a href="mailto:hariomtraders407@gmail.com" className="flex items-center gap-3 group">
                  <svg className="w-5 h-5 text-orange-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-400 group-hover:text-orange-500 transition-colors text-sm break-all">hariomtraders407@gmail.com</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-500 text-sm">
                © {new Date().getFullYear()} <span className="font-semibold text-white">HARIOM TRADERS</span>. All rights reserved.
              </p>
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <span>Powered by renewable energy</span>
                <svg className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
