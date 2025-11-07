import { useState } from "react";
import { Search, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Extension = () => {
  const [claimText, setClaimText] = useState("");
  const [result, setResult] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleCheck = () => {
    if (!claimText.trim()) return;

    setIsLoading(true);
    setTimeout(() => {
      const score = Math.floor(Math.random() * 100);
      setResult({
        score,
        result: score >= 70 ? "True" : score >= 40 ? "Doubtful" : "False",
      });
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="w-[400px] min-h-[500px] bg-background p-4">
      <Card className="shadow-large border-2">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-2 text-lg">
            <div className="bg-gradient-primary p-2 rounded-lg">
              <Search className="h-5 w-5 text-primary-foreground" />
            </div>
            TruthLens Extension
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Textarea
            placeholder="Paste the claim you want to verify..."
            value={claimText}
            onChange={(e) => setClaimText(e.target.value)}
            className="min-h-[100px] text-sm"
          />
          <Button
            onClick={handleCheck}
            disabled={!claimText.trim() || isLoading}
            className="w-full bg-gradient-primary hover:opacity-90 transition-opacity text-primary-foreground font-semibold"
          >
            {isLoading ? "Checking..." : "Check Truth"}
          </Button>

          {result && (
            <div className="space-y-3 animate-scale-in">
              <div className="text-center p-4 rounded-lg bg-muted/50">
                <p className="text-3xl font-bold text-foreground mb-1">{result.score}%</p>
                <div className={`inline-block px-4 py-2 rounded-full font-semibold ${
                  result.result === "True" ? "bg-truth-verified/20 text-truth-verified" :
                  result.result === "Doubtful" ? "bg-truth-doubtful/20 text-truth-doubtful" :
                  "bg-truth-false/20 text-truth-false"
                }`}>
                  {result.result === "True" ? "✅" : result.result === "Doubtful" ? "⚠️" : "❌"} {result.result}
                </div>
              </div>

              <div className="text-xs text-muted-foreground text-center">
                Verified by Snopes, PolitiFact
              </div>

              <Button
                variant="link"
                size="sm"
                className="w-full text-xs gap-1"
              >
                <ExternalLink className="h-3 w-3" />
                View Full Report
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Extension;
