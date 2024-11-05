import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md">
      <div className="container mx-auto px-5 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img src="/logoo.png" alt="Logo" className="h-12 w-auto" />
          </div>
          
          <div className="hidden md:flex space-x-6 font-bold">
            <a href="#about" className="text-white hover:text-yellow-400 transition duration-300">About</a>
            <a href="#skills" className="text-white hover:text-yellow-400 transition duration-300">Skills</a>
            <a href="#projects" className="text-white hover:text-yellow-400 transition duration-300">Projects</a>
            <a href="https://amanrajgupta.hashnode.dev/" target='_blank' className="text-white hover:text-yellow-400 transition duration-300">Blogs</a>
            <a href="#contact" className="text-white hover:text-yellow-400 transition duration-300">Contact</a>
          </div>
          
          <div className="md:hidden">
            <button className="text-white focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col justify-center items-center font-bold backdrop-blur-md">
            <a href="#about" className="block text-white hover:text-yellow-400 transition duration-300 py-2 px-3 rounded-md">About</a>
            <a href="#skills" className="block text-white hover:text-yellow-400 transition duration-300 py-2 px-3 rounded-md">Work</a>
            <a href="#projects" className="block text-white hover:text-yellow-400 transition duration-300 py-2 px-3 rounded-md">Projects</a>
            <a href="https://amanrajgupta.hashnode.dev/" target='_blank' className="text-white hover:text-yellow-400 transition duration-300">Blogs</a>
            <a href="#contact" className="block text-white hover:text-yellow-400 transition duration-300 py-2 px-3 rounded-md">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
