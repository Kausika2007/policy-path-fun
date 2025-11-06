import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import AuthForm from "@/components/AuthForm";
import { signIn } from "@/services/authService";

const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (data: { email: string; password: string }) => {
    setIsLoading(true);
    try {
      const result = await signIn(data.email, data.password);
      if (result.success) {
        toast.success("Login successful!");
        navigate("/");
      }
    } catch (error) {
      toast.error("Login failed. Please try again.");
      console.error("Login error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-accent to-secondary p-4">
      <AuthForm type="login" onSubmit={handleLogin} isLoading={isLoading} />
    </div>
  );
};

export default Login;
