import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";

const Dashboard = () => {
  const navigate = useNavigate();
  const [claimText, setClaimText] = useState("");
  
  const recentSearches = [
    { text: "5G technology causes COVID-19", result: "False", score: 15 },
    { text: "Garlic cures viral infections", result: "Doubtful", score: 45 },
    { text: "Vaccines contain microchips", result: "False", score: 8 },
  ];

  const handleVerify = () => {
    if (claimText.trim()) {
      navigate("/verify", { state: { claim: claimText } });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto space-y-12 animate-fade-in">
          {/* Hero Section */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Welcome to TruthLens
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Verify before you share. AI-powered fact-checking at your fingertips.
            </p>
          </div>

          {/* Main Verification Card */}
          <Card className="shadow-large">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="h-5 w-5 text-primary" />
                Verify Any Claim
              </CardTitle>
              <CardDescription>
                Paste or type any text, post, or link to verify its truthfulness
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea
                placeholder="Enter the claim you want to verify... (e.g., 'Coffee helps prevent cancer')"
                value={claimText}
                onChange={(e) => setClaimText(e.target.value)}
                className="min-h-[120px] text-base"
              />
              <Button
                onClick={handleVerify}
                disabled={!claimText.trim()}
                className="w-full h-12 bg-gradient-primary hover:opacity-90 transition-opacity text-primary-foreground font-semibold"
              >
                Check Truth
              </Button>
            </CardContent>
          </Card>

          {/* How It Works */}
          <Card className="bg-accent/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-accent-foreground" />
                How TruthLens Works
              </CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-3 gap-6">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-primary rounded-xl mx-auto flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary-foreground">1</span>
                </div>
                <h3 className="font-semibold text-foreground">Submit Text</h3>
                <p className="text-sm text-muted-foreground">Enter any claim or statement you want to verify</p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-primary rounded-xl mx-auto flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary-foreground">2</span>
                </div>
                <h3 className="font-semibold text-foreground">AI Analysis</h3>
                <p className="text-sm text-muted-foreground">Our AI cross-checks with verified sources</p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-primary rounded-xl mx-auto flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary-foreground">3</span>
                </div>
                <h3 className="font-semibold text-foreground">Get Results</h3>
                <p className="text-sm text-muted-foreground">Receive a Truth Score with sources</p>
              </div>
            </CardContent>
          </Card>

          {/* Recent Searches */}
          {recentSearches.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Recent Verifications
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {recentSearches.map((search, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors cursor-pointer"
                  >
                    <p className="text-sm text-foreground flex-1">{search.text}</p>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-medium px-3 py-1 rounded-full bg-card">
                        {search.score}%
                      </span>
                      <span className={`text-xs font-semibold ${
                        search.result === "False" ? "text-truth-false" :
                        search.result === "Doubtful" ? "text-truth-doubtful" :
                        "text-truth-verified"
                      }`}>
                        {search.result}
                      </span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
