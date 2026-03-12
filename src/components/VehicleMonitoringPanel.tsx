import { Car, User, Settings } from "lucide-react";

const VehicleMonitoringPanel = () => (
  <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
    <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">Vehicle Monitoring</h2>
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Car size={16} className="text-muted-foreground" />
          <span className="text-sm text-foreground">Vehicle ID</span>
        </div>
        <span className="text-sm font-mono font-medium text-foreground">TN-01-AB-1234</span>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <User size={16} className="text-muted-foreground" />
          <span className="text-sm text-foreground">Driver Status</span>
        </div>
        <span className="text-sm font-medium text-success">Active</span>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Settings size={16} className="text-muted-foreground" />
          <span className="text-sm text-foreground">Monitoring Mode</span>
        </div>
        <span className="text-sm font-medium text-foreground">Automatic Accident Detection</span>
      </div>
    </div>
  </div>
);

export default VehicleMonitoringPanel;
