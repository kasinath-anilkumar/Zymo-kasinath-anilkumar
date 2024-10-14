import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="w-full md:w-[80px] md:h-[272px] mb-4">
      <h3 className="text-xl font-bold mb-4">About</h3>
      <ul>
        <li><Link to="/deals" className="hover:text-gray-300">Deals</Link></li>
        <li><Link to="/fleet" className="hover:text-gray-300">Fleet</Link></li>
        <li><Link to="/about-us" className="hover:text-gray-300">About Us</Link></li>
        <li><Link to="/contact" className="hover:text-gray-300">Contact Us</Link></li>
        <li><Link to="/career" className="hover:text-gray-300">Career</Link></li>
      </ul>
    </div>
  );
};

export default About;
