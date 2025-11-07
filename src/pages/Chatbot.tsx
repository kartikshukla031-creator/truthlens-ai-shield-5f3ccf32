import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { useToast } from "@/hooks/use-toast";

interface Message {
  id: string;
  sender: "user" | "bot";
  text: string;
  score?: number;
  result?: string;
}

const Chatbot = () => {
  const { toast } = useToast();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "bot",
      text: "Hello! I'm TruthLens AI. Send me any claim you want to verify, and I'll check it for you instantly.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: input,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const score = Math.floor(Math.random() * 100);
      const result = score >= 70 ? "True" : score >= 40 ? "Doubtful" : "False";
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        sender: "bot",
        text: `I've analyzed your claim. Here's what I found:`,
        score,
        result,
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-6 py-12 max-w-5xl">
        <Card className="h-[600px] flex flex-col shadow-large">
          <CardHeader className="border-b border-border">
            <CardTitle>TruthLens Chat Assistant</CardTitle>
          </CardHeader>
          
          <CardContent className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[70%] rounded-2xl px-6 py-4 ${
                    message.sender === "user"
                      ? "bg-gradient-primary text-primary-foreground"
                      : "bg-card border border-border shadow-soft"
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.text}</p>
                  {message.score !== undefined && (
                    <div className="mt-4 pt-4 border-t border-border/50 space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-semibold">Truth Score:</span>
                        <span className="font-bold">{message.score}%</span>
                      </div>
                      <div className={`text-center py-2 px-4 rounded-full font-semibold ${
                        message.result === "True" ? "bg-truth-verified/20 text-truth-verified" :
                        message.result === "Doubtful" ? "bg-truth-doubtful/20 text-truth-doubtful" :
                        "bg-truth-false/20 text-truth-false"
                      }`}>
                        {message.result === "True" ? "✅" : message.result === "Doubtful" ? "⚠️" : "❌"} {message.result}
                      </div>
                      <Button
                        variant="link"
                        size="sm"
                        className="w-full text-xs"
                        onClick={() => toast({
                          title: "Sources",
                          description: "Verified by Snopes, PolitiFact, and Google Fact Check",
                        })}
                      >
                        Show Sources
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-card border border-border rounded-2xl px-6 py-4 shadow-soft">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
                  </div>
                </div>
              </div>
            )}
          </CardContent>

          <div className="border-t border-border p-4">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type a claim to verify..."
                className="flex-1 h-12"
              />
              <Button
                onClick={handleSend}
                disabled={!input.trim() || isTyping}
                className="h-12 px-6 bg-gradient-primary hover:opacity-90 transition-opacity"
              >
                <Send className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </Card>
      </main>
    </div>
  );
};

export default Chatbot;
