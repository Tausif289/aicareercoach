import React from 'react';

const Footer = () => {
  return (
    <footer className="border-r-gray-900 text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} AI career coach. All rights reserved.</p>
        <div className="mt-2">
          <a href="/privacy" className="text-white hover:underline mx-2">Privacy Policy</a>
          <a href="/terms" className="text-white hover:underline mx-2">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
