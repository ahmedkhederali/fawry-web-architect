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

// Cairo base coords
const cairo = { lat: 30.0444, lng: 31.2357 };

// Helper: generate random offset (small distance)
const randomOffset = (range: number) => (Math.random() - 0.5) * range;

// Generate 50 points near Cairo
const cairoLocations = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  lat: cairo.lat + randomOffset(0.1),  // ~11km range
  lng: cairo.lng + randomOffset(0.1),
  title: `Cairo Location ${i + 1}`,
}));

// Some base points in Egypt (Alexandria, Luxor, Aswan, Sharm El Sheikh)
const egyptBases = [
  { lat: 31.2001, lng: 29.9187, title: "Alexandria" },
  { lat: 25.6872, lng: 32.6396, title: "Luxor" },
  { lat: 24.0889, lng: 32.8998, title: "Aswan" },
];

// Generate 50 random points distributed over Egypt bases
const egyptLocations = Array.from({ length: 50 }, (_, i) => {
  const base = egyptBases[Math.floor(Math.random() * egyptBases.length)];
  return {
    id: i + 51,
    lat: base.lat + randomOffset(0.2),  // wider spread
    lng: base.lng + randomOffset(0.2),
    title: `${base.title} Location ${i + 51}`,
  };
});

// Combine all
const locations = [...cairoLocations, ...egyptLocations];

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
          <h2 className="text-xl font-semibold">Today's Employee Sign-Ins Live Clients Count</h2>
          <p className="text-5xl font-bold mt-4">{500}</p>
          {/* <p className="text-sm mt-2 text-[#ffd400]">From mobile sign-ins</p> */}
        </div>

        <div className="bg-[#ffd400] text-[#003366] shadow-lg rounded-2xl p-6 text-center">
          <h2 className="text-xl font-semibold"> Companies use fawry business HR</h2>
          <p className="text-5xl font-bold mt-4">{22}</p>
          {/* <p className="text-sm mt-2">Unique company logins</p> */}
        </div>
      </div>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={7}
        options={{
          minZoom: 5,
          maxZoom: 8,
          gestureHandling: "greedy",
        }}
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
