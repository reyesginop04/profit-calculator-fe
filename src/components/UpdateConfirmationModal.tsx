import { useEffect } from "react";
import Button from "./Button";
import { ProductCalculationUpdateDto } from "../types/dto/productCalculationDto";

interface UpdateConfirmationModalProps {
  formData: ProductCalculationUpdateDto;
  message: string;
  success: boolean;
  loading: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
  open: boolean;
  onClose: () => void;
}

export default function UpdateConfirmationModal({
  formData,
  message,
  success,
  loading,
  handleChange,
  handleSubmit,
  open,
  onClose,
}: UpdateConfirmationModalProps) {
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
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Base COG</label>
            <input
              type="number"
              name="baseCOG"
              value={formData.baseCOG}
              onChange={handleChange}
              className="border border-gray-300 rounded px-3 py-2 w-full"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Shipping</label>
            <input
              type="number"
              name="shipping"
              value={formData.shipping}
              onChange={handleChange}
              className="border border-gray-300 rounded px-3 py-2 w-full"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Import Duties</label>
            <input
              type="number"
              name="duties"
              value={formData.duties}
              onChange={handleChange}
              className="border border-gray-300 rounded px-3 py-2 w-full"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Other Landed Costs</label>
            <input
              type="number"
              name="otherCosts"
              value={formData.otherCosts}
              onChange={handleChange}
              className="border border-gray-300 rounded px-3 py-2 w-full"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Platform Fees</label>
            <input
              type="number"
              name="platformFee"
              value={formData.platformFee}
              onChange={handleChange}
              className="border border-gray-300 rounded px-3 py-2 w-full"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Platform Fee Type</label>
            <select
              name="platformFeeType"
              value={formData.platformFeeType}
              onChange={handleChange}
              className="border border-gray-300 rounded px-3 py-2 w-full"
            >
              <option value="percent">Percentage</option>
              <option value="fixed">Fixed</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Target Margin (%)</label>
            <input
              type="number"
              name="targetMargin"
              value={formData.targetMargin}
              onChange={handleChange}
              className="border border-gray-300 rounded px-3 py-2 w-full"
              required
            />
          </div>
          {/** API State Messages */}
          {!success && <p className="text-red-500">{message}</p>}
          {success && <p className="text-green-500">{message}</p>}

          <div className="mt-4 flex justify-end space-x-3">
            <Button className="px-4 py-2 text-gray-700 bg-gray-200 rounded hover:bg-gray-300" onClick={onClose}>
              Cancel
            </Button>

            {/** Submit Button */}
            <Button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
