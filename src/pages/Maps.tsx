import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
} from "@react-google-maps/api";
import { mapData } from "../lib/mapData";

const fawryBlueMarker = {
  path: "M12 2C8 2 5 5 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-4-3-7-7-7z", // شكل pin
  fillColor: "#006b99",
  fillOpacity: 1,
  strokeWeight: 1,
  strokeColor: "#003366",
  scale: .5,
};
const containerStyle = {
  width: "100%",
  height: "500px",
};

// Default center (Cairo)
const defaultCenter = { lat: 30.0444, lng: 31.2357 };

// Governorates (lat/lng تقريبية + zoom level)
const governorates = [
  { name: "Cairo", lat: 30.0444, lng: 31.2357, zoom: 11 },
  { name: "Alexandria", lat: 31.2001, lng: 29.9187, zoom: 11 },
  { name: "Luxor", lat: 25.6872, lng: 32.6396, zoom: 12 },
  { name: "Aswan", lat: 24.0889, lng: 32.8998, zoom: 12 },
];

const randomOffset = (range: number) => (Math.random() - 0.5) * range;

// Expand json points into locations
const locations = mapData.flatMap((item, index) =>
  Array.from({ length: item.Points }, (_, i) => ({
    id: `${index}-${i}`,
    lat: item.Latitude + randomOffset(0.01),
    lng: item.Longitude + randomOffset(0.01),
    title: `Point ${i + 1} near (${item.Latitude}, ${item.Longitude})`,
  }))
);

// Helper: get nearest governorate from user coords
const getNearestGovernorate = (lat: number, lng: number) => {
  let nearest = governorates[0];
  let minDist = Infinity;

  governorates.forEach((gov) => {
    const dist = Math.sqrt(
      Math.pow(lat - gov.lat, 2) + Math.pow(lng - gov.lng, 2)
    );
    if (dist < minDist) {
      minDist = dist;
      nearest = gov;
    }
  });

  return nearest;
};

const MyMap = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_API_KEY,
  });

  const [mapCenter, setMapCenter] = useState(defaultCenter);
  const [mapZoom, setMapZoom] = useState(7);

  // Get user location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          const nearestGov = getNearestGovernorate(latitude, longitude);

          // Update map to zoom on nearest governorate
          setMapCenter({ lat: nearestGov.lat, lng: nearestGov.lng });
          setMapZoom(nearestGov.zoom);
        },
        (err) => {
          console.error("Error getting location:", err);
          // fallback Cairo
          setMapCenter(defaultCenter);
          setMapZoom(10);
        }
      );
    }
  }, []);

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
          <h2 className="text-xl font-semibold">
           Today's Employee Sign-Ins
          </h2>
          <p className="text-5xl font-bold mt-4">{500}</p>
        </div>

        <div className="bg-[#ffd400] text-[#003366] shadow-lg rounded-2xl p-6 text-center">
          <h2 className="text-xl font-semibold">
            Live Clients Count
          </h2>
          <p className="text-5xl font-bold mt-4">{521}</p>
        </div>
      </div>

      {/* Google Map */}
      
      <GoogleMap
        mapContainerStyle={containerStyle}
          mapContainerClassName="map-curved"

        center={mapCenter}
        zoom={mapZoom}
        options={{
          minZoom: 6,
          maxZoom: 14,
          gestureHandling: "greedy",
        }}
      >
        {/* Add markers */}
        {locations.map((loc) => (
          <Marker
            key={loc.id}
            position={{ lat: loc.lat, lng: loc.lng }}
            title={loc.title}
            icon={fawryBlueMarker}

          />
        ))}
      </GoogleMap>
    </div>
  );
};

export default MyMap;
