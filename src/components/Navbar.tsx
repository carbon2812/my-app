'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleClickOutside = () => {
    setIsProductsOpen(false);
    setIsSolutionsOpen(false);
    setIsMenuOpen(false);
  };

  return (
    <nav className="nav-modern fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-23">
          <div className="flex items-center">
            <img 
              src="/Hariom Trader's.png Logo Transparent.png" 
              alt="Hariom Traders Logo" 
              className="h-22 w-auto"
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
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isProductsOpen && (
                  <div className="absolute top-full left-0 mt-1 w-40 bg-white rounded-md shadow-lg border">
                    <div className="py-1">
                      <Link href="/products" className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600">Residential</Link>
                      <Link href="/products" className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600">Commercial</Link>
                      <Link href="/products" className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600">Housing</Link>
                      <Link href="/products" className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600">Industrial</Link>
                      <Link href="/products" className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600">Ground Mounted</Link>
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
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isSolutionsOpen && (
                  <div className="absolute top-full left-0 mt-1 w-40 bg-white rounded-md shadow-lg border">
                    <div className="py-1">
                      <Link href="/solutions" className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600">On Grid</Link>
                      <Link href="/solutions" className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600">Off Grid</Link>
                      <Link href="/solutions" className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600">Hybrid</Link>
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
                className="text-gray-700 hover:text-red-600 focus:outline-none focus:text-red-600"
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
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <Link href="/" className="text-gray-700 hover:text-red-600 block px-3 py-2 rounded-md text-base font-medium">Home</Link>
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
  );
}
