import { useState } from "react";
import { productCalculationAPI } from "../api/productCalculation";
import { ProductCalculationUpdateDto } from "../types/dto/productCalculationDto";
import { ProductCalculation } from "../types/productCalculation";

// Hook definition
export const useUpdateProductCalculation = (refetch: () => void) => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string>("");
  const [success, setSuccess] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const openModal = (data: ProductCalculation) => {
    setSelectedId(data._id);
    setFormData({
      baseCOG: data.baseCOG.toString(),
      shipping: data.shipping.toString(),
      duties: data.duties.toString(),
      otherCosts: data.otherCosts.toString(),
      platformFee: data.platformFee.toString(),
      platformFeeType: data.platformFeeType,
      targetMargin: data.targetMargin.toString(),
    });
  };
  const closeModal = () => {
    setSelectedId(null);
    setSuccess(false);
    setMessage("");
  };

  const [formData, setFormData] = useState<ProductCalculationUpdateDto>({
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

    if (!selectedId) return;

    setLoading(true);
    setSuccess(false);

    try {
      const response = await productCalculationAPI.update(selectedId, formData);
      console.log("API Response:", response);
      setSuccess(true);
      setMessage(response.message);
      refetch();
    } catch (err) {
      setMessage((err as Error).message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return {
    formData,
    handleChange,
    handleSubmit,
    loading,
    message,
    success,
    selectedId,
    openModal,
    closeModal,
  };
};
