import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { http } from "../api/http";
import { LoginDto, LoginResponseDto } from "../types/dto/loginDto";
import { useAuth } from "../providers/AuthProvider";

export const useLogin = () => {
  const { login: authLogin } = useAuth();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const login = async (credentials: LoginDto) => {
    setLoading(true);
    setError(null);

    try {
      const response = await http.post<LoginResponseDto>("/auth/login", credentials);

      // Store token in local storage
      authLogin(response.token);

      // Redirect to dashboard
      navigate("/dashboard");
    } catch (err) {
      const message = err instanceof Error ? err.message : "An error occurred";
      setError(message);
      console.error("Login failed:", err);
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error };
};
