import { Link } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";

const Sidebar = () => {
  const { logout } = useAuth();
  return (
    <aside className="w-64 bg-white shadow-md h-full">
      <div className="p-4 text-xl font-bold">MyApp</div>
      <nav className="mt-4">
        <ul>
          <li className="px-4 py-2 hover:bg-gray-200">
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li className="px-4 py-2 hover:bg-gray-200">
            <Link to="/settings">Product Calculation</Link>
          </li>
          <li className="px-4 py-2 hover:bg-gray-200">
            <button
              onClick={() => {
                logout();
                window.location.href = "/"; // Redirect to login
              }}
              className="w-full text-left cursor-pointer"
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
