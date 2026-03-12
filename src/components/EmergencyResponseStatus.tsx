import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Users, Siren, Shield } from "lucide-react";

interface EmergencyResponseStatusProps {
  isAccident: boolean;
}

const EmergencyResponseStatus = ({ isAccident }: EmergencyResponseStatusProps) => {
  const responses = [
    { label: "Family Member Notified", icon: Users },
    { label: "Ambulance Dispatched", icon: Siren },
    { label: "Police Station Alerted", icon: Shield },
  ];

  return (
    <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
      <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
        Emergency Response Status
      </h2>
      <div className="space-y-3">
        {responses.map((r, i) => (
          <div key={r.label} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <r.icon size={16} className="text-muted-foreground" />
              <span className="text-sm text-foreground">{r.label}</span>
            </div>
            <AnimatePresence>
              {isAccident ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.3 }}
                  className="flex items-center gap-1"
                >
                  <CheckCircle size={16} className="text-success" />
                  <span className="text-xs font-medium text-success">Done</span>
                </motion.div>
              ) : (
                <span className="text-xs text-muted-foreground">Standby</span>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmergencyResponseStatus;
