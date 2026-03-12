import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import DashboardHeader from "@/components/DashboardHeader";
import DashboardFooter from "@/components/DashboardFooter";
import SystemStatusPanel from "@/components/SystemStatusPanel";
import VehicleMonitoringPanel from "@/components/VehicleMonitoringPanel";
import SensorPanel from "@/components/SensorPanel";
import AccidentAlertPanel from "@/components/AccidentAlertPanel";
import EmergencyNotificationPanel from "@/components/EmergencyNotificationPanel";
import AccidentMap from "@/components/AccidentMap";
import EmergencyResponseStatus from "@/components/EmergencyResponseStatus";

const ACCIDENT_LAT = 11.1271;
const ACCIDENT_LNG = 78.6569;

const Index = () => {
  const [sensorData, setSensorData] = useState({ x: 0.12, y: 9.81, z: 0.05 });
  const [isAccident, setIsAccident] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAccident) {
        setSensorData({
          x: 0.1 + Math.random() * 0.3 - 0.15,
          y: 9.78 + Math.random() * 0.1,
          z: 0.05 + Math.random() * 0.2 - 0.1,
        });
      }
    }, 500);
    return () => clearInterval(interval);
  }, [isAccident]);

  const simulateAccident = useCallback(() => {
    setSensorData({ x: 12.5, y: 2.1, z: 15.8 });
    setIsAccident(true);
  }, []);

  const resetSystem = useCallback(() => {
    setIsAccident(false);
    setSensorData({ x: 0.12, y: 9.81, z: 0.05 });
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <DashboardHeader />

      <main className="flex-1 container mx-auto px-4 py-6">
        {/* Controls */}
        <div className="flex justify-end gap-2 mb-6">
          <button
            onClick={simulateAccident}
            className="px-4 py-2 rounded-lg text-sm font-medium bg-stimulate text-stimulate-foreground hover:bg-stimulate/90 transition-colors shadow-sm"
          >
            Simulate Accident
          </button>
          <button
            onClick={resetSystem}
            className="px-4 py-2 rounded-lg text-sm font-medium bg-secondary text-secondary-foreground border border-border hover:bg-secondary/80 transition-colors"
          >
            Reset System
          </button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="space-y-6"
        >
          {/* Accident Alert */}
          <AccidentAlertPanel isAccident={isAccident} lat={ACCIDENT_LAT} lng={ACCIDENT_LNG} />

          {/* Top row */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <SystemStatusPanel isAccident={isAccident} />
            <VehicleMonitoringPanel />
            <SensorPanel x={sensorData.x} y={sensorData.y} z={sensorData.z} />
          </div>

          {/* Middle row */}
          <div className="grid gap-6 lg:grid-cols-2">
            <AccidentMap lat={ACCIDENT_LAT} lng={ACCIDENT_LNG} isAccident={isAccident} />
            <EmergencyNotificationPanel isAccident={isAccident} lat={ACCIDENT_LAT} lng={ACCIDENT_LNG} />
          </div>

          {/* Response status */}
          <EmergencyResponseStatus isAccident={isAccident} />
        </motion.div>
      </main>

      <DashboardFooter />
    </div>
  );
};

export default Index;
