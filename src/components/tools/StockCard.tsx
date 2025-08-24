import { Card } from "@/components/ui/card";
import { TrendingUp, TrendingDown, DollarSign, BarChart3 } from "lucide-react";

interface StockData {
  symbol: string;
  price: number;
  change: number;
  changePercent: number;
  volume: string;
}

interface StockCardProps {
  data: StockData;
}

export const StockCard = ({ data }: StockCardProps) => {
  const isPositive = data.change >= 0;
  const TrendIcon = isPositive ? TrendingUp : TrendingDown;
  const trendColor = isPositive ? "text-green-500" : "text-red-500";
  const trendBg = isPositive ? "bg-green-500/10 border-green-500/20" : "bg-red-500/10 border-red-500/20";

  return (
    <Card className="p-6 bg-gradient-card border-border shadow-card-ai hover:scale-[1.02] transition-ai">
      <div className="flex items-start justify-between">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-ai-primary" />
            <h3 className="text-lg font-semibold text-foreground">Stock Price</h3>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold text-foreground">{data.symbol}</span>
              <span className="text-3xl font-bold text-foreground">${data.price.toFixed(2)}</span>
            </div>
            
            <div className="flex items-center gap-2">
              <div className={`flex items-center gap-1 px-3 py-1 rounded-full ${trendBg}`}>
                <TrendIcon className={`w-4 h-4 ${trendColor}`} />
                <span className={`font-medium ${trendColor}`}>
                  {isPositive ? '+' : ''}{data.change.toFixed(2)} ({isPositive ? '+' : ''}{data.changePercent.toFixed(2)}%)
                </span>
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-muted-foreground">
              <BarChart3 className="w-4 h-4" />
              <span>Volume: {data.volume}</span>
            </div>
          </div>
        </div>
        
        <div className="p-3 rounded-full bg-ai-accent/10 border border-ai-accent/20">
          <TrendIcon className={`w-8 h-8 ${trendColor}`} />
        </div>
      </div>
    </Card>
  );
};