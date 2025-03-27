import { useState, useEffect } from "react";
import { http } from "../api/http";
import { ProductCalculationCreateDto, ProductCalculationListResponseDto } from "../types/dto/productCalculationDto";

// Hook definition
export const useSaveProductCalculation = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState<ProductCalculationCreateDto>({
    baseCOG: "",
    shipping: "",
    duties: "",
    otherCosts: "",
    platformFee: "",
    platformFeeType: "percent",
    targetMargin: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await http.post("/product-calculation", formData);
      console.log("API Response:", response);
      setSuccess(true);
      setFormData({
        baseCOG: "",
        shipping: "",
        duties: "",
        otherCosts: "",
        platformFee: "",
        platformFeeType: "percent",
        targetMargin: "",
      });
    } catch (err) {
      setError((err as Error).message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return { formData, handleChange, handleSubmit, loading, error, success };
};
