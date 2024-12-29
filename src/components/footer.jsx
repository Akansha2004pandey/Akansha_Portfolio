import React from 'react';

const Footer = () => {
  return (
    <div
      id="footer"
      className="bg-gradient-to-r from-gray-900 to-gray-500 text-white py-2 text-center flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4"
    >
      <span>Akansha Pandey</span>
      <span className="hidden sm:inline">|</span>
      <span>CopyRight</span>
      <span className="hidden sm:inline">|</span>
      <span>Privacy Terms</span>
    </div>
  );
};

export default Footer;
