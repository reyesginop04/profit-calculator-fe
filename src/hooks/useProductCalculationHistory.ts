import { useState, useEffect } from "react";
import { http } from "../utils/http";
import { ProductCalculationListResponseDto } from "../types/dto/productCalculationDto";

// Hook definition
export const useProductCalculationHistory = () => {
  const [history, setHistory] = useState<ProductCalculationListResponseDto[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        setLoading(true);
        const response = await http.get<ProductCalculationListResponseDto[]>(`/product-calculation/`);

        if (response && response) {
          setHistory(response); // ✅ Now response is correctly typed
        } else {
          throw new Error("Invalid response format.");
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "An unexpected error occurred.");
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, []);

  return { history, loading, error };
};
