import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <h1 className="text-3xl font-semibold mb-4">Welcome to Home</h1>
      <table className="table-auto border-collapse border border-gray-300 w-full text-left">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Feature</th>
            <th className="border border-gray-300 px-4 py-2">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Login</td>
            <td className="border border-gray-300 px-4 py-2">
              <Link to="/login" className="text-blue-500 hover:underline">
                Go to Login
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Dashboard;
