import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import LocationModal from "./components/LocationModal";

function App() {
  const [showLocationModal, setShowLocationModal] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

  useEffect(() => {
    const savedLocation = localStorage.getItem("userLocation");
    if (!savedLocation) {
      setShowLocationModal(true);
    } else {
      setSelectedLocation(savedLocation);
    }
  }, []);

  const handleLocationSelect = (location: string) => {
    setSelectedLocation(location);
    localStorage.setItem("userLocation", location);
  };

  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        <Navbar
          selectedLocation={selectedLocation}
          onLocationClick={() => setShowLocationModal(true)}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
        <LocationModal
          isOpen={showLocationModal}
          onClose={() => setShowLocationModal(false)}
          onSelectLocation={handleLocationSelect}
        />
      </div>
    </Router>
  );
}

export default App;
