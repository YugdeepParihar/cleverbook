// src/components/HeroSection.jsx
import React from 'react';
import { CgMenuRight } from 'react-icons/cg';
import Animation from './Animation';

const HeroSection = () => {
  return (
    <section className="bg-gray-900 text-white py-20 min-h-screen">
      <header className="fixed w-full bg-gray-900 z-10">
        <div className="container mx-auto flex items-center justify-between p-4">
          <div className="flex items-center">
            <img src="/logo.jpg" alt="logo" height="40px" width="40px" className="mr-3" />
            <h1 className="text-4xl md:text-5xl font-bold g-txt">CleverBooks</h1>
            <nav className="flex justify-center md:justify-center space-x-8 font-bold">
            <a href="#product" className="hover:text-gray-400">Product</a>
            <a href="#pricing" className="hover:text-gray-400">Pricing</a>
            <a href="#industry" className="hover:text-gray-400">Industry</a>
            <a href="#customer-services" className="hover:text-gray-400">Customer Services</a>
            <a href="#about" className="hover:text-gray-400">About</a>
            <a href="#blogs" className="hover:text-gray-400">Blogs</a>
          </nav>
          </div>
          <CgMenuRight size={40} />
        </div>
      </header>
      <div className="container mx-auto pt-24">
        <div className="text-center mt-10">
          <h2 className="text-4xl md:text-5xl font-bold">Innovate Your Inventory Management with Crest</h2>
          <div className="mt-4">
            <Animation />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
