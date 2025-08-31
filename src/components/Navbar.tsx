"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`bg-card border-b border-border fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'shadow-lg' : 'shadow-md'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          <Link href="/" className="text-2xl font-bold text-emerald-500 flex items-center">
            <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
              Jeevika
            </span>
          </Link>

          <div className="hidden md:flex space-x-6 items-center">
            <Link href="/" className="text-foreground hover:text-emerald-500 transition-colors duration-200 font-medium">
              Home
            </Link>
            <Link href="/jobs" className="text-foreground hover:text-emerald-500 transition-colors duration-200 font-medium">
              Jobs
            </Link>
            <Link href="/profile" className="text-foreground hover:text-emerald-500 transition-colors duration-200 font-medium">
              Profile
            </Link>

            <Link href="/auth/login">
              <Button 
                variant="outline" 
                size="sm"
                className="bg-transparent border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white transition-colors duration-200"
              >
                Login
              </Button>
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="p-2 text-foreground hover:bg-emerald-500/10"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-card border-t border-border animate-in slide-in-from-top duration-300">
          <Link
            href="/"
            className="block px-4 py-3 text-foreground hover:bg-emerald-500/10 transition-colors duration-200 font-medium border-b border-border/10"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/jobs"
            className="block px-4 py-3 text-foreground hover:bg-emerald-500/10 transition-colors duration-200 font-medium border-b border-border/10"
            onClick={() => setIsOpen(false)}
          >
            Jobs
          </Link>
          <Link
            href="/profile"
            className="block px-4 py-3 text-foreground hover:bg-emerald-500/10 transition-colors duration-200 font-medium border-b border-border/10"
            onClick={() => setIsOpen(false)}
          >
            Profile
          </Link>
          <div className="p-4 border-t border-border/10">
            <Link href="/auth/login" onClick={() => setIsOpen(false)}>
              <Button 
                variant="default" 
                size="sm" 
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white transition-colors duration-200"
              >
                Login
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}