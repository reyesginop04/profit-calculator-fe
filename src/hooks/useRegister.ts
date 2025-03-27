import { useState } from "react";
import { authAPI } from "../api/auth";
import { RegisterDto } from "../types/dto/authDto";

export const useRegister = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);

  const [formData, setFormData] = useState<RegisterDto>({
    name: "",
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
      const response = await authAPI.register(formData);
      console.log("API Response:", response);
      setSuccess(true);
      setMessage(response.message);
    } catch (err) {
      const message = err instanceof Error ? err.message : "An error occurred";
      setMessage(message);
      console.error("Register failed:", err);
    } finally {
      setLoading(false);
    }
  };

  return { formData, handleChange, handleSubmit, loading, message, success };
};
