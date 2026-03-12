import { Activity, Satellite, Radio, Wifi } from "lucide-react";
import { motion } from "framer-motion";

interface SystemStatusPanelProps {
  isAccident: boolean;
}

const SystemStatusPanel = ({ isAccident }: SystemStatusPanelProps) => {
  const items = [
    { label: "System Status", value: isAccident ? "⚠ Accident Detected" : "Monitoring", icon: Activity },
    { label: "Sensor Status", value: "Active", icon: Radio },
    { label: "GPS Status", value: "Tracking", icon: Satellite },
    { label: "GSM Communication", value: "Connected", icon: Wifi },
  ];

  return (
    <div className={`rounded-lg border bg-card p-6 shadow-sm ${isAccident ? "border-accent" : "border-border"}`}>
      <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">System Status</h2>
      <div className="space-y-3">
        {items.map((item) => (
          <div key={item.label} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <item.icon size={16} className="text-muted-foreground" />
              <span className="text-sm text-foreground">{item.label}</span>
            </div>
            <span className={`text-sm font-medium ${
              item.label === "System Status" && isAccident ? "text-accent" : "text-success"
            }`}>
              {item.value}
            </span>
          </div>
        ))}
      </div>
      {isAccident && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-4 p-3 rounded-md bg-accent/10 border border-accent/30 text-center"
        >
          <span className="text-accent font-semibold text-sm">⚠ Accident Detected — Emergency Protocol Active</span>
        </motion.div>
      )}
    </div>
  );
};

export default SystemStatusPanel;
