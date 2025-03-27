import Button from "../components/Button";
import { useSaveProductCalculation } from "../hooks/useSaveProductCalculation";

const ProductCostForm = () => {
  const { formData, handleChange, handleSubmit, loading, message, success } = useSaveProductCalculation();

  return (
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

      {/** Submit Button */}
      <Button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" disabled={loading}>
        {loading ? "Submitting..." : "Submit"}
      </Button>
    </form>
  );
};

const ProductCalculation = () => {
  return (
    <div>
      <h1 className="text-3xl font-semibold mb-4">Product Cost Form</h1>
      <ProductCostForm />
    </div>
  );
};

export default ProductCalculation;
