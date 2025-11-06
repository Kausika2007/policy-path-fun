import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import AuthForm from "@/components/AuthForm";
import { signUp } from "@/services/authService";

const Signup = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleSignup = async (data: { fullName: string; email: string; password: string }) => {
    setIsLoading(true);
    try {
      const result = await signUp(data.fullName, data.email, data.password);
      if (result.success) {
        toast.success("Account created successfully!");
        navigate("/");
      }
    } catch (error) {
      toast.error("Signup failed. Please try again.");
      console.error("Signup error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-accent to-secondary p-4">
      <AuthForm type="signup" onSubmit={handleSignup} isLoading={isLoading} />
    </div>
  );
};

export default Signup;
