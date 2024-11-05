import React from "react";
import logo from "../assets/Logo.jpg"; // Make sure this path is correct

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#F5F5F5" }} className="text-black py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        {/* Logo and Copyright */}
        <div className="flex items-center mb-4 md:mb-0">
          <img src={logo} alt="Logo" className="h-10 w-auto mr-3" />
          <span className="text-xl font-semibold"></span>
        </div>
        <div className="flex justify-center items-center">
          <p className="text-sm hidden md:block">
            TanamanKu ©2024. All rights reserved.
          </p>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-4 mb-4 md:mb-0">
          <li>
            <a href="#beranda" className="hover:text-gray-600">
              Beranda
            </a>
          </li>
          <li>
            <a href="#blog/artikel" className="hover:text-gray-600">
              Blog/Artikel
            </a>
          </li>
          <li>
            <a href="#perawatan" className="hover:text-gray-600">
              Perawatan
            </a>
          </li>
          <li>
            <a href="#tentangkami" className="hover:text-gray-600">
              Tentang Kami
            </a>
          </li>
        </ul>

        {/* Responsive Copyright Text */}
        <p className="text-sm text-center md:hidden">
          ©2024. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
