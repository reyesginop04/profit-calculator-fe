import { useState } from "react";
import { productCalculationAPI } from "../api/productCalculation";

// Hook definition
export function useDeleteProductCalculation(refetch: () => void) {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const openModal = (id: string) => setSelectedId(id);
  const closeModal = () => setSelectedId(null);

  const handleDelete = async () => {
    // Call the delete API
    if (!selectedId) return;

    await productCalculationAPI.delete(selectedId);
    refetch();
    closeModal();
  };

  return {
    selectedId,
    openModal,
    closeModal,
    handleDelete,
  };
}
