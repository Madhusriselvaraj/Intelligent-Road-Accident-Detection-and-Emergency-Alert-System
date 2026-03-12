import { Shield, MapPin, Siren } from "lucide-react";

const DashboardHeader = () => (
  <header className="bg-card border-b border-border shadow-sm">
    <div className="container mx-auto px-4 py-6 text-center">
      <h1 className="text-2xl md:text-3xl font-bold text-foreground">
        Intelligent Road Accident Detection and Emergency Alert System
      </h1>
      <p className="text-muted-foreground mt-2 text-sm md:text-base">
        Real-Time Accident Monitoring and Emergency Alert Dashboard
      </p>
      <div className="flex items-center justify-center gap-8 mt-4">
        <div className="flex flex-col items-center gap-1 text-primary">
          <Shield size={28} />
          <span className="text-xs text-muted-foreground">Vehicle Safety</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-primary">
          <MapPin size={28} />
          <span className="text-xs text-muted-foreground">GPS Tracking</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-primary">
          <Siren size={28} />
          <span className="text-xs text-muted-foreground">Emergency Response</span>
        </div>
      </div>
    </div>
  </header>
);

export default DashboardHeader;
