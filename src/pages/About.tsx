import { Search, Brain, CheckCircle2, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";

const About = () => {
  const steps = [
    {
      icon: Search,
      title: "Text Input",
      description: "Enter any claim, statement, or link you want to verify. Our system accepts text from any source.",
    },
    {
      icon: Brain,
      title: "AI NLP Analysis",
      description: "Advanced natural language processing analyzes the claim's structure, context, and key assertions.",
    },
    {
      icon: Shield,
      title: "Fact-Checking APIs",
      description: "Cross-verification with trusted sources like Snopes, PolitiFact, and Google Fact Check.",
    },
    {
      icon: CheckCircle2,
      title: "Truth Score Generation",
      description: "A comprehensive score is generated based on multiple verified sources and AI analysis.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto space-y-12 animate-fade-in">
          {/* Hero Section */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              How TruthLens Works
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Empowering digital trust through real-time AI fact-checking
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid md:grid-cols-2 gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card key={index} className="shadow-medium hover:shadow-large transition-shadow">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="bg-gradient-primary p-3 rounded-xl shadow-soft">
                        <Icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs font-bold text-primary px-2 py-1 bg-primary/10 rounded">
                            STEP {index + 1}
                          </span>
                        </div>
                        <CardTitle className="text-xl">{step.title}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Mission Statement */}
          <Card className="bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 border-none shadow-large">
            <CardContent className="pt-8 pb-8 text-center space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Our Mission</h2>
              <p className="text-lg text-foreground/90 max-w-2xl mx-auto leading-relaxed">
                TruthLens is committed to combating misinformation by providing instant, 
                AI-powered fact-checking that empowers users to make informed decisions. 
                We believe in a world where truth is accessible to everyone, everywhere.
              </p>
              <div className="pt-4">
                <p className="text-sm font-semibold text-accent-foreground">
                  Powered by AI + Verified APIs
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center shadow-soft">
              <CardContent className="pt-8 pb-8">
                <div className="w-16 h-16 bg-truth-verified/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <CheckCircle2 className="h-8 w-8 text-truth-verified" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Real-Time Verification</h3>
                <p className="text-sm text-muted-foreground">
                  Get instant results as you type or paste content
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-soft">
              <CardContent className="pt-8 pb-8">
                <div className="w-16 h-16 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Trusted Sources</h3>
                <p className="text-sm text-muted-foreground">
                  Data verified by leading fact-checking organizations
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-soft">
              <CardContent className="pt-8 pb-8">
                <div className="w-16 h-16 bg-accent/40 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Brain className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="font-semibold text-lg mb-2">AI-Powered</h3>
                <p className="text-sm text-muted-foreground">
                  Advanced NLP technology for accurate analysis
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
