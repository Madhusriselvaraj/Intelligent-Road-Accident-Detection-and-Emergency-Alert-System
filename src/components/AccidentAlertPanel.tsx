import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle, Clock, MapPin, CheckCircle } from "lucide-react";

interface AccidentAlertPanelProps {
  isAccident: boolean;
  lat: number;
  lng: number;
}

const AccidentAlertPanel = ({ isAccident, lat, lng }: AccidentAlertPanelProps) => {
  const [accidentTime, setAccidentTime] = useState<Date | null>(null);

  useEffect(() => {
    if (isAccident && !accidentTime) {
      setAccidentTime(new Date());
    }
  }, [isAccident, accidentTime]);

  return (
    <AnimatePresence>
      {isAccident && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="rounded-lg border-2 border-alert bg-alert/5 p-6 shadow-lg alert-pulse"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-full bg-alert/10">
              <AlertTriangle size={32} className="text-alert" />
            </div>
            <div className="space-y-3 flex-1">
              <h2 className="text-xl font-bold text-alert">⚠ ACCIDENT DETECTED</h2>
              <div className="grid sm:grid-cols-2 gap-3 text-sm">
                <div className="flex items-center gap-2">
                  <Clock size={14} className="text-muted-foreground" />
                  <span className="text-muted-foreground">Time of Accident:</span>
                  <span className="font-medium text-foreground">
                    {accidentTime ? accidentTime.toLocaleTimeString() : "N/A"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={14} className="text-muted-foreground" />
                  <span className="text-muted-foreground">Latitude:</span>
                  <span className="font-mono font-medium text-foreground">{lat.toFixed(4)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-success" />
                  <span className="text-success font-medium">Emergency Alert Sent Successfully</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={14} className="text-muted-foreground" />
                  <span className="text-muted-foreground">Longitude:</span>
                  <span className="font-mono font-medium text-foreground">{lng.toFixed(4)}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AccidentAlertPanel;
