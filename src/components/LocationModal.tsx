import React, { useState, useEffect } from "react";
import { MapPin, Search, X } from "lucide-react";
import { Loader } from "@googlemaps/js-api-loader";

interface LocationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectLocation: (locationData: LocationData) => void;
}

interface LocationData {
  city: string;
  state: string;
  latitude: number;
  longitude: number;
  nearbyMajorCity?: string;
}

interface City {
  name: string;
  image: string;
  state: string;
  latitude: number;
  longitude: number;
}

const LocationModal: React.FC<LocationModalProps> = ({
  isOpen,
  onClose,
  onSelectLocation,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [locationError, setLocationError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const popularCities: City[] = [
    {
      name: "Mumbai",
      state: "Maharashtra",
      latitude: 19.076,
      longitude: 72.8777,
      image:
        "https://images.unsplash.com/photo-1566552881560-0be862a7c445?auto=format&fit=crop&q=80&w=200&h=120",
    },
    {
      name: "Delhi",
      state: "Delhi",
      latitude: 28.6139,
      longitude: 77.209,
      image:
        "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&q=80&w=200&h=120",
    },
    {
      name: "Bangalore",
      state: "Karnataka",
      latitude: 12.9716,
      longitude: 77.5946,
      image:
        "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&q=80&w=200&h=120",
    },
    {
      name: "Dehradun",
      state: "Uttarakhand",
      latitude: 30.3165,
      longitude: 78.0322,
      image:
        "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&q=80&w=200&h=120",
    },
    {
      name: "Chennai",
      state: "Tamil Nadu",
      latitude: 13.0827,
      longitude: 80.2707,
      image:
        "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&q=80&w=200&h=120",
    },
    {
      name: "Kolkata",
      state: "West Bengal",
      latitude: 22.5726,
      longitude: 88.3639,
      image:
        "https://images.unsplash.com/photo-1536421469767-80559bb6f5e1?auto=format&fit=crop&q=80&w=200&h=120",
    },
  ];

  const calculateDistance = (
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number,
  ): number => {
    const R = 6371;
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  const findNearestMajorCity = (
    latitude: number,
    longitude: number,
  ): string | undefined => {
    const majorCities = popularCities.filter((city) =>
      ["Delhi", "Mumbai", "Bangalore", "Chennai", "Kolkata"].includes(
        city.name,
      ),
    );

    let nearestCity = majorCities[0];
    let shortestDistance = calculateDistance(
      latitude,
      longitude,
      majorCities[0].latitude,
      majorCities[0].longitude,
    );

    majorCities.forEach((city) => {
      const distance = calculateDistance(
        latitude,
        longitude,
        city.latitude,
        city.longitude,
      );
      if (distance < shortestDistance) {
        shortestDistance = distance;
        nearestCity = city;
      }
    });

    return shortestDistance <= 300 ? nearestCity.name : undefined;
  };

  const handleDetectLocation = async () => {
    setIsLoading(true);
    setLocationError(null);

    try {
      const loader = new Loader({
        apiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
        version: "weekly",
        libraries: ["places", "geocoding"],
      });

      const { Geocoder } = await loader.importLibrary("geocoding");

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            try {
              const geocoder = new Geocoder();
              const response = await geocoder.geocode({
                location: {
                  lat: position.coords.latitude,
                  lng: position.coords.longitude,
                },
              });

              if (response.results[0]) {
                const result = response.results[0];
                let city = "",
                  state = "";

                result.address_components.forEach((component) => {
                  if (component.types.includes("locality")) {
                    city = component.long_name;
                  } else if (
                    component.types.includes("administrative_area_level_1")
                  ) {
                    state = component.long_name;
                  }
                });

                const nearbyMajorCity = findNearestMajorCity(
                  position.coords.latitude,
                  position.coords.longitude,
                );

                const locationData: LocationData = {
                  city,
                  state,
                  latitude: position.coords.latitude,
                  longitude: position.coords.longitude,
                  nearbyMajorCity,
                };

                onSelectLocation(locationData);
                onClose();
              }
            } catch (error) {
              setLocationError("Could not determine your location");
            }
          },
          (error) => {
            switch (error.code) {
              case error.PERMISSION_DENIED:
                setLocationError(
                  "Please enable location access in your browser",
                );
                break;
              case error.POSITION_UNAVAILABLE:
                setLocationError("Location information is unavailable");
                break;
              case error.TIMEOUT:
                setLocationError("Location request timed out");
                break;
              default:
                setLocationError("An unknown error occurred");
            }
          },
        );
      } else {
        setLocationError("Geolocation is not supported by your browser");
      }
    } catch (error) {
      setLocationError("Error loading Google Maps services");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const filteredCities = popularCities.filter(
    (city) =>
      city.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      city.state.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
      <div className="bg-[#1A1A1A] rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl transform transition-all">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white">
              Choose your location
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white p-2 hover:bg-[#242424] rounded-lg transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          <div className="relative mb-8 group">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-[#FF0033] transition-colors"
              size={20}
            />
            <input
              type="text"
              placeholder="Search for your city"
              className="w-full pl-10 pr-4 py-3 bg-[#242424] border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#FF0033] focus:ring-1 focus:ring-[#FF0033] transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <button
            onClick={handleDetectLocation}
            disabled={isLoading}
            className="w-full mb-8 flex items-center justify-center space-x-2 py-3 px-4 bg-[#242424] hover:bg-[#333333] rounded-lg border border-gray-700 transition-all hover:border-[#FF0033] group disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <MapPin
              size={20}
              className="text-[#FF0033] group-hover:scale-110 transition-transform"
            />
            <span className="text-white">
              {isLoading ? "Detecting location..." : "Detect my location"}
            </span>
          </button>

          {locationError && (
            <div className="mb-4 p-4 bg-red-900/50 border border-red-500 rounded-lg text-red-200">
              {locationError}
            </div>
          )}

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Popular Cities
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {filteredCities.map((city) => (
                <button
                  key={city.name}
                  onClick={() => {
                    onSelectLocation({
                      city: city.name,
                      state: city.state,
                      latitude: city.latitude,
                      longitude: city.longitude,
                      nearbyMajorCity: findNearestMajorCity(
                        city.latitude,
                        city.longitude,
                      ),
                    });
                    onClose();
                  }}
                  className="group relative overflow-hidden rounded-lg aspect-[5/3] focus:outline-none transform hover:scale-105 transition-all"
                >
                  <img
                    src={city.image}
                    alt={city.name}
                    className="w-full h-full object-cover transition-transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex items-end p-3">
                    <div>
                      <span className="text-white font-medium block">
                        {city.name}
                      </span>
                      <span className="text-gray-300 text-sm">
                        {city.state}
                      </span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationModal;
