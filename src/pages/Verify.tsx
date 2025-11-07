import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft, ExternalLink, Copy, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import TruthScoreMeter from "@/components/TruthScoreMeter";
import { useToast } from "@/hooks/use-toast";

const Verify = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(true);
  const [result, setResult] = useState<any>(null);
  
  const claim = location.state?.claim || "";

  useEffect(() => {
    if (!claim) {
      navigate("/dashboard");
      return;
    }

    // Simulate AI analysis
    setIsLoading(true);
    setTimeout(() => {
      const mockScore = Math.floor(Math.random() * 100);
      setResult({
        score: mockScore,
        explanation: mockScore >= 70 
          ? "According to verified sources, this claim is supported by scientific evidence and multiple reliable sources."
          : mockScore >= 40
          ? "This claim lacks sufficient evidence and should be approached with caution. Some elements may be true, but overall verification is inconclusive."
          : "According to verified sources, this claim is false and has been debunked by multiple fact-checking organizations.",
        sources: [
          { name: "Snopes", url: "https://snopes.com", verified: true },
          { name: "PolitiFact", url: "https://politifact.com", verified: true },
          { name: "Google Fact Check", url: "https://toolbox.google.com/factcheck", verified: true },
        ]
      });
      setIsLoading(false);
    }, 2000);
  }, [claim, navigate]);

  const handleCopy = () => {
    navigator.clipboard.writeText(`Truth Score: ${result.score}%\n${claim}\n${result.explanation}`);
    toast({
      title: "Copied to clipboard",
      description: "Verification result copied successfully",
    });
  };

  const handleShare = () => {
    toast({
      title: "Share feature",
      description: "Share functionality would be implemented here",
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto flex flex-col items-center justify-center space-y-6 min-h-[500px]">
            <div className="w-20 h-20 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            <h2 className="text-2xl font-semibold text-foreground animate-pulse-soft">
              Analyzing with AI...
            </h2>
            <p className="text-muted-foreground text-center max-w-md">
              Cross-referencing with verified fact-checking databases
            </p>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <Button
            variant="ghost"
            onClick={() => navigate("/dashboard")}
            className="gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Dashboard
          </Button>

          {/* Claim Display */}
          <Card>
            <CardHeader>
              <CardTitle>Analyzed Claim</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-foreground italic">"{claim}"</p>
            </CardContent>
          </Card>

          {/* Truth Score */}
          <Card className="shadow-large">
            <CardContent className="pt-8 pb-8 flex justify-center">
              <TruthScoreMeter score={result.score} />
            </CardContent>
          </Card>

          {/* Explanation */}
          <Card>
            <CardHeader>
              <CardTitle>Analysis Explanation</CardTitle>
              <CardDescription>Based on verified fact-checking sources</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-foreground leading-relaxed">{result.explanation}</p>
            </CardContent>
          </Card>

          {/* Sources */}
          <Card>
            <CardHeader>
              <CardTitle>Verified Sources</CardTitle>
              <CardDescription>Information verified by these trusted organizations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {result.sources.map((source: any, index: number) => (
                <a
                  key={index}
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors group"
                >
                  <span className="font-medium text-foreground">{source.name}</span>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="flex gap-3">
            <Button
              onClick={handleCopy}
              variant="outline"
              className="flex-1 gap-2"
            >
              <Copy className="h-4 w-4" />
              Copy Result
            </Button>
            <Button
              onClick={handleShare}
              variant="outline"
              className="flex-1 gap-2"
            >
              <Share2 className="h-4 w-4" />
              Share Result
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Verify;
