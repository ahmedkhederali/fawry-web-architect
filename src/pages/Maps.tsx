import React, { useRef, useState } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
} from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "500px",
};

// initial center
const center = {
  lat: 30.0444, // Cairo
  lng: 31.2357,
};

// example locations
const locations = [
  { id: 1, lat: 30.0444, lng: 31.2357, title: "Cairo" },
  { id: 2, lat: 29.9753, lng: 31.1376, title: "Giza Pyramids" },
  { id: 3, lat: 31.2001, lng: 29.9187, title: "Alexandria" },
];

const MyMap = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;

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
          <p className="text-5xl font-bold mt-4">{500}</p>
          <p className="text-sm mt-2 text-[#ffd400]">From mobile sign-ins</p>
        </div>

        <div className="bg-[#ffd400] text-[#003366] shadow-lg rounded-2xl p-6 text-center">
          <h2 className="text-xl font-semibold">Companies today</h2>
          <p className="text-5xl font-bold mt-4">{22}</p>
          <p className="text-sm mt-2">Unique company logins</p>
        </div>
      </div>
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={7}
    >
      {/* Add markers */}
      {locations.map((loc) => (
        <Marker
          key={loc.id}
          position={{ lat: loc.lat, lng: loc.lng }}
          title={loc.title}
        />
      ))}
    </GoogleMap>
    </div>
  );
};

export default MyMap;
