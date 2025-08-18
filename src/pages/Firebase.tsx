import React, { useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  CircleMarker,
  Tooltip,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Firebase = () => {
  const [employees, setEmployees] = useState(0);
  const [companies, setCompanies] = useState(0);
  const [locations, setLocations] = useState<{ lat: number; lng: number }[]>([]);

  // Fake data generation every 24h
  useEffect(() => {
    generateFakeData();
    const interval = setInterval(generateFakeData, 24 * 60 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const generateFakeData = () => {
    setEmployees(Math.floor(Math.random() * 500) + 100); // 100–600 employees
    setCompanies(Math.floor(Math.random() * 50) + 10); // 10–60 companies

    const newLocations = Array.from({ length: 20 }, () => ({
      lat: Math.random() * 180 - 90,
      lng: Math.random() * 360 - 180,
    }));
    setLocations(newLocations);
  };

  return (
    <div className="min-h-screen bg-[#f9f9f9] flex flex-col items-center justify-center py-12 px-6">
      {/* Title */}
      <h1 className="text-4xl font-extrabold mb-10 text-[#006b99]">
        Dirac Company
      </h1>

      {/* Counters */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 w-full max-w-4xl">
        <div className="bg-[#006b99] text-white shadow-lg rounded-2xl p-6 text-center">
          <h2 className="text-xl font-semibold">Employees signed in today</h2>
          <p className="text-5xl font-bold mt-4">{employees}</p>
          <p className="text-sm mt-2 text-[#ffd400]">From mobile sign-ins</p>
        </div>

        <div className="bg-[#ffd400] text-[#003366] shadow-lg rounded-2xl p-6 text-center">
          <h2 className="text-xl font-semibold">Companies today</h2>
          <p className="text-5xl font-bold mt-4">{companies}</p>
          <p className="text-sm mt-2">Unique company logins</p>
        </div>
      </div>

      {/* Interactive Map */}
      <div className="w-full max-w-6xl h-[500px] rounded-xl overflow-hidden shadow-lg">
        <MapContainer
          center={[20, 0]}
          zoom={2}
          scrollWheelZoom={true}
          className="h-full w-full"
        >
          {/* ✅ FIXED TileLayer typing issue */}
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution={
              '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }
          />

          {/* Location dots */}
          {locations.map((loc, i) => (
            <CircleMarker
              key={i}
              center={[loc.lat, loc.lng]}
              radius={6}
              pathOptions={{
                color: "#ffd400",
                fillColor: "#006b99",
                fillOpacity: 0.9,
              }}
            >
              <Tooltip>
                📍 Location {i + 1} <br /> Lat: {loc.lat.toFixed(2)}, Lng:{" "}
                {loc.lng.toFixed(2)}
              </Tooltip>
            </CircleMarker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Firebase;
