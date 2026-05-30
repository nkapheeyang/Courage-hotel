'use client';

import React from 'react';
import Link from 'next/link';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';

export const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-40 bg-black border-b-2 border-gold">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-12 h-12 bg-gold rounded-lg flex items-center justify-center">
              <span className="text-black font-serif font-bold text-xl">CH</span>
            </div>
            <span className="text-gold font-serif font-bold text-2xl hidden sm:inline">Courage Hotel</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 items-center">
            <Link href="/" className="text-cream hover:text-gold transition-colors">
              Home
            </Link>
            <Link href="/rooms" className="text-cream hover:text-gold transition-colors">
              Rooms
            </Link>
            <Link href="/gallery" className="text-cream hover:text-gold transition-colors">
              Gallery
            </Link>
            <Link href="/booking" className="text-cream hover:text-gold transition-colors">
              Booking
            </Link>
            <Link href="/contact" className="text-cream hover:text-gold transition-colors">
              Contact
            </Link>
            <Link href="/reviews" className="bg-gold text-black px-6 py-2 rounded-lg hover:bg-dark-gold transition-colors">
              Reviews
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gold text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gold pt-4 space-y-3">
            <Link href="/" className="block text-cream hover:text-gold transition-colors">
              Home
            </Link>
            <Link href="/rooms" className="block text-cream hover:text-gold transition-colors">
              Rooms
            </Link>
            <Link href="/gallery" className="block text-cream hover:text-gold transition-colors">
              Gallery
            </Link>
            <Link href="/booking" className="block text-cream hover:text-gold transition-colors">
              Booking
            </Link>
            <Link href="/contact" className="block text-cream hover:text-gold transition-colors">
              Contact
            </Link>
            <Link href="/reviews" className="block bg-gold text-black px-4 py-2 rounded-lg hover:bg-dark-gold transition-colors">
              Reviews
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};
