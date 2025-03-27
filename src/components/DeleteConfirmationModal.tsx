import { useEffect } from "react";
import Button from "./Button";

interface DeleteConfirmationModalProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export default function DeleteConfirmationModal({ open, onClose, onConfirm }: DeleteConfirmationModalProps) {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-lg shadow-lg w-96 p-6">
        <h2 className="text-lg font-semibold text-gray-900">Confirm Deletion</h2>
        <p className="text-gray-600 mt-2">Are you sure you want to delete this item? This action cannot be undone.</p>
        <div className="mt-4 flex justify-end space-x-3">
          <Button className="px-4 py-2 text-gray-700 bg-gray-200 rounded hover:bg-gray-300" onClick={onClose}>
            Cancel
          </Button>
          <Button className="px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700" onClick={onConfirm}>
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}
