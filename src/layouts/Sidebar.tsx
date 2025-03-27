import { Link } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";

const Sidebar = () => {
  const { logout } = useAuth();
  return (
    <aside className="w-64 bg-gray-100 shadow-lg h-full flex flex-col">
      <div className="p-6 text-2xl font-extrabold text-blue-600">Profit Cost</div>
      <nav className="flex-1 mt-6">
        <ul className="space-y-2">
          <li>
            <Link to="/dashboard" className="block px-6 py-3 rounded-lg hover:bg-blue-100 text-gray-700 font-medium">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/settings" className="block px-6 py-3 rounded-lg hover:bg-blue-100 text-gray-700 font-medium">
              Product Calculation
            </Link>
          </li>
          <li>
            <button
              onClick={() => {
                logout();
                window.location.href = "/"; // Redirect to login
              }}
              className="block w-full px-6 py-3 text-left rounded-lg hover:bg-red-100 text-red-600 font-medium"
            >
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
