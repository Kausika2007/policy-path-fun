import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface AuthFormProps {
  type: "login" | "signup";
  onSubmit: (data: any) => void;
  isLoading?: boolean;
}

const AuthForm = ({ type, onSubmit, isLoading = false }: AuthFormProps) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Card className="w-full max-w-md bg-card/95 backdrop-blur-sm border-border shadow-elegant">
      <CardHeader className="space-y-2">
        <CardTitle className="text-3xl font-bold text-center text-foreground">
          {type === "login" ? "Welcome Back" : "Create Account"}
        </CardTitle>
        <CardDescription className="text-center text-muted-foreground">
          {type === "login"
            ? "Enter your credentials to access your account"
            : "Fill in your details to get started"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {type === "signup" && (
            <div className="space-y-2">
              <Label htmlFor="fullName" className="text-foreground">Full Name</Label>
              <Input
                id="fullName"
                name="fullName"
                type="text"
                placeholder="John Doe"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="bg-background border-input"
              />
            </div>
          )}
          
          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-background border-input"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password" className="text-foreground">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              required
              className="bg-background border-input"
            />
          </div>

          {type === "login" && (
            <div className="flex justify-end">
              <Link
                to="/forgot-password"
                className="text-sm text-primary hover:text-primary-glow transition-colors"
              >
                Forgot password?
              </Link>
            </div>
          )}

          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
            disabled={isLoading}
          >
            {isLoading ? "Please wait..." : type === "login" ? "Sign In" : "Create Account"}
          </Button>

          <div className="text-center text-sm text-muted-foreground">
            {type === "login" ? (
              <>
                Don't have an account?{" "}
                <Link to="/signup" className="text-primary hover:text-primary-glow font-medium transition-colors">
                  Create one
                </Link>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <Link to="/login" className="text-primary hover:text-primary-glow font-medium transition-colors">
                  Sign in
                </Link>
              </>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default AuthForm;
