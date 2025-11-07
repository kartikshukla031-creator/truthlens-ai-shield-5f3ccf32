import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { BarChart3, TrendingUp, CheckCircle2, XCircle, AlertTriangle } from "lucide-react";

const Analytics = () => {
  const stats = {
    totalClaims: 1247,
    trueClaims: 423,
    doubtfulClaims: 312,
    falseClaims: 512,
  };

  const trendingTopics = [
    { topic: "Health & Medicine", count: 342, trend: "+12%" },
    { topic: "Politics", count: 289, trend: "+8%" },
    { topic: "Technology", count: 234, trend: "+15%" },
    { topic: "Climate", count: 198, trend: "+5%" },
    { topic: "Finance", count: 184, trend: "+3%" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto space-y-8 animate-fade-in">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Analytics Dashboard</h1>
            <p className="text-muted-foreground">Track verification trends and insights</p>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-4 gap-4">
            <Card className="shadow-soft">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Verified</p>
                    <p className="text-3xl font-bold text-foreground mt-1">{stats.totalClaims}</p>
                  </div>
                  <BarChart3 className="h-10 w-10 text-primary opacity-50" />
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft border-truth-verified/30">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">True Claims</p>
                    <p className="text-3xl font-bold text-truth-verified mt-1">{stats.trueClaims}</p>
                  </div>
                  <CheckCircle2 className="h-10 w-10 text-truth-verified opacity-50" />
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft border-truth-doubtful/30">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Doubtful</p>
                    <p className="text-3xl font-bold text-truth-doubtful mt-1">{stats.doubtfulClaims}</p>
                  </div>
                  <AlertTriangle className="h-10 w-10 text-truth-doubtful opacity-50" />
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft border-truth-false/30">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">False Claims</p>
                    <p className="text-3xl font-bold text-truth-false mt-1">{stats.falseClaims}</p>
                  </div>
                  <XCircle className="h-10 w-10 text-truth-false opacity-50" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Distribution Chart */}
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle>Verification Distribution</CardTitle>
              <CardDescription>Breakdown of all verified claims</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-foreground">True</span>
                      <span className="text-sm text-muted-foreground">
                        {((stats.trueClaims / stats.totalClaims) * 100).toFixed(1)}%
                      </span>
                    </div>
                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-truth-verified rounded-full transition-all"
                        style={{ width: `${(stats.trueClaims / stats.totalClaims) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-foreground">Doubtful</span>
                      <span className="text-sm text-muted-foreground">
                        {((stats.doubtfulClaims / stats.totalClaims) * 100).toFixed(1)}%
                      </span>
                    </div>
                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-truth-doubtful rounded-full transition-all"
                        style={{ width: `${(stats.doubtfulClaims / stats.totalClaims) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-foreground">False</span>
                      <span className="text-sm text-muted-foreground">
                        {((stats.falseClaims / stats.totalClaims) * 100).toFixed(1)}%
                      </span>
                    </div>
                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-truth-false rounded-full transition-all"
                        style={{ width: `${(stats.falseClaims / stats.totalClaims) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Trending Topics */}
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Trending Misinformation Topics
              </CardTitle>
              <CardDescription>Most frequently verified claims by category</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {trendingTopics.map((topic, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                    <div className="flex items-center gap-4">
                      <span className="text-2xl font-bold text-muted-foreground">{index + 1}</span>
                      <div>
                        <p className="font-semibold text-foreground">{topic.topic}</p>
                        <p className="text-sm text-muted-foreground">{topic.count} verifications</p>
                      </div>
                    </div>
                    <span className="text-sm font-semibold text-truth-verified">{topic.trend}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Analytics;
