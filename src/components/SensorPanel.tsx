import { motion } from "framer-motion";
import { Activity, Zap, Gauge } from "lucide-react";

interface SensorPanelProps {
  isAccident?: boolean;
  x?: number;
  y?: number;
  z?: number;
}

const SensorPanel = ({ isAccident = false, x = 0, y = 0, z = 0 }: SensorPanelProps) => {
  const sensors = [
    { label: "X-Axis Acceleration", value: x.toFixed(2), status: true, icon: Activity },
    { label: "Y-Axis Acceleration", value: y.toFixed(2), status: true, icon: Gauge },
    { label: "Z-Axis Acceleration", value: z.toFixed(2), status: true, icon: Zap },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-lg border border-border bg-card p-6 shadow-sm"
    >
      <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
        Sensor Data
      </h2>
      <div className="grid grid-cols-1 gap-3">
        {sensors.map((sensor) => {
          const Icon = sensor.icon;
          return (
            <motion.div
              key={sensor.label}
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-3 p-3 rounded-lg border border-border/50 hover:border-border transition-colors"
            >
              <Icon
                size={18}
                className={sensor.status ? "text-primary" : "text-muted-foreground"}
              />
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">
                  {sensor.label}
                </p>
                <p className="text-xs text-muted-foreground">
                  {sensor.value} m/s²
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm font-mono font-semibold text-foreground">
                  {sensor.value}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default SensorPanel;
