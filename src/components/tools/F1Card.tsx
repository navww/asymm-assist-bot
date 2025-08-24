import { Card } from "@/components/ui/card";
import { Car, Calendar, MapPin, Trophy } from "lucide-react";

interface F1Data {
  raceName: string;
  date: string;
  circuit: string;
  location: string;
  round: number;
}

interface F1CardProps {
  data: F1Data;
}

export const F1Card = ({ data }: F1CardProps) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <Card className="p-6 bg-gradient-card border-border shadow-card-ai hover:scale-[1.02] transition-ai">
      <div className="flex items-start justify-between">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Car className="w-5 h-5 text-ai-primary" />
            <h3 className="text-lg font-semibold text-foreground">Formula 1 Race</h3>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Trophy className="w-4 h-4 text-ai-secondary" />
              <span className="text-xl font-bold text-foreground">{data.raceName}</span>
            </div>
            
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="w-4 h-4" />
              <span>{formatDate(data.date)}</span>
            </div>
            
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>{data.circuit}, {data.location}</span>
            </div>
            
            <div className="mt-2 px-3 py-1 bg-ai-primary/10 border border-ai-primary/20 rounded-full inline-flex items-center gap-1 text-sm">
              <span className="text-ai-primary font-medium">Round {data.round}</span>
            </div>
          </div>
        </div>
        
        <div className="p-3 rounded-full bg-ai-secondary/10 border border-ai-secondary/20">
          <Car className="w-8 h-8 text-ai-secondary" />
        </div>
      </div>
    </Card>
  );
};