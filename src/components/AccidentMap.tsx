import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

interface AccidentMapProps {
  lat: number;
  lng: number;
  isAccident: boolean;
}

const AccidentMap = ({ lat, lng, isAccident }: AccidentMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<L.Map | null>(null);
  const markerRef = useRef<L.Marker | null>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    if (!mapInstance.current) {
      mapInstance.current = L.map(mapRef.current).setView([lat, lng], 13);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '© OpenStreetMap contributors',
      }).addTo(mapInstance.current);
    }

    if (markerRef.current) {
      markerRef.current.remove();
    }

    if (isAccident) {
      const icon = L.divIcon({
        className: "",
        html: `<div style="
          width: 20px; height: 20px; background: hsl(0 80% 55%);
          border-radius: 50%; border: 3px solid white;
          box-shadow: 0 0 15px hsl(0 80% 55% / 0.6);
        "></div>`,
        iconSize: [20, 20],
        iconAnchor: [10, 10],
      });
      markerRef.current = L.marker([lat, lng], { icon }).addTo(mapInstance.current);
      mapInstance.current.setView([lat, lng], 15);
    }

    return () => {};
  }, [lat, lng, isAccident]);

  useEffect(() => {
    return () => {
      mapInstance.current?.remove();
      mapInstance.current = null;
    };
  }, []);

  return (
    <div className="rounded-lg border border-border bg-card overflow-hidden shadow-sm">
      <div className="px-6 py-3 border-b border-border">
        <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
          Accident Location
        </h2>
        <p className="text-xs text-muted-foreground mt-1">
          Lat: {lat.toFixed(4)} · Lng: {lng.toFixed(4)}
        </p>
      </div>
      <div ref={mapRef} className="h-[350px] w-full" />
    </div>
  );
};

export default AccidentMap;
