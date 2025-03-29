import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Globe, Search, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link
            to="/"
            className="text-2xl font-bold text-white flex items-center"
          >
            BOOKWISE
          </Link>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="hidden md:flex items-center justify-between flex-1 ml-8">
            <div className="flex items-center space-x-8">
              <Link
                to="/"
                className="text-white hover:text-[#FF0033] transition-colors"
              >
                Sports
              </Link>
              <Link
                to="/"
                className="text-white hover:text-[#FF0033] transition-colors"
              >
                Concerts
              </Link>
              <Link
                to="/"
                className="text-white hover:text-[#FF0033] transition-colors"
              >
                Theater
              </Link>
              <Link
                to="/"
                className="text-white hover:text-[#FF0033] transition-colors"
              >
                Conferences
              </Link>
              <Link
                to="/"
                className="text-white hover:text-[#FF0033] transition-colors"
              >
                Exhibitions
              </Link>
            </div>
            <div className="flex items-center space-x-6">
              <Search className="w-6 h-6 text-white cursor-pointer hover:text-[#FF0033] transition-colors" />
              <Globe className="w-6 h-6 text-white cursor-pointer hover:text-[#FF0033] transition-colors" />
              {location.pathname !== "/login" &&
                location.pathname !== "/signup" && (
                  <div className="flex items-center space-x-4">
                    <Link
                      to="/login"
                      className="text-white hover:text-[#FF0033] transition-colors"
                    >
                      Log In
                    </Link>
                    <Link
                      to="/signup"
                      className="bg-[#FF0033] text-white px-6 py-2 rounded-md hover:bg-[#cc0029] transition-colors"
                    >
                      Sign Up
                    </Link>
                  </div>
                )}
            </div>
          </div>
        </div>

        <div
          className={`md:hidden ${isMenuOpen ? "block" : "hidden"} mt-4 pb-4`}
        >
          <div className="flex flex-col space-y-4">
            <Link
              to="/"
              className="text-white hover:text-[#FF0033] transition-colors"
            >
              Sports
            </Link>
            <Link
              to="/"
              className="text-white hover:text-[#FF0033] transition-colors"
            >
              Concerts
            </Link>
            <Link
              to="/"
              className="text-white hover:text-[#FF0033] transition-colors"
            >
              Theater
            </Link>
            <Link
              to="/"
              className="text-white hover:text-[#FF0033] transition-colors"
            >
              Conferences
            </Link>
            <Link
              to="/"
              className="text-white hover:text-[#FF0033] transition-colors"
            >
              Exhibitions
            </Link>
            <div className="flex items-center space-x-4 pt-4 border-t border-gray-800">
              <Search className="w-6 h-6 text-white cursor-pointer" />
              <Globe className="w-6 h-6 text-white cursor-pointer" />
              {location.pathname !== "/login" &&
                location.pathname !== "/signup" && (
                  <div className="flex flex-col space-y-2">
                    <Link
                      to="/login"
                      className="text-white hover:text-[#FF0033] transition-colors"
                    >
                      Log In
                    </Link>
                    <Link
                      to="/signup"
                      className="bg-[#FF0033] text-white px-6 py-2 rounded-md text-center"
                    >
                      Sign Up
                    </Link>
                  </div>
                )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

