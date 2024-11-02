import React, { useState } from "react";
import logo from "../assets/Logo.png";
import { SettingsOutline, PersonOutline, MenuOutline, ChevronDownOutline } from "react-ionicons";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (e) => {
    e.preventDefault();
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <nav className="bg-[#E7F0DC] shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-25 h-10" />
        </div>

        {/* Navbar links */}
        <div className="flex-grow flex items-center justify-center space-x-6">
          {/* Render these links only for larger screens */}
          <div className="hidden lg:flex space-x-6">
            <a href="#beranda" className="block px-4 py-2 text-gray-800 hover:bg-[#C5D9A4] rounded">
              Beranda
            </a>
            <div className="relative">
              <a
                href="#blog/artikel"
                className="flex items-center px-4 py-2 text-gray-800 hover:bg-[#C5D9A4] rounded cursor-pointer"
                onClick={toggleDropdown}
              >
                <span>Blog/Artikel</span>
                <ChevronDownOutline color={"#000000"} title="" height="24px" width="24px" className="ml-2" />
              </a>
              {isDropdownOpen && (
                <div className="absolute left-0 mt-2 w-60 bg-white shadow-lg rounded-md border">
                  <ul className="py-2">
                    <li>
                      <a
                        href="#Tips-Perawatan-Tanaman"
                        className="block px-4 py-2 text-gray-800 hover:bg-[#E7F0DC] rounded"
                        onClick={closeDropdown}
                      >
                        Tips Perawatan Tanaman
                      </a>
                    </li>
                    <li>
                      <a
                        href="#Artikel-Penyakit-Tanaman"
                        className="block px-4 py-2 text-gray-800 hover:bg-[#E7F0DC] rounded"
                        onClick={closeDropdown}
                      >
                        Artikel Penyakit dan Hama
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <a href="#perawatan" className="block px-4 py-2 text-gray-800 hover:bg-[#C5D9A4] rounded">
              Perawatan
            </a>
            <a href="#tentangkami" className="block px-4 py-2 text-gray-800 hover:bg-[#C5D9A4] rounded">
              Tentang Kami
            </a>
          </div>
        </div>

        {/* Navbar icons */}
        <div className="hidden lg:flex items-center space-x-10">
          <a href="#user" className="text-gray-800">
            <PersonOutline color="#000000" height="24px" width="24px" />
          </a>
          <a href="#settings" className="text-gray-800">
            <SettingsOutline color="#000000" height="24px" width="24px" />
          </a>
        </div>

        {/* Mobile menu icon */}
        <div className="lg:hidden flex items-center">
          <button className="text-gray-800 focus:outline-none" onClick={toggleMenu}>
            <MenuOutline color={"#000000"} height="24px" width="24px" />
          </button>
          <a href="#user" className="text-gray-800 ml-4">
            <PersonOutline color="#000000" height="24px" width="24px" />
          </a>
          <a href="#settings" className="text-gray-800 ml-2">
            <SettingsOutline color="#000000" height="24px" width="24px" />
          </a>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#E7F0DC] p-4">
          <ul className="flex flex-col space-y-5">
            <li>
              <a href="#beranda" className="block px-4 py-2 text-gray-800 hover:bg-[#C5D9A4] rounded">
                Beranda
              </a>
            </li>
            <li>
              <a
                href="#blog/artikel"
                className="block px-4 py-2 text-gray-800 hover:bg-[#C5D9A4] rounded"
                onClick={(e) => {
                  e.preventDefault();
                  setIsDropdownOpen(!isDropdownOpen);
                }}
              >
                Blog/Artikel
              </a>
              {isDropdownOpen && (
                <ul className="mt-2 space-y-2">
                  <li>
                    <a
                      href="#Tips-Perawatan-Tanaman"
                      className="block px-4 py-2 text-gray-800  hover:bg-[#C5D9A4]  rounded"
                      onClick={closeDropdown}
                    >
                      Tips Perawatan Tanaman
                    </a>
                  </li>
                  <li>
                    <a
                      href="#Artikel-Penyakit-Tanaman"
                      className="block px-4 py-2 text-gray-800  hover:bg-[#C5D9A4] rounded"
                      onClick={closeDropdown}
                    >
                      Artikel Penyakit dan Hama
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <a href="#perawatan" className="block px-4 py-2 text-gray-800 hover:bg-[#C5D9A4] rounded">
                Perawatan
              </a>
            </li>
            <li>
              <a href="#tentangkami" className="block px-4 py-2 text-gray-800 hover:bg-[#C5D9A4] rounded">
                Tentang Kami
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
