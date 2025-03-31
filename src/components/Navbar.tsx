import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Search, Globe, Menu, X } from "lucide-react";

interface LocationData {
  city: string;
  state: string;
  latitude: number;
  longitude: number;
  nearbyMajorCity?: string;
}

interface NavbarProps {
  selectedLocation: LocationData | null;
  onLocationClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
  selectedLocation,
  onLocationClick,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const displayLocation = selectedLocation
    ? `${selectedLocation.city}${selectedLocation.nearbyMajorCity ? ` & ${selectedLocation.nearbyMajorCity}` : ""}`
    : "Select Location";

  return (
    <nav className="bg-[#1A1A1A] fixed w-full z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              to="/"
              className="text-3xl font-bold text-white tracking-tight hover:text-[#FF0033] transition-colors"
            >
              BOOKWISE
            </Link>
          </div>

          <div className="hidden md:flex items-center flex-1 mx-8">
            <div className="relative flex-1 max-w-2xl group">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-[#FF0033] transition-colors"
                size={20}
              />
              <input
                type="text"
                placeholder="Search for events, venues, or artists"
                className="w-full pl-10 pr-4 py-3 bg-[#242424] border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#FF0033] focus:ring-1 focus:ring-[#FF0033] transition-all"
              />
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <button
              onClick={onLocationClick}
              className="flex items-center space-x-2 text-gray-300 hover:text-white group px-3 py-2 rounded-lg hover:bg-[#242424] transition-all"
            >
              <MapPin
                size={20}
                className="text-[#FF0033] group-hover:scale-110 transition-transform"
              />
              <span className="text-sm font-medium">{displayLocation}</span>
            </button>

            <button className="text-gray-300 hover:text-white p-2 rounded-lg hover:bg-[#242424] transition-all">
              <Globe
                size={20}
                className="hover:rotate-180 transition-transform duration-500"
              />
            </button>

            <Link
              to="/login"
              className="px-6 py-2.5 text-sm font-semibold text-white bg-[#FF0033] rounded-lg hover:bg-[#cc0029] transform hover:scale-105 transition-all"
            >
              Sign In
            </Link>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-300 hover:text-white p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#1A1A1A] border-t border-gray-800 py-4">
            <div className="px-2 space-y-4">
              {/* Mobile Search */}
              <div className="relative">
                <Search
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Search events..."
                  className="w-full pl-10 pr-4 py-2 bg-[#242424] border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#FF0033]"
                />
              </div>

              <button
                onClick={() => {
                  onLocationClick();
                  setIsMobileMenuOpen(false);
                }}
                className="flex items-center space-x-2 w-full px-4 py-2 text-gray-300 hover:text-white hover:bg-[#242424] rounded-lg transition-colors"
              >
                <MapPin size={20} className="text-[#FF0033]" />
                <span className="text-sm font-medium">{displayLocation}</span>
              </button>

              <button className="flex items-center space-x-2 w-full px-4 py-2 text-gray-300 hover:text-white hover:bg-[#242424] rounded-lg transition-colors">
                <Globe size={20} />
                <span className="text-sm font-medium">Language</span>
              </button>

              <Link
                to="/login"
                className="block text-center px-4 py-2 text-sm font-medium text-white bg-[#FF0033] rounded-lg hover:bg-[#cc0029] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sign In
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
