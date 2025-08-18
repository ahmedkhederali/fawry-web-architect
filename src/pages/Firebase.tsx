import React, { useState, useEffect } from "react";
import { Globe } from "lucide-react";

const Firebase = () => {
  const [employees, setEmployees] = useState(0);
  const [companies, setCompanies] = useState(0);
  const [locations, setLocations] = useState<{ lat: number; lng: number }[]>([]);

  // Fake data generation every 24h
  useEffect(() => {
    generateFakeData();
    const interval = setInterval(generateFakeData, 24 * 60 * 60 * 1000); // every 24h
    return () => clearInterval(interval);
  }, []);

  const generateFakeData = () => {
    setEmployees(Math.floor(Math.random() * 500) + 100); // 100-600 employees
    setCompanies(Math.floor(Math.random() * 50) + 10); // 10-60 companies

    // generate 20 random locations
    const newLocations = Array.from({ length: 20 }, () => ({
      lat: Math.random() * 180 - 90, // -90 to 90
      lng: Math.random() * 360 - 180, // -180 to 180
    }));
    setLocations(newLocations);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-12 px-4">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Dirac Company</h1>

      {/* Counters */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 w-full max-w-4xl">
        <div className="bg-white shadow-lg rounded-2xl p-6 text-center">
          <h2 className="text-xl font-semibold text-gray-700">Employees signed in today</h2>
          <p className="text-4xl font-bold text-blue-600 mt-4">{employees}</p>
          <p className="text-sm text-gray-500 mt-2">From mobile sign-ins</p>
        </div>

        <div className="bg-white shadow-lg rounded-2xl p-6 text-center">
          <h2 className="text-xl font-semibold text-gray-700">Companies today</h2>
          <p className="text-4xl font-bold text-green-600 mt-4">{companies}</p>
          <p className="text-sm text-gray-500 mt-2">Unique company logins</p>
        </div>
      </div>

      {/* World Map */}
      <div className="relative w-full max-w-5xl">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg"
          alt="World Map"
          className="w-full rounded-lg shadow-md"
        />

        {/* Location Dots */}
        {locations.map((loc, index) => {
          // convert lat/lng into % positions (rough projection)
          const top = 50 - (loc.lat / 180) * 100;
          const left = 50 + (loc.lng / 360) * 100;

          return (
            <span
              key={index}
              className="absolute w-3 h-3 bg-red-500 rounded-full animate-pulse border border-white"
              style={{ top: `${top}%`, left: `${left}%`, transform: "translate(-50%, -50%)" }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Firebase;
