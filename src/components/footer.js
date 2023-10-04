import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="mb-4 lg:mb-0">
            <h3 className="text-xl font-semibold mb-2">Contact</h3>
            <p>Phone: +1 (123) 456-7890</p>
            <p>Email: info@example.com</p>
          </div>
          <div className="mb-4 lg:mb-0">
            <h3 className="text-xl font-semibold mb-2">Company Info</h3>
            <p>About Us</p>
            <p>Privacy Policy</p>
            <p>Terms and Conditions</p>
          </div>
        </div>
        <div className="mt-4">
          <h3 className="text-xl font-semibold mb-2">Address</h3>
          <p>123 Main Street</p>
          <p>City, State ZIP Code</p>
          <p>Country</p>
        </div>
        <div className="mt-4">
          <a href="/help-and-support" className="text-blue-300 hover:text-blue-400">
            Help and Support
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
