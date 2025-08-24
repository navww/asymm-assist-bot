import { Card } from "@/components/ui/card";
import { Cloud, Droplets, Wind, Thermometer } from "lucide-react";

interface WeatherData {
  location: string;
  temperature: number;
  condition: string;
  humidity: number;
  windSpeed: number;
  icon: string;
}

interface WeatherCardProps {
  data: WeatherData;
}

export const WeatherCard = ({ data }: WeatherCardProps) => {
  return (
    <Card className="p-6 bg-gradient-card border-border shadow-card-ai hover:scale-[1.02] transition-ai">
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Cloud className="w-5 h-5 text-ai-primary" />
            <h3 className="text-lg font-semibold text-foreground">Weather in {data.location}</h3>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Thermometer className="w-4 h-4 text-ai-secondary" />
              <span className="text-2xl font-bold text-foreground">{data.temperature}°C</span>
            </div>
            <span className="text-muted-foreground">{data.condition}</span>
          </div>
          
          <div className="flex gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Droplets className="w-3 h-3" />
              <span>{data.humidity}% humidity</span>
            </div>
            <div className="flex items-center gap-1">
              <Wind className="w-3 h-3" />
              <span>{data.windSpeed} km/h wind</span>
            </div>
          </div>
        </div>
        
        <div className="p-3 rounded-full bg-ai-primary/10 border border-ai-primary/20">
          <Cloud className="w-8 h-8 text-ai-primary" />
        </div>
      </div>
    </Card>
  );
};