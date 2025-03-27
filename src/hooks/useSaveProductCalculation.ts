import { useState } from "react";
import { http } from "../api/http";
import { ProductCalculationCreateDto } from "../types/dto/productCalculationDto";
import { productCalculationAPI } from "../api/productCalculation";

// Hook definition
export const useSaveProductCalculation = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string>("");
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
    setSuccess(false);

    try {
      const response = await productCalculationAPI.create(formData);
      console.log("API Response:", response);
      setSuccess(true);
      setMessage(response.message);
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
      setMessage((err as Error).message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return { formData, handleChange, handleSubmit, loading, message, success };
};
