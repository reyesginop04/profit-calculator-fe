import { useState } from "react";
import Button from "../components/Button";
import { useProductCalculationHistory } from "../hooks/useProductCalculationHistory";
import { dateFormatter } from "../utils/dateFormatter";
import DeleteConfirmationModal from "../components/DeleteConfirmationModal";
import { useDeleteProductCalculation } from "../hooks/useDeleteProductCalculation";

const Dashboard = () => {
  const { history, refetch, loading, error } = useProductCalculationHistory();

  const {
    selectedId: selectedDeleteId,
    openModal: openDeleteModal,
    closeModal: closeDeleteModal,
    handleDelete,
  } = useDeleteProductCalculation(refetch);

  return (
    <>
      <h1 className="text-3xl font-semibold mb-4">Product Cost History</h1>
      <table className="table-auto border-collapse border border-gray-300 w-full text-left">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Base COG</th>
            <th className="border border-gray-300 px-4 py-2">Shipping</th>
            <th className="border border-gray-300 px-4 py-2">Duties</th>
            <th className="border border-gray-300 px-4 py-2">Other Costs</th>
            <th className="border border-gray-300 px-4 py-2">Platform Fee</th>
            <th className="border border-gray-300 px-4 py-2">Platform Fee Type</th>
            <th className="border border-gray-300 px-4 py-2">Target Margin</th>
            <th className="border border-gray-300 px-4 py-2">Landed Cost</th>
            <th className="border border-gray-300 px-4 py-2">Final COG</th>
            <th className="border border-gray-300 px-4 py-2">Suggested Price</th>
            <th className="border border-gray-300 px-4 py-2">Profit</th>
            <th className="border border-gray-300 px-4 py-2">Profit Margin</th>
            <th className="border border-gray-300 px-4 py-2">Created At</th>
            <th className="border border-gray-300 px-4 py-2">Updated At</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <td colSpan={14} className="border border-gray-300 px-4 py-2 text-center">
              Loading...
            </td>
          ) : error ? (
            <td colSpan={14} className="border border-gray-300 px-4 py-2 text-center text-red-600">
              {error}
            </td>
          ) : history.length === 0 ? (
            <td colSpan={14} className="border border-gray-300 px-4 py-2 text-center">
              No data found.
            </td>
          ) : (
            history.map((item) => (
              <tr key={item._id}>
                <td className="border border-gray-300 px-4 py-2">{item.baseCOG}</td>
                <td className="border border-gray-300 px-4 py-2">{item.shipping}</td>
                <td className="border border-gray-300 px-4 py-2">{item.duties}</td>
                <td className="border border-gray-300 px-4 py-2">{item.otherCosts}</td>
                <td className="border border-gray-300 px-4 py-2">{item.platformFee}</td>
                <td className="border border-gray-300 px-4 py-2">{item.platformFeeType}</td>
                <td className="border border-gray-300 px-4 py-2">{item.targetMargin}</td>
                <td className="border border-gray-300 px-4 py-2">{item.landedCost}</td>
                <td className="border border-gray-300 px-4 py-2">{item.finalCOG}</td>
                <td className="border border-gray-300 px-4 py-2">{item.suggestedPrice}</td>
                <td className="border border-gray-300 px-4 py-2">{item.profit}</td>
                <td className="border border-gray-300 px-4 py-2">{item.profitMargin}</td>
                <td className="border border-gray-300 px-4 py-2">{dateFormatter.formatLong(item.createdAt)}</td>
                <td className="border border-gray-300 px-4 py-2">{dateFormatter.formatLong(item.updatedAt)}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <Button
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 my-3"
                    onClick={() => null}
                  >
                    Edit
                  </Button>
                  <Button
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 my-3"
                    onClick={() => openDeleteModal(item._id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      <DeleteConfirmationModal
        open={selectedDeleteId !== null}
        onClose={() => closeDeleteModal()}
        onConfirm={handleDelete}
      />
    </>
  );
};

export default Dashboard;
