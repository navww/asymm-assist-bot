import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, Bot, User, Cloud, Car, TrendingUp } from "lucide-react";
import { WeatherCard } from "./tools/WeatherCard";
import { F1Card } from "./tools/F1Card";
import { StockCard } from "./tools/StockCard";

interface Message {
  id: string;
  content: string;
  role: "user" | "assistant";
  timestamp: Date;
  toolCalls?: ToolCall[];
}

interface ToolCall {
  type: "weather" | "f1" | "stock";
  data: any;
}

export const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hello! I'm your AI assistant. I can help you get weather information, F1 race data, and stock prices. Try asking me something like 'What's the weather in New York?' or 'Show me the next F1 race'.",
      role: "assistant",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const simulateToolCall = (userMessage: string): ToolCall[] => {
    const message = userMessage.toLowerCase();
    const toolCalls: ToolCall[] = [];

    if (message.includes("weather") || message.includes("temperature")) {
      toolCalls.push({
        type: "weather",
        data: {
          location: "New York",
          temperature: 22,
          condition: "Partly Cloudy",
          humidity: 65,
          windSpeed: 12,
          icon: "partly-cloudy",
        },
      });
    }

    if (message.includes("f1") || message.includes("formula") || message.includes("race")) {
      toolCalls.push({
        type: "f1",
        data: {
          raceName: "Monaco Grand Prix",
          date: "2024-05-26",
          circuit: "Circuit de Monaco",
          location: "Monaco",
          round: 8,
        },
      });
    }

    if (message.includes("stock") || message.includes("price") || message.includes("aapl") || message.includes("tesla")) {
      toolCalls.push({
        type: "stock",
        data: {
          symbol: "AAPL",
          price: 175.43,
          change: +2.34,
          changePercent: +1.35,
          volume: "52.3M",
        },
      });
    }

    return toolCalls;
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      role: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    setTimeout(() => {
      const toolCalls = simulateToolCall(input);
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: toolCalls.length > 0 
          ? "I've fetched the information you requested. Here's what I found:"
          : "I understand your question. To provide real-time data, you'll need to connect this app to Supabase and set up the appropriate API integrations.",
        role: "assistant",
        timestamp: new Date(),
        toolCalls,
      };

      setMessages((prev) => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 1500);
  };

  const renderToolCall = (toolCall: ToolCall) => {
    switch (toolCall.type) {
      case "weather":
        return <WeatherCard key={toolCall.type} data={toolCall.data} />;
      case "f1":
        return <F1Card key={toolCall.type} data={toolCall.data} />;
      case "stock":
        return <StockCard key={toolCall.type} data={toolCall.data} />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col h-screen bg-background">
      <div className="border-b border-border bg-gradient-card p-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-gradient-ai shadow-ai">
            <Bot className="w-6 h-6 text-background" />
          </div>
          <div>
            <h1 className="text-xl font-semibold text-foreground">AI Assistant</h1>
            <p className="text-sm text-muted-foreground">Powered by advanced AI with tool calling</p>
          </div>
        </div>
      </div>

      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4 max-w-4xl mx-auto">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-3 ${message.role === "user" ? "justify-end" : "justify-start"}`}
            >
              {message.role === "assistant" && (
                <div className="p-2 rounded-lg bg-gradient-ai shadow-ai">
                  <Bot className="w-5 h-5 text-background" />
                </div>
              )}
              
              <div className={`max-w-2xl ${message.role === "user" ? "order-first" : ""}`}>
                <Card className={`p-4 ${message.role === "user" 
                  ? "bg-gradient-message border-ai-accent" 
                  : "bg-gradient-card border-border"} shadow-message`}>
                  <p className="text-foreground">{message.content}</p>
                </Card>
                
                {message.toolCalls && message.toolCalls.length > 0 && (
                  <div className="mt-3 space-y-3">
                    {message.toolCalls.map(renderToolCall)}
                  </div>
                )}
              </div>

              {message.role === "user" && (
                <div className="p-2 rounded-lg bg-ai-accent">
                  <User className="w-5 h-5 text-background" />
                </div>
              )}
            </div>
          ))}
          
          {isLoading && (
            <div className="flex gap-3 justify-start">
              <div className="p-2 rounded-lg bg-gradient-ai shadow-ai">
                <Bot className="w-5 h-5 text-background animate-pulse" />
              </div>
              <Card className="p-4 bg-gradient-card border-border shadow-message">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-ai-primary rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-ai-primary rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                  <div className="w-2 h-2 bg-ai-primary rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                </div>
              </Card>
            </div>
          )}
        </div>
      </ScrollArea>

      <div className="border-t border-border bg-gradient-card p-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ask about weather, F1 races, or stock prices..."
              className="flex-1 bg-background border-border focus:border-ai-primary focus:ring-ai-primary/20"
              disabled={isLoading}
            />
            <Button
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="bg-gradient-ai hover:opacity-90 text-background shadow-ai transition-ai"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
          
          <div className="flex gap-2 mt-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setInput("What's the weather in Paris?")}
              className="border-border hover:bg-accent"
            >
              <Cloud className="w-3 h-3 mr-1" />
              Weather
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setInput("When is the next F1 race?")}
              className="border-border hover:bg-accent"
            >
              <Car className="w-3 h-3 mr-1" />
              F1 Races
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setInput("Show me AAPL stock price")}
              className="border-border hover:bg-accent"
            >
              <TrendingUp className="w-3 h-3 mr-1" />
              Stocks
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
