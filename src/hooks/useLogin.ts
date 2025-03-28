import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authAPI } from "../api/auth";
import { useAuth } from "../providers/AuthProvider";
import { LoginDto } from "../types/dto/authDto";

export const useLogin = () => {
  const navigate = useNavigate();
  const { login: authLogin } = useAuth();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);

  const [formData, setFormData] = useState<LoginDto>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      const response = await authAPI.login(formData);
      console.log("API Response:", response);
      setMessage(response.message);
      setSuccess(true);

      // Store token in local storage
      authLogin(response.token);

      // Redirect to dashboard
      navigate("/dashboard");
    } catch (err) {
      const message = err instanceof Error ? err.message : "An error occurred";
      setMessage(message);
      console.error("Login failed:", err);
    } finally {
      setLoading(false);
    }
  };

  return { formData, handleChange, handleSubmit, loading, message, success };
};
