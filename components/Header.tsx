"use client";
import { useState } from 'react';
import Link from 'next/link';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Our Services' },
  { href: '/success-stories', label: 'Success Stories' },
  { href: '/qa', label: 'Q & A' },
  { href: '/contact', label: 'Contact Us' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-yellow-100 shadow sticky top-0 z-40">
      <nav className="container mx-auto flex items-center justify-between py-4 px-4">
        {/* Logo */}
        <Link href="/" className="font-bold text-2xl text-yellow-700 hover:text-yellow-800 transition-colors">
          Vastu Harmony
        </Link>

        {/* Hamburger Button (Mobile) */}
        <button
          className="md:hidden flex items-center px-2 py-1 text-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              // X icon
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              // Hamburger icon
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex gap-6">
          {navLinks.map(link => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="hover:text-yellow-700 transition font-medium px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white shadow transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
        aria-hidden={!menuOpen}
      >
        <ul className="flex flex-col gap-2 px-4 py-2">
          {navLinks.map(link => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block py-2 px-2 text-yellow-700 font-medium hover:bg-yellow-50 rounded transition"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

