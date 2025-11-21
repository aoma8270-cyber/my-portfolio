import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 py-12 border-t border-gray-200">
      <div className="container mx-auto px-6 text-center">
        <p className="text-gray-600 text-sm mb-2">
          &copy; {new Date().getFullYear()} Aoma Ikegaki. All rights reserved.
        </p>
        <p className="text-gray-400 text-xs">
          Built with React, Tailwind CSS, and Gemini API.
        </p>
      </div>
    </footer>
  );
};

export default Footer;