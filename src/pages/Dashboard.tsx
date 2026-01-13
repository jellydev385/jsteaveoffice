import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, User, Mail, Calendar, Shield, BarChart3, Settings, Bell } from "lucide-react";

export default function Dashboard() {
  const { user, logout } = useAuth();

  const stats = [
    { label: "Projects", value: "12", icon: BarChart3, color: "text-primary" },
    { label: "Tasks", value: "48", icon: Settings, color: "text-accent" },
    { label: "Notifications", value: "5", icon: Bell, color: "text-green-500" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="border-b border-border bg-background/80 backdrop-blur-lg">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <div className="flex items-center gap-4">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-medium">{user?.name}</p>
                <p className="text-xs text-muted-foreground">{user?.email}</p>
              </div>
              <Button variant="outline" size="sm" onClick={logout}>
                Logout
              </Button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">
              Welcome back, <span className="text-primary">{user?.name?.split(" ")[0]}</span>!
            </h1>
            <p className="text-muted-foreground">
              This is your protected dashboard. Only authenticated users can see this page.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid gap-4 md:grid-cols-3 mb-8">
            {stats.map((stat) => (
              <Card key={stat.label} className="border-border/50 bg-card/80 backdrop-blur-sm">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {stat.label}
                  </CardTitle>
                  <stat.icon className={`h-4 w-4 ${stat.color}`} />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* User Info Card */}
          <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                Account Information
              </CardTitle>
              <CardDescription>
                Your profile details (stored in localStorage for demo purposes)
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                <User className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="text-xs text-muted-foreground">Full Name</p>
                  <p className="font-medium">{user?.name}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                <Mail className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="text-xs text-muted-foreground">Email Address</p>
                  <p className="font-medium">{user?.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                <Calendar className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="text-xs text-muted-foreground">User ID</p>
                  <p className="font-medium font-mono text-sm">{user?.id}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Demo Notice */}
          <div className="mt-8 p-4 rounded-lg border border-primary/20 bg-primary/5">
            <p className="text-sm text-muted-foreground">
              <strong className="text-primary">Demo Mode:</strong> This is a mock authentication system 
              using localStorage. User data persists in your browser but is not secure for production use.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
