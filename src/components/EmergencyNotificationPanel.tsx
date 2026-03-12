import { motion, AnimatePresence } from "framer-motion";
import { Users, Siren, Shield, MessageSquare } from "lucide-react";

interface EmergencyNotificationPanelProps {
  isAccident: boolean;
  lat: number;
  lng: number;
}

const EmergencyNotificationPanel = ({ isAccident, lat, lng }: EmergencyNotificationPanelProps) => {
  const mapUrl = `https://maps.google.com/?q=${lat},${lng}`;

  const notifications = [
    {
      title: "Family Member Alert",
      icon: Users,
      color: "text-primary",
      bgColor: "bg-primary/10",
      message: `Emergency Alert: A possible accident has been detected involving your family member. Location: ${mapUrl} Please respond immediately.`,
    },
    {
      title: "Ambulance Service Alert",
      icon: Siren,
      color: "text-accent",
      bgColor: "bg-accent/10",
      message: `Accident Alert: A vehicle accident has been detected at ${mapUrl} Immediate medical assistance is required.`,
    },
    {
      title: "Police Station Alert",
      icon: Shield,
      color: "text-warning",
      bgColor: "bg-warning/10",
      message: `Road Accident Notification: Accident detected at coordinates ${lat}, ${lng}. Emergency response team may be required.`,
    },
  ];

  return (
    <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
      <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
        Emergency Notifications
      </h2>
      <AnimatePresence>
        {isAccident ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-4"
          >
            {notifications.map((n, i) => (
              <motion.div
                key={n.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2 }}
                className="border border-alert rounded-lg p-4"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className={`p-1.5 rounded-md ${n.bgColor}`}>
                    <n.icon size={16} className={n.color} />
                  </div>
                  <h3 className="text-sm font-semibold text-alert">{n.title}</h3>
                </div>
                <div className="flex items-start gap-2 bg-success/10 rounded-md p-3">
                  <MessageSquare size={14} className="text-success mt-0.5 shrink-0" />
                  <p className="text-xs text-success leading-relaxed">{n.message}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <p className="text-sm text-muted-foreground text-center py-8">
            No emergency notifications. System is monitoring.
          </p>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EmergencyNotificationPanel;
