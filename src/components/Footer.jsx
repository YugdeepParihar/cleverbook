
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-10 bg-gray-900 text-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-left">
        <div>
          {/* <img src="/logo.jpg" alt="Crest Logo" className="mb-4" /> */}
          <p>Crest is an AI-powered supply chain software that provides companies tools for demand forecasting, inventory planning, and more. This helps them have the right amount of stock, optimize space, and fulfill every order.</p>
        </div>
        <div>
          <h3 className="font-bold mb-2">Explore</h3>
          <ul>
            <li><a href="#product" className="hover:text-gray-400">Product</a></li>
            <li><a href="#pricing" className="hover:text-gray-400">Pricing</a></li>
            <li><a href="#customer-stories" className="hover:text-gray-400">Customer Stories</a></li>
            <li><a href="#career" className="hover:text-gray-400">Career</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">Learn</h3>
          <ul>
            <li><a href="#about-us" className="hover:text-gray-400">About Us</a></li>
            <li><a href="#blog" className="hover:text-gray-400">Blog</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">Contact Crest</h3>
          <p>sales@getcrest.ai</p>
          <p>Registered Office:</p>
          <p>1507, Incubex, 11th cross road, 19th Main Road, Bengaluru, India. 560102</p>
          <p>Corporate Office:</p>
          <p>291, All Time Space, 4th Floor, 15th A Cross, Sector - 6, HSR Layout, Bengaluru, India. 560102</p>
          <div className="flex space-x-4 mt-4">
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-8 text-center border-t border-gray-700 pt-4">
        <p>Copyright 2024 Crest</p>
        <p><a href="#terms-of-service" className="hover:text-gray-400">Terms of Service</a> | <a href="#privacy-policy" className="hover:text-gray-400">Privacy Policy</a></p>
        <p>Conifer Innovations Private Limited</p>
        <p>CIN: U72900KA2022PTC163144</p>
      </div>
    </footer>
  );
};

export default Footer;

