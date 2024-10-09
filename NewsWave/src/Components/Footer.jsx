import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 fixed bottom-0 left-0 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-sm">
          © 2024 Your Company. All rights reserved.
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-gray-300">Home</a></li>
            <li><a href="#" className="hover:text-gray-300">About</a></li>
            <li><a href="#" className="hover:text-gray-300">Contact</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer